import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'fade-in-on-view',
  name: 'Fade-in on View',
  category: 'scroll-animations',
  commonality: 1,
  aliases: ['Reveal on Scroll', 'Fade-in-up'],
  description: 'Content fades and slides into place as it enters the viewport.',
  whenToUse: [
    'Gently introducing sections as the user scrolls to them',
    'Adding polish to long marketing pages',
  ],
  whenNotToUse: [
    'Above-the-fold content users need immediately',
    'Reduced-motion preferences — provide a static fallback',
  ],
  relatedTo: ['reveal-stagger', 'scroll-reveal-mask', 'blur-in', 'split-text'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'fade-in-on-view.tsx',
    content: `<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-15%" }}
  transition={{ duration: 0.5, ease: "easeOut" }}>
  {children}
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
    <div key={k} className="w-[220px] space-y-2.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.18, duration: 0.5, ease: 'easeOut' }}
          className="rounded-lg border border-line bg-surface3 p-3"
        >
          <div className="mb-1.5 h-2 w-1/2 rounded-full bg-ink/15" />
          <div className="h-1.5 w-3/4 rounded-full bg-ink/[0.08]" />
        </motion.div>
      ))}
    </div>
  );
}
