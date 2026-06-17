import { useState } from 'react';
import { Check } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'color-picker',
  name: 'Color Picker',
  category: 'input',
  commonality: 3,
  aliases: ['Swatch Picker'],
  description: 'A control for choosing a colour via swatches, sliders, or hex input.',
  whenToUse: [
    'Picking from a curated palette (labels, themes, tags)',
    'When a quick visual choice beats typing a hex value',
  ],
  whenNotToUse: [
    'Precise brand colours — pair with a hex field',
    'Non-visual settings',
  ],
  relatedTo: ['select', 'slider', 'tag'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'color-picker.tsx',
    content: `{swatches.map((c) => (
  <button key={c} onClick={() => setColor(c)}
    style={{ background: c }} aria-label={c}
    aria-pressed={c === color} />
))}`,
  },
};

const SWATCHES = ['#c5f24a', '#38bdf8', '#a78bfa', '#f472b6', '#fb923c', '#f43f5e'];

export default function Demo() {
  const [color, setColor] = useState('#c5f24a');
  return (
    <div className="w-[200px]">
      <div className="mb-2.5 flex items-center gap-2.5">
        <span
          className="h-9 w-9 rounded-lg border border-line shadow-inner"
          style={{ background: color }}
        />
        <div>
          <p className="text-[12px] font-medium text-ink">Accent</p>
          <p className="font-mono text-[11px] uppercase text-faint">{color}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {SWATCHES.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            aria-label={c}
            aria-pressed={c === color}
            className="grid h-7 w-7 place-items-center rounded-full ring-1 ring-inset ring-black/10 transition-transform hover:scale-110"
            style={{ background: c }}
          >
            {c === color && <Check className="h-3.5 w-3.5 text-black/70" strokeWidth={3} />}
          </button>
        ))}
      </div>
    </div>
  );
}
