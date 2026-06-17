import { ArrowUpRight } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'card',
  name: 'Card',
  category: 'selection-display',
  commonality: 1,
  aliases: ['Content Card', 'Tile', 'Panel'],
  description:
    'A self-contained rectangular container grouping related content — image, title, summary and actions — into a single tappable unit.',
  whenToUse: [
    'Presenting a collection of comparable items in a grid or list',
    'Bundling a preview, label and action into one clickable surface',
  ],
  whenNotToUse: [
    'Dense, sortable rows of data — use a table or data table',
    'A single block of prose — cards add needless chrome',
  ],
  relatedTo: ['grid', 'list', 'card-stack', 'hovercard'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'card-demo.tsx',
    content: `export function Demo() {
  return (
    <article className="w-[230px] overflow-hidden rounded-xl border bg-surface">
      <div className="h-20 bg-gradient-to-br from-accent/40 to-transparent" />
      <div className="space-y-1.5 p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="rounded-full border px-2 py-0.5">Guide</span>
          <span>5 min read</span>
        </div>
        <h3 className="font-medium">Naming things well</h3>
        <p className="text-sm text-muted">
          A short field guide to the words designers use for the parts of an interface.
        </p>
      </div>
    </article>
  );
}`,
  },
};

export default function Demo() {
  return (
    <article className="w-[230px] overflow-hidden rounded-xl border border-line bg-surface3 shadow-sm">
      <div className="relative h-20 bg-gradient-to-br from-accent/40 via-accent/10 to-transparent">
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>
      <div className="space-y-1.5 p-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 text-[10px] font-medium text-muted">
            Guide
          </span>
          <span className="font-mono text-[10px] text-faint">5 min read</span>
        </div>
        <h3 className="flex items-center gap-1 text-[13.5px] font-medium text-ink">
          Naming things well
          <ArrowUpRight className="h-3.5 w-3.5 text-faint" strokeWidth={2} />
        </h3>
        <p className="text-[11.5px] leading-relaxed text-muted">
          A short field guide to the words designers use for the parts of an interface.
        </p>
      </div>
    </article>
  );
}
