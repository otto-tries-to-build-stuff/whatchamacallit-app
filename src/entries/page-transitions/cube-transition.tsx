import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'cube-transition',
  name: 'Cube Transition',
  category: 'page-transitions',
  commonality: 4,
  aliases: ['3D Rotate'],
  description: 'Pages animate as faces of a rotating cube, common in mobile onboarding.',
  whenToUse: [
    'Playful onboarding or story sequences',
    'When a strong sense of 3D space fits the brand',
  ],
  whenNotToUse: [
    'Functional, content-heavy apps',
    'Reduced-motion contexts or performance-critical paths',
  ],
  relatedTo: ['flip-transition', 'carousel', 'route-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'cube-transition.tsx',
    content: `<div style={{ perspective: 600 }}>
  <motion.div animate={{ rotateY: -90 * page }}
    style={{ transformStyle: "preserve-3d" }}>
    <Face style={{ transform: "rotateY(0) translateZ(HALF)" }} />
    <Face style={{ transform: "rotateY(90deg) translateZ(HALF)" }} />
  </motion.div>
</div>`,
  },
};

const W = 200;
const HALF = W / 2;

function Face({ v }: { v: number }) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 border border-line bg-surface3 p-3">
      <span className="skel h-2 w-1/2" />
      <div
        className={`h-10 rounded-lg border ${v % 2 === 1 ? 'border-accent/30 bg-accent/15' : 'border-line bg-ink/[0.05]'}`}
      />
      <span className="font-mono text-[9px] text-faint">face {v + 1}</span>
    </div>
  );
}

export default function Demo() {
  const [page, setPage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPage((p) => p + 1), 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ perspective: 600 }} className="h-[150px]" >
      <motion.div
        animate={{ rotateY: -90 * page }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', width: W, height: 150 }}
        className="relative"
      >
        <div
          className="absolute inset-0"
          style={{ transform: `rotateY(0deg) translateZ(${HALF}px)`, backfaceVisibility: 'hidden' }}
        >
          <Face v={page} />
        </div>
        <div
          className="absolute inset-0"
          style={{ transform: `rotateY(90deg) translateZ(${HALF}px)`, backfaceVisibility: 'hidden' }}
        >
          <Face v={page + 1} />
        </div>
      </motion.div>
    </div>
  );
}
