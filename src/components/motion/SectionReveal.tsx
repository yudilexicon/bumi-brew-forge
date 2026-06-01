import { motion, useInView, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useAudioFocus } from "@/components/audio/AmbientAudio";
import { SPRING_SECTION, SPRING_DRIFT, REVEAL_MARGIN, REVEAL_EASE } from "./springs";

/**
 * Wraps a section with a spring-driven scroll reveal:
 * - subtle scale + y-parallax tied to scroll progress through the section
 * - opacity easing in/out
 * - registers itself as an audio focus point
 */
export function SectionReveal({
  children,
  className = "",
  intensity = 0.6,
  focus = 0.6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  focus?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useAudioFocus(ref, focus);
  const inView = useInView(ref, { once: true, margin: REVEAL_MARGIN });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const p = useSpring(scrollYProgress, SPRING_SECTION);
  const y = useTransform(p, [0, 1], [`${30 * intensity}px`, `${-30 * intensity}px`]);
  const scale = useTransform(p, [0, 0.5, 1], [0.985, 1, 0.99]);

  return (
    <motion.section
      ref={ref}
      className={className}
      style={{ y, scale }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.0, ease: [...REVEAL_EASE] }}
    >
      {children}
    </motion.section>
  );
}

/**
 * A drifting cherry "mark" that follows the page as the user scrolls.
 * Place inside a relatively-positioned section as a decorative parallax accent.
 */
export function CherryDrift({
  className = "",
  size = 200,
  side = "right",
}: {
  className?: string;
  size?: number;
  side?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const p = useSpring(scrollYProgress, SPRING_DRIFT);
  const y = useTransform(p, [0, 1], ["-30%", "30%"]);
  const rotate = useTransform(p, [0, 1], [-15, 25]);
  const scale = useTransform(p, [0, 0.5, 1], [0.85, 1.05, 0.9]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute top-1/2 ${
        side === "right" ? "right-[-6%]" : "left-[-6%]"
      } -translate-y-1/2 ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="w-full h-full rounded-full opacity-30 mix-blend-screen"
        style={{
          y,
          rotate,
          scale,
          background:
            "radial-gradient(circle at 35% 35%, #ff7a3a 0%, #c44b1a 30%, #6b1f08 60%, transparent 75%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
