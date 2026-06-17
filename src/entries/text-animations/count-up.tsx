import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'count-up',
  name: 'Count Up',
  category: 'text-animations',
  commonality: 2,
  aliases: ['Number Counter', 'Odometer'],
  description:
    'A number animates from a starting value up to its target, often used for stats.',
  whenToUse: [
    'Headline metrics and statistics',
    'Drawing attention to an impressive figure',
  ],
  whenNotToUse: [
    'Precise values users must read at once',
    'Frequently updating live numbers',
  ],
  relatedTo: ['scroll-triggered-counter', 'progress-bar', 'typewriter'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'count-up.tsx',
    content: `useEffect(() => {
  const controls = animate(0, 4820, {
    duration: 1.6, ease: "easeOut",
    onUpdate: (v) => setValue(Math.round(v)),
  });
  return () => controls.stop();
}, []);`,
  },
};

export default function Demo() {
  const [value, setValue] = useState(0);
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 3000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const controls = animate(0, 4820, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [k]);
  return (
    <div className="text-center">
      <p className="text-[40px] font-semibold tabular-nums tracking-tight text-ink">
        {value.toLocaleString()}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">downloads</p>
    </div>
  );
}
