import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'date-picker',
  name: 'Date Picker',
  category: 'input',
  commonality: 2,
  aliases: ['Calendar Picker'],
  description: 'A calendar-style overlay for selecting a date or date range.',
  whenToUse: [
    'Picking a specific day where a calendar aids context',
    'Bookings, deadlines, scheduling',
  ],
  whenNotToUse: [
    'A rough or well-known date — a plain text field can be faster',
    'Showing many events — use a full calendar',
  ],
  relatedTo: ['calendar', 'time-picker', 'form-field', 'select'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'date-picker.tsx',
    content: `<div className="grid grid-cols-7 gap-1">
  {days.map((d) => (
    <button key={d} aria-pressed={d === selected}
      onClick={() => setSelected(d)}>{d}</button>
  ))}
</div>`,
  },
};

const WEEK = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const LEAD = 5; // June 2026 starts on a Monday-index offset

export default function Demo() {
  const [selected, setSelected] = useState(12);
  const cells = [...Array(LEAD).fill(null), ...Array.from({ length: 30 }, (_, i) => i + 1)];
  return (
    <div className="w-[210px] rounded-xl border border-line bg-surface3 p-3">
      <div className="mb-2 flex items-center justify-between">
        <ChevronLeft className="h-4 w-4 text-faint" />
        <span className="text-[12px] font-medium text-ink">June 2026</span>
        <ChevronRight className="h-4 w-4 text-faint" />
      </div>
      <div className="mb-1 grid grid-cols-7 gap-0.5">
        {WEEK.map((d, i) => (
          <span key={i} className="grid h-5 place-items-center font-mono text-[9px] text-faint">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((d, i) =>
          d === null ? (
            <span key={i} />
          ) : (
            <button
              key={i}
              onClick={() => setSelected(d)}
              className={cn(
                'grid h-6 place-items-center rounded-md text-[11px] transition-colors',
                d === selected
                  ? 'bg-accent font-medium text-accent-ink'
                  : 'text-muted hover:bg-ink/[0.05] hover:text-ink',
              )}
            >
              {d}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
