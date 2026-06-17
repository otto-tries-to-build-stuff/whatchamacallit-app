import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'number-input',
  name: 'Number Input',
  category: 'input',
  commonality: 3,
  aliases: ['Numeric Stepper', 'Spinner'],
  description:
    'A numeric field with +/− increment buttons or up/down arrows to step the value.',
  whenToUse: [
    'Small quantities adjusted up or down (cart quantity, guests)',
    'When precise integer values matter',
  ],
  whenNotToUse: [
    'Wide approximate ranges — a slider is faster',
    'Non-numeric input',
  ],
  relatedTo: ['slider', 'text-field', 'form-field'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'number-input.tsx',
    content: `<div className="flex items-center rounded-lg border">
  <button onClick={() => setN((n) => Math.max(min, n - 1))}><Minus /></button>
  <input type="number" value={n} onChange={(e) => setN(+e.target.value)} />
  <button onClick={() => setN((n) => n + 1)}><Plus /></button>
</div>`,
  },
};

export default function Demo() {
  const [n, setN] = useState(2);
  const btn = 'grid h-9 w-9 place-items-center text-muted transition-colors hover:text-ink';
  return (
    <div className="w-[180px]">
      <span className="mb-1.5 block text-[12px] font-medium text-ink">Guests</span>
      <div className="flex items-center rounded-lg border border-line bg-surface3">
        <button onClick={() => setN((v) => Math.max(1, v - 1))} className={btn} aria-label="Decrease">
          <Minus className="h-4 w-4" strokeWidth={2.2} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          value={n}
          onChange={(e) => {
            const v = parseInt(e.target.value, 10);
            if (!Number.isNaN(v)) setN(Math.max(1, v));
          }}
          className="h-9 w-full border-x border-line bg-transparent text-center text-[13px] font-medium text-ink focus:outline-none"
        />
        <button onClick={() => setN((v) => v + 1)} className={btn} aria-label="Increase">
          <Plus className="h-4 w-4" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
