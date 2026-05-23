"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProjectCardProps } from "@/types";

const CATEGORY_GRADIENTS: Record<string, string> = {
  fullstack: "from-orange-500/20 to-violet-500/20",
  frontend: "from-blue-500/20 to-cyan-500/20",
  backend: "from-green-500/20 to-emerald-500/20",
  mobile: "from-pink-500/20 to-rose-500/20",
  dashboard: "from-amber-500/20 to-orange-500/20",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = CATEGORY_GRADIENTS[project.category] ?? CATEGORY_GRADIENTS.fullstack;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group card-solid overflow-hidden hover:border-[rgb(var(--accent)/0.35)] hover:shadow-xl hover:shadow-[rgb(var(--accent)/0.06)] transition-all duration-300"
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl font-800 gradient-text opacity-30">
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 bg-[rgb(var(--accent)/0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full card-glass flex items-center justify-center text-[rgb(var(--text-primary))] hover:scale-110 transition-transform"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full accent-bg flex items-center justify-center text-white hover:scale-110 transition-transform"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-5">
        <Badge variant="accent" className="mb-2 capitalize">
          {project.category}
        </Badge>
        <h3 className="font-display text-lg font-600 text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent))] transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-badge">+{project.tech.length - 4}</span>
          )}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-[rgb(var(--border-subtle))]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] transition-colors"
          >
            <Github className="w-3.5 h-3.5" /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-[rgb(var(--accent))] hover:opacity-80 transition-opacity"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
