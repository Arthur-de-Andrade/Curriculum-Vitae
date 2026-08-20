import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCase } from "@/components/projects/project-case";
import { projectSlugs, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return project
    ? {
        title: `${project.title} | Arthur de Andrade`,
        description: project.summary,
      }
    : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  return (
    <ProjectCase
      project={project}
      previous={projectIndex > 0 ? projects[projectIndex - 1] : undefined}
      next={projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined}
    />
  );
}
