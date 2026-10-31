import { PROJECTS } from "@/constants/data";
import type { Project } from "@/types";

export const CATEGORY_GRADIENTS: Record<string, string> = {
  fullstack: "from-orange-500/20 to-violet-500/20",
  frontend: "from-blue-500/20 to-cyan-500/20",
  backend: "from-green-500/20 to-emerald-500/20",
  mobile: "from-pink-500/20 to-rose-500/20",
  dashboard: "from-amber-500/20 to-orange-500/20",
};

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Previous / next project (wraps around) for the bottom navigation */
export function getAdjacentProjects(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    next: PROJECTS[(i + 1) % PROJECTS.length],
  };
}

/** Other projects sharing the category or at least one technology */
export function getRelatedProjects(project: Project, limit = 3): Project[] {
  return PROJECTS.filter((p) => p.slug !== project.slug)
    .map((p) => ({
      p,
      score:
        (p.category === project.category ? 2 : 0) +
        p.tech.filter((t) => project.tech.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}
