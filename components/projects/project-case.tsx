import { ArrowLeft, ArrowRight, ArrowUpRight, GitBranch, LockKeyhole } from "lucide-react";
import Link from "next/link";

import { ProjectMedia } from "@/components/projects/project-media";
import { ProjectPreview } from "@/components/projects/project-preview";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Project, ProjectCaseSection } from "@/types/portfolio";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="project-case-header">
      <Link className="project-back-link" href="/#projects">
        <ArrowLeft size={16} aria-hidden="true" /> Projetos selecionados
      </Link>

      <div className="project-case-header-grid">
        <div className="project-case-header-copy">
          <p className="project-case-index">
            {project.index} / {project.eyebrow}
          </p>
          <h1>{project.title}</h1>
          <p className="project-case-lead">{project.summary}</p>

          <div className="project-case-technologies" aria-label="Tecnologias do projeto">
            {project.technologies.map((technology) => (
              <span className="project-case-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="project-case-actions">
            {project.githubUrl ? (
              <ButtonLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <GitBranch size={16} aria-hidden="true" />
                Ver código no GitHub
                <ArrowUpRight size={14} aria-hidden="true" />
              </ButtonLink>
            ) : (
              <span className="project-private-label">
                <LockKeyhole size={15} aria-hidden="true" /> Código proprietário
              </span>
            )}
          </div>
        </div>

        <div className="project-case-header-preview">
          <ProjectPreview project={project} priority />
        </div>
      </div>
    </header>
  );
}

interface ProjectSectionProps {
  section: ProjectCaseSection;
  index: number;
}

export function ProjectSection({ section, index }: ProjectSectionProps) {
  return (
    <section className="project-case-section">
      <div className="project-case-section-number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="project-case-section-content">
        <h2>{section.title}</h2>
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets ? (
          <ul className="project-case-list">
            {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        ) : null}
        {section.media?.map((media) => (
          <ProjectMedia key={media.src} media={media} />
        ))}
      </div>
    </section>
  );
}

interface ProjectNavigationProps {
  previous?: Project;
  next?: Project;
}

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <nav className="project-navigation" aria-label="Navegação entre projetos">
      {previous ? (
        <Link className="project-navigation-link project-navigation-previous" href={`/projects/${previous.slug}`}>
          <span>Projeto anterior</span>
          <strong><ArrowLeft size={16} aria-hidden="true" /> {previous.title}</strong>
        </Link>
      ) : (
        <span className="project-navigation-link project-navigation-disabled" aria-disabled="true">
          <span>Projeto anterior</span>
          <strong>Início da seleção</strong>
        </span>
      )}

      {next ? (
        <Link className="project-navigation-link project-navigation-next" href={`/projects/${next.slug}`}>
          <span>Próximo projeto</span>
          <strong>{next.title} <ArrowRight size={16} aria-hidden="true" /></strong>
        </Link>
      ) : (
        <span className="project-navigation-link project-navigation-disabled project-navigation-next" aria-disabled="true">
          <span>Próximo projeto</span>
          <strong>Fim da seleção</strong>
        </span>
      )}
    </nav>
  );
}

interface ProjectCaseProps {
  project: Project;
  previous?: Project;
  next?: Project;
}

export function ProjectCase({ project, previous, next }: ProjectCaseProps) {
  return (
    <main className="project-case-page">
      <Container>
        <ProjectHeader project={project} />

        <div className="project-case-intro">
          <span className="section-kicker">Sobre o projeto</span>
          <p>{project.caseStudy.intro}</p>
        </div>

        <div className="project-case-sections">
          {project.caseStudy.sections.map((section, index) => (
            <ProjectSection key={section.title} section={section} index={index} />
          ))}
        </div>

        {project.caseStudy.privateSourceNote ? (
          <aside className="project-private-note">
            <LockKeyhole size={19} aria-hidden="true" />
            <div>
              <strong>Código proprietário</strong>
              <p>{project.caseStudy.privateSourceNote}</p>
            </div>
          </aside>
        ) : null}

        <ProjectNavigation previous={previous} next={next} />
      </Container>
    </main>
  );
}
