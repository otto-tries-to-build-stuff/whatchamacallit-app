import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'reveal-stagger',
  name: 'Reveal Stagger',
  category: 'scroll-animations',
  commonality: 2,
  aliases: ['Staggered Reveal'],
  description:
    'Sibling elements like list items or cards animate in one after another with a small delay between each.',
  whenToUse: [
    'Lists, grids, or feature rows entering the viewport',
    'Guiding the eye through a sequence of items',
  ],
  whenNotToUse: [
    'Long lists — staggering dozens of items feels slow',
    'Content needed instantly',
  ],
  relatedTo: ['fade-in-on-view', 'split-text', 'letter-drop'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'reveal-stagger.tsx',
    content: `<motion.ul
  variants={{ show: { transition: { staggerChildren: 0.08 } } }}
  initial="hidden" whileInView="show">
  {items.map((i) => (
    <motion.li key={i}
      variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }} />
  ))}
</motion.ul>`,
  },
};

export default function Demo() {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <motion.ul
      key={k}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      className="w-[210px] space-y-2"
    >
      {[0, 1, 2, 3].map((i) => (
        <motion.li
          key={i}
          variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-2.5 rounded-lg border border-line bg-surface3 px-3 py-2"
        >
          <span className="h-6 w-6 shrink-0 rounded-md bg-accent/15" />
          <span className="skel h-1.5 w-2/3" />
        </motion.li>
      ))}
    </motion.ul>
  );
}
