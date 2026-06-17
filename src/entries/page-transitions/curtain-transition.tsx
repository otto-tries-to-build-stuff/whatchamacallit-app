import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'curtain-transition',
  name: 'Curtain Transition',
  category: 'page-transitions',
  commonality: 3,
  aliases: ['Wipe Transition'],
  description: 'A coloured panel sweeps across the screen to mask the route change.',
  whenToUse: [
    'Bold, branded transitions between major sections',
    'Hiding a content swap behind a confident wipe',
  ],
  whenNotToUse: [
    'Frequent navigation — the full-screen wipe adds delay',
    'Subtle or utilitarian UIs',
  ],
  relatedTo: ['mask-transition', 'scroll-reveal-mask', 'route-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'curtain-transition.tsx',
    content: `<motion.div key={nav}
  initial={{ x: "-110%" }} animate={{ x: "110%" }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="absolute inset-0 bg-accent" />  // swap content at midpoint`,
  },
};

function Screen({ v }: { v: number }) {
  return (
    <div className="flex h-full flex-col gap-2 bg-surface3 p-3">
      <span className="skel h-2 w-1/2" />
      <div
        className={`h-12 rounded-lg border ${v === 1 ? 'border-accent/30 bg-accent/15' : 'border-line bg-ink/[0.05]'}`}
      />
      <span className="font-mono text-[9px] text-faint">page {v + 1}</span>
    </div>
  );
}

export default function Demo() {
  const [shown, setShown] = useState(0);
  const [sweep, setSweep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSweep((s) => s + 1);
      setTimeout(() => setShown((v) => (v + 1) % 2), 400);
    }, 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-[150px] w-[220px] overflow-hidden rounded-xl border border-line bg-surface2">
      <Screen v={shown} />
      {sweep > 0 && (
        <motion.div
          key={sweep}
          initial={{ x: '-110%' }}
          animate={{ x: '110%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 -skew-x-6 bg-accent"
        />
      )}
    </div>
  );
}
