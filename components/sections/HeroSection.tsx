"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Download,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/shared/HeroBackground";
import { containerVariants, fadeUpVariants } from "@/lib/animations";
import { PERSONAL_INFO } from "@/constants/data";

const ROTATING_WORDS = [
  "Next.js Apps",
  "REST APIs",
  "E-Commerce",
  "Dashboards",
  "Scalable Systems",
];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROTATING_WORDS[wordIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length - 1) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
    >
      <HeroBackground />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.45, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-8 top-1/3 hidden xl:block shadow-xl font-mono text-xs leading-relaxed text-[rgb(var(--text-muted))] card-glass p-4 float-animation z-10"
        aria-hidden
      >
        <div className="text-[rgb(var(--accent))]">const</div>
        <div>
          <span className="text-[rgb(var(--accent-2))]"> developer</span> ={" "}
          {"{"}
        </div>
        <div className="pl-4">
          name: <span className="text-green-400/70">&apos;Rasel&apos;</span>,
        </div>
        <div className="pl-4">
          stack:{" "}
          <span className="text-yellow-400/70">[&apos;Next.js&apos;, ...]</span>
        </div>
        <div className="pl-4">
          available: <span className="text-[rgb(var(--accent))]">true</span>
        </div>
        <div>{"}"};</div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUpVariants} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="soft-pill border-emerald-400/30 text-emerald-400/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
              Available for work
            </span>
            <span className="soft-pill">Next.js · React · Tailwind</span>
            {/* <span className="soft-pill">UI/UX Focused</span> */}
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <h1 className="font-display text-base sm:text-xl md:text-3xl font-800 leading-[1.05] tracking-tight mb-4">
              <span className="text-[rgb(var(--text-primary))]">I build </span>
              <span className="gradient-text">
                {displayText}
                <span className="animate-pulse" aria-hidden>
                  |
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mt-4 mb-6">
            <p className="font-display text-xl md:text-2xl text-[rgb(var(--text-secondary))] leading-tight">
              Hi, I&apos;m{" "}
              <strong className="text-[rgb(var(--text-primary))] font-600">
                {PERSONAL_INFO.name}
              </strong>{" "}
              — {PERSONAL_INFO.title}
            </p>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="text-[rgb(var(--text-secondary))] text-lg leading-relaxed max-w-xl mb-10"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-3 mb-12"
          >
            <Button asChild>
              <a href="#contact">
                Hire Me <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={PERSONAL_INFO.resumeUrl} download>
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-8 mb-12"
          >
            {[
              { num: "3+", label: "Years Experience" },
              { num: "20+", label: "Projects Shipped" },
              { num: "15+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="surface-panel px-4 py-4 min-w-[8.8rem] rounded-2xl">
                <p className="font-display text-3xl font-700 gradient-text">
                  {stat.num}
                </p>
                <p className="text-sm text-[rgb(var(--text-muted))] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-4"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="w-12 h-px bg-[rgb(var(--border))]" />
            <span className="text-xs text-[rgb(var(--text-muted))]">
              {PERSONAL_INFO.email}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[rgb(var(--text-muted))]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 scroll-indicator" />
        </motion.div>
      </div>
    </section>
  );
}
