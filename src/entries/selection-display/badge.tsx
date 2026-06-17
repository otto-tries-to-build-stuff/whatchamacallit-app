import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'badge',
  name: 'Badge',
  category: 'selection-display',
  commonality: 1,
  aliases: ['Status Label', 'Pill'],
  description:
    'A small label attached to an element to mark status or type — "New", "Beta", a category, or a count.',
  whenToUse: [
    'Flagging status, type, or a small count on another element',
    'Drawing the eye to "New" / "Beta" / unread counts',
  ],
  whenNotToUse: [
    'Interactive, removable filters — use a tag',
    'Long text — badges should stay tiny',
  ],
  relatedTo: ['tag', 'dot-indicator', 'avatar'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'badge.tsx',
    content: `<span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent">
  New
</span>`,
  },
};

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-medium text-accent">
          New
        </span>
        <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 text-[11px] font-medium text-muted">
          Beta
        </span>
        <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[11px] font-medium text-red-400">
          Deprecated
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="relative inline-flex">
          <span className="rounded-lg border border-line bg-surface3 px-3 py-1.5 text-[12px] text-ink">
            Inbox
          </span>
          <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-ink">
            9
          </span>
        </span>
      </div>
    </div>
  );
}
