import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'scroll-reveal-mask',
  name: 'Scroll Reveal Mask',
  category: 'scroll-animations',
  commonality: 3,
  aliases: ['Wipe Reveal'],
  description:
    'Content is unmasked left-to-right or bottom-to-top as it enters the viewport, via an animated clip-path.',
  whenToUse: [
    'Headlines and images that benefit from a crisp wipe-in',
    'Editorial reveals with a strong directional feel',
  ],
  whenNotToUse: [
    'Lots of elements at once — wipes compound into chaos',
    'Reduced-motion contexts',
  ],
  relatedTo: ['fade-in-on-view', 'text-mask-reveal', 'curtain-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'scroll-reveal-mask.tsx',
    content: `<motion.div
  initial={{ clipPath: "inset(0 100% 0 0)" }}
  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
  transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}>
  {content}
</motion.div>`,
  },
};

export default function Demo() {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-[220px] space-y-2.5">
      <motion.div
        key={k}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className="rounded-lg bg-gradient-to-r from-accent/40 to-accent/10 px-3 py-2.5 text-[14px] font-semibold text-ink"
      >
        Revealed by mask
      </motion.div>
      <motion.div
        key={`b-${k}`}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ delay: 0.15, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className="space-y-1.5"
      >
        <div className="h-1.5 w-3/4 rounded-full bg-ink/15" />
        <div className="h-1.5 w-1/2 rounded-full bg-ink/[0.08]" />
      </motion.div>
    </div>
  );
}
