import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'table',
  name: 'Table',
  category: 'selection-display',
  commonality: 1,
  aliases: ['Data Grid'],
  description: 'A grid of rows and columns presenting tabular data with column headers.',
  whenToUse: [
    'Comparing the same fields across many records',
    'Dense, structured data (numbers, statuses, dates)',
  ],
  whenNotToUse: [
    'Narrow mobile screens — consider stacked cards',
    'Visual collections — use a grid or gallery',
  ],
  relatedTo: ['data-table', 'list', 'kanban-board'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'table.tsx',
    content: `<table>
  <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
  <tbody>
    {rows.map((r) => (
      <tr key={r.name}><td>{r.name}</td><td>{r.role}</td><td>{r.status}</td></tr>
    ))}
  </tbody>
</table>`,
  },
};

const ROWS = [
  { name: 'Invoice #821', amount: '$1,200', status: 'Paid' },
  { name: 'Invoice #822', amount: '$840', status: 'Due' },
  { name: 'Invoice #823', amount: '$2,310', status: 'Paid' },
];

export default function Demo() {
  return (
    <table className="w-[250px] overflow-hidden rounded-xl border border-line text-[12px]">
      <thead>
        <tr className="border-b border-line bg-surface2 text-left font-mono text-[10px] uppercase tracking-wider text-faint">
          <th className="px-3 py-2 font-normal">Invoice</th>
          <th className="px-3 py-2 font-normal">Amount</th>
          <th className="px-3 py-2 font-normal">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-line bg-surface3">
        {ROWS.map((r) => (
          <tr key={r.name}>
            <td className="px-3 py-2 text-ink">{r.name}</td>
            <td className="px-3 py-2 font-mono text-muted">{r.amount}</td>
            <td className="px-3 py-2">
              <span
                className={
                  r.status === 'Paid'
                    ? 'rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] text-accent'
                    : 'rounded-full bg-ink/10 px-1.5 py-0.5 text-[10px] text-muted'
                }
              >
                {r.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
