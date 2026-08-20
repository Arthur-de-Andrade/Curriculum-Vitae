import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";

import { BlurFade } from "@/components/ui/blur-fade";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TechnicalProfileVisual } from "@/components/sections/technical-profile-visual";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-ambient" aria-hidden="true">
        <span className="hero-orbit hero-orbit-primary" />
        <span className="hero-orbit hero-orbit-secondary" />
        <span className="hero-glow" />
      </div>

      <Container className="hero-container">
        <div className="hero-copy">
          <BlurFade delay={0}>
            <p className="hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              EM ATUAÇÃO PROFISSIONAL
            </p>
          </BlurFade>

          <BlurFade delay={0.06}>
            <h1>
              <span>Arthur de</span>
              <span>Andrade</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.13}>
            <h2>Desenvolvedor de Software</h2>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="hero-stack" aria-label="Java, Spring Boot, SQL e Inteligência Artificial">
              Java <span aria-hidden="true">·</span> Spring Boot <span aria-hidden="true">·</span> SQL{" "}
              <span aria-hidden="true">·</span> Inteligência Artificial
            </p>
          </BlurFade>

          <BlurFade delay={0.27}>
            <p className="hero-description">
              Construo e evoluo aplicações web corporativas, unindo engenharia de software,
              dados e automação para resolver problemas reais.
            </p>
          </BlurFade>

          <BlurFade delay={0.34}>
            <div className="hero-actions">
              <ButtonLink
                className="hero-primary-action"
                href="#experiencia"
                variant="primary"
                size="large"
              >
                Conheça minha experiência <ArrowDown size={17} aria-hidden="true" />
              </ButtonLink>

              <div className="hero-secondary-actions" aria-label="Ações secundárias">
                <a
                  className="hero-secondary-link"
                  href="https://github.com/Arthur-de-Andrade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <Link className="hero-secondary-link" href="/curriculo">
                  Currículo <Download size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade className="hero-visual-reveal" delay={0.4} yOffset={18}>
          <TechnicalProfileVisual />
        </BlurFade>
      </Container>
    </section>
  );
}
