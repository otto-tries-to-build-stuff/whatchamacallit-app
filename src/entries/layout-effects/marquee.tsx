import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'marquee',
  name: 'Marquee',
  category: 'layout-effects',
  commonality: 2,
  aliases: ['Ticker', 'Scroller'],
  description:
    'A continuously scrolling horizontal strip of text, logos, or images, looping seamlessly.',
  whenToUse: [
    'Logo walls, testimonials, or announcements that loop',
    'Adding gentle motion to an otherwise static band',
  ],
  whenNotToUse: [
    'Content users must read carefully — motion hurts legibility',
    'Accessibility-sensitive contexts without a pause control',
  ],
  relatedTo: ['marquee-text', 'carousel', 'full-bleed'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'marquee.tsx',
    content: `<div className="overflow-hidden">
  <motion.div className="flex gap-6"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 8, ease: "linear", repeat: Infinity }}>
    {[...items, ...items].map((it, i) => <Item key={i}>{it}</Item>)}
  </motion.div>
</div>`,
  },
};

const ITEMS = ['Acme', 'Globex', 'Initech', 'Umbrella', 'Stark', 'Wayne'];

export default function Demo() {
  return (
    <div className="w-[240px]">
      <div className="relative overflow-hidden rounded-xl border border-line bg-surface3 py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 9, ease: 'linear', repeat: Infinity }}
        >
          {[...ITEMS, ...ITEMS].map((it, i) => (
            <span key={i} className="font-mono text-[13px] font-semibold text-muted">
              {it}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
