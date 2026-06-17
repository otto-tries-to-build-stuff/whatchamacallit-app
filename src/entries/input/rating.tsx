import { useState } from 'react';
import { Star } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'rating',
  name: 'Rating',
  category: 'input',
  commonality: 3,
  aliases: ['Star Rating'],
  description:
    'A row of icons (usually stars) the user clicks to rate something on a discrete scale.',
  whenToUse: [
    'Collecting a quick subjective score (reviews, feedback)',
    'Displaying an average rating',
  ],
  whenNotToUse: [
    'Precise or wide-range values — use a slider or number input',
    'Binary sentiment — use thumbs up/down',
  ],
  relatedTo: ['slider', 'like-burst', 'segmented-control'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'rating.tsx',
    content: `{[1, 2, 3, 4, 5].map((n) => (
  <button key={n} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
    onClick={() => setValue(n)} aria-label={n + " stars"}>
    <Star className={n <= (hover || value) ? "fill-accent" : ""} />
  </button>
))}`,
  },
};

export default function Demo() {
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => {
        const lit = n <= (hover || value);
        return (
          <button
            key={n}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setValue(n)}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={cn(
                'h-7 w-7 transition-colors',
                lit ? 'fill-accent text-accent' : 'fill-transparent text-faint',
              )}
              strokeWidth={1.8}
            />
          </button>
        );
      })}
    </div>
  );
}
