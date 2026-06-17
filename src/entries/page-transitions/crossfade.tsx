import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'crossfade',
  name: 'Crossfade',
  category: 'page-transitions',
  commonality: 1,
  aliases: ['Fade Transition'],
  description: 'One page simply fades out while the next fades in, with no movement.',
  whenToUse: [
    'Calm, neutral transitions between routes or tabs',
    'When directional motion would imply a hierarchy that does not exist',
  ],
  whenNotToUse: [
    'When users benefit from a sense of spatial direction',
    'Very frequent switches where any fade adds latency',
  ],
  relatedTo: ['route-transition', 'view-transition', 'fade-in-on-view'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'crossfade.tsx',
    content: `<AnimatePresence>
  <motion.div key={route}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }} className="absolute inset-0">
    <Page />
  </motion.div>
</AnimatePresence>`,
  },
};

function Screen({ v }: { v: number }) {
  return (
    <div className="flex h-full flex-col gap-2 bg-surface3 p-3">
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded-md bg-accent/30" />
        <span className="skel h-1.5 w-16" />
      </div>
      <div
        className={`h-12 rounded-lg border ${v === 1 ? 'border-accent/30 bg-accent/15' : 'border-line bg-ink/[0.05]'}`}
      />
      <span className="skel h-1.5 w-3/4" />
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
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0"
        >
          <Screen v={i} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
