"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode, Fragment } from "react";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  duration?: number;
  highlight?: string; // substring to highlight in moss green
};

// Word-by-word mask reveal, mirroring farmminerals.com's gsap_split_word pattern.
export default function SplitWords({
  children,
  className = "",
  as = "h2",
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  highlight,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Split preserving newlines as line breaks
  const lines = children.split("\n");
  let wordIndex = 0;

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {line.split(/(\s+)/).map((token, ti) => {
            if (/^\s+$/.test(token)) return <span key={`s-${li}-${ti}`}> </span>;
            const isHighlight = highlight && token.toLowerCase().includes(highlight.toLowerCase());
            const i = wordIndex++;
            return (
              <span
                key={`w-${li}-${ti}`}
                style={{ position: "relative", display: "inline-block", overflow: "clip" }}
              >
                <motion.span
                  style={{
                    display: "inline-block",
                    color: isHighlight ? "var(--color-moss)" : undefined,
                  }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={inView ? { y: "0%", opacity: 1 } : undefined}
                  transition={{
                    duration,
                    delay: delay + i * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {token}
                </motion.span>
              </span>
            );
          })}
          {li < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
