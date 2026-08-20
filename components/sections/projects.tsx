import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" className="projects-section">
      <SectionHeading
        kicker="Trabalhos selecionados"
        title="Projetos selecionados"
        subtitle="Uma seleção de trabalhos profissionais, acadêmicos e pessoais."
      />
      <ProjectShowcase projects={projects} />
    </Section>
  );
}
