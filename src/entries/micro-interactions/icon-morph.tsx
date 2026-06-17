import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'icon-morph',
  name: 'Icon Morph',
  category: 'micro-interactions',
  commonality: 2,
  aliases: ['Icon Transition', 'Morphing Icon'],
  description:
    'A smooth shape-change between two icon states, like play↔pause or hamburger↔close.',
  whenToUse: [
    'Toggle buttons where both states share a control (play/pause, mute)',
    'Communicating state change with a satisfying transition',
  ],
  whenNotToUse: [
    'Unrelated icons — a morph implies a relationship',
    'When an instant swap reads more clearly',
  ],
  relatedTo: ['hamburger-menu', 'button-press', 'like-burst'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'icon-morph.tsx',
    content: `<AnimatePresence mode="wait">
  <motion.span key={playing ? "pause" : "play"}
    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
    animate={{ rotate: 0, opacity: 1, scale: 1 }}
    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}>
    {playing ? <Pause /> : <Play />}
  </motion.span>
</AnimatePresence>`,
  },
};

export default function Demo() {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      onClick={() => setPlaying((p) => !p)}
      className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-ink shadow-lg shadow-accent/20"
      aria-label={playing ? 'Pause' : 'Play'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={playing ? 'pause' : 'play'}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.18 }}
        >
          {playing ? (
            <Pause className="h-6 w-6 fill-current" />
          ) : (
            <Play className="h-6 w-6 translate-x-0.5 fill-current" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
