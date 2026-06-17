import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'ripple',
  name: 'Ripple',
  category: 'micro-interactions',
  commonality: 2,
  aliases: ['Material Ripple', 'Ink Ripple'],
  description:
    'A circular ink-spread originating from the click point and expanding outward, popularised by Material Design.',
  whenToUse: [
    'Touch surfaces where origin-aware feedback feels natural',
    'Material-styled buttons and list items',
  ],
  whenNotToUse: [
    'Minimal or utilitarian UIs where it feels heavy',
    'When a simple press scale is enough',
  ],
  relatedTo: ['button-press', 'hover-lift', 'pulse'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'ripple.tsx',
    content: `function onClick(e) {
  const r = e.currentTarget.getBoundingClientRect();
  add({ x: e.clientX - r.left, y: e.clientY - r.top, id: Date.now() });
}

<motion.span initial={{ scale: 0, opacity: 0.5 }}
  animate={{ scale: 4, opacity: 0 }} className="rounded-full bg-current" />`,
  },
};

let nextId = 0;

export default function Demo() {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  function onClick(e: MouseEvent<HTMLButtonElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const id = nextId++;
    setRipples((rs) => [...rs, { x: e.clientX - r.left, y: e.clientY - r.top, id }]);
    setTimeout(() => setRipples((rs) => rs.filter((x) => x.id !== id)), 600);
  }
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-xl bg-accent px-6 py-3 text-[13px] font-semibold text-accent-ink"
    >
      Tap me
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.45 }}
            animate={{ scale: 6, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ left: r.x, top: r.y }}
            className="pointer-events-none absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-ink/30"
          />
        ))}
      </AnimatePresence>
    </button>
  );
}
