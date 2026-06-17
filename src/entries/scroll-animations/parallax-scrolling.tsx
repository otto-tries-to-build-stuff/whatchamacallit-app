import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'parallax-scrolling',
  name: 'Parallax Scrolling',
  category: 'scroll-animations',
  commonality: 1,
  aliases: ['Depth Scroll', 'Multi-layer Scroll'],
  description:
    'Background and foreground layers move at different speeds while scrolling, creating a sense of depth.',
  whenToUse: [
    'Hero and story sections that want cinematic depth',
    'Layered imagery where depth reinforces the content',
  ],
  whenNotToUse: [
    'Text-heavy or utilitarian pages',
    'Performance-sensitive or reduced-motion contexts',
  ],
  relatedTo: ['scroll-linked-animation', 'sticky-scrub', 'aurora-background'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'parallax-scrolling.tsx',
    content: `const { scrollYProgress } = useScroll({ container: ref });
const back = useTransform(scrollYProgress, [0, 1], [0, -30]);
const front = useTransform(scrollYProgress, [0, 1], [0, -90]);

<motion.div style={{ y: back }} />   {/* slow */}
<motion.div style={{ y: front }} />  {/* fast */}`,
  },
};

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const back = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const mid = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const front = useTransform(scrollYProgress, [0, 1], [0, -110]);
  return (
    <div className="relative w-[230px]">
      <div
        ref={ref}
        className="h-[150px] overflow-y-auto rounded-xl border border-line bg-surface2"
      >
        <div className="relative h-[360px]">
          <motion.div
            style={{ y: back }}
            className="absolute left-6 top-10 h-20 w-28 rounded-lg border border-line bg-ink/[0.04]"
          />
          <motion.div
            style={{ y: mid }}
            className="absolute left-16 top-16 h-20 w-24 rounded-lg border border-line bg-ink/[0.07]"
          />
          <motion.div
            style={{ y: front }}
            className="absolute left-28 top-6 h-20 w-20 rounded-lg border border-accent/40 bg-accent/15"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 font-mono text-[9px] text-faint">
        scroll <ChevronDown className="h-3 w-3 animate-bounce" />
      </div>
    </div>
  );
}
