import { useState } from 'react';
import { BarChart3, Folder, Home, Settings, Users } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'sidebar',
  name: 'Sidebar',
  category: 'navigation',
  commonality: 2,
  aliases: ['Side Nav', 'Vertical Nav'],
  description:
    'A persistent vertical column of navigation links running along the side of the layout.',
  whenToUse: [
    'Apps with many top-level destinations (dashboards, consoles)',
    'When navigation should stay visible while content scrolls',
  ],
  whenNotToUse: [
    'Narrow mobile screens — collapse into a drawer or bottom nav',
    'Marketing pages with few destinations — a top bar is lighter',
  ],
  relatedTo: ['navigation-rail', 'drawer', 'hamburger-menu', 'tabs'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'sidebar.tsx',
    content: `const items = [
  { icon: Home, label: "Overview" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Folder, label: "Projects" },
];

<nav className="flex w-44 flex-col gap-1">
  {items.map(({ icon: Icon, label }, i) => (
    <a key={label} aria-current={i === 0 ? "page" : undefined}
       className="flex items-center gap-2.5 rounded-lg px-3 py-2">
      <Icon className="h-4 w-4" /> {label}
    </a>
  ))}
</nav>`,
  },
};

const ITEMS = [
  { icon: Home, label: 'Overview' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Folder, label: 'Projects' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

export default function Demo() {
  const [active, setActive] = useState('Overview');
  return (
    <nav className="flex w-44 flex-col gap-0.5 rounded-xl border border-line bg-surface3 p-2">
      {ITEMS.map(({ icon: Icon, label }) => {
        const on = active === label;
        return (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={cn(
              'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] transition-colors',
              on
                ? 'bg-accent/15 font-medium text-accent'
                : 'text-muted hover:bg-ink/[0.04] hover:text-ink',
            )}
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
            {label}
          </button>
        );
      })}
    </nav>
  );
}
