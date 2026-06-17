import { useState } from 'react';
import { Clock } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'time-picker',
  name: 'Time Picker',
  category: 'input',
  commonality: 3,
  aliases: ['Time Selector'],
  description: 'An input for selecting a time of day, often paired with a date picker.',
  whenToUse: [
    'Scheduling a meeting, reminder, or booking slot',
    'When a constrained list of times reduces errors',
  ],
  whenNotToUse: [
    'Free-form durations — use a number input',
    'Picking a day — use a date picker',
  ],
  relatedTo: ['date-picker', 'select', 'number-input'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'time-picker.tsx',
    content: `<ul role="listbox">
  {slots.map((t) => (
    <li key={t} role="option" aria-selected={t === value}
      onClick={() => setValue(t)}>{t}</li>
  ))}
</ul>`,
  },
};

const SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];

export default function Demo() {
  const [value, setValue] = useState('10:00');
  return (
    <div className="w-[160px]">
      <div className="mb-1.5 flex items-center gap-2 rounded-lg border border-line bg-surface3 px-3 py-2">
        <Clock className="h-4 w-4 text-accent" strokeWidth={2} />
        <span className="text-[13px] font-medium text-ink">{value}</span>
        <span className="ml-auto font-mono text-[10px] text-faint">AM</span>
      </div>
      <ul
        role="listbox"
        className="grid max-h-[96px] grid-cols-2 gap-1 overflow-auto rounded-lg border border-line bg-surface3 p-1.5"
      >
        {SLOTS.map((t) => (
          <li
            key={t}
            role="option"
            aria-selected={t === value}
            onClick={() => setValue(t)}
            className={cn(
              'cursor-pointer rounded-md px-2 py-1 text-center font-mono text-[11.5px] transition-colors',
              t === value ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-ink/[0.05]',
            )}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
