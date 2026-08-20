import { certificationItems } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";

export function Certifications() {
  return (
    <Section id="cursos" className="section-muted">
        <SectionHeading
          kicker="Credenciais"
          title="Cursos e certificações"
          subtitle="Formações com credenciais e links públicos para verificação."
        />

        <div className="certifications-grid">
          {certificationItems.map((item) => (
            <Surface as="article" className="certification-card" key={item.title}>
              <div className="certification-header">
                <div className="card-icon card-icon-red">
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <Badge tone="accent" className="certification-badge">Credencial verificável</Badge>
              </div>
              <h3>{item.title}</h3>
              <p className="institution">{item.institution}</p>
              <div className="certification-meta">
                {item.meta.map((meta) => (
                  <span key={meta.text}>
                    <i className={meta.icon} aria-hidden="true" /> {meta.text}
                  </span>
                ))}
              </div>
              <p>{item.description}</p>
              <div className="credential-code">
                <span>{item.codeLabel}</span> {item.code}
              </div>
              <ButtonLink
                className="verification-link"
                href={item.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                {item.verificationLabel}{" "}
                <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
              </ButtonLink>
            </Surface>
          ))}
        </div>
    </Section>
  );
}
