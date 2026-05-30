import { motion, useInView } from "motion/react";
import { useRef, type ElementType, type ReactNode } from "react";

interface WordRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  /** Track-out spacing between letters within each word (px). 0 = none */
  trackOut?: number;
}

/**
 * Splits text into words and reveals each word with a staggered slide+fade.
 * Each word stays on its own inline-block so wrapping behaves naturally.
 * When trackOut > 0, letters inside each word are spaced apart (editorial look).
 */
export function WordReveal({
  text,
  as: Tag = "p",
  className = "",
  stagger = 0.06,
  delay = 0,
  once = true,
  trackOut = 0,
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const words = text.split(" ");

  const MotionTag = motion(Tag as ElementType);

  return (
    <MotionTag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-baseline"
          style={{ marginRight: "0.28em" }}
        >
          <motion.span
            className="inline-block"
            style={trackOut ? { letterSpacing: `${trackOut}px` } : undefined}
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
