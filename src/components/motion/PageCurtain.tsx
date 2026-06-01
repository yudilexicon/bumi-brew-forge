import { AnimatePresence, motion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Curtain page-transition.
 * - On every route change, two coal-toned panels sweep in then lift away,
 *   masking layout swap and giving the cinematic "curtain lift" feel.
 * - Also plays once on initial load.
 */
export function PageCurtain({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [showInitial, setShowInitial] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowInitial(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Per-route curtain */}
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="contents">
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Curtain overlay — fires on every pathname change */}
      <CurtainOverlay trigger={pathname} initialShow={showInitial} />
    </>
  );
}

function CurtainOverlay({ trigger, initialShow }: { trigger: string; initialShow: boolean }) {
  const [visible, setVisible] = useState(initialShow);
  const [key, setKey] = useState(trigger);

  useEffect(() => {
    setKey(trigger);
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 950);
    return () => clearTimeout(t);
  }, [trigger]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={key}
          className="fixed inset-0 z-[100] pointer-events-none flex"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="w-1/2 h-full bg-coal border-r border-rust/10"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="w-1/2 h-full bg-coal"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Thin rust seam — appears as the panels meet */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-rust/40"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
