import { educationItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section id="formacao" className="section">
      <div className="container">
        <SectionHeading kicker="Aprendizado" title="Formação" />

        <div className="education-grid">
          {educationItems.map((item) => (
            <article className="education-card" key={item.title}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
