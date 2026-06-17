import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'scroll-linked-animation',
  name: 'Scroll-linked Animation',
  category: 'scroll-animations',
  commonality: 3,
  aliases: ['Scrubbing Animation', 'Scroll-driven Animation'],
  description:
    'Animation progress tied directly to scroll position rather than playing on a timer.',
  whenToUse: [
    'Effects that should feel hand-controlled by the user',
    'Progress rings, draw-on paths, or reveals scrubbed by scroll',
  ],
  whenNotToUse: [
    'Animations better played once on view',
    'When scroll position is unreliable (virtualised lists)',
  ],
  relatedTo: ['scroll-progress-bar', 'sticky-scrub', 'parallax-scrolling'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'scroll-linked-animation.tsx',
    content: `const { scrollYProgress } = useScroll({ container: ref });

<motion.circle pathLength={1} style={{ pathLength: scrollYProgress }}
  fill="none" stroke="currentColor" strokeWidth={6} />`,
  },
};

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  return (
    <div
      ref={ref}
      className="h-[150px] w-[210px] overflow-y-auto rounded-xl border border-line bg-surface2"
    >
      <div className="relative h-[420px]">
        <div className="sticky top-0 grid h-[150px] place-items-center">
          <svg viewBox="0 0 100 100" className="h-20 w-20 -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(var(--surface-3))" strokeWidth="8" />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgb(var(--accent))"
              strokeWidth="8"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
