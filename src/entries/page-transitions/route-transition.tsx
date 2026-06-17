import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'route-transition',
  name: 'Route Transition',
  category: 'page-transitions',
  commonality: 1,
  aliases: ['Page Transition'],
  description:
    'An animation playing when navigating between routes — a fade, slide, or crossfade between pages.',
  whenToUse: [
    'Single-page apps that want continuity between views',
    'Reinforcing forward/back direction with a slide',
  ],
  whenNotToUse: [
    'When instant navigation feels snappier',
    'Heavy pages where the animation competes with loading',
  ],
  relatedTo: ['crossfade', 'stack-transition', 'view-transition', 'modal-slide-up'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'route-transition.tsx',
    content: `<AnimatePresence mode="popLayout">
  <motion.main key={pathname}
    initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
    transition={{ type: "spring", stiffness: 260, damping: 30 }}>
    <Outlet />
  </motion.main>
</AnimatePresence>`,
  },
};

function Screen({ v }: { v: number }) {
  return (
    <div className="flex h-full flex-col gap-2 bg-surface3 p-3">
      <span className="skel h-2 w-1/2" />
      <div
        className={`h-12 rounded-lg border ${v === 1 ? 'border-accent/30 bg-accent/15' : 'border-line bg-ink/[0.05]'}`}
      />
      <span className="skel h-1.5 w-3/4" />
      <span className="font-mono text-[9px] text-faint">{v === 0 ? '/home' : '/about'}</span>
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
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="absolute inset-0"
        >
          <Screen v={i} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
