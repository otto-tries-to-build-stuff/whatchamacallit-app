import { useState, type UIEvent } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'virtual-list',
  name: 'Virtual List',
  category: 'selection-display',
  commonality: 4,
  aliases: ['Windowed List', 'Virtualised List'],
  description:
    'A list that only renders the visible items, swapping them as the user scrolls — for very long datasets.',
  whenToUse: [
    'Thousands of rows where rendering all would stall the page',
    'Long logs, chat history, or tables',
  ],
  whenNotToUse: [
    'Short lists — the extra complexity is not worth it',
    'When variable, hard-to-measure row heights complicate windowing',
  ],
  relatedTo: ['infinite-scroll', 'list', 'data-table'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'virtual-list.tsx',
    content: `const start = Math.floor(scrollTop / ROW);
const visible = rows.slice(start, start + visibleCount);

<div style={{ height: TOTAL * ROW }}>
  {visible.map((r, i) => (
    <div key={start + i} style={{ position: "absolute", top: (start + i) * ROW }} />
  ))}
</div>`,
  },
};

const TOTAL = 10000;
const ROW = 30;
const VIEW = 132;

export default function Demo() {
  const [scrollTop, setScrollTop] = useState(0);
  const start = Math.floor(scrollTop / ROW);
  const count = Math.ceil(VIEW / ROW) + 2;
  const visible = Array.from({ length: count }, (_, k) => start + k).filter((i) => i < TOTAL);

  return (
    <div className="w-[220px]">
      <div
        onScroll={(e: UIEvent<HTMLDivElement>) => setScrollTop(e.currentTarget.scrollTop)}
        style={{ height: VIEW }}
        className="overflow-auto rounded-xl border border-line bg-surface3"
      >
        <div style={{ height: TOTAL * ROW, position: 'relative' }}>
          {visible.map((i) => (
            <div
              key={i}
              style={{ position: 'absolute', top: i * ROW, height: ROW }}
              className="flex w-full items-center gap-2 border-b border-line px-3 text-[11.5px]"
            >
              <span className="font-mono text-faint">{String(i).padStart(4, '0')}</span>
              <span className="text-muted">Row item</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-1.5 text-center font-mono text-[10px] text-faint">
        rendering {visible.length} of {TOTAL.toLocaleString()}
      </p>
    </div>
  );
}
