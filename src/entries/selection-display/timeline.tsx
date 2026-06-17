import { Check } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'timeline',
  name: 'Timeline',
  category: 'selection-display',
  commonality: 3,
  aliases: ['Activity Feed', 'History'],
  description:
    'A vertical or horizontal sequence of events ordered chronologically, each with a marker and label.',
  whenToUse: [
    'Showing progress or history (order status, changelog, activity)',
    'When the order and timing of events matters',
  ],
  whenNotToUse: [
    'Unordered items — use a list',
    'Comparing fields across records — use a table',
  ],
  relatedTo: ['stepper', 'list', 'notification-centre'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'timeline.tsx',
    content: `<ol className="relative border-l">
  {events.map((e) => (
    <li key={e.id} className="ml-4 pb-4">
      <span className="absolute -left-[5px] rounded-full bg-accent" />
      <p>{e.title}</p><time>{e.time}</time>
    </li>
  ))}
</ol>`,
  },
};

const EVENTS = [
  { title: 'Order placed', time: '09:24', done: true },
  { title: 'Packed', time: '11:02', done: true },
  { title: 'Out for delivery', time: 'now', done: false },
  { title: 'Delivered', time: '—', done: false },
];

export default function Demo() {
  return (
    <ol className="relative ml-1 w-[210px] border-l border-line">
      {EVENTS.map((e, i) => {
        const active = !e.done && (i === 0 || EVENTS[i - 1].done);
        return (
          <li key={e.title} className="mb-4 ml-4 last:mb-0">
            <span
              className={cn(
                'absolute -left-[7px] grid h-3.5 w-3.5 place-items-center rounded-full border',
                e.done && 'border-accent bg-accent',
                active && 'border-accent bg-surface',
                !e.done && !active && 'border-line bg-surface3',
              )}
            >
              {e.done && <Check className="h-2 w-2 text-accent-ink" strokeWidth={4} />}
              {active && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
            </span>
            <p className={cn('text-[12.5px]', e.done || active ? 'text-ink' : 'text-faint')}>
              {e.title}
            </p>
            <time className="font-mono text-[10px] text-faint">{e.time}</time>
          </li>
        );
      })}
    </ol>
  );
}
