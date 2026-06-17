import { useState } from 'react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'radio-group',
  name: 'Radio Group',
  category: 'input',
  commonality: 1,
  aliases: ['Radio Buttons'],
  description:
    'A set of mutually exclusive circular options where only one in the group can be selected.',
  whenToUse: [
    'Exactly one choice from a small, visible set (2–6 options)',
    'When seeing all options at once aids the decision',
  ],
  whenNotToUse: [
    'Many options — use a select to save space',
    'Multiple selections — use checkboxes',
  ],
  relatedTo: ['checkbox', 'select', 'segmented-control', 'toggle'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'radio-group.tsx',
    content: `<div role="radiogroup">
  {options.map((o) => (
    <label key={o} className="flex items-center gap-2">
      <input type="radio" name="plan" checked={value === o}
        onChange={() => setValue(o)} />
      {o}
    </label>
  ))}
</div>`,
  },
};

const OPTIONS = ['Free', 'Pro', 'Team'];

export default function Demo() {
  const [value, setValue] = useState('Pro');
  return (
    <div role="radiogroup" className="flex flex-col gap-2.5">
      {OPTIONS.map((o) => {
        const on = value === o;
        return (
          <label key={o} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-ink">
            <button
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setValue(o)}
              className={cn(
                'grid h-[18px] w-[18px] place-items-center rounded-full border transition-colors',
                on ? 'border-accent' : 'border-line',
              )}
            >
              {on && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
            </button>
            {o} plan
          </label>
        );
      })}
    </div>
  );
}
