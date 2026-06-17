import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'asymmetric-grid',
  name: 'Asymmetric Grid',
  category: 'layout-effects',
  commonality: 3,
  aliases: ['Broken Grid'],
  description:
    'A grid layout that deliberately breaks regular alignment for visual interest, mixing column widths and offsets.',
  whenToUse: [
    'Editorial or portfolio layouts that want energy and rhythm',
    'When a perfectly even grid feels too static',
  ],
  whenNotToUse: [
    'Comparable items that should align — use a regular grid',
    'Data-dense UIs where alignment aids scanning',
  ],
  relatedTo: ['bento-grid', 'masonry', 'magazine-layout', 'grid'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'asymmetric-grid.tsx',
    content: `<div className="grid grid-cols-6 gap-2">
  <div className="col-span-4" />
  <div className="col-span-2 row-span-2" />
  <div className="col-span-2 mt-4" />
  <div className="col-span-2" />
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="grid h-[150px] w-[220px] grid-cols-6 grid-rows-3 gap-2">
      <div className="col-span-4 rounded-lg border border-line bg-surface2" />
      <div className="col-span-2 row-span-2 rounded-lg border border-accent/30 bg-accent/[0.08]" />
      <div className="col-span-2 mt-3 rounded-lg border border-line bg-surface2" />
      <div className="col-span-2 rounded-lg border border-line bg-surface2" />
      <div className="col-span-3 -mt-2 rounded-lg border border-line bg-surface2" />
      <div className="col-span-3 rounded-lg border border-line bg-surface2" />
    </div>
  );
}
