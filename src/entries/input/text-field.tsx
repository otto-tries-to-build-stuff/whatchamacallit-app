import { useState } from 'react';
import { Mail } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'text-field',
  name: 'Text Field',
  category: 'input',
  commonality: 1,
  aliases: ['Input', 'Text Input'],
  description: 'A single-line box for typing short text like names, emails, or queries.',
  whenToUse: [
    'Collecting short, free-form values (name, email, search term)',
    'Any single-line text entry',
  ],
  whenNotToUse: [
    'Longer multi-line text — use a textarea',
    'A choice from known options — use a select or radio group',
  ],
  relatedTo: ['textarea', 'form-field', 'combobox', 'autocomplete'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'text-field.tsx',
    content: `<label className="block">
  <span className="text-sm">Email</span>
  <div className="flex items-center gap-2 rounded-lg border px-3">
    <Mail className="h-4 w-4 opacity-60" />
    <input type="email" value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="you@example.com" />
  </div>
</label>`,
  },
};

export default function Demo() {
  const [value, setValue] = useState('');
  return (
    <label className="block w-[230px]">
      <span className="mb-1.5 block text-[12px] font-medium text-ink">Email</span>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface3 px-3 transition-colors focus-within:border-accent/50">
        <Mail className="h-4 w-4 shrink-0 text-faint" strokeWidth={2} />
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="you@example.com"
          className="h-9 flex-1 bg-transparent text-[13px] text-ink placeholder:text-faint focus:outline-none"
        />
      </div>
    </label>
  );
}
