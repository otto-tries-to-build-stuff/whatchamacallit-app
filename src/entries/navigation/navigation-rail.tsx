import { useState } from 'react';
import { Compass, Home, Inbox, Settings } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'navigation-rail',
  name: 'Navigation Rail',
  category: 'navigation',
  commonality: 3,
  aliases: ['Side Rail', 'Icon Rail'],
  description:
    'A narrow vertical strip of icon-only nav items along the edge, sitting between a hamburger and a full sidebar.',
  whenToUse: [
    'Tablet and desktop apps that need persistent nav but little width',
    'A handful of destinations recognisable by icon',
  ],
  whenNotToUse: [
    'Labels are essential for clarity — use a full sidebar',
    'Very small screens — use a bottom nav',
  ],
  relatedTo: ['sidebar', 'bottom-nav', 'tabs'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'navigation-rail.tsx',
    content: `<nav className="flex w-16 flex-col items-center gap-1 py-2">
  {items.map(({ icon: Icon, label }, i) => (
    <button key={label} aria-current={i === active ? "page" : undefined}
      className="flex flex-col items-center gap-1 rounded-lg p-2">
      <Icon className="h-5 w-5" />
      <span className="text-[9px]">{label}</span>
    </button>
  ))}
</nav>`,
  },
};

const ITEMS = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Browse' },
  { icon: Inbox, label: 'Inbox' },
  { icon: Settings, label: 'Settings' },
];

export default function Demo() {
  const [active, setActive] = useState(0);
  return (
    <nav className="flex w-16 flex-col items-center gap-1 rounded-2xl border border-line bg-surface3 py-3">
      {ITEMS.map(({ icon: Icon, label }, i) => {
        const on = active === i;
        return (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={cn(
              'flex w-12 flex-col items-center gap-1 rounded-lg py-2 transition-colors',
              on ? 'bg-accent/15 text-accent' : 'text-faint hover:text-muted',
            )}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
            <span className="text-[8.5px] font-medium">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
