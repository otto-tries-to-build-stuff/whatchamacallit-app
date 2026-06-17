import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'disclosure-widget',
  name: 'Disclosure Widget',
  category: 'disclosure',
  commonality: 2,
  aliases: ['Show More', 'Read More', 'Expander'],
  description:
    'A simple inline toggle that expands a truncated paragraph or hides extra detail.',
  whenToUse: [
    'Trimming long text while keeping a way to read it all',
    'Optional detail most users can skip',
  ],
  whenNotToUse: [
    'Several parallel sections — use an accordion',
    'Content users almost always need — just show it',
  ],
  relatedTo: ['accordion', 'tooltip', 'popover'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'disclosure-widget.tsx',
    content: `const [open, setOpen] = useState(false);

<p>{open ? full : truncated}</p>
<button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
  {open ? "Show less" : "Show more"}
</button>`,
  },
};

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[250px] text-[12px] leading-relaxed text-muted">
      <p>
        A whatchamacallit is the thing you can picture but can't name.
        {open && (
          <span>
            {' '}
            This widget keeps the page tidy by hiding the rest until you ask for it — then
            reveals the full story in place.
          </span>
        )}
        {!open && <span className="text-faint">…</span>}
      </p>
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-2 flex items-center gap-1 text-[12px] font-medium text-accent"
      >
        {open ? 'Show less' : 'Show more'}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')}
          strokeWidth={2.4}
        />
      </button>
    </div>
  );
}
