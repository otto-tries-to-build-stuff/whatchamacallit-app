import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'shared-element-transition',
  name: 'Shared-element Transition',
  category: 'page-transitions',
  commonality: 2,
  aliases: ['Magic Move', 'Layout Animation', 'FLIP Animation'],
  description:
    'An element appears to morph from its position on one page to a new position on the next, preserving identity across the transition.',
  whenToUse: [
    'Thumbnail-to-detail expansions (gallery, product, playlist)',
    'Reinforcing that the same object carried across views',
  ],
  whenNotToUse: [
    'When no element is genuinely shared between views',
    'Complex layouts where the morph path looks chaotic',
  ],
  relatedTo: ['gallery', 'card-stack', 'route-transition'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'shared-element-transition.tsx',
    content: `{expanded
  ? <motion.div layoutId="thumb" className="h-40 w-full" />
  : <motion.div layoutId="thumb" className="h-12 w-12" />}
// Framer's layout animation morphs position + size automatically.`,
  },
};

export default function Demo() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setExpanded((e) => !e), 2300);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="h-[150px] w-[220px] overflow-hidden rounded-xl border border-line bg-surface3 p-3">
      {expanded ? (
        <div className="flex h-full flex-col gap-2">
          <motion.div
            layoutId="hero"
            className="h-16 w-full rounded-lg border border-accent/30 bg-accent/15"
          />
          <span className="skel h-1.5 w-3/4" />
          <span className="skel h-1.5 w-1/2" />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {[0, 1, 2].map((r) => (
            <div key={r} className="flex items-center gap-2">
              {r === 0 ? (
                <motion.div
                  layoutId="hero"
                  className="h-9 w-9 shrink-0 rounded-lg border border-accent/30 bg-accent/15"
                />
              ) : (
                <span className="h-9 w-9 shrink-0 rounded-lg bg-ink/[0.05]" />
              )}
              <div className="flex-1 space-y-1.5">
                <span className="skel h-1.5 w-2/3" />
                <span className="skel h-1.5 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
