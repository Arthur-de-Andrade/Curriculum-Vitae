# Selected Work / Projects

## Projetos selecionados

A home apresenta exatamente três projetos reais, em uma lista editorial entre as seções “Sobre mim” e “Experiência profissional”:

- **Faturamento** — projeto profissional, descrito somente com informações públicas e seguras.
- **Sistema de Biblioteca Escolar** — projeto acadêmico baseado no repositório público e nos arquivos SQL/diagramas do projeto.
- **Developer Portfolio** — projeto pessoal descrito a partir do working tree local atual.

## Fontes de verdade

- **Faturamento:** informações fornecidas e conteúdo profissional já público no portfólio. O código é proprietário e não há screenshots ou dados internos publicados.
- **Sistema de Biblioteca Escolar:** [repositório público no GitHub](https://github.com/Arthur-de-Andrade/biblioteca_BD), incluindo README, MINIMUNDO, scripts SQL e diagramas originais.
- **Developer Portfolio:** código e documentação do working tree local. O repositório público pode estar defasado em relação às alterações ainda não publicadas.

## Privacidade do trabalho profissional

O case não expõe código, endpoints, tabelas internas, clientes, credenciais, URLs privadas, regras comerciais confidenciais ou métricas. Seu preview é uma composição abstrata, explicitamente editorial, e não representa uma tela real do produto.

## Assets e previews

- Os diagramas originais da Biblioteca foram preservados em `public/projects/biblioteca/` como `modelo-conceitual.png` e `modelo-fisico.png`.
- O preview do portfólio é uma cópia da screenshot local final em `public/projects/portfolio/preview.png`; a página não depende de arquivos dentro de `docs/` em runtime.
- O preview do trabalho profissional é CSS/SVG-like, sem screenshot fabricada do sistema.

## Rotas

As três páginas compartilham a rota dinâmica `/projects/[slug]` e são enumeradas por `generateStaticParams()` para o static export:

- `/projects/bigviewer-faturamento`
- `/projects/biblioteca-escolar`
- `/projects/developer-portfolio`

Os links internos usam a infraestrutura existente do projeto e permanecem compatíveis com `basePath`.

## Interação

Cada projeto é um link completo navegável por teclado. Em telas com hover, o preview entra de forma curta e não participa do layout. Em telas touch/mobile, o preview fica inline para que nenhuma informação dependa de hover.

## Adicionando projetos futuros

Novos projetos devem ser adicionados somente após confirmar sua fonte de verdade, escopo de publicação e autorização dos assets. O registro tipado em `data/projects.ts` deve continuar sendo a única fonte da listagem e das páginas de case. Cada novo slug precisa ser incluído automaticamente no conjunto retornado por `projectSlugs` e ter preview, alt text, conteúdo factual e navegação anterior/próxima revisados.
