import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'like-burst',
  name: 'Like Burst',
  category: 'micro-interactions',
  commonality: 3,
  aliases: ['Heart Burst', 'Reaction Animation'],
  description:
    'A playful particle or scale burst when toggling a "like" or reaction.',
  whenToUse: [
    'Rewarding a positive action (like, favourite, react)',
    'Adding delight to social interactions',
  ],
  whenNotToUse: [
    'Frequent, utilitarian toggles where it gets tiresome',
    'Serious or data-heavy contexts',
  ],
  relatedTo: ['confetti', 'button-press', 'pulse', 'rating'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'like-burst.tsx',
    content: `<button onClick={() => setLiked((l) => !l)}>
  <motion.span animate={{ scale: liked ? [1, 1.4, 1] : 1 }}>
    <Heart className={liked ? "fill-red-500" : ""} />
  </motion.span>
  {liked && particles.map((p) => <motion.span key={p} animate={{ x: p.x, y: p.y, opacity: 0 }} />)}
</button>`,
  },
};

const PARTICLES = Array.from({ length: 6 }, (_, i) => {
  const a = (i / 6) * Math.PI * 2;
  return { x: Math.cos(a) * 26, y: Math.sin(a) * 26 };
});

export default function Demo() {
  const [liked, setLiked] = useState(false);
  return (
    <button
      onClick={() => setLiked((l) => !l)}
      className="relative grid h-16 w-16 place-items-center"
      aria-pressed={liked}
    >
      <motion.span
        key={liked ? 'on' : 'off'}
        animate={{ scale: liked ? [1, 1.45, 1] : 1 }}
        transition={{ duration: 0.35 }}
      >
        <Heart
          className={cn(
            'h-9 w-9 transition-colors',
            liked ? 'fill-red-500 text-red-500' : 'fill-transparent text-faint',
          )}
          strokeWidth={1.8}
        />
      </motion.span>
      <AnimatePresence>
        {liked &&
          PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{ x: p.x, y: p.y, scale: 0, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-red-400"
            />
          ))}
      </AnimatePresence>
    </button>
  );
}
