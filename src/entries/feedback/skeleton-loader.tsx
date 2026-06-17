import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'skeleton-loader',
  name: 'Skeleton Loader',
  category: 'feedback',
  commonality: 2,
  aliases: ['Skeleton Screen', 'Placeholder'],
  description:
    'A grey blocky preview of the layout shown while real content loads, preserving structure.',
  whenToUse: [
    'Content loads that take a moment but whose shape is known',
    'Reducing perceived wait and layout shift',
  ],
  whenNotToUse: [
    'Very fast loads — a flash of skeleton looks janky',
    'Unknown layout — a spinner is simpler',
  ],
  relatedTo: ['spinner', 'progress-bar', 'card'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'skeleton-loader.tsx',
    content: `<div className="animate-pulse space-y-3">
  <div className="h-20 rounded-lg bg-surface" />
  <div className="h-3 w-2/3 rounded bg-surface" />
  <div className="h-3 w-1/2 rounded bg-surface" />
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="w-[220px] animate-pulse space-y-3 rounded-xl border border-line bg-surface3 p-3">
      <div className="h-20 rounded-lg bg-ink/[0.07]" />
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-full bg-ink/[0.07]" />
        <div className="flex-1 space-y-1.5">
          <div className="h-2.5 w-2/3 rounded bg-ink/[0.07]" />
          <div className="h-2.5 w-1/3 rounded bg-ink/[0.07]" />
        </div>
      </div>
    </div>
  );
}
