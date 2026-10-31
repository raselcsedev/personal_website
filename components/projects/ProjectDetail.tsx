"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Lock,
  User,
  Layers,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORY_GRADIENTS } from "@/lib/projects";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
  prev?: Project;
  next?: Project;
  related: Project[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectDetail({ project, prev, next, related }: ProjectDetailProps) {
  const gradient = CATEGORY_GRADIENTS[project.category] ?? CATEGORY_GRADIENTS.fullstack;
  const hasLive = !!project.live && project.live !== "#";
  const hasCode = !!project.github;
  const isCompany = project.projectType === "company";

  return (
    <article className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / back */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>
        </motion.nav>

        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-3xl mb-10"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="accent" className="capitalize">
              {project.category}
            </Badge>
            <span className="soft-pill">
              {isCompany ? "Company project" : "Personal project"}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 leading-tight tracking-tight text-[rgb(var(--text-primary))] mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-[rgb(var(--text-secondary))] leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {hasLive && (
              <Button asChild>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </Button>
            )}
            {hasCode && (
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4" /> View Source Code
                </a>
              </Button>
            )}
            {!hasLive && !hasCode && (
              <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--text-muted))] card-glass px-4 py-2.5 rounded-xl">
                <Lock className="w-4 h-4" />
                Private project: source code and demo are not publicly available
              </span>
            )}
          </div>
        </motion.header>

        {/* Banner */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`relative h-56 sm:h-72 md:h-80 rounded-3xl overflow-hidden border border-[rgb(var(--border))] bg-gradient-to-br ${gradient} mb-12`}
          aria-hidden
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-8xl sm:text-9xl font-800 gradient-text opacity-30">
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-12 min-w-0">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-xl font-700 text-[rgb(var(--text-primary))] mb-4">
                Overview
              </h2>
              <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                {project.overview}
              </p>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-xl font-700 text-[rgb(var(--text-primary))] mb-5">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="card-solid p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[rgb(var(--accent))] shrink-0 mt-0.5" />
                    <span className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                      {f}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-xl font-700 text-[rgb(var(--text-primary))] mb-5">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="card-solid p-6 lg:sticky lg:top-28 space-y-5"
            >
              <h2 className="font-display text-sm font-600 uppercase tracking-widest text-[rgb(var(--accent))]">
                Project Info
              </h2>
              {[
                { icon: User, label: "My role", value: project.role },
                { icon: Briefcase, label: "Type", value: isCompany ? "Company project" : "Personal project" },
                { icon: Layers, label: "Category", value: project.category, capitalize: true },
              ].map(({ icon: Icon, label, value, capitalize }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg accent-bg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[rgb(var(--text-muted))]">{label}</p>
                    <p className={`text-sm text-[rgb(var(--text-primary))] ${capitalize ? "capitalize" : ""}`}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}

              {(hasLive || hasCode) && (
                <div className="pt-4 border-t border-[rgb(var(--border-subtle))] flex flex-col gap-2">
                  {hasLive && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[rgb(var(--accent))] hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" /> Visit live site
                    </a>
                  )}
                  {hasCode && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                    >
                      <Github className="w-4 h-4" /> GitHub repository
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </aside>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <section className="mt-20" aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="font-display text-xl font-700 text-[rgb(var(--text-primary))] mb-6"
            >
              Related Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/projects/${r.slug}`}
                  className="group card-solid p-5 hover:border-[rgb(var(--accent)/0.35)] transition-colors"
                >
                  <Badge variant="accent" className="mb-2 capitalize">
                    {r.category}
                  </Badge>
                  <h3 className="font-display text-base font-600 text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent))] transition-colors mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--text-secondary))] line-clamp-2">
                    {r.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Previous / next */}
        {prev && next && (
          <nav
            aria-label="Project navigation"
            className="mt-16 pt-8 border-t border-[rgb(var(--border-subtle))] grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Link
              href={`/projects/${prev.slug}`}
              className="group card-solid p-5 hover:border-[rgb(var(--accent)/0.35)] transition-colors"
            >
              <span className="flex items-center gap-2 text-xs text-[rgb(var(--text-muted))] mb-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous project
              </span>
              <span className="font-display text-sm font-600 text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent))] transition-colors">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group card-solid p-5 text-left sm:text-right hover:border-[rgb(var(--accent)/0.35)] transition-colors"
            >
              <span className="flex items-center sm:justify-end gap-2 text-xs text-[rgb(var(--text-muted))] mb-1">
                Next project <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="font-display text-sm font-600 text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent))] transition-colors">
                {next.title}
              </span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}
