# Whatchamacallit

*A growing dictionary of interface patterns, animations & the words for them.*

A personal learning reference: a searchable, filterable gallery of named UI components, layout patterns, and web animations — each with a live working demo, a plain-English description, common aliases, and code on toggle.

The whole point is in the name. You know the *thing* — the bit that slides out, the scrolly background effect, the menu that fans open — but not what it's *called*. Whatchamacallit teaches the right terminology so you stop muddling "component" with "content fragment", and gives you a reliable mental model when designing apps.

---

## Tech stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** primitives where they save time on foundational components (Dialog, Popover, Tabs, etc.)
- **Lucide React** for icons
- Vite's `import.meta.glob` for auto-registering entry files

**No backend.** The content *is* code — each entry is a `.tsx` file exporting both its metadata and a working React demo. A database can't store "a working tooltip component," so entries live in source and the whole thing builds to a static site (deployable to Vercel, Netlify, or Cloudflare Pages).

If favourites or cross-device state are wanted later, add localStorage first (still no backend); Supabase is only justified if cross-device sync becomes necessary.

---

## Content principles

1. **Order by commonality, not alphabetically.** Each entry has a `commonality` value (1 = essential / used everywhere, 5 = obscure / niche). The grid sorts ascending — common things appear first.
2. **Plain English over jargon.** Descriptions should be one sentence a non-developer could understand. Save terminology nuance for the `aliases` and `relatedTo` fields.
3. **Show, don't just tell.** Every entry has a live working demo — not a screenshot. If the concept is purely spatial (parallax, bento grid), use an SVG illustration instead of forcing an interactive demo.
4. **Aliases matter.** A `Drawer` in shadcn is a `Sheet` in Radix is `Off-canvas` in Bootstrap. Capture these — confusion about naming is the whole reason this library exists.
5. **Code is collapsed by default.** Visual first; code on toggle.
6. **Keep demos minimal.** A demo is a *teaching artefact*, not production code. Strip it to the smallest version that illustrates the concept.
7. **A little wit is on-brand.** The product is called Whatchamacallit for a reason. UI copy — search placeholder, empty states, section labels — can carry a light, knowing tone. Never at the expense of clarity, and never in the definitions themselves (those stay plain and accurate).

---

## Taxonomy

Categories in display order (most common first). The full content catalogue with one-line descriptions for every entry lives in **`content-seed.md`** — that file is the source of truth for what to build and where it sits.

1. **Navigation** — getting around the app: tabs, breadcrumbs, pagination, hamburger menu, sidebar, bottom nav, stepper, anchor links, command palette, mega menu, navigation rail
2. **Disclosure** — show/hide on demand: modal dialog, dropdown menu, tooltip, accordion, popover, drawer / sheet, disclosure widget, context menu, bottom sheet, hovercard, toggle tip
3. **Input** — capturing data from users: text field, textarea, checkbox, radio group, select, toggle, combobox, autocomplete, slider, date picker, form field, segmented control, file uploader, number input, OTP input, range slider, time picker, rating, colour picker
4. **Selection & Display** — showing content collections: card, list, table, avatar, badge, tag, grid, carousel, data table, calendar, avatar group, gallery, timeline, tree view, kanban board, masonry, infinite scroll, virtual list
5. **Feedback** — telling the user something happened: toast, inline alert, spinner, progress bar, skeleton loader, empty state, confirmation dialog, dot indicator, error state, banner, notification centre
6. **Layout & Effects** — page-level structural patterns and ambient effects (including backgrounds): hero, sticky section, bento grid, full-bleed, split-screen, marquee, aurora background, mesh gradient, dot grid background, card stack, asymmetric grid, particle background, spotlight effect, magazine layout, animated noise
7. **Micro-interactions** — small reactive animations tied to single elements: button press, hover lift, focus ring, ripple, icon morph, pulse, like burst, drag-and-drop, shake, magnetic button, confetti
8. **Scroll Animations** — triggered by or linked to scroll: fade-in on view, parallax scrolling, reveal stagger, scroll progress bar, sticky scrub, scroll-linked animation, horizontal scroll section, scroll-triggered counter, scroll-snap, pin on scroll, scroll reveal mask
9. **Text Animations** — typography in motion: split text, typewriter, count up, blur in, gradient shimmer, marquee text, scramble, rotating words, text mask reveal, wavy text, letter drop, variable font animation
10. **Page Transitions** — effects between routes or major views: crossfade, route transition, modal slide-up, shared-element transition, view transition, stack transition, curtain transition, mask transition, flip transition, cube transition

