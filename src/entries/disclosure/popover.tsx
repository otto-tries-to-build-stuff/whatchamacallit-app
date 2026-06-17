import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Link2 } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'popover',
  name: 'Popover',
  category: 'disclosure',
  commonality: 2,
  aliases: ['Floating Panel'],
  description:
    'A non-modal floating container anchored to a trigger, used to show extra information, controls, or a small form without leaving the page.',
  whenToUse: [
    'Secondary controls or details tied to a specific element',
    'Small forms (share, filter, edit) that should not block the page',
  ],
  whenNotToUse: [
    'A list of actions — use a dropdown menu',
    'Flows that must be completed before continuing — use a dialog',
  ],
  relatedTo: ['tooltip', 'dropdown-menu', 'hovercard', 'modal-dialog'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'popover.tsx',
    content: `const [open, setOpen] = useState(false);

<div className="relative">
  <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>Share</button>
  {open && (
    <div role="dialog" className="absolute top-full mt-2 rounded-lg border p-3 shadow-xl">
      {/* link field + copy button */}
    </div>
  )}
</div>`,
  },
};

export default function Demo() {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-line bg-surface3 px-3 py-1.5 text-[12.5px] text-ink"
      >
        <Link2 className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
        Share
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            className="absolute top-full z-10 mt-2 w-52 rounded-lg border border-line bg-surface3 p-3 shadow-2xl"
          >
            <p className="mb-2 text-[11px] font-medium text-ink">Share this page</p>
            <div className="flex items-center gap-1.5 rounded-md border border-line bg-surface2 p-1 pl-2">
              <span className="flex-1 truncate font-mono text-[10px] text-muted">wcm.app/x9f2</span>
              <button
                onClick={() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1200);
                }}
                className="grid h-6 w-6 place-items-center rounded bg-accent text-accent-ink"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
