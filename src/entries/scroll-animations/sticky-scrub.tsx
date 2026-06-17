import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'sticky-scrub',
  name: 'Sticky Scrub',
  category: 'scroll-animations',
  commonality: 3,
  aliases: ['Pinned Scrub Section'],
  description:
    'A section pins on screen while an internal animation progresses against scroll, then unpins.',
  whenToUse: [
    'Product reveals or step-throughs driven by scroll',
    'Storytelling where one scene evolves as you scroll',
  ],
  whenNotToUse: [
    'Simple pages — the effect is heavy to build and tune',
    'Reduced-motion or low-power contexts',
  ],
  relatedTo: ['scroll-linked-animation', 'pin-on-scroll', 'parallax-scrolling'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'sticky-scrub.tsx',
    content: `const { scrollYProgress } = useScroll({ container: ref });
const rotate = useTransform(scrollYProgress, [0, 1], [0, 270]);

<div className="sticky top-0">
  <motion.div style={{ rotate }} />
</div>`,
  },
};

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.1]);
  const radius = useTransform(scrollYProgress, [0, 1], [6, 28]);
  return (
    <div
      ref={ref}
      className="h-[150px] w-[220px] overflow-y-auto rounded-xl border border-line bg-surface2"
    >
      <div className="relative h-[420px]">
        <div className="sticky top-0 grid h-[150px] place-items-center">
          <motion.div
            style={{ rotate, scale, borderRadius: radius }}
            className="h-16 w-16 bg-accent"
          />
        </div>
      </div>
    </div>
  );
}
