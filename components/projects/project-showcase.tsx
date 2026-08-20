"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState, type FocusEvent } from "react";

import { ProjectPreview } from "@/components/projects/project-preview";
import type { Project } from "@/types/portfolio";

interface ProjectRowProps {
  project: Project;
  active: boolean;
  onActiveChange: (slug: string | null) => void;
}

export function ProjectRow({ project, active, onActiveChange }: ProjectRowProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget as Node)) {
      onActiveChange(null);
    }
  };

  return (
    <motion.article
      className="project-row-shell"
      data-active={active}
      onMouseEnter={() => onActiveChange(project.slug)}
      onMouseLeave={() => onActiveChange(null)}
      onFocus={() => onActiveChange(project.slug)}
      onBlur={handleBlur}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link className="project-row" href={`/projects/${project.slug}`}>
        <span className="project-row-index" aria-hidden="true">
          {project.index}
        </span>

        <span className="project-row-content">
          <span className="project-row-title-line">
            <span className="project-row-title">{project.title}</span>
            <ArrowUpRight className="project-row-title-icon" size={20} aria-hidden="true" />
          </span>
          <span className="project-row-eyebrow">{project.eyebrow}</span>
          <span className="project-row-summary">{project.summary}</span>
          <span className="project-row-technologies" aria-label="Tecnologias do projeto">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </span>
        </span>

        <span className="project-row-action" aria-hidden="true">
          Abrir case
        </span>
      </Link>

      <div className="project-row-preview-anchor" aria-hidden="true">
        <motion.div
          className="project-row-preview"
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={active ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectPreview project={project} decorative />
        </motion.div>
      </div>
    </motion.article>
  );
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <div className="project-showcase">
      {projects.map((project) => (
        <ProjectRow
          key={project.slug}
          project={project}
          active={activeSlug === project.slug}
          onActiveChange={setActiveSlug}
        />
      ))}
    </div>
  );
}
