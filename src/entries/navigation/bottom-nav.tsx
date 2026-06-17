import { useState } from 'react';
import { Bell, Home, PlusSquare, Search, User } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'bottom-nav',
  name: 'Bottom Nav',
  category: 'navigation',
  commonality: 2,
  aliases: ['Mobile Tab Bar', 'Bottom Tab Bar'],
  description:
    'A horizontal row of 3–5 primary destinations fixed to the bottom of a mobile screen.',
  whenToUse: [
    'Mobile apps with a few equally important top-level sections',
    'When key destinations should stay within thumb reach',
  ],
  whenNotToUse: [
    'More than ~5 destinations — use a drawer or sidebar',
    'Desktop layouts — prefer a top bar or sidebar',
  ],
  relatedTo: ['tabs', 'navigation-rail', 'sidebar'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'bottom-nav.tsx',
    content: `const tabs = [Home, Search, PlusSquare, Bell, User];

<nav className="flex items-center justify-around border-t px-2 py-2">
  {tabs.map((Icon, i) => (
    <button key={i} aria-current={i === active ? "page" : undefined}>
      <Icon className="h-5 w-5" />
    </button>
  ))}
</nav>`,
  },
};

const TABS = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Search' },
  { icon: PlusSquare, label: 'Post' },
  { icon: Bell, label: 'Alerts' },
  { icon: User, label: 'You' },
];

export default function Demo() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-[230px] overflow-hidden rounded-2xl border border-line bg-surface3">
      <div className="h-20 bg-gradient-to-b from-ink/[0.04] to-transparent" />
      <nav className="flex items-center justify-around border-t border-line px-2 py-2">
        {TABS.map(({ icon: Icon, label }, i) => {
          const on = active === i;
          return (
            <button
              key={label}
              onClick={() => setActive(i)}
              className={cn(
                'flex flex-col items-center gap-1 rounded-lg px-2 py-1 transition-colors',
                on ? 'text-accent' : 'text-faint hover:text-muted',
              )}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
              <span className="text-[9px] font-medium">{label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
