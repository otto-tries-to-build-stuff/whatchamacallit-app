import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'marquee-text',
  name: 'Marquee Text',
  category: 'text-animations',
  commonality: 2,
  aliases: ['Scrolling Text', 'News Ticker'],
  description: 'Text continuously scrolls horizontally across a fixed-width container.',
  whenToUse: [
    'Tickers for headlines, prices, or status',
    'Decorative looping phrases in a band',
  ],
  whenNotToUse: [
    'Important text users must read in full',
    'Without a pause control in accessible contexts',
  ],
  relatedTo: ['marquee', 'rotating-words', 'gradient-shimmer'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'marquee-text.tsx',
    content: `<div className="overflow-hidden whitespace-nowrap">
  <motion.div className="inline-flex"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 10, ease: "linear", repeat: Infinity }}>
    {text} · {text} ·
  </motion.div>
</div>`,
  },
};

export default function Demo() {
  const phrase = 'BREAKING · you know the thing but not its name · ';
  return (
    <div className="w-[240px] overflow-hidden rounded-lg border-y border-line bg-surface3 py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max whitespace-nowrap font-mono text-[12px] font-medium text-ink"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
      >
        <span>{phrase.repeat(2)}</span>
        <span>{phrase.repeat(2)}</span>
      </motion.div>
    </div>
  );
}
