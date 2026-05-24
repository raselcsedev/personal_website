"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { EXPERIENCE } from "@/constants/demo_data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[rgb(var(--bg-secondary)/0.3)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Career Path"
          title="Experience"
          subtitle="My professional journey building web products for startups and agencies."
        />

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[rgb(var(--accent))] via-[rgb(var(--accent-2))] to-transparent" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-[14px] top-2 w-3 h-3 rounded-full accent-bg ring-4 ring-[rgb(var(--bg-primary))]" />

                <div className="card-solid p-6 hover:border-[rgb(var(--accent)/0.3)] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-600 text-[rgb(var(--text-primary))]">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-500 gradient-text">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="flex items-center gap-1.5 text-xs text-[rgb(var(--text-muted))]">
                        <Calendar className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span
                        className={`mt-1 inline-block text-xs px-2 py-0.5 rounded-full capitalize ${
                          exp.type === "full-time"
                            ? "bg-green-400/10 text-green-400"
                            : "bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))]"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
