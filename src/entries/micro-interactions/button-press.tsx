import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'button-press',
  name: 'Button Press',
  category: 'micro-interactions',
  commonality: 1,
  aliases: ['Tap Feedback', 'Press Effect'],
  description:
    'A small scale or colour change on button click giving immediate tactile feedback.',
  whenToUse: [
    'Confirming a tap registered, especially on touch',
    'Adding life to primary actions',
  ],
  whenNotToUse: [
    'When motion would feel sluggish on rapid repeated clicks',
    'Reduced-motion preferences — keep it subtle',
  ],
  relatedTo: ['ripple', 'hover-lift', 'focus-ring'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'button-press.tsx',
    content: `<motion.button
  whileTap={{ scale: 0.94 }}
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}>
  Press me
</motion.button>`,
  },
};

export default function Demo() {
  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="rounded-xl bg-accent px-5 py-2.5 text-[13px] font-semibold text-accent-ink shadow-lg shadow-accent/20"
    >
      Press me
    </motion.button>
  );
}
