import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'magazine-layout',
  name: 'Magazine Layout',
  category: 'layout-effects',
  commonality: 4,
  aliases: ['Editorial Layout'],
  description:
    'A multi-column, typography-led layout inspired by print, prioritising hierarchy and reading flow.',
  whenToUse: [
    'Long-form articles, essays, and editorial features',
    'When typographic hierarchy carries the design',
  ],
  whenNotToUse: [
    'Interactive app screens or forms',
    'Narrow screens — multi-column text becomes unreadable',
  ],
  relatedTo: ['asymmetric-grid', 'full-bleed', 'split-screen'],
  source: 'svg-illustration',
  code: {
    language: 'tsx',
    filename: 'magazine-layout.tsx',
    content: `<article className="columns-2 gap-6">
  <span className="float-left text-5xl font-serif">T</span>
  <p>The opening paragraph flows into balanced columns…</p>
</article>`,
  },
};

function Lines({ n, last = '60%' }: { n: number; last?: string }) {
  return (
    <div className="space-y-1">
      {Array.from({ length: n }).map((_, i) => (
        <span
          key={i}
          className="block h-1.5 rounded-full bg-ink/10"
          style={{ width: i === n - 1 ? last : '100%' }}
        />
      ))}
    </div>
  );
}

export default function Demo() {
  return (
    <div className="w-[230px] rounded-xl border border-line bg-surface3 p-4">
      <div className="mb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-accent">Feature</div>
      <div className="mb-3 h-2.5 w-3/4 rounded-full bg-ink/25" />
      <div className="flex gap-4">
        <div className="flex-1">
          <span className="float-left mr-1 font-serif text-[26px] font-bold leading-none text-ink">
            T
          </span>
          <Lines n={5} last="40%" />
        </div>
        <div className="flex-1">
          <Lines n={5} last="70%" />
        </div>
      </div>
    </div>
  );
}
