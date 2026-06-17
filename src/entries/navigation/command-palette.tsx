import { ArrowRight, FileText, Search, Settings, Sparkles } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'command-palette',
  name: 'Command Palette',
  category: 'navigation',
  commonality: 3,
  aliases: ['Command Bar', 'Quick Switcher', '⌘K Menu'],
  description:
    'A keyboard-invoked search interface (usually ⌘K) for jumping to commands, files, or pages by typing.',
  whenToUse: [
    'Power-user apps with many commands and destinations',
    'When fast keyboard navigation is a priority',
  ],
  whenNotToUse: [
    'Simple apps with few actions',
    'Audiences who rarely use keyboard shortcuts',
  ],
  relatedTo: ['dropdown-menu', 'autocomplete', 'modal-dialog', 'combobox'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'command-palette.tsx',
    content: `<div role="dialog" className="rounded-xl border bg-surface shadow-2xl">
  <input placeholder="Type a command or search…" />
  <ul>
    {results.map((r) => (
      <li key={r.label} aria-selected={r.active}>
        <r.icon /> {r.label}
      </li>
    ))}
  </ul>
</div>`,
  },
};

const RESULTS = [
  { icon: Sparkles, label: 'New project', active: true },
  { icon: FileText, label: 'Open file…', active: false },
  { icon: Settings, label: 'Open settings', active: false },
];

export default function Demo() {
  return (
    <div className="w-[260px] overflow-hidden rounded-xl border border-line bg-surface3 shadow-2xl">
      <div className="flex items-center gap-2.5 border-b border-line px-3 py-2.5">
        <Search className="h-4 w-4 text-faint" strokeWidth={2} />
        <span className="flex-1 text-[12.5px] text-faint">Type a command…</span>
        <kbd className="rounded border border-line bg-surface2 px-1.5 py-0.5 font-mono text-[9px] text-faint">
          ⌘K
        </kbd>
      </div>
      <ul className="p-1.5">
        {RESULTS.map(({ icon: Icon, label, active }) => (
          <li
            key={label}
            className={cn(
              'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px]',
              active ? 'bg-accent/15 text-accent' : 'text-muted',
            )}
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
            <span className="flex-1">{label}</span>
            {active && <ArrowRight className="h-3.5 w-3.5" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
