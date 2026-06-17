import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Info } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'toggle-tip',
  name: 'Toggle Tip',
  category: 'disclosure',
  commonality: 4,
  aliases: ['Tap Tooltip'],
  description:
    'A touch-friendly tooltip variant triggered by tapping a dedicated info icon rather than hovering.',
  whenToUse: [
    'Explaining a field or term on touch devices where hover fails',
    'Optional help anchored to a small info affordance',
  ],
  whenNotToUse: [
    'Labelling controls — a plain tooltip or visible label is clearer',
    'Long or interactive content — use a popover',
  ],
  relatedTo: ['tooltip', 'popover', 'form-field'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'toggle-tip.tsx',
    content: `const [open, setOpen] = useState(false);

<button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
  <Info />
</button>
{open && <span role="status">Your handle is public.</span>}`,
  },
};

export default function Demo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex items-center gap-2">
      <span className="text-[12.5px] text-ink">Username</span>
      <div className="relative flex items-center">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="grid h-5 w-5 place-items-center rounded-full text-faint hover:text-ink"
        >
          <Info className="h-4 w-4" strokeWidth={2} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              role="status"
              className="absolute left-full ml-2 w-40 rounded-lg border border-line bg-surface3 px-2.5 py-1.5 text-[11px] leading-relaxed text-muted shadow-xl"
            >
              Your handle is public and appears on your profile.
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
