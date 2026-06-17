import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'bottom-sheet',
  name: 'Bottom Sheet',
  category: 'disclosure',
  commonality: 2,
  aliases: ['Mobile Drawer'],
  description:
    'A drawer that slides up from the bottom of the screen, common on mobile for actions or secondary detail.',
  whenToUse: [
    'Mobile actions or detail invoked from a list item',
    'When a panel should rise within thumb reach',
  ],
  whenNotToUse: [
    'Desktop layouts — use a popover, dialog or side drawer',
    'Blocking decisions — use a confirmation dialog',
  ],
  relatedTo: ['drawer', 'modal-dialog', 'context-menu', 'bottom-nav'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'bottom-sheet.tsx',
    content: `<AnimatePresence>
  {open && (
    <motion.div
      initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute inset-x-0 bottom-0 rounded-t-2xl border-t">
      <div className="mx-auto h-1 w-10 rounded-full bg-muted" /> {/* grabber */}
    </motion.div>
  )}
</AnimatePresence>`,
  },
};

export default function Demo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-[150px] w-[200px] overflow-hidden rounded-[20px] border border-line bg-surface2">
      <div className="flex h-full items-start justify-center p-3">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md border border-line bg-surface3 px-2.5 py-1 text-[11px] text-ink"
        >
          Open sheet
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-bg/50"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute inset-x-0 bottom-0 rounded-t-2xl border-t border-line bg-surface3 p-3 shadow-2xl"
            >
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-faint" />
              <div className="space-y-1.5">
                {['Edit', 'Duplicate', 'Delete'].map((a, i) => (
                  <div
                    key={a}
                    className={`rounded-md px-2 py-1.5 text-[12px] ${i === 0 ? 'bg-accent/15 text-accent' : 'text-muted'}`}
                  >
                    {a}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
