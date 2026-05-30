import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface PillButtonProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

/**
 * Pill-shaped CTA with two dots and a hover fill sweep.
 * Inspired by farmminerals.com pill buttons but in Bumi Kopi's dark/rust palette.
 */
export function PillButton({ to, href, children, variant = "primary", className = "" }: PillButtonProps) {
  const isPrimary = variant === "primary";
  const base = `group relative inline-flex items-center gap-3 rounded-full border px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] overflow-hidden transition-colors duration-300 ${
    isPrimary
      ? "border-rust bg-rust text-white hover:bg-rust-dim"
      : "border-ash/60 text-bone hover:border-bone"
  } ${className}`;

  const dotClass = isPrimary ? "bg-bone" : "bg-rust";

  const inner = (
    <>
      <motion.span
        className={`block w-1.5 h-1.5 rounded-full ${dotClass}`}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
      <motion.span
        className={`block w-1.5 h-1.5 rounded-full ${dotClass}`}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      />
      {!isPrimary && (
        <span className="absolute inset-0 -z-0 translate-y-full bg-bone transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={base}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={base}>
      {inner}
    </a>
  );
}
