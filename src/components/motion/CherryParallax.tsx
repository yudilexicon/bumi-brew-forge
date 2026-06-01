import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import cherryImg from "@/assets/cherry.jpg";
import { WordReveal } from "./WordReveal";
import { useAudioFocus } from "@/components/audio/AmbientAudio";
import { SPRING_HERO } from "./springs";

interface CherryParallaxProps {
  eyebrow: string;
  title: string;
  lede?: string;
  /** small | medium */
  size?: "sm" | "md";
}

/**
 * Reusable cinematic page-hero with the cherry image performing a spring-driven
 * zoom/rotate/parallax. Used at the top of sub-pages to continue the home cinematic.
 */
export function CherryParallax({ eyebrow, title, lede, size = "md" }: CherryParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  useAudioFocus(ref, 1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.6 });

  const scale = useTransform(p, [0, 1], [1, 1.45]);
  const rotate = useTransform(p, [0, 1], [-4, 6]);
  const y = useTransform(p, [0, 1], ["0%", "-22%"]);
  const opacity = useTransform(p, [0, 0.8, 1], [1, 0.45, 0]);
  const blur = useTransform(p, [0, 0.7, 1], [0, 0, 4]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const textY = useTransform(p, [0, 1], ["0%", "-40%"]);
  const textOpacity = useTransform(p, [0, 0.5, 1], [1, 1, 0]);

  const h = size === "sm" ? "h-[70vh]" : "h-[90vh]";
  const cherrySize = size === "sm" ? "w-[48vmin] h-[48vmin]" : "w-[62vmin] h-[62vmin]";

  return (
    <section ref={ref} className={`relative ${h} overflow-hidden border-b border-border bg-coal`}>
      {/* Cherry — drifts up-and-zooms as user scrolls past */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pr-[6vw] pointer-events-none"
        style={{ scale, rotate, y, opacity, filter }}
      >
        <div className={`relative ${cherrySize} max-w-[640px] max-h-[640px]`}>
          <img
            src={cherryImg}
            alt=""
            className="w-full h-full object-cover rounded-full shadow-[0_40px_140px_-20px_rgba(196,75,26,0.45)]"
          />
          <div
            className="absolute -inset-6 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(196,75,26,0.25), transparent 60%)",
            }}
          />
        </div>
      </motion.div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Copy */}
      <motion.div
        className="relative z-10 container-x h-full flex flex-col justify-end pb-16 md:pb-24"
        style={{ y: textY, opacity: textOpacity }}
      >
        <p className="eyebrow text-rust">{eyebrow}</p>
        <WordReveal
          as="h1"
          text={title}
          className="mt-5 font-display font-bold text-bone text-5xl md:text-7xl lg:text-[6.4vw] leading-[0.98] tracking-[-0.035em] max-w-5xl"
          stagger={0.06}
        />
        {lede && (
          <motion.p
            className="mt-6 max-w-2xl text-ash text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {lede}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
