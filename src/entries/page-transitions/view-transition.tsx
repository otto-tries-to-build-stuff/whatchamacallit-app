import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'view-transition',
  name: 'View Transition',
  category: 'page-transitions',
  commonality: 3,
  aliases: ['Native View Transition'],
  description:
    'Browser-native cross-route or cross-state transitions using the View Transition API.',
  whenToUse: [
    'Modern browsers where you want smooth, declarative transitions',
    'Animating DOM state changes without manual FLIP work',
  ],
  whenNotToUse: [
    'Browsers without support — provide a graceful fallback',
    'When you need fine frame-by-frame control',
  ],
  relatedTo: ['crossfade', 'route-transition', 'shared-element-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'view-transition.tsx',
    content: `if (document.startViewTransition) {
  document.startViewTransition(() => setRoute(next));
} else {
  setRoute(next); // fallback
}`,
  },
};

function Screen({ v }: { v: number }) {
  return (
    <div className="flex h-full flex-col gap-2 bg-surface3 p-3">
      <span className="skel h-2 w-1/2" />
      <div
        className={`h-12 rounded-lg border ${v === 1 ? 'border-accent/30 bg-accent/15' : 'border-line bg-ink/[0.05]'}`}
      />
      <span className="font-mono text-[9px] text-faint">::view-transition</span>
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
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Screen v={i} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
