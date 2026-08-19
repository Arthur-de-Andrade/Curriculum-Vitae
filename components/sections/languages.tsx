import { languageItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Languages() {
  return (
    <section id="idiomas" className="section section-muted">
      <div className="container compact-section">
        <SectionHeading kicker="Comunicação" title="Idiomas" />
        <div className="languages-grid">
          {languageItems.map((item) => (
            <div className="language-card" key={item.language}>
              <i className={item.icon} aria-hidden="true" />
              <span>{item.language}</span>
              <strong>{item.level}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
