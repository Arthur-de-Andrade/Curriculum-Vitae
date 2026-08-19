import { certificationItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Certifications() {
  return (
    <section id="cursos" className="section section-muted">
      <div className="container">
        <SectionHeading
          kicker="Credenciais"
          title="Cursos e certificações"
          subtitle="Formações com credenciais e links públicos para verificação."
        />

        <div className="certifications-grid">
          {certificationItems.map((item) => (
            <article className="certification-card" key={item.title}>
              <div className="certification-header">
                <div className="card-icon card-icon-red">
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <span className="certification-badge">Credencial verificável</span>
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
              <a
                className="verification-link"
                href={item.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.verificationLabel}{" "}
                <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
