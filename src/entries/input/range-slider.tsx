import { useRef, useState } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'range-slider',
  name: 'Range Slider',
  category: 'input',
  commonality: 3,
  aliases: ['Dual-handle Slider'],
  description:
    'A slider with two handles defining a value range (min/max), common in filters.',
  whenToUse: [
    'Filtering by a range (price, dates, size)',
    'When both a lower and upper bound matter',
  ],
  whenNotToUse: [
    'A single value — use a plain slider',
    'Exact bounds — paired number inputs are clearer',
  ],
  relatedTo: ['slider', 'number-input', 'data-table'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'range-slider.tsx',
    content: `// two handles over one track; drag moves the nearest
function moveNearest(x: number) {
  const p = pct(x);
  setRange(([a, b]) =>
    Math.abs(p - a) <= Math.abs(p - b) ? [Math.min(p, b), b] : [a, Math.max(p, a)]);
}`,
  },
};

const clamp = (n: number) => Math.min(100, Math.max(0, n));

export default function Demo() {
  const [range, setRange] = useState<[number, number]>([24, 72]);
  const trackRef = useRef<HTMLDivElement>(null);
  const down = useRef(false);

  function moveNearest(clientX: number) {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = clamp(Math.round(((clientX - r.left) / r.width) * 100));
    setRange(([a, b]) =>
      Math.abs(p - a) <= Math.abs(p - b) ? [Math.min(p, b), b] : [a, Math.max(p, a)],
    );
  }

  const price = (p: number) => `$${Math.round(p * 5)}`;

  return (
    <div className="w-[230px]">
      <div className="mb-3 flex items-center justify-between text-[12px]">
        <span className="font-medium text-ink">Price</span>
        <span className="font-mono text-faint">
          {price(range[0])} – {price(range[1])}
        </span>
      </div>
      <div
        ref={trackRef}
        onPointerDown={(e) => {
          down.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          moveNearest(e.clientX);
        }}
        onPointerMove={(e) => down.current && moveNearest(e.clientX)}
        onPointerUp={() => (down.current = false)}
        className="relative h-6 cursor-pointer touch-none"
      >
        <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-surface2" />
        <div
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent"
          style={{ left: `${range[0]}%`, right: `${100 - range[1]}%` }}
        />
        {range.map((p, i) => (
          <span
            key={i}
            className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-surface3 shadow"
            style={{ left: `${p}%` }}
          />
        ))}
      </div>
    </div>
  );
}
