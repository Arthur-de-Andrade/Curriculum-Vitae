import { skillCategories } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillButton, SkillModalProvider } from "@/components/ui/skill-modal";
import { Surface } from "@/components/ui/surface";

export function Skills() {
  return (
    <Section id="habilidades">
        <SectionHeading
          kicker="Stack técnico"
          title="Competências"
          subtitle="Tecnologias, ferramentas e conhecimentos aplicados no desenvolvimento de software."
        />

        <SkillModalProvider>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <Surface as="article" className="skill-category" key={category.title}>
                <div className="skill-category-heading">
                  <i className={category.icon} aria-hidden="true" />
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <SkillButton key={skill.name} skill={skill} />
                  ))}
                </div>
              </Surface>
            ))}
          </div>
          <p className="skills-hint">
            <i className="fas fa-circle-info" aria-hidden="true" /> Clique em uma competência para ver mais detalhes.
          </p>
        </SkillModalProvider>
    </Section>
  );
}
