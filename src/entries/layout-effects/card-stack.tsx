import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'card-stack',
  name: 'Card Stack',
  category: 'layout-effects',
  commonality: 3,
  aliases: ['Stacked Cards', 'Deck'],
  description:
    'A pile of cards offset behind one another, suggesting depth and sequence — like a swipeable deck.',
  whenToUse: [
    'Swipe-to-decide interfaces and onboarding decks',
    'Hinting that more items sit behind the current one',
  ],
  whenNotToUse: [
    'When users need to compare items side by side',
    'Long collections better shown in a grid or list',
  ],
  relatedTo: ['carousel', 'gallery', 'flip-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'card-stack.tsx',
    content: `{cards.map((card, i) => (
  <motion.div key={card.id}
    animate={{ y: i * 10, scale: 1 - i * 0.05, zIndex: cards.length - i }}
    className="absolute" />
))}`,
  },
};

const LABELS = ['One', 'Two', 'Three'];

export default function Demo() {
  const [order, setOrder] = useState([0, 1, 2]);
  useEffect(() => {
    const id = setInterval(() => setOrder((o) => [...o.slice(1), o[0]]), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative grid h-[140px] w-[150px] place-items-center">
      {order.map((label, depth) => (
        <motion.div
          key={label}
          animate={{ y: depth * 12, scale: 1 - depth * 0.07, opacity: 1 - depth * 0.22 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ zIndex: order.length - depth }}
          className="absolute grid h-24 w-32 place-items-center rounded-xl border border-line bg-surface3 shadow-xl"
        >
          {depth === 0 && (
            <span className="font-mono text-[12px] text-accent">{LABELS[label]}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
