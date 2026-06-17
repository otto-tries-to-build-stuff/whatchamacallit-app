import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'hover-lift',
  name: 'Hover Lift',
  category: 'micro-interactions',
  commonality: 1,
  aliases: ['Lift on Hover', 'Card Lift', 'Raise'],
  description:
    'A card or button rising slightly — a small upward shift plus a deeper shadow — when the pointer hovers over it.',
  whenToUse: [
    'Signalling that a card or tile is clickable',
    'Adding gentle depth and tactility to a grid of items',
  ],
  whenNotToUse: [
    'Touch-only interfaces — there is no hover state to trigger it',
    'Dense lists where motion on every row becomes noisy',
  ],
  relatedTo: ['button-press', 'focus-ring', 'card', 'spotlight-effect'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'hover-lift-demo.tsx',
    content: `import { motion } from "framer-motion";

export function Demo() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-44 rounded-xl border bg-surface p-4 shadow-lg
                 transition-shadow hover:shadow-2xl"
    >
      <p className="font-medium">Hover me</p>
      <p className="text-sm text-muted">I rise to meet your cursor.</p>
    </motion.div>
  );
}`,
  },
};

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        whileHover={{ y: -6, boxShadow: '0 18px 40px -12px rgba(0,0,0,0.55)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-44 cursor-pointer rounded-xl border border-line bg-surface3 p-4 shadow-lg"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15">
          <Sparkles className="h-4 w-4 text-accent" strokeWidth={2} />
        </span>
        <p className="mt-3 text-[13px] font-medium text-ink">Hover me</p>
        <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">
          I rise to meet your cursor.
        </p>
      </motion.div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-faint">↑ hover to lift</p>
    </div>
  );
}
