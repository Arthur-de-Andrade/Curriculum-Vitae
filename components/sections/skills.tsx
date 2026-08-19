import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillButton, SkillModalProvider } from "@/components/ui/skill-modal";

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <SectionHeading
          kicker="Stack técnico"
          title="Competências"
          subtitle="Tecnologias, ferramentas e conhecimentos aplicados no desenvolvimento de software."
        />

        <SkillModalProvider>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <article className="skill-category" key={category.title}>
                <div className="skill-category-heading">
                  <i className={category.icon} aria-hidden="true" />
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <SkillButton key={skill.name} skill={skill} />
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="skills-hint">
            <i className="fas fa-circle-info" aria-hidden="true" /> Clique em uma competência para ver mais detalhes.
          </p>
        </SkillModalProvider>
      </div>
    </section>
  );
}
