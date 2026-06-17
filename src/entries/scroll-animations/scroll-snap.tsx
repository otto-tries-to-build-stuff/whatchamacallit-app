import { ChevronDown } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'scroll-snap',
  name: 'Scroll-snap',
  category: 'scroll-animations',
  commonality: 2,
  aliases: ['Snap Scrolling'],
  description:
    'Scrolling automatically settles on defined snap points, typically sections or cards.',
  whenToUse: [
    'Full-screen section storytelling or onboarding slides',
    'Horizontal card rows that should align cleanly',
  ],
  whenNotToUse: [
    'Continuous reading where snapping interrupts flow',
    'Content of varying, unpredictable heights',
  ],
  relatedTo: ['carousel', 'horizontal-scroll-section', 'pin-on-scroll'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'scroll-snap.css',
    content: `.container { scroll-snap-type: y mandatory; overflow-y: auto; }
.slide     { scroll-snap-align: start; height: 100%; }`,
  },
};

const SLIDES = [
  { n: 1, c: 'bg-accent/15 text-accent' },
  { n: 2, c: 'bg-sky-400/15 text-sky-300' },
  { n: 3, c: 'bg-violet-400/15 text-violet-300' },
];

export default function Demo() {
  return (
    <div className="relative w-[200px]">
      <div className="h-[150px] snap-y snap-mandatory overflow-y-auto rounded-xl border border-line">
        {SLIDES.map((s) => (
          <div
            key={s.n}
            className={`flex h-[150px] snap-start items-center justify-center font-mono text-[13px] ${s.c}`}
          >
            Section {s.n}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 font-mono text-[9px] text-faint">
        snap <ChevronDown className="h-3 w-3 animate-bounce" />
      </div>
    </div>
  );
}
