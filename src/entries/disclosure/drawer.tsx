import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'drawer',
  name: 'Drawer',
  category: 'disclosure',
  commonality: 2,
  aliases: ['Sheet', 'Off-canvas', 'Side Panel'],
  description:
    'A panel that slides in from a screen edge to display secondary content or navigation.',
  whenToUse: [
    'Secondary navigation or detail that should overlay, not replace, the page',
    'Filters, carts, or settings invoked on demand',
  ],
  whenNotToUse: [
    'A focused decision that must block the flow — use a modal dialog',
    'Always-needed navigation on desktop — use a sidebar',
  ],
  relatedTo: ['modal-dialog', 'bottom-sheet', 'sidebar', 'hamburger-menu'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'drawer.tsx',
    content: `<AnimatePresence>
  {open && (
    <>
      <motion.div className="overlay" onClick={close} />
      <motion.aside
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        className="fixed inset-y-0 right-0 w-80 border-l" />
    </>
  )}
</AnimatePresence>`,
  },
};

export default function Demo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-32 w-[240px] overflow-hidden rounded-xl border border-line bg-surface2">
      <div className="space-y-2 p-3 opacity-60">
        <span className="skel h-1.5 w-2/3" />
        <span className="skel h-1.5 w-1/2" />
        <button
          onClick={() => setOpen(true)}
          className="mt-1 rounded-md border border-line bg-surface3 px-2.5 py-1 text-[11px] text-ink"
        >
          Open panel
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
              className="absolute inset-0 bg-bg/55"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="absolute inset-y-0 right-0 w-2/3 border-l border-line bg-surface3 p-3 shadow-2xl"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[12px] font-medium text-ink">Details</span>
                <button onClick={() => setOpen(false)} className="text-faint hover:text-ink">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="space-y-1.5">
                <span className="skel h-1.5 w-full" />
                <span className="skel h-1.5 w-4/5" />
                <span className="skel h-1.5 w-3/5" />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
