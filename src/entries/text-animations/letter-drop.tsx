import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'letter-drop',
  name: 'Letter Drop',
  category: 'text-animations',
  commonality: 4,
  aliases: ['Drop In'],
  description:
    'Letters fall into place from above, settling into position one or several at a time.',
  whenToUse: [
    'Playful titles and logos with a bouncy entrance',
    'Short words where each letter can shine',
  ],
  whenNotToUse: [
    'Long passages — dropping every letter is slow',
    'Reduced-motion contexts',
  ],
  relatedTo: ['split-text', 'wavy-text', 'reveal-stagger'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'letter-drop.tsx',
    content: `{[...text].map((ch, i) => (
  <motion.span key={i} className="inline-block"
    initial={{ y: -28, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: i * 0.07, type: "spring", stiffness: 320, damping: 16 }}>
    {ch}
  </motion.span>
))}`,
  },
};

const TEXT = 'DROP';

export default function Demo() {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <div key={k} className="flex gap-1 text-[34px] font-bold tracking-tight">
      {[...TEXT].map((ch, i) => (
        <motion.span
          key={i}
          className={i === 1 ? 'inline-block text-accent' : 'inline-block text-ink'}
          initial={{ y: -28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.09, type: 'spring', stiffness: 320, damping: 15 }}
        >
          {ch}
        </motion.span>
      ))}
    </div>
  );
}
