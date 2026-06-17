import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'scroll-progress-bar',
  name: 'Scroll Progress Bar',
  category: 'scroll-animations',
  commonality: 2,
  aliases: ['Reading Progress'],
  description:
    'A thin bar at the top of the viewport indicating how far through the page the user has scrolled.',
  whenToUse: [
    'Long articles and docs where reading progress reassures',
    'Signalling how much content remains',
  ],
  whenNotToUse: [
    'Short pages where progress is obvious',
    'Apps where scroll is not the primary interaction',
  ],
  relatedTo: ['scroll-linked-animation', 'progress-bar', 'sticky-section'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'scroll-progress-bar.tsx',
    content: `const { scrollYProgress } = useScroll();

<motion.div
  style={{ scaleX: scrollYProgress }}
  className="fixed inset-x-0 top-0 h-1 origin-left bg-accent" />`,
  },
};

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  return (
    <div className="w-[220px] overflow-hidden rounded-xl border border-line">
      <div className="relative h-1.5 w-full bg-surface2">
        <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-accent" />
      </div>
      <div ref={ref} className="h-[140px] space-y-2 overflow-y-auto bg-surface3 p-3">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="h-2 rounded-full bg-ink/[0.07]" style={{ width: `${60 + (i % 4) * 12}%` }} />
        ))}
      </div>
    </div>
  );
}