Note: items can legitimately span categories (parallax is both a scroll animation and a layout effect; toast could be feedback or disclosure). File by primary use. When in doubt, defer to `content-seed.md`.

---

## Entry schema

Every entry is one file at `src/entries/<category>/<entry-id>.tsx`. It exports both metadata and a default Demo component.

```typescript
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'tabs',
  name: 'Tabs',
  category: 'navigation',
  commonality: 1,                       // 1 = essential, 5 = obscure
  aliases: ['Tab Bar', 'Tabbed Interface', 'Segmented Nav'],
  description: 'A horizontal strip of labels that switches between mutually exclusive sibling views, only one visible at a time.',
  whenToUse: [
    'When you have 2–7 sibling views and only one is relevant at a time.',
  ],
  whenNotToUse: [
    'For more than ~7 options — use a sidebar or select instead.',
    'For sequential steps — use a wizard or stepper instead.',
  ],
  relatedTo: ['segmented-control', 'navigation-menu', 'accordion'],
  source: 'hand-coded',                 // 'hand-coded' | 'reactbits' | 'shadcn' | 'svg-illustration' | 'lottie'
  code: {
    language: 'tsx',                    // 'tsx' | 'jsx' | 'css' | 'html'
    filename: 'Tabs.tsx',               // shown in the code block header
    content: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="details">...</TabsContent>
</Tabs>`,
  },
};

export default function Demo() {
  // The actual live working demo.
  return <div>...</div>;
}
```

---

## File structure

```
/
├── CLAUDE.md                  # this file
├── content-seed.md            # the catalogue of entries with descriptions
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    │   ├── EntryCard.tsx         # individual card with demo + meta
    │   ├── EntryGrid.tsx         # the gallery
    │   ├── EntryDetail.tsx       # expanded detail view
    │   ├── CategoryFilter.tsx    # sidebar / chip filters
    │   ├── SearchBar.tsx         # filter by name + alias
    │   ├── CodeBlock.tsx         # filename header, copy button, syntax highlight
    │   └── ThemeToggle.tsx
    ├── entries/
    │   ├── index.ts              # auto-imports via import.meta.glob
    │   ├── navigation/
    │   ├── disclosure/
    │   ├── input/
    │   ├── selection-display/
    │   ├── feedback/
    │   ├── layout-effects/
    │   ├── micro-interactions/
    │   ├── scroll-animations/
    │   ├── text-animations/
    │   └── page-transitions/
    └── lib/
        ├── types.ts              # Entry, Category, etc.
        └── utils.ts
