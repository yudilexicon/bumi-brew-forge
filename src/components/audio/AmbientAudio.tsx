import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Ambient audio engine — Web Audio synthesized drone (no asset needed).
 * - Two detuned sine oscillators + lowpass filter
 * - Master gain reacts to scroll velocity (intensity of motion)
 * - Filter cutoff reacts to scroll progress (deeper as you descend)
 * - Optional "focus" boost when a section registers itself as in-view
 */

type AmbientCtx = {
  enabled: boolean;
  toggle: () => void;
  setFocus: (intensity: number) => void; // 0..1
};

const Ctx = createContext<AmbientCtx | null>(null);

export function useAmbient() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAmbient outside provider");
  return c;
}

export function AmbientAudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const focusRef = useRef(0);
  const targetGainRef = useRef(0);
  const targetCutoffRef = useRef(220);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const lastScrollT = useRef(performance.now());
  const velocityRef = useRef(0);

  const start = useCallback(async () => {
    if (ctxRef.current) {
      await ctxRef.current.resume();
      return;
    }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 220;
    filter.Q.value = 0.7;

    // Two detuned sine oscillators — drone base
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 55; // A1
    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 82.4; // E2
    const osc3 = ctx.createOscillator();
    osc3.type = "triangle";
    osc3.frequency.value = 110; // A2
    osc3.detune.value = -7;

    // Slow LFO on filter
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 80;
    lfo.connect(lfoGain).connect(filter.frequency);

    [osc1, osc2, osc3].forEach((o) => o.connect(filter));
    filter.connect(master).connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc3.start();
    lfo.start();

    ctxRef.current = ctx;
    masterRef.current = master;
    filterRef.current = filter;
  }, []);

  const stop = useCallback(() => {
    const m = masterRef.current;
    const ctx = ctxRef.current;
    if (!m || !ctx) return;
    m.gain.cancelScheduledValues(ctx.currentTime);
    m.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
    window.setTimeout(() => ctx.suspend(), 400);
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) void start();
      else stop();
      return next;
    });
  }, [start, stop]);

  const setFocus = useCallback((intensity: number) => {
    focusRef.current = Math.max(focusRef.current * 0.8, intensity);
  }, []);

  // Scroll listener — drives velocity + progress
  useEffect(() => {
    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastScrollT.current);
      const dy = Math.abs(window.scrollY - lastScrollY.current);
      const v = Math.min(1, dy / dt / 2.5);
      velocityRef.current = velocityRef.current * 0.7 + v * 0.3;
      lastScrollY.current = window.scrollY;
      lastScrollT.current = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation loop — smooth gain/cutoff towards targets
  useEffect(() => {
    const tick = () => {
      const ctx = ctxRef.current;
      const master = masterRef.current;
      const filter = filterRef.current;
      if (ctx && master && filter && enabled) {
        const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, window.scrollY / docH);
        const focus = focusRef.current;
        focusRef.current *= 0.96;

        // Base ambient + scroll velocity + focus
        const targetGain = 0.018 + velocityRef.current * 0.045 + focus * 0.05;
        const targetCutoff = 160 + progress * 900 + velocityRef.current * 400;

        targetGainRef.current = targetGainRef.current * 0.85 + targetGain * 0.15;
        targetCutoffRef.current = targetCutoffRef.current * 0.9 + targetCutoff * 0.1;

        master.gain.setTargetAtTime(targetGainRef.current, ctx.currentTime, 0.05);
        filter.frequency.setTargetAtTime(targetCutoffRef.current, ctx.currentTime, 0.1);

        velocityRef.current *= 0.92;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  return (
    <Ctx.Provider value={{ enabled, toggle, setFocus }}>
      {children}
    </Ctx.Provider>
  );
}

/* ---- Toggle button ---- */
export function AmbientToggle({ className = "" }: { className?: string }) {
  const { enabled, toggle } = useAmbient();
  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Mute ambient sound" : "Play ambient sound"}
      className={`group relative inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ash hover:text-rust transition-colors ${className}`}
    >
      <span className="relative flex items-end gap-[2px] h-3 w-4">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="block w-[2px] bg-current"
            animate={
              enabled
                ? { height: ["20%", "100%", "40%", "80%", "30%"] }
                : { height: "30%" }
            }
            transition={
              enabled
                ? { duration: 1.2 + i * 0.15, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }
                : { duration: 0.3 }
            }
          />
        ))}
      </span>
      <span className="hidden sm:inline">{enabled ? "Sound on" : "Sound off"}</span>
    </button>
  );
}

/* ---- Section focus hook — call from any section to boost audio when in view ---- */
export function useAudioFocus(ref: React.RefObject<HTMLElement | null>, intensity = 1) {
  const { setFocus } = useAmbient();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setFocus(intensity * e.intersectionRatio);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, setFocus, intensity]);
}

/* ---- Onboarding nudge — shown once until user toggles ---- */
export function AmbientNudge() {
  const { enabled, toggle } = useAmbient();
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (enabled) setDismissed(true);
  }, [enabled]);
  return (
    <AnimatePresence>
      {!dismissed && !enabled && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="fixed bottom-6 right-6 z-50 max-w-xs"
        >
          <div className="bg-coal/95 backdrop-blur border border-border p-4 shadow-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-rust">Ambient mode</p>
            <p className="mt-2 text-bone text-sm">Scroll-reactive sound from the station floor. Optional.</p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={toggle}
                className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-2 bg-rust text-white hover:bg-rust-dim transition-colors"
              >
                Turn on
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-2 border border-border text-ash hover:text-bone transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
