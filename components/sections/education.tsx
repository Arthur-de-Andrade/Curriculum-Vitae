import { educationItems } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";

export function Education() {
  return (
    <Section id="formacao">
        <SectionHeading kicker="Aprendizado" title="Formação" />

        <div className="education-grid">
          {educationItems.map((item) => (
            <Surface as="article" className="education-card" key={item.title}>
              <div className="card-icon">
                <i className={item.icon} aria-hidden="true" />
              </div>
              <div className="card-content">
                <span className="card-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p className="institution">{item.institution}</p>
                <span className="card-period">{item.period}</span>
                <p>{item.description}</p>
              </div>
            </Surface>
          ))}
        </div>
    </Section>
  );
}
