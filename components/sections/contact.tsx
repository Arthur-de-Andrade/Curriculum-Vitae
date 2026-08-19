import { contactItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        <SectionHeading
          kicker="Vamos conversar"
          title="Contato"
          subtitle="Estou disponível para conversar sobre oportunidades, projetos e tecnologia."
        />

        <div className="contato-grid">
          {contactItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`contato-card${item.title === "E-mail" ? " contato-card-button" : ""}`}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <i className={item.icon} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.value}</p>
              <span className="contato-link">{item.actionLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
