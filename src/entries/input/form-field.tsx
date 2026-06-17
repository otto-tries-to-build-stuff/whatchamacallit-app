import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'form-field',
  name: 'Form Field',
  category: 'input',
  commonality: 2,
  aliases: ['Field', 'Form Group'],
  description:
    'The composed unit of label, input, and helper or error text — the atomic building block of a form.',
  whenToUse: [
    'Any labelled input that may need help or validation text',
    'Building consistent, accessible forms',
  ],
  whenNotToUse: [
    'A bare control with an obvious purpose and no label needs',
  ],
  relatedTo: ['text-field', 'textarea', 'select', 'checkbox'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'form-field.tsx',
    content: `<div className="space-y-1.5">
  <label htmlFor="pw">Password</label>
  <input id="pw" type="password" aria-invalid={!!error}
    aria-describedby="pw-msg" />
  <p id="pw-msg" className={error ? "text-red-400" : "text-muted"}>
    {error ?? "At least 8 characters."}
  </p>
</div>`,
  },
};

export default function Demo() {
  const [value, setValue] = useState('abc');
  const error = value.length > 0 && value.length < 8 ? 'Must be at least 8 characters.' : null;
  return (
    <div className="w-[240px] space-y-1.5">
      <label htmlFor="pw" className="block text-[12px] font-medium text-ink">
        Password
      </label>
      <input
        id="pw"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-invalid={!!error}
        aria-describedby="pw-msg"
        className={cn(
          'h-9 w-full rounded-lg border bg-surface3 px-3 text-[13px] text-ink focus:outline-none',
          error ? 'border-red-500/60' : 'border-line focus:border-accent/50',
        )}
      />
      <p
        id="pw-msg"
        className={cn(
          'flex items-center gap-1.5 text-[11px]',
          error ? 'text-red-400' : 'text-faint',
        )}
      >
        {error && <AlertCircle className="h-3 w-3" strokeWidth={2.4} />}
        {error ?? 'At least 8 characters.'}
      </p>
    </div>
  );
}