```

---

## Asset strategy

Different component types need different demo approaches. Use the right one for the job.

### A. Hand-coded React (default — ~60% of entries)
For all interactive UI components: tabs, dropdowns, modals, accordions, carousels, sliders, etc. Write minimal working React. Aim for the smallest version that clearly illustrates the pattern.

### B. ReactBits via jsrepo CLI
Best for fancy text animations, generative backgrounds, and effects that would take days to build from scratch. MIT + Commons Clause license — the CLI copies the source into your project so you own the code.

```bash
npx jsrepo add https://reactbits.dev/tailwind/TextAnimations/SplitText
npx jsrepo add https://reactbits.dev/tailwind/Backgrounds/Aurora
npx jsrepo add https://reactbits.dev/tailwind/Animations/AnimatedList
```

Best for: SplitText, BlurText, CountUp, ScrambleText, Aurora, Hyperspeed, Squares, Threads.

### C. shadcn/ui primitives
For foundational components (Dialog, Popover, Tabs, Accordion, Dropdown Menu, Tooltip, Sheet, Command). Install per-component:

```bash
npx shadcn@latest add dialog popover tabs accordion dropdown-menu
```

Then style around them rather than rebuilding from scratch. Each shadcn install also gives you the Radix primitive underneath, which is the canonical accessible implementation.

### D. SVG illustrations (for spatial concepts)
Some patterns are about *spatial relationships*, not interaction: parallax depth, bento grid, full-bleed, hero layout. A labelled static SVG explains the concept better than a forced interactive demo. Hand-code the SVG or build in Figma and export.

### E. Lottie or short video clips
For page-level effects that don't fit inline (route transitions, shared-element transitions, app-level page flips):
- **lottiefiles.com** — free, searchable library. Use the `lottie-react` package to render.
- Or record a short webm / mp4 of the effect (QuickTime, ScreenToGif) and embed as a `<video>`.

### Icons
Always Lucide React (`lucide-react`). Use for category badges, card affordances, UI throughout.

---

## Visual design

### Reference concept (directional, not prescriptive)

A design concept exists for vibe and direction — treat it as a mood board, not a spec. The *intent* is what matters; exact pixel values, font choices, and spacing tokens are at your discretion.

Concept link: https://claude.ai/design/p/ee1cb03d-1241-4240-ba0a-ee8d53310da9?file=Idiom+Library.html&via=share
(The mockup is labelled "Idiom Library" as a placeholder — the product is Whatchamacallit.)

### The intent (binding)

- **Dark mode default**, with a light mode toggle in the header.
- **Chartreuse / lime green accent** against near-black — used sparingly for active states, badges, progress, "live" indicators, the logo mark, and selected items.
- **Preview-dominant cards** — each card is mostly its live demo; the metadata (name, aliases, category badge) sits in a compact strip below. The demos are the hero; the surrounding chrome stays quiet.
- **Monospace for metadata** — aliases, category badges, breadcrumbs, code, section labels (WHEN TO USE, RELATED TO, etc.). Sans-serif for headings and body.
- **Two-column grid** of cards on desktop, single column on mobile, with generous spacing.
- **Developer-tool feel** — restrained, precise, in the spirit of Linear / Vercel / Raycast.

### Suggested surfaces (extend or simplify as needed)

- **Header**: logo mark + product name + version chip (e.g. `v0.4`), centred search input with ⌘K shortcut hint, theme toggle (moon/sun).
- **Page header**: "All Components" title, tagline, sort control on the right ("Sort: Popular / A–Z / Newest").
- **Card**: large demo preview area, then name + small category badge with coloured dot + a.k.a. line in mono below.
- **Detail view** (when a card is opened): breadcrumb at top, large hero demo with a "live demo" pill, then category badge, name, aliases, description, two columns of WHEN TO USE / WHEN NOT TO USE bullets, RELATED TO chips, a collapsible "Show code" block with language tag, filename header, syntax highlighting, and copy button.
- Optional affordances on the detail view (favourite ♥, share) can be present as visual UI; persistent favourites can be deferred.

### Design tokens (starting estimates — refine as you go)

Treat these as a sensible starting palette, not a final spec.

- **Background**: very dark neutral, around `#0A0A0A` / `#0B0B0B`
- **Surface (cards)**: slightly lifted, around `#141414`
- **Border / divider**: subtle, around `#262626`
- **Text primary**: `#FAFAFA`
- **Text secondary / muted**: around `#8A8A8A`
- **Accent (chartreuse)**: around `#C4F542` — a yellow-green, slightly muted, not neon
- **Font (UI)**: a clean grotesque sans (Inter, Geist, or similar)
- **Font (mono)**: a paired monospace (Geist Mono, JetBrains Mono, or similar) — used for aliases, badges, code, section labels
- **Card radius**: ~12–16px; badge radius: pill; button radius: ~8px
- **Motion**: 150–250ms transitions, ease-out for hover, spring for card expansion

---

## Workflow for adding entries

1. Pick a component or pattern from `content-seed.md`. Default to starting with `commonality: 1` items in each category to build the spine of the library before getting fancy.
2. Decide its `source` type (A–E above).
3. Create `src/entries/<category>/<id>.tsx` with the `meta` export and `Demo` default export.
4. The `import.meta.glob` registry picks it up automatically — no central registration needed.
5. Run `npm run dev` and verify it renders in the grid.
6. Iterate on description, whenToUse, aliases. Keep each ≤ 1–2 sentences.

---

## Setup

```bash
# initial scaffold (one-time)
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion lucide-react clsx tailwind-merge
npx tailwindcss init -p
npx shadcn@latest init

# day-to-day
npm run dev
npm run build
```

---

## Out of scope (for now)

- Backend or database — content lives in source as `.tsx` files
- User accounts
- Cross-device sync of favourites or session state (localStorage is fine if/when needed)
- In-place code editing / live sandboxes (code is shown as text only)
- Mobile-optimised demos (desktop-first; revisit later)
- Production accessibility audit (shadcn primitives give a strong baseline)
