import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'calendar',
  name: 'Calendar',
  category: 'selection-display',
  commonality: 2,
  aliases: ['Full Calendar'],
  description:
    'A full month or week view showing dates in a grid, often supporting events and selection — distinct from a date picker.',
  whenToUse: [
    'Showing scheduled events across days (bookings, planning)',
    'When users browse and manage time, not just pick a date',
  ],
  whenNotToUse: [
    'Simply choosing a single date — use a date picker',
    'A linear agenda — a list may read better',
  ],
  relatedTo: ['date-picker', 'timeline', 'grid'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'calendar.tsx',
    content: `<div className="grid grid-cols-7">
  {cells.map((day) => (
    <div key={day.key} className="aspect-square">
      <span>{day.n}</span>
      {day.events.map((e) => <span key={e} className="dot" />)}
    </div>
  ))}
</div>`,
  },
};

const WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const LEAD = 1;
const EVENTS: Record<number, number> = { 4: 1, 11: 2, 18: 1, 19: 1, 25: 1 };

export default function Demo() {
  const cells = [...Array(LEAD).fill(null), ...Array.from({ length: 30 }, (_, i) => i + 1)];
  return (
    <div className="w-[220px] rounded-xl border border-line bg-surface3 p-2.5">
      <p className="mb-1.5 px-1 text-[12px] font-medium text-ink">November</p>
      <div className="grid grid-cols-7">
        {WEEK.map((d, i) => (
          <span key={i} className="grid h-5 place-items-center font-mono text-[9px] text-faint">
            {d}
          </span>
        ))}
        {cells.map((d, i) =>
          d === null ? (
            <span key={i} />
          ) : (
            <div
              key={i}
              className={cn(
                'flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md text-[10px]',
                d === 19 ? 'bg-accent/15 text-accent' : 'text-muted',
              )}
            >
              {d}
              <span className="flex gap-0.5">
                {Array.from({ length: EVENTS[d] ?? 0 }).map((_, k) => (
                  <span key={k} className="h-1 w-1 rounded-full bg-accent" />
                ))}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
