import { ChevronDown } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'mega-menu',
  name: 'Mega Menu',
  category: 'navigation',
  commonality: 3,
  aliases: ['Mega Dropdown'],
  description:
    'A large expanded dropdown panel displaying many grouped links and sometimes featured content, triggered from a top-level nav item.',
  whenToUse: [
    'Sites with a broad catalogue that benefits from grouped browsing',
    'When a single nav item hides many related destinations',
  ],
  whenNotToUse: [
    'Small sites — a simple dropdown is enough',
    'Mobile layouts — collapse into an accordion or drawer',
  ],
  relatedTo: ['dropdown-menu', 'navigation-rail', 'popover'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'mega-menu.tsx',
    content: `<div className="grid grid-cols-2 gap-x-6 gap-y-2 p-4">
  {groups.map((group) => (
    <div key={group.title}>
      <p className="text-xs uppercase">{group.title}</p>
      {group.links.map((l) => <a key={l}>{l}</a>)}
    </div>
  ))}
</div>`,
  },
};

const GROUPS = [
  { title: 'Products', links: ['Analytics', 'Automation', 'Insights'] },
  { title: 'Resources', links: ['Docs', 'Guides', 'Changelog'] },
];

export default function Demo() {
  return (
    <div className="w-[260px]">
      <div className="mb-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface3 px-3 py-1.5 text-[12.5px] text-ink">
        Solutions
        <ChevronDown className="h-3.5 w-3.5 text-accent" strokeWidth={2.4} />
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl border border-line bg-surface3 p-3 shadow-xl">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <p className="mb-1.5 font-mono text-[9.5px] uppercase tracking-wider text-faint">
              {group.title}
            </p>
            <div className="flex flex-col gap-1">
              {group.links.map((l) => (
                <span
                  key={l}
                  className="rounded px-1.5 py-1 text-[12px] text-muted transition-colors hover:bg-accent/15 hover:text-accent"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
