# Migração — Fase 0 e Fase 1

## Before

- Página principal em `index.html`, com `style.css` e `script.js`.
- Currículo independente em `curriculo.html`, com `curriculo.css`, impressão A4 e layout mobile.
- Frontend vanilla com Font Awesome via CDN.
- `feedback-backend/` separado, baseado em Express, MySQL e Nodemailer; o frontend usava Google Forms, não essa API.
- O repositório também continha arquivos locais não rastreados em `.idea/` e `atualizações/`.

## Preserved

- Conteúdo profissional, ordem das seções, ids, links, credenciais, contatos e tecnologias.
- Visual, classes e CSS principal existentes, incluindo breakpoints aproximados de 1050px, 820px e 640px.
- Navbar fixa, menu mobile, smooth scroll, modal de competências, mailto, Google Forms e atualização do ano.
- Currículo completo, rota dedicada, botão de retorno, impressão/salvamento em PDF, mobile, A4 e `@media print`.
- Font Awesome via CDN e tratamento `prefers-reduced-motion`.
- `feedback-backend/` e os arquivos não rastreados locais.

## Changed

- A raiz agora usa Next.js 16 com App Router, React 19 e TypeScript.
- A home foi dividida em componentes de layout, seções e UI; dados repetíveis foram tipados em `data/portfolio.ts`.
- Menu, modal, impressão e ano usam Client Components somente onde há dependência do navegador; as seções permanecem Server Components.
- O currículo foi migrado para a rota Next `/curriculo`; sem `trailingSlash`, o static export também produz `curriculo.html`. Um passo `postbuild` copia esse HTML para `out/curriculo/index.html`, preservando o acesso com e sem extensão em servidores estáticos que resolvem a rota sem extensão como diretório; nenhum componente depende de um caminho hardcoded para `/curriculo/index.html`.
- `output: "export"` foi configurado para gerar `out/`.
- Tailwind CSS foi preparado com utilities, sem o preflight, para não resetar silenciosamente o CSS atual.
- O deploy de GitHub Pages foi preparado em `.github/workflows/deploy.yml`.

## Deferred

- Redesign e Design System.
- 21st.dev, Motion, Lucide e shadcn/ui.
- Projects.
- Bento Grid, Timeline, Orbiting Skills, Floating Dock e Terminal.
- Migração do backend antigo de feedback.
- SEO avançado, schema, OpenGraph elaborado e sitemap avançado.

## Deployment

O workflow oficial do GitHub Pages publica o conteúdo de `out/` usando `actions/configure-pages`, `actions/upload-pages-artifact` e `actions/deploy-pages`. O build de CI define `NEXT_PUBLIC_BASE_PATH=/Curriculum-Vitae`, enquanto o desenvolvimento local usa a raiz `http://localhost:3000/`. O backend permanece fora do frontend estático e não é integrado ao Next.js.

Como a aplicação usa `output: "export"`, futuras implementações com `next/image` deverão utilizar uma estratégia compatível com static export, como a configuração atual `images.unoptimized: true` ou um loader estático apropriado. Isso será relevante para o Hero, screenshots e o futuro Project Showcase. Nenhuma imagem foi adicionada nesta fase.
