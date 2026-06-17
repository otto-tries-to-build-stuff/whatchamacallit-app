import { useState } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'textarea',
  name: 'Textarea',
  category: 'input',
  commonality: 1,
  aliases: ['Multi-line Input'],
  description: 'A multi-line box for longer free-form text such as comments or descriptions.',
  whenToUse: [
    'Comments, messages, bios, or any multi-sentence input',
    'When the expected text may wrap across lines',
  ],
  whenNotToUse: [
    'Short single-line values — use a text field',
    'Structured data — use dedicated inputs',
  ],
  relatedTo: ['text-field', 'form-field'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'textarea.tsx',
    content: `const [value, setValue] = useState("");
const max = 140;

<textarea value={value} maxLength={max}
  onChange={(e) => setValue(e.target.value)} rows={3} />
<span>{value.length}/{max}</span>`,
  },
};

export default function Demo() {
  const [value, setValue] = useState('');
  const max = 140;
  return (
    <label className="block w-[240px]">
      <span className="mb-1.5 block text-[12px] font-medium text-ink">Message</span>
      <textarea
        value={value}
        maxLength={max}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
        placeholder="Say something nice…"
        className="block w-full resize-none rounded-lg border border-line bg-surface3 p-2.5 text-[13px] leading-relaxed text-ink placeholder:text-faint focus:border-accent/50 focus:outline-none"
      />
      <span className="mt-1 block text-right font-mono text-[10px] text-faint">
        {value.length}/{max}
      </span>
    </label>
  );
}
