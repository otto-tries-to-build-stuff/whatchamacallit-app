import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'wavy-text',
  name: 'Wavy Text',
  category: 'text-animations',
  commonality: 3,
  aliases: ['Wave Animation'],
  description:
    'Letters rise and fall in a sine wave, giving text a gentle undulating motion.',
  whenToUse: [
    'Playful branding, loading labels, or fun headings',
    'Adding life to a short, friendly phrase',
  ],
  whenNotToUse: [
    'Professional or dense contexts',
    'Long text — the motion becomes distracting',
  ],
  relatedTo: ['split-text', 'letter-drop', 'marquee-text'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'wavy-text.tsx',
    content: `{[...text].map((ch, i) => (
  <motion.span key={i} className="inline-block"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}>
    {ch}
  </motion.span>
))}`,
  },
};

const TEXT = 'wavy text';

export default function Demo() {
  return (
    <p className="text-[26px] font-semibold tracking-tight text-ink">
      {[...TEXT].map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
        >
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </p>
  );
}
