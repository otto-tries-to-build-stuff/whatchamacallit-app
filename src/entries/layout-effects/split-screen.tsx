import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'split-screen',
  name: 'Split-screen Layout',
  category: 'layout-effects',
  commonality: 3,
  aliases: ['Two-pane Layout'],
  description:
    'A page divided into two side-by-side panels of comparable weight, each focused on different content.',
  whenToUse: [
    'Pairing media with a form (sign-up, onboarding)',
    'Comparing two things or showing before/after',
  ],
  whenNotToUse: [
    'Narrow screens — panels get cramped; stack them instead',
    'When one side clearly dominates — use a hero',
  ],
  relatedTo: ['full-bleed', 'hero', 'bento-grid'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'split-screen.tsx',
    content: `<div className="grid min-h-screen lg:grid-cols-2">
  <div className="bg-accent/10">{/* visual */}</div>
  <div className="grid place-items-center">{/* form */}</div>
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="grid h-[150px] w-[230px] grid-cols-2 overflow-hidden rounded-xl border border-line">
      <div
        className="relative grid place-items-center bg-accent/[0.1]"
        style={{
          background:
            'radial-gradient(80% 80% at 30% 20%, rgb(var(--accent) / 0.22), rgb(var(--surface-2)))',
        }}
      >
        <span className="font-mono text-[9px] uppercase tracking-wider text-accent">Visual</span>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-surface3 p-4">
        <span className="skel h-2 w-3/4" />
        <span className="skel h-1.5 w-full" />
        <span className="mt-1 h-6 w-16 rounded-md bg-accent" />
      </div>
    </div>
  );
}
