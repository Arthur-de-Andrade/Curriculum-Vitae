import type {
  CertificationItem,
  ContactItem,
  EducationItem,
  LanguageItem,
  NavigationItem,
  PortfolioInfoItem,
  SkillCategory,
} from "@/types/portfolio";

export const navigationItems: NavigationItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Certificações", href: "#cursos" },
  { label: "Competências", href: "#habilidades" },
  { label: "Idiomas", href: "#idiomas" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Contato", href: "#contato" },
];

export const portfolioInfoItems: PortfolioInfoItem[] = [
  {
    icon: "fas fa-location-dot",
    label: "Localização",
    value: "Tijuca, Rio de Janeiro - RJ",
  },
  {
    icon: "fas fa-clock",
    label: "Disponibilidade",
    value: "30 horas semanais",
  },
  {
    icon: "fas fa-sun",
    label: "Turnos livres",
    value: "Manhã e tarde",
  },
  {
    icon: "fas fa-layer-group",
    label: "Atuação",
    value: "Full Stack e Backend",
  },
];

export const educationItems: EducationItem[] = [
  {
    icon: "fas fa-graduation-cap",
    label: "Graduação em andamento",
    title: "Bacharelado em Sistemas de Informação",
    institution: "CEFET/RJ - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",
    period: "Conclusão prevista: 2029",
    description:
      "Estudos em engenharia de software, algoritmos, estruturas de dados, bancos de dados, sistemas de informação, redes de computadores e desenvolvimento de software.",
  },
  {
    icon: "fas fa-laptop-code",
    label: "Formação profissional",
    title: "Programador Full Stack",
    institution: "SENAC",
    period: "360 horas · 26/03/2025 a 11/09/2025",
    description:
      "Formação em lógica de programação, desenvolvimento front-end e back-end, bancos de dados e construção de aplicações web.",
  },
];

