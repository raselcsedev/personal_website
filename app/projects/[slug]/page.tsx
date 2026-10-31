import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/data";
import {
  getProjectBySlug,
  getAdjacentProjects,
  getRelatedProjects,
} from "@/lib/projects";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

type Props = { params: Promise<{ slug: string }> };

// Only the slugs defined in constants/data.ts exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `/projects/${project.slug}`,
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.description },
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const related = getRelatedProjects(project);

  return <ProjectDetail project={project} prev={prev} next={next} related={related} />;
}
