import { useRef, useState } from 'react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'otp-input',
  name: 'OTP Input',
  category: 'input',
  commonality: 3,
  aliases: ['One-time Code Input', 'PIN Input'],
  description:
    'A set of one-character inputs designed for entering verification codes digit-by-digit.',
  whenToUse: [
    'Entering a short verification code (2FA, email confirmation)',
    'When each character should be clearly separated',
  ],
  whenNotToUse: [
    'Longer secrets or passwords — use a single field',
    'Codes that get pasted often without per-box handling',
  ],
  relatedTo: ['text-field', 'number-input', 'form-field'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'otp-input.tsx',
    content: `{digits.map((d, i) => (
  <input key={i} ref={refs[i]} maxLength={1} value={d}
    onChange={(e) => { setDigit(i, e.target.value); refs[i + 1]?.focus(); }} />
))}`,
  },
};

const LEN = 6;

export default function Demo() {
  const [digits, setDigits] = useState(['2', '0', '4', '', '', '']);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  function set(i: number, v: string) {
    const ch = v.replace(/\D/g, '').slice(-1);
    setDigits((d) => d.map((x, j) => (j === i ? ch : x)));
    if (ch && i < LEN - 1) refs.current[i + 1]?.focus();
  }

  return (
    <div className="flex gap-1.5">
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={d}
          inputMode="numeric"
          maxLength={1}
          onChange={(e) => set(i, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && !d && i > 0) refs.current[i - 1]?.focus();
          }}
          className={cn(
            'h-11 w-9 rounded-lg border bg-surface3 text-center text-[17px] font-medium text-ink focus:outline-none',
            d ? 'border-accent/50' : 'border-line',
            'focus:border-accent focus:ring-2 focus:ring-accent/30',
          )}
        />
      ))}
    </div>
  );
}
