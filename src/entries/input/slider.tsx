import { useState } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'slider',
  name: 'Slider',
  category: 'input',
  commonality: 2,
  aliases: ['Range Slider', 'Track'],
  description:
    'A horizontal track with a handle the user drags to pick a single value from a continuous range.',
  whenToUse: [
    'Approximate values where precision is secondary (volume, brightness)',
    'When seeing the value relative to its range helps',
  ],
  whenNotToUse: [
    'Exact values matter — use a number input',
    'A min/max range — use a range slider',
  ],
  relatedTo: ['range-slider', 'number-input', 'progress-bar'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'slider.tsx',
    content: `<input type="range" min={0} max={100}
  value={value} onChange={(e) => setValue(+e.target.value)}
  className="w-full accent-accent" />
<output>{value}%</output>`,
  },
};

export default function Demo() {
  const [value, setValue] = useState(64);
  return (
    <div className="w-[230px]">
      <div className="mb-2 flex items-center justify-between text-[12px]">
        <span className="font-medium text-ink">Volume</span>
        <span className="font-mono text-faint">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full cursor-pointer accent-accent"
      />
    </div>
  );
}
