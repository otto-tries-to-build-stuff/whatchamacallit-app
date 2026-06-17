import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'data-table',
  name: 'Data Table',
  category: 'selection-display',
  commonality: 2,
  aliases: ['Grid', 'Data Grid'],
  description:
    'A richer table with built-in sorting, filtering, selection, pagination, and often column resizing.',
  whenToUse: [
    'Interrogating large datasets (admin panels, dashboards)',
    'When users sort, filter, and select rows',
  ],
  whenNotToUse: [
    'A few static rows — a plain table is lighter',
    'Mobile-first contexts — consider cards',
  ],
  relatedTo: ['table', 'pagination', 'checkbox', 'list'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'data-table.tsx',
    content: `const sorted = [...rows].sort((a, b) =>
  dir === "asc" ? a.score - b.score : b.score - a.score);

<th onClick={() => setDir((d) => (d === "asc" ? "desc" : "asc"))}>
  Score {dir === "asc" ? "↑" : "↓"}
</th>`,
  },
};

const BASE = [
  { name: 'Aria', score: 92 },
  { name: 'Beck', score: 78 },
  { name: 'Cleo', score: 85 },
];

export default function Demo() {
  const [dir, setDir] = useState<'asc' | 'desc'>('desc');
  const [sel, setSel] = useState<string | null>('Aria');
  const rows = [...BASE].sort((a, b) => (dir === 'asc' ? a.score - b.score : b.score - a.score));
  return (
    <table className="w-[230px] overflow-hidden rounded-xl border border-line text-[12px]">
      <thead>
        <tr className="border-b border-line bg-surface2 text-left font-mono text-[10px] uppercase tracking-wider text-faint">
          <th className="w-8 px-2 py-2" />
          <th className="px-2 py-2 font-normal">User</th>
          <th
            className="cursor-pointer select-none px-2 py-2 font-normal hover:text-ink"
            onClick={() => setDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
          >
            <span className="inline-flex items-center gap-1 text-accent">
              Score
              {dir === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            </span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-line bg-surface3">
        {rows.map((r) => (
          <tr key={r.name} className={cn(sel === r.name && 'bg-accent/[0.07]')}>
            <td className="px-2 py-2">
              <button
                role="checkbox"
                aria-checked={sel === r.name}
                onClick={() => setSel((s) => (s === r.name ? null : r.name))}
                className={cn(
                  'h-3.5 w-3.5 rounded border',
                  sel === r.name ? 'border-accent bg-accent' : 'border-line',
                )}
              />
            </td>
            <td className="px-2 py-2 text-ink">{r.name}</td>
            <td className="px-2 py-2 font-mono text-muted">{r.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
