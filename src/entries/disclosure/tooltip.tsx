import { Save } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'tooltip',
  name: 'Tooltip',
  category: 'disclosure',
  commonality: 1,
  aliases: ['Hint', 'Infotip'],
  description:
    'A small text bubble appearing on hover or focus, giving a brief label or hint about the element underneath.',
  whenToUse: [
    'Labelling icon-only buttons',
    'Short, supplementary hints that are nice-to-have, not essential',
  ],
  whenNotToUse: [
    'Critical information — tooltips are hidden until hover and skip on touch',
    'Rich or interactive content — use a popover or hovercard',
  ],
  relatedTo: ['popover', 'hovercard', 'toggle-tip', 'dropdown-menu'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'tooltip.tsx',
    content: `<span className="group relative">
  <button aria-describedby="tip"><Save /></button>
  <span id="tip" role="tooltip"
    className="absolute bottom-full left-1/2 hidden -translate-x-1/2
               group-hover:block group-focus-within:block">
    Save changes
  </span>
</span>`,
  },
};

export default function Demo() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-md border border-line bg-surface3 px-2.5 py-1 font-mono text-[10.5px] text-ink shadow-lg">
        Save changes
      </div>
      <div className="-mt-1 h-2 w-2 rotate-45 border-b border-r border-line bg-surface3" />
      <button className="mt-3 grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface2 text-muted">
        <Save className="h-4 w-4" strokeWidth={2} />
      </button>
    </div>
  );
}
