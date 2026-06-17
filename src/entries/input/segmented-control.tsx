import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'segmented-control',
  name: 'Segmented Control',
  category: 'input',
  commonality: 2,
  aliases: ['Segmented Buttons', 'Pill Switcher'],
  description:
    'A row of joined buttons offering a small set of mutually exclusive options, more compact than radios.',
  whenToUse: [
    '2–4 short, mutually exclusive options (view modes, ranges)',
    'When the choice changes content immediately',
  ],
  whenNotToUse: [
    'Many or long options — use a select',
    'Switching between full views — use tabs',
  ],
  relatedTo: ['radio-group', 'tabs', 'toggle'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'segmented-control.tsx',
    content: `<div role="tablist" className="flex rounded-lg bg-surface p-1">
  {options.map((o) => (
    <button key={o} onClick={() => setValue(o)} className="relative">
      {value === o && <motion.div layoutId="seg" className="absolute inset-0" />}
      <span className="relative">{o}</span>
    </button>
  ))}
</div>`,
  },
};

const OPTIONS = ['Day', 'Week', 'Month'];

export default function Demo() {
  const [value, setValue] = useState('Week');
  return (
    <div className="flex rounded-lg border border-line bg-surface2 p-1">
      {OPTIONS.map((o) => {
        const on = value === o;
        return (
          <button
            key={o}
            onClick={() => setValue(o)}
            className="relative px-4 py-1.5 text-[12.5px] font-medium"
          >
            {on && (
              <motion.div
                layoutId="seg-active"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-md bg-surface3 shadow-sm ring-1 ring-inset ring-line"
              />
            )}
            <span className={cn('relative', on ? 'text-ink' : 'text-muted')}>{o}</span>
          </button>
        );
      })}
    </div>
  );
}
