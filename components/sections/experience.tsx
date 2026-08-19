import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experiencia" className="section section-muted">
      <div className="container">
        <SectionHeading kicker="Trajetória" title="Experiência profissional" />

        <article className="experience-card">
          <div className="experience-topline">
            <div>
              <span className="status-badge">
                <i className="fas fa-briefcase" aria-hidden="true" /> Atual
              </span>
              <h3>Desenvolvedor Full Stack</h3>
              <p className="company">
                ANTHARYS <span>·</span> Rio de Janeiro, Brasil
              </p>
            </div>
            <span className="period">
              <i className="far fa-calendar" aria-hidden="true" /> Março de 2026 - Atual
            </span>
          </div>

          <p className="experience-context">
            Empresa de tecnologia focada em transformação digital, com atuação em software, cloud computing, dados,
            automação, infraestrutura e segurança da informação no Brasil e no mercado internacional.
          </p>
          <p className="experience-context">
            Atuo no desenvolvimento e na evolução do <strong>Faturamento</strong>, um ERP corporativo para gestão de
            faturamento e automação de processos financeiros e administrativos, incluindo contratos, relatórios,
            comunicações automatizadas e integrações fiscais para <strong>NFS-e</strong>.
          </p>

          <div className="experience-divider" />
          <h4>Principais responsabilidades</h4>
          <ul className="work-list">
            <li>
              Desenvolvimento e manutenção de serviços de back-end e regras de negócio com <strong>Java 8, Spring
              Boot, Hibernate e JPA</strong>.
            </li>
            <li>
              Desenvolvimento e manutenção de <strong>APIs REST</strong> e integrações entre componentes da aplicação.
            </li>
            <li>
              Desenvolvimento de telas, formulários e fluxos de front-end com <strong>AngularJS, JavaScript, HTML e
              CSS</strong>.
            </li>
            <li>
              Desenvolvimento e otimização de consultas, modelagem de dados e análise de integridade com <strong>SQL
              e MySQL</strong>.
            </li>
            <li>
              Gerenciamento de alterações de banco de dados e migrations com <strong>Liquibase</strong>.
            </li>
            <li>
              Desenvolvimento e manutenção de relatórios corporativos e operacionais com <strong>JasperReports</strong>.
            </li>
            <li>
              Investigação e correção de problemas em sistemas atuais e legados, avaliando impactos entre camadas e
              processos de negócio.
            </li>
            <li>
              Uso de <strong>Git e Maven</strong> para versionamento, dependências e build da aplicação.
            </li>
            <li>
              Uso responsável de <strong>ChatGPT, Claude Code e GitHub Copilot</strong> como apoio ao desenvolvimento,
              debugging, refatoração e investigação técnica.
            </li>
          </ul>

          <div className="tech-stack" aria-label="Tecnologias utilizadas na experiência">
            <span>Java 8</span>
            <span>Spring Boot</span>
            <span>AngularJS</span>
            <span>MySQL</span>
            <span>Liquibase</span>
            <span>JasperReports</span>
          </div>
        </article>
      </div>
    </section>
  );
}
