import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'modal-slide-up',
  name: 'Modal Slide-up',
  category: 'page-transitions',
  commonality: 2,
  aliases: ['Sheet Transition'],
  description:
    'A new view animates up from the bottom edge over the current view, with the underlying view receding slightly.',
  whenToUse: [
    'Presenting a detail or compose view over the current screen',
    'Mobile-style modal navigation',
  ],
  whenNotToUse: [
    'Full route changes with no parent context',
    'Desktop layouts where a centred dialog fits better',
  ],
  relatedTo: ['bottom-sheet', 'modal-dialog', 'stack-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'modal-slide-up.tsx',
    content: `<motion.div animate={{ scale: open ? 0.94 : 1, opacity: open ? 0.6 : 1 }}>
  <BasePage />
</motion.div>
<AnimatePresence>
  {open && <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} />}
</AnimatePresence>`,
  },
};

function Base() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <span className="skel h-2 w-1/2" />
      <span className="skel h-1.5 w-3/4" />
      <span className="skel h-1.5 w-2/3" />
    </div>
  );
}

export default function Demo() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setOpen((o) => !o), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-[150px] w-[220px] overflow-hidden rounded-xl border border-line bg-surface2">
      <motion.div
        animate={{ scale: open ? 0.93 : 1, opacity: open ? 0.5 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-surface3"
      >
        <Base />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="absolute inset-x-0 bottom-0 top-7 rounded-t-2xl border-t border-line bg-surface3 p-3 shadow-2xl"
          >
            <div className="mx-auto mb-2.5 h-1 w-9 rounded-full bg-faint" />
            <span className="skel mb-2 h-2 w-1/3" />
            <div className="h-10 rounded-lg border border-accent/30 bg-accent/15" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
