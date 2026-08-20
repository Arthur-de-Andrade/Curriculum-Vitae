import { portfolioInfoItems } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";

export function About() {
  return (
    <Section id="sobre">
        <SectionHeading kicker="Perfil" title="Sobre mim" />

        <div className="about-layout">
          <div className="about-copy">
            <p>
              Sou <strong>Desenvolvedor de Software</strong> com experiência prática no desenvolvimento e na
              manutenção de aplicações web corporativas utilizando <strong>Java, Spring Boot, SQL, APIs REST e
              bancos de dados relacionais</strong>.
            </p>
            <p>
              Atualmente atuo como <strong>Desenvolvedor Full Stack na ANTHARYS</strong>, contribuindo para a
              evolução de um ERP corporativo voltado a faturamento, contratos, fluxos financeiros, relatórios,
              automações e integrações fiscais.
            </p>
            <p>
              Também aplico <strong>Inteligência Artificial ao desenvolvimento de software</strong>, com uso crítico
              de ChatGPT, Claude Code e GitHub Copilot em análise de código, debugging, refatoração e investigação
              técnica.
            </p>
            <p>
              Tenho interesse em engenharia de software, inteligência artificial, dados, automação, sistemas
              distribuídos e soluções tecnológicas para problemas reais em escala.
            </p>
          </div>

          <div className="info-grid">
            {portfolioInfoItems.map((item) => (
              <Surface className="info-item" key={item.label} interactive>
                <i className={item.icon} aria-hidden="true" />
                <div>
                  <span className="info-label">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </Surface>
            ))}
          </div>
        </div>
    </Section>
  );
}
