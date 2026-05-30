import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Seamless horizontal marquee. Duplicates children twice and animates -50%.
 */
export function Marquee({
  children,
  duration = 40,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max gap-16 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        <div className="flex items-center gap-16 shrink-0">{children}</div>
        <div className="flex items-center gap-16 shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-coal to-transparent" />
    </div>
  );
}
