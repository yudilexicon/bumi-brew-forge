// Shared spring presets — keeps cinematic motion consistent across pages.
export const SPRING_CINEMATIC = { stiffness: 65, damping: 20, mass: 0.7 } as const;
export const SPRING_SECTION = { stiffness: 65, damping: 20, mass: 0.7 } as const;
export const SPRING_HERO = { stiffness: 65, damping: 20, mass: 0.7 } as const;
export const SPRING_DRIFT = { stiffness: 45, damping: 22, mass: 0.9 } as const;

// Standard in-view margin so reveals fire at the same scroll position everywhere.
export const REVEAL_MARGIN = "-12% 0px -12% 0px";
export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
