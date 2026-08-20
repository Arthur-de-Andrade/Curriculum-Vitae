import { contactItems } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <Section id="contato" className="contact-section">
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
              className={`contato-card surface surface-interactive${item.title === "E-mail" ? " contato-card-button" : ""}`}
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
    </Section>
  );
}
