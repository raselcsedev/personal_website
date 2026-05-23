"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import type { SectionProps } from "@/types";

interface SectionHeaderProps extends SectionProps {
  label: string;
  title: string;
  subtitle?: string;
}

/** Reusable animated section heading */
export function SectionHeader({ label, title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
      className={`text-center mb-16 ${className ?? ""}`}
    >
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && (
        <p className="section-subtitle max-w-xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
