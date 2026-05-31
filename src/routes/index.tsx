import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from "motion/react";
import { useRef, useEffect } from "react";
import cherryImg from "@/assets/cherry.jpg";
import beansImg from "@/assets/green-beans.jpg";
import originsImg from "@/assets/origins.jpg";
import { WordReveal, FadeUp } from "@/components/motion/WordReveal";
import { PillButton } from "@/components/motion/PillButton";
import { Marquee } from "@/components/motion/Marquee";
import { useAudioFocus } from "@/components/audio/AmbientAudio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bumi Kopi — Indonesian green coffee. Processed, graded, exported." },
      {
        name: "description",
        content:
          "B2B green coffee processing house in Bandung, West Java. We own the washing station. Volume welcome. Quality documented.",
      },
    ],
  }),
  component: Home,
});

/* ---------------- CHERRY SCROLL — cinematic centerpiece ---------------- */
function CherryScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useAudioFocus(ref, 1.0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Spring-smoothed progress for buttery motion
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });

  // Cherry: enters small, zooms in, rotates subtly, fades at the end
  const cherryScale = useTransform(p, [0, 0.35, 0.75, 1], [0.55, 1.05, 1.45, 1.85]);
  const cherryRotate = useTransform(p, [0, 1], [-8, 6]);
  const cherryY = useTransform(p, [0, 1], ["0%", "-12%"]);
  const cherryOpacity = useTransform(p, [0, 0.05, 0.85, 1], [0, 1, 1, 0.15]);
  const cherryBlur = useTransform(p, [0, 0.2, 0.8, 1], [12, 0, 0, 6]);
  const cherryFilter = useTransform(cherryBlur, (b) => `blur(${b}px)`);

  // Curtain panels — lift away on scroll
  const curtainLeft = useTransform(p, [0, 0.4], ["0%", "-105%"]);
  const curtainRight = useTransform(p, [0, 0.4], ["0%", "105%"]);
  const curtainTop = useTransform(p, [0.15, 0.55], ["0%", "-105%"]);

  // Headlines — sequenced
  const titleOpacity = useTransform(p, [0, 0.1, 0.4, 0.5], [0, 1, 1, 0]);
  const titleY = useTransform(p, [0, 0.1, 0.4, 0.5], [40, 0, 0, -40]);

  const subOpacity = useTransform(p, [0.45, 0.55, 0.8, 0.9], [0, 1, 1, 0]);
  const subY = useTransform(p, [0.45, 0.55, 0.8, 0.9], [40, 0, 0, -40]);

  const ctaOpacity = useTransform(p, [0.82, 0.92], [0, 1]);
  const ctaY = useTransform(p, [0.82, 0.92], [30, 0]);

  // Vignette intensifies as we zoom
  const vignette = useTransform(p, [0, 1], [0.35, 0.85]);

  // Interactive pointer "tilt" — sound-of-touch without gimmicks
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sTiltX = useSpring(tiltX, { stiffness: 120, damping: 18 });
  const sTiltY = useSpring(tiltY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      tiltX.set(nx * 6);
      tiltY.set(ny * -6);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [tiltX, tiltY]);

  return (
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-coal">
        {/* Cherry — center stage */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center will-change-transform"
          style={{
            scale: cherryScale,
            rotate: cherryRotate,
            y: cherryY,
            opacity: cherryOpacity,
            filter: cherryFilter,
          }}
        >
          <motion.div
            className="relative w-[78vmin] h-[78vmin] max-w-[820px] max-h-[820px]"
            style={{ rotateY: sTiltX, rotateX: sTiltY }}
          >
            <img
              src={cherryImg}
              alt="A ripe red coffee cherry — the moment quality is decided"
              width={1280}
              height={1280}
              className="w-full h-full object-cover rounded-full shadow-[0_40px_140px_-20px_rgba(196,75,26,0.55)]"
            />
            {/* Soft glow ring */}
            <div
              className="absolute -inset-8 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(196,75,26,0.25), transparent 60%)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Vignette overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,${vignette.get()}) 100%)`,
            opacity: vignette,
          }}
        />

        {/* CURTAIN — three panels lifting away */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-coal z-20 origin-left border-r border-border/40"
          style={{ x: curtainLeft }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-coal z-20 origin-right border-l border-border/40"
          style={{ x: curtainRight }}
        />
        <motion.div
          className="absolute inset-x-0 top-0 h-[18vh] bg-coal z-20"
          style={{ y: curtainTop }}
        />

        {/* Curtain seam — thin rust hairline visible at start */}
        <motion.div
          className="absolute inset-y-0 left-1/2 w-px bg-rust z-30 origin-center"
          style={{ opacity: useTransform(p, [0, 0.3, 0.45], [1, 0.6, 0]) }}
        />

        {/* Top meta strip */}
        <motion.div
          className="absolute top-6 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 lg:px-16 pointer-events-none"
          style={{ opacity: useTransform(p, [0, 0.05, 0.9, 1], [0, 1, 1, 0]) }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
            Bumi Kopi · ICO 0140
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
            Coffea arabica · Bandung
          </span>
        </motion.div>

        {/* Stage 1 — Title */}
        <motion.div
          className="absolute inset-0 z-40 flex flex-col items-center justify-end pb-[14vh] pointer-events-none px-6 text-center"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <p className="eyebrow text-rust">The moment</p>
          <h1 className="mt-4 font-display font-bold text-bone text-[13vw] md:text-[8vw] lg:text-[6.4vw] leading-[0.95] tracking-[-0.04em] max-w-5xl">
            Quality begins <span className="italic text-rust">here.</span>
          </h1>
        </motion.div>

        {/* Stage 2 — Subtext */}
        <motion.div
          className="absolute inset-0 z-40 flex flex-col items-center justify-end pb-[12vh] pointer-events-none px-6 text-center"
          style={{ opacity: subOpacity, y: subY }}
        >
          <p className="eyebrow text-rust">A single cherry</p>
          <p className="mt-4 max-w-2xl font-display text-bone text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
            Picked red-ripe. Pulped within four hours. Everything after is engineering.
          </p>
        </motion.div>

        {/* Stage 3 — CTA */}
        <motion.div
          className="absolute inset-0 z-40 flex flex-col items-center justify-end pb-[10vh] px-6 text-center"
          style={{ opacity: ctaOpacity, y: ctaY }}
        >
          <p className="eyebrow text-rust">Continue</p>
          <h2 className="mt-3 font-display text-bone text-4xl md:text-6xl tracking-[-0.03em]">
            From cherry to FCL.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center pointer-events-auto">
            <PillButton to="/request-sample">Request 1kg sample</PillButton>
            <PillButton to="/catalogue" variant="ghost">
              View current lots
            </PillButton>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40"
          style={{ opacity: useTransform(p, [0, 0.08, 0.15], [1, 1, 0]) }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
            Scroll to enter
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-smoke to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS SCROLL — materials & engineering ---------------- */
function ProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useAudioFocus(ref, 0.9);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const stages = [
    { t: "01 · Cherry", d: "Hand-picked at 22°Brix. Floated to remove underripes.", c: "#c44b1a" },
    { t: "02 · Pulp", d: "Disc pulper within 4 hours. Parchment retained for protection.", c: "#9c5e2b" },
    { t: "03 · Ferment", d: "36-hour anaerobic. Logged pH and temperature curve.", c: "#3d5c1e" },
    { t: "04 · Wash", d: "Three-channel grading. Density and defect separation.", c: "#4a4540" },
    { t: "05 · Dry", d: "12 days on raised beds. Moved every 2 hours. 11% target.", c: "#e8e0d0" },
    { t: "06 · Mill", d: "Hulled, screen-sorted, density-sorted, hand-picked, bagged.", c: "#c4bdb0" },
  ];

  const lineHeight = useTransform(p, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative border-b border-border bg-coal py-32 md:py-48 overflow-hidden">
      <div className="container-x">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow text-rust">Materials · Engineering</p>
          <WordReveal
            as="h2"
            text="Six stages. One facility. Logged every batch."
            className="mt-6 font-display font-bold text-bone text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em]"
            stagger={0.05}
          />
        </div>

        <div className="relative pl-10 md:pl-16">
          {/* vertical track */}
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-2 md:left-4 top-0 w-px bg-rust origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-20">
            {stages.map((s, i) => (
              <ProcessRow key={s.t} stage={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  stage,
  index,
}: {
  stage: { t: string; d: string; c: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  return (
    <motion.div
      ref={ref}
      className="grid md:grid-cols-12 gap-6 items-baseline relative"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
    >
      <motion.span
        className="absolute -left-[34px] md:-left-[52px] top-3 w-3 h-3 rounded-full ring-4 ring-coal"
        style={{ backgroundColor: stage.c }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: index * 0.05 + 0.2 }}
      />
      <div className="md:col-span-5">
        <h3 className="font-display text-bone text-3xl md:text-5xl tracking-[-0.02em]">{stage.t}</h3>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <p className="text-ash text-lg leading-relaxed">{stage.d}</p>
      </div>
    </motion.div>
  );
}

function Home() {
  return (
    <>
      <CherryScroll />

      {/* TICKER */}
      <section className="border-y border-border py-6 bg-coal">
        <Marquee duration={50}>
          {[
            "ICO 0140",
            "Bandung · West Java",
            "Washed · Honey · Natural · Anaerobic",
            "Q-Grade 82.0 – 88.5",
            "25 FCL / yr",
            "Direct trade",
            "60 kg GrainPro",
            "Off-spec replaced",
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span className="font-display text-3xl md:text-4xl text-bone tracking-tight whitespace-nowrap">
                {t}
              </span>
              <span className="w-2 h-2 rounded-full bg-rust" />
            </div>
          ))}
        </Marquee>
      </section>

      <ProcessScroll />

      {/* FEATURED LOT */}
      <section className="border-b border-border bg-coal">
        <div className="container-x py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-rust">Featured lot</p>
              <WordReveal
                as="h2"
                text="BK · GRT · W · 2604"
                className="mt-5 font-mono text-bone text-4xl md:text-6xl lg:text-7xl tracking-tight"
                stagger={0.07}
              />
              <FadeUp delay={0.3}>
                <p className="mt-6 max-w-xl text-ash text-lg">
                  Washed Garut Arabica. Pulped within four hours of picking. Sun-dried on raised beds. Sorted to screen 17+.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <div className="border-y border-border divide-y divide-border">
                {[
                  { k: "Q-Grade", v: "86.2" },
                  { k: "Moisture", v: "11.4%" },
                  { k: "Screen", v: "17+" },
                  { k: "FOB", v: "$13.40 / kg" },
                ].map((row, i) => (
                  <FadeUp key={row.k} delay={i * 0.08}>
                    <div className="flex items-baseline justify-between py-5">
                      <span className="eyebrow">{row.k}</span>
                      <span className="font-display text-3xl md:text-4xl text-bone">{row.v}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION — split with image */}
      <section className="border-b border-border">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[480px] lg:min-h-[720px] overflow-hidden">
            <motion.img
              src={beansImg}
              alt="Green coffee in GrainPro"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coal/40" />
          </div>
          <div className="p-10 md:p-16 lg:p-24 bg-coal flex flex-col justify-center">
            <p className="eyebrow text-rust">We found a better way</p>
            <WordReveal
              as="h2"
              text="We own the step where coffee is made or broken."
              className="mt-6 font-display font-bold text-bone text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em]"
              stagger={0.05}
            />
            <FadeUp delay={0.3}>
              <p className="mt-8 max-w-xl text-ash text-lg leading-relaxed">
                Bumi Kopi controls cherry intake, fermentation curves, washing, drying, hulling, and screen sorting in one facility in Bandung. No parchment from middlemen. Ever.
              </p>
            </FadeUp>
            <div className="mt-10">
              <PillButton to="/processing" variant="ghost">
                Processing protocols
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGINS */}
      <section className="border-b border-border">
        <div className="container-x py-32 md:py-44">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div className="max-w-3xl">
              <p className="eyebrow text-rust">Exclusive origins</p>
              <WordReveal
                as="h2"
                text="Four regions. Direct contracts."
                className="mt-6 font-display font-bold text-bone text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em]"
                stagger={0.05}
              />
            </div>
            <PillButton to="/origins" variant="ghost">
              All origins
            </PillButton>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { n: "Toraja", r: "Sulawesi", a: "1,400 – 1,800 m", v: "Typica · S795" },
              { n: "Ijen", r: "East Java", a: "1,200 – 1,600 m", v: "Sigararutang · Lini-S" },
              { n: "Temanggung", r: "Central Java", a: "1,100 – 1,500 m", v: "Andungsari · Sigararutang" },
              { n: "Flores", r: "Bajawa, NTT", a: "1,200 – 1,500 m", v: "Typica · Catimor" },
            ].map((o, i) => (
              <FadeUp key={o.n} delay={i * 0.08}>
                <div className="bg-coal p-8 lg:p-10 h-full hover:bg-card transition-colors duration-500">
                  <div className="font-mono text-xs text-rust">{o.r}</div>
                  <h3 className="mt-3 font-display text-3xl text-bone">{o.n}</h3>
                  <dl className="spec-grid mt-6">
                    <dt>Altitude</dt>
                    <dd>{o.a}</dd>
                    <dt>Varietals</dt>
                    <dd>{o.v}</dd>
                  </dl>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={originsImg} alt="" loading="lazy" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-coal/85" />
        </div>
        <div className="relative container-x py-32 md:py-48 text-center">
          <p className="eyebrow text-rust">Next step</p>
          <WordReveal
            as="h2"
            text="Up to 1kg sample. 10 business days. No invoice."
            className="mt-8 font-display font-bold text-bone text-[9vw] md:text-[5.5vw] leading-[1.0] tracking-[-0.04em] max-w-5xl mx-auto"
            stagger={0.06}
            trackOut={1}
          />
          <FadeUp delay={0.4}>
            <p className="mt-8 text-ash text-lg max-w-xl mx-auto">
              You cup it before you commit. If it does not perform, no obligation.
            </p>
          </FadeUp>
          <FadeUp delay={0.6}>
            <div className="mt-12 flex justify-center">
              <PillButton to="/request-sample">Request your sample</PillButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
