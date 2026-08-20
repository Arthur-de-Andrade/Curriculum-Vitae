import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "bigviewer-faturamento",
    index: "01",
    title: "Faturamento",
    eyebrow: "Profissional · Software corporativo",
    kind: "professional",
    summary:
      "Sistema corporativo relacionado a processos de faturamento, contratos, serviços, relatórios, automações e integrações.",
    technologies: ["Java", "Spring Boot", "AngularJS", "SQL / MySQL", "APIs REST"],
    privateSource: true,
    preview: {
      type: "abstract",
      alt: "Representação editorial abstrata do projeto Faturamento; não é uma captura da aplicação.",
    },
    caseStudy: {
      intro:
        "Trabalho profissional em um sistema corporativo relacionado a faturamento, contratos, serviços, relatórios, automações e integrações.",
      privateSourceNote:
        "Este projeto foi desenvolvido em contexto profissional. O código-fonte e informações internas não são públicos.",
      sections: [
        {
          title: "Contexto",
          paragraphs: [
            "O projeto Faturamento integra um contexto de software corporativo voltado a processos de faturamento e às operações que apoiam esse domínio.",
            "A apresentação deste case é intencionalmente geral para preservar informações internas, regras comerciais e detalhes do produto.",
          ],
        },
        {
          title: "Minha atuação",
          bullets: [
            "Desenvolvimento e manutenção de backend e regras relacionadas ao domínio da aplicação.",
            "Desenvolvimento e manutenção de frontend e fluxos de interface.",
            "Construção e manutenção de APIs REST, persistência e consultas.",
            "Atuação com relatórios, fluxos de e-mail, automações e integrações.",
            "Manutenção, refatoração, debugging e investigação técnica.",
          ],
        },
        {
          title: "Desafios de engenharia",
          paragraphs: [
            "A atuação envolve compreender o comportamento de uma aplicação existente, acompanhar regras de negócio e investigar impactos entre diferentes camadas sem expor sua implementação interna.",
            "O preview deste projeto é uma composição editorial abstrata. Ele não representa uma tela real do produto.",
          ],
        },
        {
          title: "Tecnologias",
          paragraphs: [
            "Java, Spring Boot, AngularJS, SQL/MySQL e APIs REST fazem parte do conjunto de tecnologias confirmado para este trabalho.",
          ],
        },
      ],
    },
  },
  {
    slug: "biblioteca-escolar",
    index: "02",
    title: "Sistema de Biblioteca Escolar",
    eyebrow: "Acadêmico · Engenharia de dados",
    kind: "academic",
    summary:
      "Banco de dados relacional para gerenciamento de acervo, empréstimos, devoluções e reservas de uma biblioteca escolar.",
    technologies: ["MySQL 8.x", "SQL", "Modelagem relacional", "Triggers", "Transações"],
    githubUrl: "https://github.com/Arthur-de-Andrade/biblioteca_BD",
    preview: {
      type: "image",
      src: "/projects/biblioteca/modelo-fisico.png",
      alt: "Modelo físico do banco de dados do Sistema de Biblioteca Escolar.",
    },
    caseStudy: {
      intro:
        "Projeto acadêmico de banco de dados relacional construído para controlar o acervo físico, empréstimos, devoluções e a fila de reservas de uma biblioteca escolar.",
      sections: [
        {
          title: "Introdução",
          paragraphs: [
            "O sistema atende alunos matriculados em cursos técnicos integrados ao ensino médio e organiza entidades como cursos, alunos, categorias, autores, livros, exemplares, empréstimos e reservas.",
            "O repositório foi desenvolvido com MySQL 8.x e SQL, incluindo scripts separados para estrutura, dados, consultas e transações.",
          ],
        },
        {
          title: "O problema",
          paragraphs: [
            "O modelo precisa distinguir o título do livro de cada exemplar físico, acompanhar o estado de disponibilidade, controlar prazos de empréstimo e organizar reservas quando não há exemplares disponíveis.",
          ],
        },
        {
          title: "Modelagem",
          paragraphs: [
            "A modelagem conceitual usa entidades e relacionamentos para representar cursos, alunos, livros, autores, exemplares, empréstimos e reservas. A relação entre livros e autores é muitos-para-muitos.",
          ],
          media: [
            {
              src: "/projects/biblioteca/modelo-conceitual.png",
              alt: "Diagrama conceitual Peter Chen do Sistema de Biblioteca Escolar.",
              caption: "Modelo conceitual em notação Peter Chen.",
            },
          ],
        },
        {
          title: "Modelo relacional",
          paragraphs: [
            "O modelo físico traduz os relacionamentos em tabelas, chaves primárias, chaves estrangeiras, índices e tabelas associativas para manter a integridade do banco.",
          ],
          media: [
            {
              src: "/projects/biblioteca/modelo-fisico.png",
              alt: "Diagrama do modelo relacional e físico MySQL do Sistema de Biblioteca Escolar.",
              caption: "Modelo relacional e modelo físico em MySQL.",
            },
          ],
        },
        {
          title: "Integridade e regras de negócio",
          bullets: [
            "Normalização em Terceira Forma Normal (3FN), com PKs, FKs, constraints e índices.",
            "Limite de até 3 empréstimos ativos por aluno e bloqueio para alunos com atraso.",
            "Atualização automática do status do exemplar durante empréstimos, devoluções e reservas.",
            "Impedimento de reservar um livro que ainda possui exemplar disponível.",
            "Regra de conservação que evita melhorar manualmente o estado de um exemplar sem restauração formal.",
          ],
        },
        {
          title: "Consultas",
          paragraphs: [
            "O arquivo queries.sql reúne 12 consultas que exploram JOINs, agregações, agrupamentos, subconsultas, UNION ALL, EXISTS e análise de datas para relatórios e auditorias do acervo.",
          ],
        },
        {
          title: "Transações",
          paragraphs: [
            "O arquivo transactions.sql reúne 8 transações controladas, incluindo COMMIT, ROLLBACK, SAVEPOINT, devoluções, empréstimos, reservas, atualização de conservação e rotinas de manutenção.",
          ],
        },
        {
          title: "Tecnologias",
          paragraphs: [
            "MySQL 8.x, SQL, modelagem relacional, normalização, triggers e transações ACID.",
          ],
        },
      ],
    },
  },
  {
    slug: "developer-portfolio",
    index: "03",
    title: "Developer Portfolio",
    eyebrow: "Pessoal · Frontend engineering",
    kind: "personal",
    summary:
      "Portfólio profissional em evolução, com foco em arquitetura de interface, documentação técnica, acessibilidade e publicação estática.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/Arthur-de-Andrade/Curriculum-Vitae",
    preview: {
      type: "image",
      src: "/projects/portfolio/preview.png",
      alt: "Screenshot real do estado local atual do Developer Portfolio.",
    },
    caseStudy: {
      intro:
        "Um portfólio pessoal usado para transformar uma página profissional legada em uma experiência web moderna, documentada e compatível com publicação estática.",
      sections: [
        {
          title: "Objetivo",
          paragraphs: [
            "O objetivo é apresentar experiência, formação, competências e contato com mais clareza, preservando o conteúdo profissional e mantendo o currículo como uma experiência utilitária separada.",
          ],
        },
        {
          title: "Migração",
          paragraphs: [
            "A base local atual migrou a estrutura anterior de HTML, CSS e JavaScript para Next.js com App Router, React e TypeScript, mantendo a ordem e os conteúdos das seções existentes.",
            "Dados repetíveis foram tipados e organizados em módulos próprios, enquanto componentes de layout e UI foram separados para facilitar a evolução incremental.",
          ],
        },
        {
          title: "Arquitetura",
          bullets: [
            "Server Components permanecem como padrão; estado e eventos ficam restritos ao menu, modal e componentes que precisam deles.",
            "A rota /curriculo permanece isolada com layout e CSS de impressão próprios.",
            "O export estático é configurado no Next.js e as rotas públicas usam a infraestrutura de base path do projeto.",
          ],
        },
        {
          title: "Design System",
          paragraphs: [
            "A identidade dark-first usa tokens de cor, tipografia Geist, superfícies, bordas, radius, spacing e estados de foco documentados em docs/DESIGN_SYSTEM.md.",
            "Tailwind CSS v4 está habilitado sem Preflight para permitir uma migração controlada em coexistência com o CSS legado.",
          ],
        },
        {
          title: "Responsividade e acessibilidade",
          bullets: [
            "Containers e escala tipográfica respondem a telas pequenas sem depender de overflow horizontal.",
            "Interações preservam foco visível, targets de toque, navegação por teclado e atributos ARIA.",
            "O menu mobile fecha por item, backdrop e ESC, com restauração de foco.",
          ],
        },
        {
          title: "Motion",
          paragraphs: [
            "Motion é usado de forma pontual para a entrada Blur Fade da primeira viewport e microinterações discretas. A preferência prefers-reduced-motion remove as animações e exibe o conteúdo imediatamente.",
          ],
        },
        {
          title: "Static Export / GitHub Pages",
          paragraphs: [
            "O projeto usa output: export, imagens sem otimização dinâmica e workflow de GitHub Pages com NEXT_PUBLIC_BASE_PATH=/Curriculum-Vitae.",
            "Esta página descreve o estado técnico local atual. O repositório público pode não refletir alterações ainda não publicadas.",
          ],
        },
        {
          title: "Stack",
          paragraphs: [
            "Estado confirmado no package.json local: Next.js 16.3.1, React 19.2.8, TypeScript 5.9.3, Tailwind CSS 4.3.3, Motion 13.1.1 e Lucide React 1.33.0.",
          ],
        },
      ],
    },
  },
];

export const projectSlugs = projects.map((project) => project.slug);