export const certificationItems: CertificationItem[] = [
  {
    icon: "fas fa-certificate",
    title: "Programador Full Stack",
    institution: "SENAC",
    meta: [
      { icon: "fas fa-hourglass-half", text: "360 horas" },
      { icon: "far fa-calendar", text: "Concluído em 2025" },
    ],
    description:
      "Formação profissional em desenvolvimento web full stack, abrangendo front-end, back-end e bancos de dados.",
    codeLabel: "Código",
    code: "RN4CJ-MA8ML-P5DNC-MNBGF",
    verificationLabel: "Validar certificado",
    verificationUrl:
      "https://assinador.somosb4.com.br/validate/RN4CJ-MA8ML-P5DNC-MNBGF",
  },
  {
    icon: "fab fa-redhat",
    title: "Red Hat System Administration I",
    institution: "RH124 - RHA · Ver. 9.3 · Red Hat Academy",
    meta: [
      { icon: "fas fa-hourglass-half", text: "40 horas" },
      { icon: "far fa-calendar", text: "Junho de 2026" },
    ],
    description:
      "Formação em fundamentos de administração de sistemas Red Hat Enterprise Linux (RHEL).",
    codeLabel: "Plataforma",
    code: "Credly",
    verificationLabel: "Verificar certificado",
    verificationUrl:
      "https://www.credly.com/badges/39998735-dc64-44be-85c9-d63b53cb2d8a",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: "fas fa-code",
    title: "Linguagens",
    skills: [
      {
        name: "Java",
        description:
          "Linguagem orientada a objetos utilizada no desenvolvimento de serviços e regras de negócio.",
      },
      {
        name: "JavaScript",
        description:
          "Linguagem utilizada na construção de interfaces, fluxos de front-end e aplicações web.",
      },
      {
        name: "SQL",
        description:
          "Linguagem utilizada para consultar, modelar e manipular dados em bancos relacionais.",
      },
      {
        name: "HTML",
        description:
          "Linguagem de marcação utilizada para estruturar páginas e aplicações web.",
      },
      {
        name: "CSS",
        description:
          "Linguagem de estilos utilizada para criar interfaces web organizadas e responsivas.",
      },
    ],
  },
  {
    icon: "fas fa-server",
    title: "Back-end",
    skills: [
      {
        name: "Spring Boot",
        description:
          "Framework Java utilizado para criação e evolução de aplicações corporativas.",
      },
      {
        name: "APIs REST",
        description:
          "Arquitetura e conjunto de práticas utilizados na construção de interfaces de integração entre sistemas.",
      },
      {
        name: "Hibernate",
        description:
          "Framework de mapeamento objeto-relacional utilizado na persistência de dados.",
      },
      {
        name: "JPA",
        description:
          "Especificação e tecnologia utilizada para persistência de objetos em bancos de dados relacionais.",
      },
    ],
  },
  {
    icon: "fas fa-display",
    title: "Front-end",
    skills: [
      {
        name: "AngularJS",
        description:
          "Framework JavaScript utilizado na evolução de telas, formulários e fluxos de aplicações web.",
      },
      {
        name: "Interfaces web",
        description:
          "JavaScript, HTML e CSS aplicados à criação de interfaces e experiências web.",
      },
    ],
  },
  {
    icon: "fas fa-database",
    title: "Bancos de dados",
    skills: [
      {
        name: "MySQL",
        description:
          "Banco de dados relacional utilizado no desenvolvimento e manutenção de aplicações corporativas.",
      },
      {
        name: "Bancos relacionais",
        description:
          "Conhecimento em bancos de dados relacionais, consultas e investigação de integridade de dados.",
      },
      {
        name: "Modelagem de dados",
        description:
          "Estruturação de entidades e relacionamentos para organizar dados de aplicações.",
      },
    ],
  },
  {
    icon: "fas fa-screwdriver-wrench",
    title: "Ferramentas",
    skills: [
      {
        name: "Git",
        description:
          "Sistema de controle de versão utilizado para colaboração e histórico de código.",
      },
      {
        name: "Maven",
        description:
          "Ferramenta utilizada para gerenciamento de dependências e automação do build em projetos Java.",
      },
      {
        name: "Liquibase",
        description:
          "Ferramenta utilizada para controlar alterações de estrutura e migrations de banco de dados.",
      },
      {
        name: "JasperReports",
        description:
          "Ferramenta utilizada na criação e manutenção de relatórios corporativos e operacionais.",
      },
    ],
  },
  {
    icon: "fas fa-laptop",
    title: "Sistemas operacionais",
    skills: [
      {
        name: "Linux",
        description:
          "Sistema operacional de código aberto utilizado em ambientes de desenvolvimento e servidores.",
      },
      {
        name: "Red Hat Enterprise Linux",
        description:
          "Distribuição empresarial Linux abordada na formação Red Hat System Administration I.",
      },
      {
        name: "Windows",
        description:
          "Sistema operacional para computadores pessoais e ambientes corporativos.",
      },
      {
        name: "iOS",
        description:
          "Sistema operacional para dispositivos Apple, incluído entre os conhecimentos de sistemas operacionais.",
      },
    ],
  },
  {
    icon: "fas fa-wand-magic-sparkles",
    title: "Inteligência artificial",
    skills: [
      {
        name: "ChatGPT",
        description:
          "Ferramenta de apoio à análise, investigação e desenvolvimento de software, com validação técnica das soluções.",
      },
      {
        name: "Claude Code",
        description:
          "Ferramenta de apoio ao desenvolvimento e à investigação técnica em código.",
      },
      {
        name: "GitHub Copilot",
        description:
          "Assistente de programação utilizado como apoio à escrita e compreensão de código.",
      },
    ],
  },
  {
    icon: "fas fa-diagram-project",
    title: "Engenharia de software",
    skills: [
      {
        name: "POO",
        description:
          "Paradigma de desenvolvimento baseado em objetos, responsabilidades e reutilização de código.",
      },
      {
        name: "Debugging",
        description:
          "Análise de falhas e investigação do comportamento de aplicações para encontrar e corrigir problemas.",
      },
      {
        name: "Sistemas legados",
        description:
          "Manutenção e evolução de aplicações existentes, considerando impactos entre camadas e regras de negócio.",
      },
      {
        name: "Integração de sistemas",
        description:
          "Conexão entre componentes e aplicações para viabilizar fluxos de negócio integrados.",
      },
      {
        name: "Análise de requisitos",
        description:
          "Levantamento e compreensão das necessidades que orientam a construção de uma solução.",
      },
    ],
  },
  {
    icon: "fas fa-arrows-rotate",
    title: "Metodologias ágeis",
    skills: [
      {
        name: "Scrum",
        description:
          "Framework ágil para gestão de projetos com sprints, reuniões diárias, backlog, trabalho em equipe e melhoria iterativa.",
      },
      {
        name: "Kanban",
        description:
          "Método visual para gestão do fluxo de trabalho, organização de tarefas, limite de trabalho em progresso e melhoria contínua.",
      },
      {
        name: "Design Thinking",
        description:
          "Abordagem centrada no usuário para compreender problemas, gerar ideias, prototipar e testar soluções.",
      },
    ],
  },
];

export const languageItems: LanguageItem[] = [
  { icon: "fas fa-comments", language: "Português", level: "Nativo" },
  { icon: "fas fa-globe", language: "Inglês", level: "Intermediário" },
  { icon: "fas fa-language", language: "Espanhol", level: "Básico" },
];

export const contactItems: ContactItem[] = [
  {
    icon: "fas fa-phone",
    title: "Telefone",
    value: "(21) 9 9903-0653",
    actionLabel: "Clique para ligar",
    href: "tel:+5521999030653",
  },
  {
    icon: "fas fa-envelope",
    title: "E-mail",
    value: "arthuracleite@gmail.com",
    actionLabel: "Enviar mensagem",
    href: "mailto:arthuracleite@gmail.com?subject=Oportunidade%20ou%20contato%20profissional%20-%20Arthur%20Andrade&body=Ol%C3%A1%20Arthur%2C%20encontrei%20seu%20portf%C3%B3lio%20online%20e%20gostaria%20de%20conversar.",
  },
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    value: "/arthur-de-andrade",
    actionLabel: "Ver perfil",
    href: "https://www.linkedin.com/in/arthur-de-andrade-692192352",
    external: true,
  },
  {
    icon: "fab fa-github",
    title: "GitHub",
    value: "Arthur-de-Andrade",
    actionLabel: "Ver repositórios",
    href: "https://github.com/Arthur-de-Andrade",
    external: true,
  },
];

export const feedbackUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdUtRSLYmkLKBQd6K1L6uoUTWhuSLrtrZR_woCEu0N5BdN92A/viewform?usp=header";
