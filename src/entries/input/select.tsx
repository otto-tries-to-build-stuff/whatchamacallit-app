import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'select',
  name: 'Select',
  category: 'input',
  commonality: 1,
  aliases: ['Dropdown', 'Picker'],
  description:
    'A field that opens a list of predefined options when clicked, allowing one selection.',
  whenToUse: [
    'Choosing one value from a known, medium-to-long list',
    'When space is tight and options can stay hidden until needed',
  ],
  whenNotToUse: [
    'A few options worth showing at once — use radios or a segmented control',
    'Free text or filtering — use a combobox or autocomplete',
  ],
  relatedTo: ['combobox', 'dropdown-menu', 'radio-group', 'autocomplete'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'select.tsx',
    content: `<button onClick={() => setOpen((o) => !o)} aria-haspopup="listbox">
  {value} <ChevronDown />
</button>
{open && (
  <ul role="listbox">
    {options.map((o) => (
      <li key={o} role="option" onClick={() => { setValue(o); setOpen(false); }}>{o}</li>
    ))}
  </ul>
)}`,
  },
};

const OPTIONS = ['United Kingdom', 'United States', 'Germany', 'Japan'];

export default function Demo() {
  const [value, setValue] = useState('United Kingdom');
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-[220px]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-lg border border-line bg-surface3 px-3 py-2 text-[13px] text-ink"
      >
        {value}
        <ChevronDown className="h-4 w-4 text-muted" strokeWidth={2.2} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            role="listbox"
            className="absolute z-10 mt-1.5 w-full rounded-lg border border-line bg-surface3 p-1.5 shadow-2xl"
          >
            {OPTIONS.map((o) => (
              <li
                key={o}
                role="option"
                aria-selected={o === value}
                onClick={() => {
                  setValue(o);
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center justify-between rounded-md px-2.5 py-1.5 text-[12.5px] text-muted hover:bg-accent/15 hover:text-ink"
              >
                {o}
                {o === value && <Check className="h-3.5 w-3.5 text-accent" />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
