import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'focus-ring',
  name: 'Focus Ring',
  category: 'micro-interactions',
  commonality: 1,
  aliases: ['Focus Outline'],
  description:
    'A visible ring around the currently focused element for keyboard accessibility, often animated in.',
  whenToUse: [
    'Always — every interactive element needs a visible focus state',
    'Keyboard and assistive-tech navigation',
  ],
  whenNotToUse: [
    'Never remove it without an equally clear replacement',
  ],
  relatedTo: ['button-press', 'text-field', 'pulse'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'focus-ring.tsx',
    content: `<button className="rounded-lg outline-none
  focus-visible:ring-2 focus-visible:ring-accent
  focus-visible:ring-offset-2 focus-visible:ring-offset-bg
  transition-shadow">
  Tab to me
</button>`,
  },
};

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-line bg-surface3 px-3 py-2 text-[12.5px] text-muted">
          Cancel
        </button>
        <button className="rounded-lg bg-accent px-3 py-2 text-[12.5px] font-medium text-accent-ink outline-none ring-2 ring-accent ring-offset-2 ring-offset-surface">
          Confirm
        </button>
        <button className="rounded-lg border border-line bg-surface3 px-3 py-2 text-[12.5px] text-muted">
          Skip
        </button>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
        focus-visible ring
      </p>
    </div>
  );
}
