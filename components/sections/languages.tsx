import { languageItems } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";

export function Languages() {
  return (
    <Section id="idiomas" className="section-muted" containerClassName="compact-section">
        <SectionHeading kicker="Comunicação" title="Idiomas" />
        <div className="languages-grid">
          {languageItems.map((item) => (
            <Surface className="language-card" key={item.language}>
              <i className={item.icon} aria-hidden="true" />
              <span>{item.language}</span>
              <strong>{item.level}</strong>
            </Surface>
          ))}
        </div>
    </Section>
  );
}
