import { useRef, useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'magnetic-button',
  name: 'Magnetic Button',
  category: 'micro-interactions',
  commonality: 4,
  aliases: ['Cursor Attraction'],
  description:
    'A button that subtly drifts toward the cursor as it approaches, signalling interactivity.',
  whenToUse: [
    'Hero call-to-actions on playful, design-forward sites',
    'Adding tactile delight to a primary action',
  ],
  whenNotToUse: [
    'Touch interfaces — there is no cursor',
    'Dense UIs where drifting targets frustrate aiming',
  ],
  relatedTo: ['hover-lift', 'spotlight-effect', 'button-press'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'magnetic-button.tsx',
    content: `function onMove(e) {
  const r = ref.current.getBoundingClientRect();
  const x = e.clientX - (r.left + r.width / 2);
  const y = e.clientY - (r.top + r.height / 2);
  setPos({ x: x * 0.4, y: y * 0.4 });
}

<motion.button animate={pos} onMouseMove={onMove} onMouseLeave={reset} />`,
  },
};

export default function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.35, y: y * 0.35 });
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="grid h-32 w-[230px] place-items-center"
    >
      <motion.button
        ref={ref}
        animate={pos}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        className="rounded-xl bg-accent px-5 py-2.5 text-[13px] font-semibold text-accent-ink shadow-lg shadow-accent/20"
      >
        Catch me
      </motion.button>
    </div>
  );
}
