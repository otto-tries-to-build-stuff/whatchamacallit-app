import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'grid',
  name: 'Grid',
  category: 'selection-display',
  commonality: 2,
  aliases: ['Tile Grid'],
  description:
    'A two-dimensional arrangement of equal-sized items, typically images or cards, laid out in rows and columns.',
  whenToUse: [
    'Visual collections where items deserve equal weight (photos, products)',
    'When a scannable matrix beats a single column',
  ],
  whenNotToUse: [
    'Items of very different sizes — use masonry or a bento grid',
    'Sequential, detail-heavy records — use a list or table',
  ],
  relatedTo: ['masonry', 'gallery', 'bento-grid', 'card'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'grid.tsx',
    content: `<div className="grid grid-cols-3 gap-2">
  {items.map((it) => (
    <div key={it.id} className="aspect-square rounded-lg" />
  ))}
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="grid w-[220px] grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className={
            'aspect-square rounded-lg border border-line ' +
            (i % 4 === 0
              ? 'bg-accent/15'
              : 'bg-surface2')
          }
        />
      ))}
    </div>
  );
}
