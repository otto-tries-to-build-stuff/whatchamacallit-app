import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'flip-transition',
  name: 'Flip Transition',
  category: 'page-transitions',
  commonality: 4,
  aliases: ['Card Flip'],
  description:
    'A 3D flip between two faces, used for card flips and occasionally page transitions.',
  whenToUse: [
    'Revealing the back of a card (details, settings, answer)',
    'Toggling between two tightly-paired states',
  ],
  whenNotToUse: [
    'Switching between unrelated pages',
    'Reduced-motion contexts or low-end devices',
  ],
  relatedTo: ['cube-transition', 'icon-morph', 'shared-element-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'flip-transition.tsx',
    content: `<div style={{ perspective: 800 }}>
  <motion.div animate={{ rotateY: flipped ? 180 : 0 }}
    style={{ transformStyle: "preserve-3d" }}>
    <Face>{front}</Face>
    <Face style={{ transform: "rotateY(180deg)" }}>{back}</Face>
  </motion.div>
</div>`,
  },
};

function Face({ v }: { v: number }) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 rounded-xl border border-line bg-surface3 p-3">
      <span className="skel h-2 w-1/2" />
      <div
        className={`h-10 rounded-lg border ${v === 1 ? 'border-accent/30 bg-accent/15' : 'border-line bg-ink/[0.05]'}`}
      />
      <span className="font-mono text-[9px] text-faint">{v === 0 ? 'front' : 'back'}</span>
    </div>
  );
}

export default function Demo() {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setFlipped((f) => !f), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ perspective: 900 }} className="h-[150px] w-[200px]">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
          <Face v={0} />
        </div>
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Face v={1} />
        </div>
      </motion.div>
    </div>
  );
}
