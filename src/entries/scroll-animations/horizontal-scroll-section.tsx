import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'horizontal-scroll-section',
  name: 'Horizontal Scroll Section',
  category: 'scroll-animations',
  commonality: 3,
  aliases: ['Side-scrolling Section'],
  description:
    'A pinned section where vertical scroll translates content horizontally across the viewport.',
  whenToUse: [
    'Showcasing a sequence (steps, gallery, timeline) horizontally',
    'Breaking the vertical rhythm for a featured run of cards',
  ],
  whenNotToUse: [
    'Content users must skim quickly',
    'Touch contexts where hijacking scroll frustrates',
  ],
  relatedTo: ['scroll-snap', 'sticky-scrub', 'carousel'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'horizontal-scroll-section.tsx',
    content: `const { scrollYProgress } = useScroll({ container: ref });
const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

<div className="sticky top-0 overflow-hidden">
  <motion.div style={{ x }} className="flex">{cards}</motion.div>
</div>`,
  },
};

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-62%']);
  return (
    <div
      ref={ref}
      className="h-[150px] w-[220px] overflow-y-auto rounded-xl border border-line bg-surface2"
    >
      <div className="relative h-[380px]">
        <div className="sticky top-0 flex h-[150px] items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`grid h-24 w-28 shrink-0 place-items-center rounded-xl border font-mono text-[12px] ${
                  n === 1 ? 'border-accent/40 bg-accent/15 text-accent' : 'border-line bg-surface3 text-muted'
                }`}
              >
                {n}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
