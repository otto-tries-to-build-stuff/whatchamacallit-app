import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'full-bleed',
  name: 'Full-bleed',
  category: 'layout-effects',
  commonality: 2,
  aliases: ['Edge-to-edge', 'Full-width'],
  description:
    'A section that spans the entire viewport width with no side margins, often used for hero images or video.',
  whenToUse: [
    'Immersive imagery, video, or colour bands that should break the column',
    'Adding rhythm between constrained content sections',
  ],
  whenNotToUse: [
    'Long-form text — line length should stay readable',
    'When edge-to-edge media hurts focus on small screens',
  ],
  relatedTo: ['hero', 'split-screen', 'marquee', 'magazine-layout'],
  source: 'svg-illustration',
  code: {
    language: 'tsx',
    filename: 'full-bleed.tsx',
    content: `<section className="w-screen relative left-1/2 -translate-x-1/2">
  {/* breaks out of the centered content column edge-to-edge */}
</section>`,
  },
};

function Line({ w }: { w: string }) {
  return <span className="block h-1.5 rounded-full bg-ink/10" style={{ width: w }} />;
}

export default function Demo() {
  return (
    <div className="w-[230px] overflow-hidden rounded-xl border border-line bg-surface3 py-3">
      <div className="space-y-1.5 px-6">
        <Line w="70%" />
        <Line w="90%" />
      </div>
      <div className="relative my-3 flex h-12 items-center justify-center border-y border-accent/30 bg-accent/[0.08]">
        <span className="font-mono text-[9px] uppercase tracking-wider text-accent">
          full-bleed band
        </span>
        <span className="absolute left-1 top-1 text-[8px] text-faint">◀</span>
        <span className="absolute right-1 top-1 text-[8px] text-faint">▶</span>
      </div>
      <div className="space-y-1.5 px-6">
        <Line w="85%" />
        <Line w="60%" />
      </div>
    </div>
  );
}
