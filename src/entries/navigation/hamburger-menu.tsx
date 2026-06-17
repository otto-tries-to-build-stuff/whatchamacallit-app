import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'hamburger-menu',
  name: 'Hamburger Menu',
  category: 'navigation',
  commonality: 2,
  aliases: ['Burger', 'Three-line Menu'],
  description:
    'A three-stacked-line icon that reveals a hidden navigation menu, usually a side drawer.',
  whenToUse: [
    'Mobile or compact layouts that must hide navigation to save space',
    'Secondary destinations that are fine behind one tap',
  ],
  whenNotToUse: [
    'Primary navigation on desktop — keep links visible',
    'When discoverability of nav items is critical',
  ],
  relatedTo: ['drawer', 'sidebar', 'icon-morph', 'bottom-sheet'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'hamburger-menu.tsx',
    content: `const [open, setOpen] = useState(false);

<button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
  <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
  <motion.span animate={{ opacity: open ? 0 : 1 }} />
  <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
</button>`,
  },
};

export default function Demo() {
  const [open, setOpen] = useState(false);
  const bar = 'block h-0.5 w-6 rounded-full bg-ink';
  return (
    <div className="relative flex h-32 w-[220px] items-start justify-start rounded-xl border border-line bg-surface3 p-3">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
        className="relative z-10 grid h-9 w-9 place-items-center gap-1 rounded-lg border border-line bg-surface2"
      >
        <motion.span className={bar} animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
        <motion.span className={bar} animate={{ opacity: open ? 0 : 1 }} />
        <motion.span className={bar} animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="absolute inset-y-2 left-14 flex w-32 flex-col gap-1 rounded-lg border border-line bg-surface2 p-2"
          >
            {['Home', 'Explore', 'Library', 'Settings'].map((l, i) => (
              <span
                key={l}
                className={`rounded px-2 py-1 text-[12px] ${i === 0 ? 'bg-accent/15 text-accent' : 'text-muted'}`}
              >
                {l}
              </span>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
