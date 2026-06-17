import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'toggle',
  name: 'Toggle',
  category: 'input',
  commonality: 1,
  aliases: ['Switch', 'On/Off Switch'],
  description:
    'A two-state slider representing a binary setting, with immediate effect and no separate save.',
  whenToUse: [
    'Instant on/off settings (dark mode, notifications)',
    'When the change applies immediately, without a submit',
  ],
  whenNotToUse: [
    'Choices that only apply after submitting a form — use a checkbox',
    'More than two states — use a segmented control or radios',
  ],
  relatedTo: ['checkbox', 'segmented-control', 'radio-group'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'toggle.tsx',
    content: `<button role="switch" aria-checked={on} onClick={() => setOn((v) => !v)}
  className={on ? "bg-accent" : "bg-surface"}>
  <motion.span layout className="h-5 w-5 rounded-full bg-white" />
</button>`,
  },
};

export default function Demo() {
  const [on, setOn] = useState(true);
  return (
    <label className="flex items-center gap-3 text-[13px] text-ink">
      <button
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={cn(
          'flex h-6 w-11 items-center rounded-full p-0.5 transition-colors',
          on ? 'justify-end bg-accent' : 'justify-start bg-surface2 ring-1 ring-inset ring-line',
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 32 }}
          className={cn('h-5 w-5 rounded-full shadow', on ? 'bg-accent-ink' : 'bg-faint')}
        />
      </button>
      Dark mode
    </label>
  );
}
