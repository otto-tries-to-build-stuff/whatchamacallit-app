import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'blur-in',
  name: 'Blur In',
  category: 'text-animations',
  commonality: 2,
  aliases: ['Defocus Reveal'],
  description: 'Text fades in from a blurred state to crisp focus.',
  whenToUse: [
    'Soft, elegant entrances for headlines',
    'Pairing with fade or rise for depth',
  ],
  whenNotToUse: [
    'Body text — blur on small type is hard to read mid-animation',
    'Reduced-motion contexts',
  ],
  relatedTo: ['fade-in-on-view', 'split-text', 'gradient-shimmer'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'blur-in.tsx',
    content: `<motion.h2
  initial={{ opacity: 0, filter: "blur(12px)" }}
  animate={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.8, ease: "easeOut" }}>
  In sharp focus
</motion.h2>`,
  },
};

export default function Demo() {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="text-center">
      <motion.h2
        key={k}
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-[22px] font-semibold tracking-tight text-ink"
      >
        In sharp focus
      </motion.h2>
      <motion.p
        key={`s-${k}`}
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-1 text-[12px] text-muted"
      >
        from a soft haze
      </motion.p>
    </div>
  );
}
