import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'confetti',
  name: 'Confetti',
  category: 'micro-interactions',
  commonality: 3,
  aliases: ['Success Burst', 'Celebration'],
  description:
    'A celebratory shower of coloured particles triggered on a major success event.',
  whenToUse: [
    'Milestones worth celebrating (sign-up complete, goal reached)',
    'Rare, delightful moments — used sparingly',
  ],
  whenNotToUse: [
    'Routine actions — celebration loses meaning if constant',
    'Serious or professional flows',
  ],
  relatedTo: ['like-burst', 'toast', 'button-press'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'confetti.tsx',
    content: `{pieces.map((p) => (
  <motion.span key={p.id}
    initial={{ x: 0, y: 0, opacity: 1 }}
    animate={{ x: p.x, y: p.y, rotate: p.r, opacity: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    style={{ background: p.color }} />
))}`,
  },
};

const COLORS = ['#c5f24a', '#38bdf8', '#a78bfa', '#f472b6', '#fb923c'];
const PIECES = Array.from({ length: 16 }, (_, i) => ({
  x: (Math.random() - 0.5) * 150,
  y: -40 - Math.random() * 70,
  r: Math.random() * 360,
  color: COLORS[i % COLORS.length],
}));

export default function Demo() {
  const [burst, setBurst] = useState(0);
  return (
    <button onClick={() => setBurst((b) => b + 1)} className="relative">
      <span className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-[13px] font-semibold text-accent-ink">
        <PartyPopper className="h-4 w-4" strokeWidth={2.2} />
        Celebrate
      </span>
      <AnimatePresence>
        {burst > 0 && (
          <span key={burst} className="pointer-events-none absolute left-1/2 top-1/2">
            {PIECES.map((p, i) => (
              <motion.span
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: p.x, y: p.y, rotate: p.r, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                style={{ background: p.color }}
                className="absolute h-1.5 w-1.5 rounded-[1px]"
              />
            ))}
          </span>
        )}
      </AnimatePresence>
    </button>
  );
}
