"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const HIGHLIGHTS = [
  "3+ years of professional full-stack experience",
  // "20+ production projects shipped",
  "Expert in Next.js App Router & React ecosystem",
  "Strong Node.js API and MongoDB architecture skills",
  "Experienced with payment systems: Stripe, PayPal, SSLCommerz",
  "Angular frontend development & enterprise applications",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[rgb(var(--bg-secondary)/0.4)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Who I Am" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="w-72 h-72 mx-auto rounded-3xl grid-bg border border-[rgb(var(--border))] flex items-center justify-center relative overflow-hidden card-glass">
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 rounded-2xl accent-bg flex items-center justify-center mx-auto mb-3">
                    <Code2 className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-display font-700 text-2xl gradient-text">RA</p>
                  <p className="text-xs text-[rgb(var(--text-muted))] mt-1">Frontend Developer</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent)/0.06)] to-[rgb(var(--accent-2)/0.06)]" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 card-glass p-3 rounded-xl shadow-xl"
              >
                <p className="font-display text-2xl font-700 gradient-text">20+</p>
                <p className="text-xs text-[rgb(var(--text-muted))]">Projects</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-4 bottom-8 card-glass p-3 rounded-xl shadow-xl"
              >
                <p className="font-display text-2xl font-700 gradient-text">3+</p>
                <p className="text-xs text-[rgb(var(--text-muted))]">Years</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full min-w-0 max-w-full"
          >
            <p className="text-[rgb(var(--text-secondary))] leading-relaxed mb-6 max-w-full overflow-wrap-anywhere">
              I&apos;m a <strong className="text-[rgb(var(--text-primary))]">Frontend Developer</strong> with
              3+ years of professional experience building web applications that scale. My core stack is{" "}
              <strong className="text-[rgb(var(--text-primary))]">Next.js + React.js + Angular + Tailwind CSS</strong>, and I&apos;ve
              shipped everything from SPAs to multi-vendor SaaS platforms.
            </p>
            <p className="text-[rgb(var(--text-secondary))] leading-relaxed mb-8 max-w-full overflow-wrap-anywhere">
              I care deeply about code quality, developer experience, and shipping products that work in production.
              I&apos;m actively seeking remote full-time roles and high-value freelance projects.
            </p>

            <div className="space-y-3">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 w-full min-w-0"
                >
                  <CheckCircle2 className="w-4 h-4 text-[rgb(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed break-all overflow-wrap-anywhere max-w-full">{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
