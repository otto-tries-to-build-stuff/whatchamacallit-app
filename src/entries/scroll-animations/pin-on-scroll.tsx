import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'pin-on-scroll',
  name: 'Pin on Scroll',
  category: 'scroll-animations',
  commonality: 3,
  aliases: ['Sticky Pin'],
  description:
    'An element pins to the viewport while a parent section scrolls past, then releases at the section end.',
  whenToUse: [
    'Keeping a label, image, or summary fixed beside scrolling detail',
    'Two-column layouts where one side stays put',
  ],
  whenNotToUse: [
    'Short sections where pinning is imperceptible',
    'When the pinned item would cover important content',
  ],
  relatedTo: ['sticky-section', 'sticky-scrub', 'anchor-links'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'pin-on-scroll.tsx',
    content: `<section className="relative flex gap-4">
  <aside className="sticky top-4 h-fit">{summary}</aside>
  <div className="flex-1">{longContent}</div>
</section>`,
  },
};

export default function Demo() {
  return (
    <div className="h-[150px] w-[220px] overflow-y-auto rounded-xl border border-line bg-surface2 p-2.5">
      <div className="flex gap-2.5">
        <aside className="sticky top-0 h-fit w-20 shrink-0 rounded-lg border border-accent/40 bg-accent/[0.08] p-2">
          <div className="mb-1.5 h-1.5 w-3/4 rounded-full bg-accent/50" />
          <div className="h-1.5 w-1/2 rounded-full bg-accent/30" />
          <p className="mt-2 font-mono text-[8px] uppercase text-accent">pinned</p>
        </aside>
        <div className="flex-1 space-y-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-2 rounded-full bg-ink/[0.07]" style={{ width: `${65 + (i % 3) * 12}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
