import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'carousel',
  name: 'Carousel',
  category: 'selection-display',
  commonality: 2,
  aliases: ['Slider', 'Slideshow'],
  description:
    'A horizontally scrolling sequence of slides, typically with arrows and indicator dots, showing one or a few at a time.',
  whenToUse: [
    'Showcasing a few featured items in limited space',
    'Image galleries or onboarding slides',
  ],
  whenNotToUse: [
    'Important content that may be missed off-screen',
    'Long lists users should scan — show them directly',
  ],
  relatedTo: ['gallery', 'card-stack', 'scroll-snap', 'grid'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'carousel.tsx',
    content: `<AnimatePresence mode="wait">
  <motion.div key={index}
    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}>
    {slides[index]}
  </motion.div>
</AnimatePresence>`,
  },
};

const COLORS = ['from-accent/40', 'from-sky-400/40', 'from-violet-400/40'];

export default function Demo() {
  const [i, setI] = useState(0);
  const move = (d: number) => setI((p) => (p + d + COLORS.length) % COLORS.length);
  return (
    <div className="w-[230px]">
      <div className="flex items-center gap-2">
        <button
          onClick={() => move(-1)}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-muted hover:text-ink"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="relative h-24 flex-1 overflow-hidden rounded-xl border border-line">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className={cn('grid h-full w-full place-items-center bg-gradient-to-br to-transparent font-mono text-[12px] text-ink', COLORS[i])}
            >
              Slide {i + 1}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={() => move(1)}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-muted hover:text-ink"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-2.5 flex justify-center gap-1.5">
        {COLORS.map((_, d) => (
          <button
            key={d}
            onClick={() => setI(d)}
            className={cn('h-1.5 rounded-full transition-all', d === i ? 'w-4 bg-accent' : 'w-1.5 bg-ink/20')}
          />
        ))}
      </div>
    </div>
  );
}
