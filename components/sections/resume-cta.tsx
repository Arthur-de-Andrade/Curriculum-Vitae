import Link from "next/link";

import { Section } from "@/components/ui/section";

export function ResumeCta() {
  return (
    <Section id="curriculo" className="resume-cta">
        <div className="resume-cta-content">
          <span className="section-kicker">Documento completo</span>
          <h2 className="section-title">Quer conhecer minha trajetória em detalhes?</h2>
          <p>
            Acesse a página dedicada ao currículo, com experiência profissional, formação, competências e credenciais
            verificáveis em um formato pronto para impressão.
          </p>
          <Link href="/curriculo" className="btn btn-primary">
            Abrir currículo completo <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
          </Link>
        </div>
    </Section>
  );
}
