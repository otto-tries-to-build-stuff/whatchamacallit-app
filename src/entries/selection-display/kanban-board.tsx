import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'kanban-board',
  name: 'Kanban Board',
  category: 'selection-display',
  commonality: 3,
  aliases: ['Board', 'Swimlane View'],
  description:
    'Columns of cards representing items moving through stages of a workflow, dragged between columns.',
  whenToUse: [
    'Visualising work moving through stages (backlog → doing → done)',
    'When status is the primary axis of organisation',
  ],
  whenNotToUse: [
    'Many fields per item to compare — use a data table',
    'Simple checklists — a list is enough',
  ],
  relatedTo: ['drag-and-drop', 'card', 'timeline', 'table'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'kanban-board.tsx',
    content: `<div className="flex gap-3">
  {columns.map((col) => (
    <div key={col.title} className="w-40 rounded-lg bg-surface p-2">
      <h4>{col.title}</h4>
      {col.cards.map((c) => <Card key={c.id} draggable>{c.title}</Card>)}
    </div>
  ))}
</div>`,
  },
};

const COLUMNS = [
  { title: 'To do', n: 3, cards: ['Spec API', 'Wireframes'] },
  { title: 'Doing', n: 1, cards: ['Auth flow'], accent: true },
  { title: 'Done', n: 5, cards: ['Setup'] },
];

export default function Demo() {
  return (
    <div className="flex gap-2">
      {COLUMNS.map((col) => (
        <div key={col.title} className="w-[72px] rounded-lg border border-line bg-surface2 p-1.5">
          <div className="mb-1.5 flex items-center justify-between px-0.5">
            <span className="font-mono text-[9px] uppercase tracking-wide text-faint">
              {col.title}
            </span>
            <span className="font-mono text-[9px] text-faint">{col.n}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {col.cards.map((c) => (
              <div
                key={c}
                className={`rounded-md border bg-surface3 p-1.5 text-[9.5px] leading-tight text-muted ${
                  col.accent ? 'border-accent/40' : 'border-line'
                }`}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
