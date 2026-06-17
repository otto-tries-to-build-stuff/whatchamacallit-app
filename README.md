# Whatchamacallit

**A growing dictionary of interface patterns, animations & the words for them.**

You know the *thing* — the bit that slides out, the scrolly background effect, the menu
that fans open — but not what it's *called*. Whatchamacallit is a searchable, filterable
gallery of named UI components, layout patterns, and web animations. Each entry comes with
a **live working demo**, a plain-English description, common aliases, and the code on toggle.

The goal is to teach the right terminology so you stop muddling "component" with "content
fragment", and to give you a reliable mental model when designing apps.

> **Live demo:** **[whatchamacallit-app.vercel.app](https://whatchamacallit-app.vercel.app/)**

---

## What's inside

**129 entries** across **10 categories**, sorted by how common they are (essential things
appear first, obscure ones last):

| Category | Entries | What it covers |
|---|---|---|
| **Navigation** | 11 | Getting around: tabs, breadcrumbs, pagination, command palette, mega menu… |
| **Disclosure** | 11 | Show/hide on demand: modal, dropdown, tooltip, accordion, drawer, popover… |
| **Input** | 19 | Capturing data: text fields, selects, combobox, date picker, sliders, OTP… |
| **Selection & Display** | 18 | Showing collections: cards, tables, carousels, calendars, kanban, masonry… |
| **Feedback** | 11 | "Something happened": toasts, alerts, spinners, progress, skeletons, banners… |
| **Layout & Effects** | 15 | Page structure & ambient effects: hero, bento grid, aurora, mesh gradient… |
| **Micro-interactions** | 11 | Small reactive bits: button press, hover lift, ripple, like burst, confetti… |
| **Scroll Animations** | 11 | Scroll-driven: fade-in, parallax, reveal stagger, scroll progress, snap… |
| **Text Animations** | 12 | Typography in motion: split text, typewriter, count up, scramble, shimmer… |
| **Page Transitions** | 10 | Between routes/views: crossfade, slide-up, shared-element, view transition… |

Each entry records its **aliases** too — because a `Drawer` in shadcn is a `Sheet` in Radix
is an `Off-canvas` in Bootstrap. Confusion about naming is the whole reason this exists.

---

## How it works

There's **no backend and no database** — the content *is* code. Each entry is a single
`.tsx` file that exports both its metadata and a working React demo:

```
src/entries/<category>/<entry-id>.tsx
```

A new file is auto-registered via Vite's `import.meta.glob`, so adding an entry is just
dropping in a file — no central list to update. The whole thing builds to a static site.

---

## Tech stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** + **Radix** primitives for foundational components (Dialog, Popover, Tabs…)
- **Shiki** for syntax-highlighted code blocks
- **Lucide React** for icons

---

## Running locally

```bash
git clone https://github.com/otto-tries-to-build-stuff/whatchamacallit-app.git
cd whatchamacallit-app
npm install
npm run dev        # start the dev server (Vite)
```

Other scripts:

```bash
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build locally
npm run typecheck  # type-check only
```

---

## Adding an entry

1. Pick a pattern and decide its category.
2. Create `src/entries/<category>/<id>.tsx` exporting a `meta` object and a default `Demo`
   component. (See any existing entry for the shape, or `CLAUDE.md` for the full schema.)
3. Run `npm run dev` — it shows up in the grid automatically.

Demos are deliberately minimal — they're teaching artefacts, not production code.

---

## Deployment

Hosted on **Vercel** as a static site. Every push to `main` triggers an automatic deploy.
The included `vercel.json` adds an SPA rewrite so deep links (e.g. `/entry/tabs`) and page
refreshes resolve correctly.
