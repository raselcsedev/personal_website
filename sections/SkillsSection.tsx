"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="What I Know"
          title="Technical Skills"
          subtitle="Technologies I use daily to build robust, scalable web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {SKILLS.map((skillGroup, gi) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="card-solid p-6 hover:border-[rgb(var(--accent)/0.25)] transition-colors duration-300"
            >
              <h3 className="font-display text-sm font-600 uppercase tracking-widest text-[rgb(var(--accent))] mb-5">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-[rgb(var(--text-primary))]">
                        <span className="mr-1.5" aria-hidden>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs text-[rgb(var(--text-muted))]">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: si * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
