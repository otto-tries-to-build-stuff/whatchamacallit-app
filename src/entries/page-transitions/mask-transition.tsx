import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'mask-transition',
  name: 'Mask Transition',
  category: 'page-transitions',
  commonality: 3,
  aliases: ['Circle Reveal'],
  description: 'A shape — a circle or blob — expands or contracts to mask the incoming page.',
  whenToUse: [
    'Playful reveals anchored to a point (a tapped button, a logo)',
    'Theme switches that radiate from the toggle',
  ],
  whenNotToUse: [
    'When the origin point has no meaning',
    'Performance-sensitive or reduced-motion contexts',
  ],
  relatedTo: ['curtain-transition', 'scroll-reveal-mask', 'view-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'mask-transition.tsx',
    content: `<motion.div key={route}
  initial={{ clipPath: "circle(0% at 50% 50%)" }}
  animate={{ clipPath: "circle(140% at 50% 50%)" }}
  transition={{ duration: 0.7, ease: "easeInOut" }}>
  <Page />
</motion.div>`,
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
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % 2), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-[150px] w-[220px] overflow-hidden rounded-xl border border-line bg-surface2">
      <div className="absolute inset-0">
        <Screen v={(i + 1) % 2} />
      </div>
      <motion.div
        key={i}
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: 'circle(140% at 50% 50%)' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="absolute inset-0"
      >
        <Screen v={i} />
      </motion.div>
    </div>
  );
}
