import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'stack-transition',
  name: 'Stack Transition',
  category: 'page-transitions',
  commonality: 3,
  aliases: ['Card Push'],
  description:
    'The departing page slides downward or back while the new page rises in front, creating a stack illusion.',
  whenToUse: [
    'Mobile navigation that conveys pushing onto a stack',
    'Hierarchical drill-down between screens',
  ],
  whenNotToUse: [
    'Peer-level views with no parent/child relationship',
    'Desktop layouts where depth feels out of place',
  ],
  relatedTo: ['modal-slide-up', 'card-stack', 'route-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'stack-transition.tsx',
    content: `<AnimatePresence>
  <motion.div key={route}
    initial={{ y: "100%" }} animate={{ y: 0 }}
    exit={{ scale: 0.9, y: 24, opacity: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 32 }} />
</AnimatePresence>`,
  },
};

function Screen({ v }: { v: number }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-line bg-surface3 p-3 shadow-xl">
      <span className="skel h-2 w-1/2" />
      <div
        className={`h-12 rounded-lg border ${v % 2 === 1 ? 'border-accent/30 bg-accent/15' : 'border-line bg-ink/[0.05]'}`}
      />
      <span className="font-mono text-[9px] text-faint">screen {v + 1}</span>
    </div>
  );
}

export default function Demo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => v + 1), 2300);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-[150px] w-[220px] overflow-hidden rounded-xl border border-line bg-surface2">
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ scale: 0.9, y: 22, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          className="absolute inset-0"
        >
          <Screen v={i} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
