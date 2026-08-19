import type { Metadata } from "next";
import Link from "next/link";

import { PrintButton } from "@/components/ui/print-button";

export const metadata: Metadata = {
  title: "Currículo | Arthur de Andrade",
  description: "Currículo de Arthur de Andrade de Cerqueira Leite, Desenvolvedor de Software.",
};

export default function CurriculumPage() {
  return (
    <>
      <div className="screen-actions" aria-label="Ações do currículo">
        <Link href="/">← Voltar ao portfólio</Link>
        <PrintButton />
      </div>

      <main className="resume">
        <header className="resume-header">
          <h1>Arthur de Andrade de Cerqueira Leite</h1>
          <p className="headline">Desenvolvedor de Software | Java, Spring Boot, SQL &amp; Inteligência Artificial</p>
          <div className="contact-lines">
            <div className="contact-row">
              <span>Tijuca, Rio de Janeiro - RJ, Brasil</span>
              <span>+55 21 99903-0653</span>
              <a href="mailto:arthuracleite@gmail.com">arthuracleite@gmail.com</a>
            </div>
            <div className="contact-row">
              <a
                href="https://www.linkedin.com/in/arthur-de-andrade-692192352"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/arthur-de-andrade-692192352
              </a>
              <a
                href="https://github.com/Arthur-de-Andrade"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Arthur-de-Andrade
              </a>
            </div>
            <p className="availability">
              Disponibilidade: 30 horas semanais, com turnos da manhã e da tarde livres.
            </p>
          </div>
          <div className="accent-rule" />
        </header>

        <section className="resume-section">
          <h2>Resumo profissional</h2>
          <div className="summary">
            <p>
              Desenvolvedor de Software com experiência prática no desenvolvimento e manutenção de aplicações web
              corporativas utilizando <strong>Java, Spring Boot, SQL, APIs REST e bancos de dados relacionais</strong>.
            </p>
            <p>
              Atualmente atuo como Desenvolvedor Full Stack na <strong>ANTHARYS</strong>, contribuindo para o
              desenvolvimento e evolução de um ERP corporativo voltado a processos de faturamento, contratos, fluxos
              financeiros, relatórios, automações e integrações fiscais.
            </p>
            <p>
              Possuo experiência com <strong>Inteligência Artificial aplicada ao desenvolvimento de software</strong>,
              utilizando <strong>ChatGPT, Claude Code e GitHub Copilot</strong>, com análise crítica e responsabilidade
              técnica sobre o código e as soluções implementadas.
            </p>
            <p>
              Tenho interesse em <strong>engenharia de software, inteligência artificial, dados, automação, sistemas
              distribuídos e desenvolvimento de soluções tecnológicas para problemas reais em escala</strong>.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Experiência profissional</h2>
          <article className="experience-entry">
            <div className="entry-heading">
              <div>
                <h3>Desenvolvedor Full Stack</h3>
                <p className="organization">ANTHARYS — Rio de Janeiro, Brasil</p>
              </div>
              <span className="date">Março de 2026 — Atual</span>
            </div>
            <p>
              Empresa de tecnologia focada em transformação digital, com atuação em software, cloud computing, dados,
              automação, infraestrutura e segurança da informação no Brasil e no mercado internacional.
            </p>
            <p>
              Atuo no desenvolvimento e evolução do <strong>Faturamento</strong>, um ERP corporativo voltado à gestão
              de faturamento e automação de processos financeiros e administrativos, abrangendo contratos, relatórios,
              comunicações automatizadas e integrações fiscais para <strong>NFS-e</strong>.
            </p>
            <ul className="work-list">
              <li>
                Desenvolvimento e manutenção de serviços de back-end e regras de negócio utilizando <strong>Java 8,
                Spring Boot, Hibernate e JPA</strong>.
              </li>
              <li>
                Desenvolvimento e manutenção de <strong>APIs REST</strong> e integrações entre diferentes componentes
                da aplicação.
              </li>
              <li>
                Desenvolvimento e evolução de telas, formulários e fluxos de front-end utilizando <strong>AngularJS,
                JavaScript, HTML e CSS</strong>.
              </li>
              <li>
                Atuação com <strong>SQL e MySQL</strong>, incluindo desenvolvimento e otimização de consultas,
                modelagem de dados, investigação de problemas e análise de integridade de dados.
              </li>
              <li>
                Gerenciamento de alterações de estrutura de banco de dados e migrations utilizando <strong>Liquibase</strong>.
              </li>
              <li>
                Desenvolvimento e manutenção de relatórios corporativos e operacionais utilizando <strong>JasperReports</strong>.
              </li>
              <li>
                Investigação e correção de problemas em sistemas atuais e legados, avaliando impactos entre diferentes
                camadas da aplicação e processos de negócio.
              </li>
              <li>
                Utilização de <strong>Git e Maven</strong> para versionamento de código, gerenciamento de dependências
                e build da aplicação.
              </li>
              <li>
                Utilização de <strong>ChatGPT, Claude Code e GitHub Copilot</strong> como ferramentas de apoio ao
                desenvolvimento, análise de código, debugging, refatoração e investigação técnica.
              </li>
            </ul>
          </article>
        </section>

        <section className="resume-section two-columns">
          <div>
            <h2>Formação acadêmica</h2>
            <article className="education-entry">
              <h3>Bacharelado em Sistemas de Informação</h3>
              <p className="organization">CEFET/RJ — Centro Federal de Educação Tecnológica Celso Suckow da Fonseca</p>
              <p className="date">Conclusão prevista: 2029</p>
              <p>
                Graduação com estudos em engenharia de software, algoritmos, estruturas de dados, bancos de dados,
                sistemas de informação, redes de computadores e desenvolvimento de software.
              </p>
            </article>

            <article className="education-entry">
              <h3>Programador Full Stack</h3>
              <p className="organization">SENAC</p>
              <p className="date">360 horas · 26/03/2025 a 11/09/2025</p>
              <p>
                Formação profissional voltada ao desenvolvimento web full stack, incluindo fundamentos de lógica de
                programação, desenvolvimento front-end, desenvolvimento back-end, bancos de dados e construção de
                aplicações web.
              </p>
              <p className="credential">
                <strong>Credencial:</strong> RN4CJ-MA8ML-P5DNC-MNBGF
                <br />
                <a
                  href="https://assinador.somosb4.com.br/validate/RN4CJ-MA8ML-P5DNC-MNBGF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Validar certificado
                </a>
              </p>
            </article>
          </div>

          <div>
            <h2>Formação complementar</h2>
            <article className="education-entry">
              <h3>Red Hat System Administration I</h3>
              <p className="organization">RH124 - RHA · Ver. 9.3 · Red Hat Academy</p>
              <p className="date">40 horas · Junho de 2026</p>
              <p>Formação em fundamentos de administração de sistemas Red Hat Enterprise Linux (RHEL).</p>
              <p className="credential">
                <a
                  href="https://www.credly.com/badges/39998735-dc64-44be-85c9-d63b53cb2d8a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verificar certificado na Credly
                </a>
              </p>
            </article>
          </div>
        </section>

        <section className="resume-section">
          <h2>Competências técnicas</h2>
          <dl className="skills-list">
            <div className="skill-row"><dt>Linguagens</dt><dd>Java, JavaScript, SQL, HTML, CSS</dd></div>
            <div className="skill-row"><dt>Back-end</dt><dd>Spring Boot, APIs REST, Hibernate, JPA</dd></div>
            <div className="skill-row"><dt>Front-end</dt><dd>AngularJS</dd></div>
            <div className="skill-row"><dt>Bancos de dados</dt><dd>MySQL, SQL, bancos de dados relacionais, modelagem de dados</dd></div>
            <div className="skill-row"><dt>Ferramentas</dt><dd>Git, Maven, Liquibase, JasperReports</dd></div>
            <div className="skill-row"><dt>Sistemas operacionais</dt><dd>Linux, Red Hat Enterprise Linux (RHEL), Windows, iOS</dd></div>
            <div className="skill-row"><dt>Inteligência artificial</dt><dd>ChatGPT, Claude Code, GitHub Copilot</dd></div>
            <div className="skill-row"><dt>Engenharia de software</dt><dd>Programação Orientada a Objetos, desenvolvimento de APIs, debugging, sistemas legados, integração de sistemas e análise de requisitos</dd></div>
            <div className="skill-row"><dt>Metodologias ágeis</dt><dd>Scrum, Kanban e Design Thinking</dd></div>
          </dl>
        </section>

        <section className="resume-section languages-section">
          <h2>Idiomas</h2>
          <div className="languages">
            <span><strong>Português:</strong> Nativo</span>
            <span><strong>Inglês:</strong> Intermediário</span>
            <span><strong>Espanhol:</strong> Básico</span>
          </div>
        </section>
      </main>
    </>
  );
}
