import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'bento-grid',
  name: 'Bento Grid',
  category: 'layout-effects',
  commonality: 2,
  aliases: ['Mosaic', 'Tile Grid'],
  description:
    'An asymmetric tiled layout with varied sizes used to showcase features, popularised by Apple.',
  whenToUse: [
    'Feature showcases where some items deserve more space',
    'Landing pages that benefit from visual rhythm',
  ],
  whenNotToUse: [
    'Uniform, comparable items — use a regular grid',
    'Long lists of records — use a table or list',
  ],
  relatedTo: ['grid', 'masonry', 'asymmetric-grid', 'hero'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'bento-grid.tsx',
    content: `<div className="grid grid-cols-3 grid-rows-2 gap-2">
  <div className="col-span-2 row-span-2" />
  <div /><div />
  <div className="col-span-2" />
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="grid h-[150px] w-[220px] grid-cols-3 grid-rows-3 gap-2">
      <div className="col-span-2 row-span-2 rounded-lg border border-accent/30 bg-accent/[0.08]" />
      <div className="rounded-lg border border-line bg-surface2" />
      <div className="rounded-lg border border-line bg-surface2" />
      <div className="rounded-lg border border-line bg-surface2" />
      <div className="col-span-2 rounded-lg border border-line bg-surface2" />
    </div>
  );
}
