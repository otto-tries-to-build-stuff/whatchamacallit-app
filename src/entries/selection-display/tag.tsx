import { useState } from 'react';
import { X } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'tag',
  name: 'Tag',
  category: 'selection-display',
  commonality: 1,
  aliases: ['Chip', 'Label', 'Pill'],
  description:
    'A small inline label representing a category, status, or filter, often grouped and sometimes dismissable.',
  whenToUse: [
    'Showing applied filters or keywords the user can remove',
    'Categorising items with short, scannable labels',
  ],
  whenNotToUse: [
    'Read-only status that is never removed — a badge is simpler',
    'Single-select from a set — use a segmented control',
  ],
  relatedTo: ['badge', 'combobox', 'segmented-control'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'tag.tsx',
    content: `{tags.map((t) => (
  <span key={t} className="flex items-center gap-1 rounded-md border px-2 py-1">
    {t}
    <button onClick={() => remove(t)} aria-label={"Remove " + t}><X /></button>
  </span>
))}`,
  },
};

export default function Demo() {
  const [tags, setTags] = useState(['design', 'react', 'animation', 'a11y']);
  return (
    <div className="flex max-w-[230px] flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="flex items-center gap-1.5 rounded-md border border-line bg-surface2 py-1 pl-2.5 pr-1.5 font-mono text-[11.5px] text-muted"
        >
          {t}
          <button
            onClick={() => setTags((prev) => prev.filter((x) => x !== t))}
            aria-label={`Remove ${t}`}
            className="grid h-4 w-4 place-items-center rounded text-faint hover:bg-ink/10 hover:text-ink"
          >
            <X className="h-3 w-3" strokeWidth={2.4} />
          </button>
        </span>
      ))}
      {tags.length === 0 && <span className="text-[12px] text-faint">All cleared — refresh to reset</span>}
    </div>
  );
}
