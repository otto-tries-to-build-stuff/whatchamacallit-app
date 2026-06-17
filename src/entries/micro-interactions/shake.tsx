import { useAnimation, motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'shake',
  name: 'Shake',
  category: 'micro-interactions',
  commonality: 3,
  aliases: ['Error Shake', 'Wobble'],
  description:
    'A short horizontal back-and-forth shake of an invalid field signalling rejection.',
  whenToUse: [
    'Wrong password, failed validation, or a rejected action',
    'Reinforcing an error message with motion',
  ],
  whenNotToUse: [
    'As the only error signal — pair it with text and colour',
    'Reduced-motion contexts',
  ],
  relatedTo: ['form-field', 'inline-alert', 'button-press'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'shake.tsx',
    content: `const controls = useAnimation();

function onSubmit() {
  controls.start({ x: [0, -8, 8, -6, 6, 0] }, { duration: 0.4 });
}

<motion.input animate={controls} />`,
  },
};

export default function Demo() {
  const controls = useAnimation();
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        animate={controls}
        className="flex items-center gap-2 rounded-lg border border-line bg-surface3 px-3 py-2"
      >
        <Lock className="h-4 w-4 text-faint" strokeWidth={2} />
        <span className="font-mono text-[13px] tracking-[0.3em] text-muted">••••••</span>
      </motion.div>
      <button
        onClick={() => controls.start({ x: [0, -8, 8, -6, 6, -3, 3, 0] }, { duration: 0.45 })}
        className="rounded-lg bg-accent px-3 py-1.5 text-[12px] font-medium text-accent-ink"
      >
        Submit (wrong)
      </button>
    </div>
  );
}
