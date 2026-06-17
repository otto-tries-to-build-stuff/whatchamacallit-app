import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'toast',
  name: 'Toast',
  category: 'feedback',
  commonality: 1,
  aliases: ['Snackbar', 'Flash Message', 'Notification'],
  description:
    'A small auto-dismissing notification that appears briefly — usually in a screen corner — to confirm an action.',
  whenToUse: [
    'Confirming a background action succeeded ("Saved", "Copied")',
    'Low-priority, non-blocking feedback the user can ignore',
  ],
  whenNotToUse: [
    'Errors that need a decision — use an inline alert or dialog',
    'Messages that must persist — toasts vanish on their own',
  ],
  relatedTo: ['inline-alert', 'banner', 'modal-dialog', 'dot-indicator'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'toast-demo.tsx',
    content: `import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

export function Toast({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          className="relative overflow-hidden rounded-lg border bg-surface p-3 shadow-2xl"
        >
          <div className="flex items-start gap-2.5">
            <Check className="text-accent" />
            <div>
              <p className="font-medium">Changes saved</p>
              <p className="text-sm text-muted">Your project is up to date.</p>
            </div>
          </div>
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 3.2, ease: "linear" }}
            className="absolute bottom-0 left-0 h-0.5 bg-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}`,
  },
};

export default function Demo() {
  const [open, setOpen] = useState(true);

  // Loop the toast so the teaching artifact stays lively without interaction.
  useEffect(() => {
    let showTimer: number;
    let hideTimer: number;
    function cycle() {
      setOpen(true);
      hideTimer = window.setTimeout(() => {
        setOpen(false);
        showTimer = window.setTimeout(cycle, 1300);
      }, 3200);
    }
    cycle();
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="relative h-36 w-[260px]">
      <div className="flex h-full items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border border-line bg-surface3 px-3 py-1.5 text-[12.5px] text-ink transition-colors hover:border-ink/20"
        >
          Save changes
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="absolute bottom-0 right-0 w-[220px] overflow-hidden rounded-lg border border-line bg-surface3 p-2.5 shadow-2xl"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                <Check className="h-3 w-3 text-accent" strokeWidth={3} />
              </span>
              <div className="space-y-0.5">
                <p className="text-[12px] font-medium text-ink">Changes saved</p>
                <p className="text-[11px] leading-relaxed text-muted">Your project is up to date.</p>
              </div>
            </div>
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: 0 }}
              transition={{ duration: 3.2, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-0.5 bg-accent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
