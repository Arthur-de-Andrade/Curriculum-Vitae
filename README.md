# Portfólio digital — Arthur Andrade

Portfólio profissional de **Arthur de Andrade de Cerqueira Leite**, Desenvolvedor de Software com atuação em Java, Spring Boot, SQL, APIs REST, bancos de dados e Inteligência Artificial aplicada ao desenvolvimento.

O site apresenta:

- experiência profissional como Desenvolvedor Full Stack na ANTHARYS;
- currículo estático preparado para impressão e exportação em PDF;
- formação em Sistemas de Informação no CEFET/RJ;
- cursos e credenciais verificáveis do SENAC e da Red Hat Academy;
- competências técnicas organizadas por categoria;
- idiomas, disponibilidade e canais de contato.

## Acesso

[Visualizar o portfólio publicado](https://arthur-de-andrade.github.io/Curriculum-Vitae/)

## Tecnologias do projeto

- Next.js com App Router e exportação estática;
- React e TypeScript;
- CSS legado preservado para fidelidade visual;
- Tailwind CSS preparado como infraestrutura, sem preflight nesta fase;
- Font Awesome via CDN.

O diretório `feedback-backend` continua sendo um serviço Node/Express independente e opcional para recebimento de feedbacks. O frontend publicado mantém o Google Forms como destino do botão de feedback.

## Desenvolvimento local

Na raiz do repositório:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Em desenvolvimento o site é servido na raiz, sem o prefixo `/Curriculum-Vitae`.

## Validação e build

```bash
npm run lint
npm run typecheck
npm run build
```

O build usa `output: "export"` e gera o diretório `out/`, com HTML e assets estáticos para publicação. A rota `/curriculo` é exportada sem `trailingSlash`, mantendo o arquivo histórico `curriculo.html` no export.

## GitHub Pages

O workflow em `.github/workflows/deploy.yml` instala as dependências com `npm ci`, executa lint, typecheck e build, envia `out/` como artifact e faz deploy com as Actions oficiais do GitHub Pages. No workflow, `NEXT_PUBLIC_BASE_PATH=/Curriculum-Vitae` configura o subpath do GitHub Project Pages; localmente essa variável não é definida.

nvm use 24.14.1 -> npm run dev