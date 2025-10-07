**Fe Assessment — Frontend**

Landing page built with Next.js App Router, Tailwind CSS v4, TypeScript, shadcn/ui primitives and a small content layer typed with Zod. The page is rendered from block data and composed of reusable sections.

Figma Link -> https://www.figma.com/design/odSg7NuB3UqrYR4YtFiQnb/FE-Assessment?node-id=0-1

An already running version can be accessed here -> https://fe-assessment-lovat.vercel.app/

**Setup**

- Prereqs: Node.js 20+ (LTS recommended)
- Install: `npm i`
- Dev: `npm run dev` then visit `http://localhost:3000`
- Build: `npm run build` | Start: `npm start`
- Lint: `npm run lint`

**Architecture Overview**

- Rendering
  - Entry: `src/app/page.tsx` → `PageRenderer` loads the page by `slug`.
  - Data fetch: `src/lib/hooks/usePage.ts` uses TanStack Query to call `src/lib/fetcher.ts`.
  - API: `src/app/api/content/page/[slug]/route.ts` responds with the typed `PageDocument` (home page uses `slug = "home"`).
- Content layer
  - Schema: `src/lib/content/schema.ts` (Zod) defines a discriminated union of blocks.
  - Types: `src/types/blocks.ts` exports block and page types.
  - Data: `src/lib/content/data/home.ts` provides the home page blocks.
- Components
  - Section modules in `src/app/(components)/sections/*` implement each block (Hero, Manifesto, ClientScroller, CaseStudies, WhatWeDo, CTA, Footer).
  - UI primitives (Button, Card, ScrollArea, etc.) live in `src/components/ui/*`.
- Styling
  - Tailwind v4 with CSS variables in `src/app/globals.css` and theme extensions in `tailwind.config.ts`.
  - Global page width tokens: `max-w-page` and `min-w-page` for consistent layout bounds.

**Component Decisions & Reusability**

- Blocks are isolated presentational components receiving typed props from the content layer; they can be re-ordered or reused on other pages.
- Common tokens (spacing, colors, fonts) are centralized as CSS variables and Tailwind theme extensions for consistency.
- Hero video uses a lightweight fullscreen overlay component to avoid cross‑origin iframe constraints and to allow a different fullscreen URL than the inline preview.

**Data Shape & Mapping**

- Page structure: `PageDocument { slug, title, seo?, blocks: Block[] }`
- Blocks are discriminated by `type` and validated via Zod.
  - `hero`: id, type: 'hero', logoSrc, navItems[], cta, heading, subheading, mediaSrc, fullscreenMediaSrc? , cards[]
  - `manifesto`: paragraphs[]
  - `client-scroller`: heading, subheading, storiesButtonText, clientLogos[]
  - `case-studies`: heading, subheading, caseVideos[], buttonLeftText, buttonRightText
  - `what-we-do`: heading, approachItems[], buttonText
  - `cta`: heading, description, buttonText
  - `footer`: logoSrc, navItems[], connectItems[], contactItems[], subheading
- Mapping: `PageRenderer` switches on `block.type` and renders the corresponding section component with the exact props.

**Tailwind Tokens / Theme Choices**

- Width tokens (custom):
  - `maxWidth.page = 1512px`, `minWidth.page = 320px` → use as `max-w-page min-w-page` with `w-full mx-auto`.
- Colors (CSS variables):
  - Core: `--text-staticoncolour` (on-dark text), brand/neutral tokens in `globals.css`.
  - Shadcn palette: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--muted`, `--popover`, `--card`, `--border`, `--input`, `--ring`, `--destructive`.
  - Tailwind theme maps a subset of CSS vars to utilities (see `tailwind.config.ts`).
- Typography:
  - Families declared for body/heading/display sizes as CSS vars; Tailwind `fontFamily` extends to shortcut common styles (e.g., `font-body-regular`, `font-display-large`).
- Radius and screens:
  - `borderRadius.lg/md/sm` derived from `--radius`.
  - Screens aligned to design: `sm=320`, `md=768`, `lg=1280`.

**Known Gaps / Outstanding Items**

- To improve:
  - Potential better use of tokens in many sections that couldn't be implemented because of time
  - Lack of tests
  - Implementation of lazy loading for certain components / performance in general
  - Better SEO handling
- Some buttons won't do anything because it wasn't entirely clear what they are supposed to do. (e.g., `Talk to us`).
- Couldn't find the exact same font `Tiempos Headline; Helvetica` so decided to just let it default to another one.
- Vimeo preview UI: hide with `background=1&muted=1&autoplay=1&loop=1&playsinline=1&badge=0` on the inline preview; provide a separate fullscreen URL with controls.
- Smooth anchor scrolling: `html` has `scroll-smooth`; ensure header offsets if needed.
- Content API route: confirm `src/app/api/content/page/[slug]/route.ts` returns `home.ts` data in production builds.

**How to Add a New Section**

- Define its Zod schema in `src/lib/content/schema.ts` and add to the `PageSchema` union.
- Export a TypeScript type from `src/types/blocks.ts`.
- Create a presentational component in `src/app/(components)/sections/YourSection.tsx`.
- Map it in `PageRenderer`’s switch on `block.type`.
- Provide data for it under `src/lib/content/data/*.ts` and ensure the API route includes it.

**Fullscreen Video (Hero)**

- Inline preview uses the small iframe (muted/autoplay/loops, UI hidden via Vimeo params).
- Clicking the overlay opens a fullscreen container rendering a separate iframe URL (`fullscreenMediaSrc`), allowing controls/autoplay independent of the preview.

**Conventions**

- Keep layout bounds consistent with `w-full max-w-page min-w-page mx-auto`.
- Prefer Tailwind tokens over raw values; if a value repeats, promote to a CSS var or theme key.

**AI Usage**

- Design-to-code: Used Anima to convert the Figma design into JSX/Tailwind and scaffold shadcn/ui pieces where helpful.
- Data flow design: Used AI to help design the content flow for fetching typed blocks from a CMS (Zod schemas, React Query usage, and mapping into sections).
- Iteration: Used AI for small design fixes and autocompletion during implementation.
