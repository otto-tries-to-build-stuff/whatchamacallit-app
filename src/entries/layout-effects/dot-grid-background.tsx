import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'dot-grid-background',
  name: 'Dot Grid Background',
  category: 'layout-effects',
  commonality: 3,
  aliases: ['Dotted Background', 'Polka Grid'],
  description:
    'A subtle background of evenly spaced dots, often used in technical or design-tool UIs.',
  whenToUse: [
    'Canvas and editor surfaces that benefit from a sense of grid',
    'Quiet texture behind content without distracting',
  ],
  whenNotToUse: [
    'Behind dense text where it adds visual noise',
    'When a plain surface keeps focus better',
  ],
  relatedTo: ['mesh-gradient', 'animated-noise', 'spotlight-effect'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'dot-grid.css',
    content: `.dot-grid {
  background-image: radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px);
  background-size: 16px 16px;
}`,
  },
};

export default function Demo() {
  return (
    <div
      className="relative grid h-[150px] w-[230px] place-items-center overflow-hidden rounded-xl border border-line bg-surface3"
      style={{
        backgroundImage: 'radial-gradient(rgb(var(--ink) / 0.18) 1px, transparent 1px)',
        backgroundSize: '15px 15px',
      }}
    >
      <div className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 font-mono text-[10px] text-accent shadow-lg">
        node
      </div>
    </div>
  );
}
