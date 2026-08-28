@AGENTS.md

# Melissa Oliveira — brand & portfolio site

Modern rebuild of the original single-file wireframe (`_reference/melissa-ferreira-wireframe_1.html`)
into a Next.js app. Purpose: promote Melissa's brand, modeling portfolio, and social channels.

## Stack
- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` under `@theme`
- **Motion** (`motion/react`) — scroll reveals, hero parallax, lightbox, drawer
- **Lenis** — smooth scrolling (`src/components/SmoothScroll.tsx`)

## Run
- `npm run dev` — dev server
- `npm run build` — production build (type-checks)

## Architecture
- **`src/content/site.ts`** — SINGLE SOURCE OF TRUTH. All copy is bilingual `{ pt, en }`;
  resolve with `t(locale, field)`. Image/video assets, dimensions, alt text and framing live here too.
  Edit content here, not in components.
- **`src/lib/i18n.tsx`** — `LanguageProvider` + `useLocale()`. PT default, EN available; persists to localStorage.
- **`src/components/ui/`** — `Reveal` (scroll-in animation), `Button`.
- **`src/components/layout/`** — `Nav` (scroll-solidifying, mobile drawer, language toggle), `Footer`.
- **`src/components/sections/`** — one component per page section, composed in `src/app/page.tsx`.

## Assets
- Live in `public/media/` — extracted from the original inline base64 by `_reference/extract.mjs`.
- Portraits are served through `next/image` (responsive + optimized). Two UGC videos play on click.

## Design tokens (from original art direction)
offwhite `#F7F5F1` · ink `#171717` · taupe `#B8AEA3` · champagne `#C9B79C` · petrol `#1B4965`.
Serif = Cormorant Garamond (display), Sans = Inter (body).

## Conventions
- Reduced-motion is respected (Lenis disabled, transitions collapsed).
- Keep the editorial/luxury tone: generous spacing, serif headings, restrained motion.
