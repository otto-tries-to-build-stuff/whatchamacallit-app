import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'sticky-section',
  name: 'Sticky Section',
  category: 'layout-effects',
  commonality: 1,
  aliases: ['Pinned Section', 'Sticky Header'],
  description:
    'An element that locks in place once scrolled to, while content continues to scroll beneath it.',
  whenToUse: [
    'Headers, toolbars, or section labels that should stay reachable',
    'Keeping context visible during long scrolls',
  ],
  whenNotToUse: [
    'Tall sticky elements that eat the viewport on mobile',
    'When the pinned element distracts from content',
  ],
  relatedTo: ['anchor-links', 'pin-on-scroll', 'scroll-progress-bar', 'hero'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'sticky-section.tsx',
    content: `<div className="overflow-auto">
  <h3 className="sticky top-0 bg-bg/90 backdrop-blur">Recent</h3>
  {items.map((i) => <Row key={i} />)}
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="h-36 w-[220px] overflow-auto rounded-xl border border-line bg-surface3">
      {['Today', 'Yesterday', 'Last week'].map((label) => (
        <section key={label}>
          <h3 className="sticky top-0 z-10 border-b border-line bg-surface3/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
            {label}
          </h3>
          <div className="space-y-2 p-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-5 w-5 shrink-0 rounded-full bg-ink/10" />
                <span className="skel h-1.5 w-2/3" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
