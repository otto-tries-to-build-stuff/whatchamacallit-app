import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'hero',
  name: 'Hero',
  category: 'layout-effects',
  commonality: 1,
  aliases: ['Hero Section', 'Above-the-fold'],
  description:
    'The large top-of-page section featuring a primary headline, supporting text, and call-to-action.',
  whenToUse: [
    'Landing and marketing pages that need an immediate pitch',
    'Setting tone and directing the first action',
  ],
  whenNotToUse: [
    'Dense app screens where users come to do work',
    'When it would push important content too far down',
  ],
  relatedTo: ['full-bleed', 'aurora-background', 'split-screen', 'bento-grid'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'hero.tsx',
    content: `<section className="relative grid place-items-center py-24 text-center">
  <span className="badge">New · v2</span>
  <h1 className="text-5xl font-semibold">Build it faster</h1>
  <p>Everything you need, nothing you don't.</p>
  <div><button>Get started</button><button>Docs</button></div>
</section>`,
  },
};

export default function Demo() {
  return (
    <div className="relative w-[250px] overflow-hidden rounded-xl border border-line bg-surface3 px-5 py-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgb(var(--accent) / 0.16), transparent 70%)',
        }}
      />
      <div className="relative">
        <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
          New · v2
        </span>
        <h1 className="mt-2.5 text-[18px] font-semibold leading-tight text-ink">
          Build it faster
        </h1>
        <p className="mx-auto mt-1.5 max-w-[180px] text-[11px] leading-relaxed text-muted">
          Everything you need, nothing you don't.
        </p>
        <div className="mt-3 flex justify-center gap-2">
          <button className="rounded-lg bg-accent px-3 py-1.5 text-[11px] font-medium text-accent-ink">
            Get started
          </button>
          <button className="rounded-lg border border-line px-3 py-1.5 text-[11px] text-ink">
            Docs
          </button>
        </div>
      </div>
    </div>
  );
}
