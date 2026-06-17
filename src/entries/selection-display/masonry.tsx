import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'masonry',
  name: 'Masonry',
  category: 'selection-display',
  commonality: 3,
  aliases: ['Pinterest Layout', 'Brick Layout'],
  description:
    'A grid where items pack tightly to fill vertical space despite varying heights.',
  whenToUse: [
    'Mixed-height visual content (photos, pins, notes)',
    'When you want a dense, gapless, organic layout',
  ],
  whenNotToUse: [
    'Items that should align in tidy rows — use a uniform grid',
    'Ordered content where reading order matters',
  ],
  relatedTo: ['grid', 'gallery', 'bento-grid', 'card'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'masonry.tsx',
    content: `<div className="columns-3 gap-2 [&>*]:mb-2">
  {items.map((it) => (
    <div key={it.id} style={{ height: it.h }} className="rounded-lg" />
  ))}
</div>`,
  },
};

const HEIGHTS = [40, 64, 28, 52, 36, 60, 44, 30, 50];

export default function Demo() {
  return (
    <div className="w-[210px] columns-3 gap-2 [&>*]:mb-2">
      {HEIGHTS.map((h, i) => (
        <div
          key={i}
          style={{ height: h }}
          className={
            'w-full break-inside-avoid rounded-lg border border-line ' +
            (i % 3 === 0 ? 'bg-accent/12' : 'bg-surface2')
          }
        />
      ))}
    </div>
  );
}
