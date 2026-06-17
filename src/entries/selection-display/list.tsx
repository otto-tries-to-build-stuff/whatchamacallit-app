import { ChevronRight } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'list',
  name: 'List',
  category: 'selection-display',
  commonality: 1,
  aliases: ['Item List'],
  description: 'A vertical sequence of items, plain text or with avatars and icons.',
  whenToUse: [
    'Scannable sequences of similar items (settings, contacts, files)',
    'When order or grouping matters more than side-by-side comparison',
  ],
  whenNotToUse: [
    'Comparing structured fields across rows — use a table',
    'Visual, image-led collections — use cards or a grid',
  ],
  relatedTo: ['table', 'card', 'tree-view', 'virtual-list'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'list.tsx',
    content: `<ul className="divide-y">
  {people.map((p) => (
    <li key={p.name} className="flex items-center gap-3 px-3 py-2">
      <Avatar initials={p.initials} />
      <span>{p.name}</span>
    </li>
  ))}
</ul>`,
  },
};

const PEOPLE = [
  { name: 'Ada Lovelace', role: 'Mathematician', i: 'A' },
  { name: 'Alan Turing', role: 'Logician', i: 'T' },
  { name: 'Grace Hopper', role: 'Engineer', i: 'G' },
];

export default function Demo() {
  return (
    <ul className="w-[240px] divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface3">
      {PEOPLE.map((p) => (
        <li key={p.name} className="flex items-center gap-2.5 px-3 py-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-surface2 text-[11px] font-semibold text-muted">
            {p.i}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-medium text-ink">{p.name}</p>
            <p className="truncate font-mono text-[10px] text-faint">{p.role}</p>
          </div>
          <ChevronRight className="h-4 w-4 text-faint" />
        </li>
      ))}
    </ul>
  );
}
