# Teddy B Prototypes

A Next.js prototype hub for the Teddy B 2026 design system.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — homepage that lists every prototype in the registry
- `app/design-system/page.tsx` — color, type, and button reference
- `app/components/` — shared components (Button, SiteHeader)
- `app/globals.css` — design tokens (color, type scale, radii) as CSS variables
- `app/prototypes.ts` — registry of prototypes that appear on the homepage
- `app/prototypes/<slug>/page.tsx` — individual prototype routes (add as needed)

## Adding a prototype

1. Create `app/prototypes/<slug>/page.tsx`
2. Add an entry to `prototypes` in `app/prototypes.ts`

## Updating the design system

All tokens live in `app/globals.css`. Update colors, type scale, or radii
there and every component picks up the change. Source of truth:
[Figma — TED / Teddy B Design System 2026](https://www.figma.com/design/fZ5LWR0X40oq6uvIi8Bj5D/TED---Teddy-B-Design-System-2026).
