"use client";

import { motion } from "framer-motion";
import { pageVariants } from "@/lib/animations";

/** Subtle page fade-in on load */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
