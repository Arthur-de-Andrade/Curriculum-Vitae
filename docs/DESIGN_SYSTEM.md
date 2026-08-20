# Design System — Portfólio

## Visual Direction

O portfólio usa uma linguagem dark-first, editorial e técnica: superfícies quase pretas, tipografia precisa, bordas discretas e uma única cor de ação dominante. A referência é a clareza de ferramentas de desenvolvimento modernas, com personalidade suficiente para não parecer um currículo corporativo ou um template de SaaS.

O azul elétrico é a cor primária. O violeta aparece apenas como acento pontual em credenciais e detalhes de apoio; verde é reservado a estados de sucesso. Gradientes, iluminação e grid existem somente como textura de fundo muito sutil.

O currículo em `/curriculo` é uma experiência separada. Ele continua usando `curriculo.css`, fundo claro, layout A4 e regras de impressão próprias.

## Colors

Os tokens ficam em `app/globals.css` com o prefixo `--ds-` e são expostos para utilities do Tailwind v4 via `@theme inline`.

| Token | Valor | Uso |
| --- | --- | --- |
| `--ds-background` | `#08090B` | Fundo principal do portfólio |
| `--ds-foreground` | `#F5F7FA` | Texto principal e títulos |
| `--ds-surface` | `#0F1115` | Cards e superfícies base |
| `--ds-surface-hover` | `#141820` | Estado hover/foco de superfícies |
| `--ds-elevated` | `#191D25` | Modal e superfícies elevadas |
| `--ds-muted` | `#737B88` | Texto auxiliar de menor prioridade |
| `--ds-muted-foreground` | `#A3AAB6` | Corpo de texto e descrições |
| `--ds-border` | `rgba(255,255,255,.10)` | Borda padrão |
| `--ds-border-subtle` | `rgba(255,255,255,.07)` | Divisores e bordas de baixa ênfase |
| `--ds-border-strong` | `rgba(255,255,255,.17)` | Ações secundárias e modal |
| `--ds-primary` | `#7EA7FF` | Ação principal, links e destaque |
| `--ds-primary-hover` | `#A4C0FF` | Hover da ação primária |
| `--ds-primary-foreground` | `#07101E` | Texto sobre a ação primária |
| `--ds-accent` | `#B49AFF` | Acento violeta controlado |
| `--ds-success` | `#5ED5A0` | Estado profissional atual/sucesso |
| `--ds-destructive` | `#FF7184` | Token reservado para ações destrutivas |

## Typography

- `Geist` via `next/font/google` é a família sans única para UI, títulos e texto.
- `Geist Mono` via `next/font/google` é usada em labels técnicos, datas, tags, credenciais e pequenos metadados.
- `--ds-text-display`: `clamp(3rem, 8vw, 7.5rem)` — preparado para o futuro Hero.
- `--ds-text-h1`: `clamp(2.5rem, 6vw, 4.5rem)`.
- `--ds-text-h2`: `clamp(2rem, 4vw, 3rem)`.
- `--ds-text-h3`: `clamp(1.2rem, 2vw, 1.5rem)`.
- Corpo padrão: `1rem`.
- Texto auxiliar: `0.875rem`.
- Label: `0.75rem`.
- Mono técnico: `0.8125rem`.

A escala usa `clamp()` para preservar hierarquia entre 320px e telas grandes sem depender de tamanhos arbitrários por seção.

## Spacing

A escala base é de 4px: `--ds-space-1` a `--ds-space-24`, de `0.25rem` a `6rem`. Os componentes usam essa escala e os equivalentes responsivos do Tailwind v4 (`px-4`, `sm:px-6`, `lg:px-8`).

O `Container` limita o conteúdo a `max-w-7xl` (80rem/1280px) e mantém gutters horizontais consistentes. Seções usam `92px` verticalmente em desktop e `68px` em telas pequenas.

## Radius

- small: `6px` (`--ds-radius-small`), para controles compactos e códigos;
- medium: `10px` (`--ds-radius-medium`), para botões e controles;
- large: `14px` (`--ds-radius-large`), para superfícies e modais;
- pill: `999px` (`--ds-radius-pill`), somente para badges, tags e feedback.

## Borders

Bordas são o principal mecanismo de separação da UI dark. A regra padrão é `--ds-border`; divisores usam `--ds-border-subtle`; ações secundárias e modais podem usar `--ds-border-strong`. Sombras são reservadas para superfícies elevadas e estados hover.

## Surfaces

`Surface` fornece a base semântica de uma superfície: borda, raio e `--ds-surface`. `surface-interactive` acrescenta hover discreto com mudança de superfície, borda e pequeno deslocamento vertical. Cards continuam sendo aplicados apenas onde o conteúdo se beneficia de agrupamento visual.

## Buttons

`Button` e `ButtonLink` compartilham as variantes:

- `primary`: ação principal em azul;
- `secondary`: ação contornada, transparente e de baixo ruído;
- `ghost`: ação de menor ênfase, sem borda persistente.

Tamanhos disponíveis: `default`, `large` e `icon`. Todos têm alvo mínimo confortável, `focus-visible`, estado disabled e transições curtas de cor/borda/posição.

## Tags

`Badge` é a base de tags técnicas. A variante neutra é a padrão e deve ser usada para tecnologias; `success` e `accent` são reservadas para estado ou credencial. Tecnologias não recebem uma cor própria por item.

## Section structure

`Section` padroniza o elemento de seção, espaçamento vertical, `scroll-margin-top` e o `Container` interno. `Container` centraliza largura e gutters. `SectionHeading` mantém o padrão de kicker técnico, título e descrição opcional. A ordem e os ids existentes da home permanecem inalterados nesta fase.

## Motion principles

As microinterações ficam limitadas a hover/focus, transições de cor e borda, pequeno `translateY` e entrada curta do modal. Não há scroll animation, parallax, partículas, cursor follower ou reveals. Toda transição nova é neutralizada em `prefers-reduced-motion: reduce`.

## Accessibility principles

- foco de teclado é sempre visível e usa o anel azul `--ds-focus-ring`;
- targets de navegação, menu mobile, feedback e fechamento do modal respeitam tamanho mínimo confortável;
- o modal mantém `role="dialog"`, `aria-modal`, rótulos, fechamento por ESC, clique no backdrop e restauração do foco ao elemento que o abriu;
- ícones decorativos continuam com `aria-hidden="true"`;
- contraste é priorizado sobre efeitos e nenhuma informação depende somente de cor;
- `overflow-x` é contido no portfólio e a escala tipográfica foi preparada para mobile.

## Do

- usar tokens em vez de inserir cores ad hoc;
- preferir borda e contraste de superfície a sombras fortes;
- manter azul como ação principal e violeta como acento raro;
- usar `Container`, `Section`, `SectionHeading`, `Surface`, `Button` e `Badge` antes de criar variações novas;
- preservar conteúdo, semântica, ids e comportamento existentes.

## Don't

- não adicionar neon, arco-íris, partículas, blobs grandes ou glassmorphism dominante;
- não criar um card para cada bloco sem uma razão semântica;
- não usar cor diferente para cada tecnologia;
- não importar Preflight nesta migração gradual;
- não aplicar os tokens dark ao documento impresso de `/curriculo`;
- não adicionar 21st.dev, shadcn/ui, Lucide ou Motion nesta fase.
