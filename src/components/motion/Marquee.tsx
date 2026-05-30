import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Marquee({ children, duration = 40 }: { children: ReactNode; duration?: number }) {
  return (
    <div className="relative overflow-hidden