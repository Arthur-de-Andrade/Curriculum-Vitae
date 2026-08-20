import { educationItems } from "@/data/portfolio";
import type { JourneyItem } from "@/types/portfolio";

const professionalJourneyItem: JourneyItem = {
  id: "antharys-desenvolvedor-full-stack",
  type: "experience",
  title: "Desenvolvedor Full Stack",
  organization: "ANTHARYS",
  location: "Rio de Janeiro, Brasil",
  start: "Março de 2026",
  end: "Atual",
  periodLabel: "Março de 2026 — Atual",
  description: [
    "Empresa de tecnologia focada em transformação digital, com atuação em software, cloud computing, dados, automação, infraestrutura e segurança da informação no Brasil e no mercado internacional.",
    "Atuo no desenvolvimento e na evolução do Faturamento, um ERP corporativo para gestão de faturamento e automação de processos financeiros e administrativos, incluindo contratos, relatórios, comunicações automatizadas e integrações fiscais para NFS-e.",
  ],
  highlights: [
    "Desenvolvimento e manutenção de serviços de back-end e regras de negócio com Java 8, Spring Boot, Hibernate e JPA.",
    "Desenvolvimento e manutenção de APIs REST e integrações entre componentes da aplicação.",
    "Desenvolvimento de telas, formulários e fluxos de front-end com AngularJS, JavaScript, HTML e CSS.",
    "Desenvolvimento e otimização de consultas, modelagem de dados e análise de integridade com SQL e MySQL.",
    "Gerenciamento de alterações de banco de dados e migrations com Liquibase.",
    "Desenvolvimento e manutenção de relatórios corporativos e operacionais com JasperReports.",
    "Investigação e correção de problemas em sistemas atuais e legados, avaliando impactos entre camadas e processos de negócio.",
    "Uso de Git e Maven para versionamento, dependências e build da aplicação.",
    "Uso responsável de ChatGPT, Claude Code e GitHub Copilot como apoio ao desenvolvimento, debugging, refatoração e investigação técnica.",
  ],
  technologies: ["Java 8", "Spring Boot", "AngularJS", "MySQL", "Liquibase", "JasperReports"],
  status: "current",
  icon: "fas fa-briefcase",
};

const educationJourneyItems: JourneyItem[] = educationItems.map((item) => ({
  id: item.id,
  type: item.journeyType,
  title: item.title,
  organization: item.institution,
  periodLabel: item.period,
  description: [item.description],
  status: item.journeyType === "education" ? "ongoing" : "completed",
  icon: item.icon,
  anchorId: item.journeyType === "education" ? "formacao" : undefined,
}));

/** Ordered from the current professional milestone toward earlier formative milestones. */
export const journeyItems: JourneyItem[] = [professionalJourneyItem, ...educationJourneyItems];
