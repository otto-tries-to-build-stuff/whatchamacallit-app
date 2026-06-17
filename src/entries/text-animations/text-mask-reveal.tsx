import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'text-mask-reveal',
  name: 'Text Mask Reveal',
  category: 'text-animations',
  commonality: 3,
  aliases: ['Mask Up', 'Wipe-in'],
  description:
    'Text is revealed by an animated mask sliding across it, via a clip-path animation.',
  whenToUse: [
    'Bold headline entrances with a crisp, directional wipe',
    'Line-by-line reveals in editorial layouts',
  ],
  whenNotToUse: [
    'Lots of small text — the effect gets fussy',
    'Reduced-motion contexts',
  ],
  relatedTo: ['scroll-reveal-mask', 'split-text', 'curtain-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'text-mask-reveal.tsx',
    content: `<span className="overflow-hidden">
  <motion.span className="inline-block"
    initial={{ y: "110%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}>
    {line}
  </motion.span>
</span>`,
  },
};

const LINES = ['Rise into', 'view, line', 'by line.'];

export default function Demo() {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div key={k} className="text-[20px] font-semibold leading-tight tracking-tight text-ink">
      {LINES.map((line, i) => (
        <span key={i} className="block overflow-hidden py-0.5">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
