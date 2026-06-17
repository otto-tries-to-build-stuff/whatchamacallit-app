import { useState } from 'react';
import { Check } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'checkbox',
  name: 'Checkbox',
  category: 'input',
  commonality: 1,
  aliases: ['Tickbox'],
  description:
    'A small toggleable square representing a binary on/off choice; multiple checkboxes allow multi-select.',
  whenToUse: [
    'Selecting any number of options from a list',
    'A single opt-in (terms, newsletter)',
  ],
  whenNotToUse: [
    'Exactly one choice from many — use a radio group',
    'An instant on/off setting — use a toggle',
  ],
  relatedTo: ['radio-group', 'toggle', 'form-field'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'checkbox.tsx',
    content: `<label className="flex items-center gap-2">
  <input type="checkbox" className="peer sr-only"
    checked={checked} onChange={toggle} />
  <span className="grid h-4 w-4 place-items-center rounded border
    peer-checked:bg-accent">{checked && <Check />}</span>
  {label}
</label>`,
  },
};

const OPTIONS = ['Email', 'SMS', 'Push'];

export default function Demo() {
  const [checked, setChecked] = useState<Record<string, boolean>>({ Email: true, Push: true });
  return (
    <div className="flex flex-col gap-2.5">
      {OPTIONS.map((label) => {
        const on = !!checked[label];
        return (
          <label key={label} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-ink">
            <button
              type="button"
              role="checkbox"
              aria-checked={on}
              onClick={() => setChecked((c) => ({ ...c, [label]: !on }))}
              className={cn(
                'grid h-[18px] w-[18px] place-items-center rounded-[5px] border transition-colors',
                on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-surface3',
              )}
            >
              {on && <Check className="h-3 w-3" strokeWidth={3.5} />}
            </button>
            {label} notifications
          </label>
        );
      })}
    </div>
  );
}
