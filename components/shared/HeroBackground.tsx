"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  delay: (i % 8) * 0.4,
}));

/** Animated developer-style grid + floating particles for hero */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 hidden lg:block lg:-right-20 lg:w-[500px] lg:h-[500px] lg:blur-[100px]"
        style={{ background: "rgb(var(--accent))" }}
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 hidden lg:block lg:-left-20 lg:w-[400px] lg:h-[400px] lg:blur-[90px]"
        style={{ background: "rgb(var(--accent-2))" }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[rgb(var(--accent)/0.35)]"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 4 + (p.id % 4),
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent)/0.25)] to-transparent"
        animate={{ top: ["20%", "80%", "20%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
