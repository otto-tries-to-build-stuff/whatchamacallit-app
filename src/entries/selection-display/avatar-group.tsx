import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'avatar-group',
  name: 'Avatar Group',
  category: 'selection-display',
  commonality: 2,
  aliases: ['Stacked Avatars'],
  description:
    'Overlapping avatars showing a collection of people, often with a "+N more" indicator.',
  whenToUse: [
    'Showing who is involved in a space-efficient way (collaborators, attendees)',
    'Hinting at a group without listing everyone',
  ],
  whenNotToUse: [
    'When individual identity or actions per person matter — use a list',
  ],
  relatedTo: ['avatar', 'list', 'badge'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'avatar-group.tsx',
    content: `<div className="flex -space-x-2">
  {people.slice(0, 4).map((p) => (
    <Avatar key={p} className="ring-2 ring-bg" />
  ))}
  <span className="ring-2 ring-bg">+{people.length - 4}</span>
</div>`,
  },
};

const PEOPLE = [
  { i: 'A', c: 'from-accent/70 to-accent/30 text-accent-ink' },
  { i: 'B', c: 'from-sky-400/70 to-sky-400/30 text-bg' },
  { i: 'C', c: 'from-violet-400/70 to-violet-400/30 text-bg' },
  { i: 'D', c: 'from-pink-400/70 to-pink-400/30 text-bg' },
];

export default function Demo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {PEOPLE.map((p) => (
          <span
            key={p.i}
            className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br text-[13px] font-semibold ring-2 ring-surface ${p.c}`}
          >
            {p.i}
          </span>
        ))}
        <span className="grid h-10 w-10 place-items-center rounded-full bg-surface2 text-[12px] font-semibold text-muted ring-2 ring-surface">
          +5
        </span>
      </div>
    </div>
  );
}
