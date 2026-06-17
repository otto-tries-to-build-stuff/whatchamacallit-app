import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'rotating-words',
  name: 'Rotating Words',
  category: 'text-animations',
  commonality: 2,
  aliases: ['Word Swap', 'Word Carousel'],
  description:
    'A single word in a phrase cycles through alternatives, e.g. "Build something fast / beautiful / together".',
  whenToUse: [
    'Headlines that pack several value props into one line',
    'Keeping a hero lively without a full animation',
  ],
  whenNotToUse: [
    'When the swapping word causes layout shift that distracts',
    'Critical text that should not move',
  ],
  relatedTo: ['typewriter', 'split-text', 'marquee-text'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'rotating-words.tsx',
    content: `<AnimatePresence mode="wait">
  <motion.span key={word}
    initial={{ y: 16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -16, opacity: 0 }}>
    {word}
  </motion.span>
</AnimatePresence>`,
  },
};

const WORDS = ['fast', 'beautiful', 'together'];

export default function Demo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % WORDS.length), 1700);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="flex items-center gap-1.5 text-[18px] font-semibold text-ink">
      Build something
      <span className="relative inline-grid h-7 w-24 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="absolute text-accent"
          >
            {WORDS[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}
