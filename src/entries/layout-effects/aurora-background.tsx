import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'aurora-background',
  name: 'Aurora Background',
  category: 'layout-effects',
  commonality: 2,
  aliases: ['Gradient Mesh', 'Ambient Glow', 'Animated Gradient'],
  description:
    'A softly blurred, slowly shifting field of overlapping colour gradients used as an ambient backdrop, evoking the northern lights.',
  whenToUse: [
    'Hero sections and empty states that need depth without imagery',
    'Setting brand mood behind large, sparse type',
  ],
  whenNotToUse: [
    'Behind dense text — contrast suffers',
    'Performance-sensitive or low-power contexts',
  ],
  relatedTo: ['mesh-gradient', 'spotlight-effect', 'particle-background', 'hero'],
  source: 'reactbits',
  code: {
    language: 'tsx',
    filename: 'aurora-background.tsx',
    content: `<div className="relative overflow-hidden">
  <div className="absolute inset-0 blur-3xl">
    {blobs.map((b) => (
      <motion.span key={b.id} style={{ background: b.color }}
        animate={{ x: b.x, y: b.y }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }} />
    ))}
  </div>
</div>`,
  },
};

const BLOBS = [
  { color: 'rgba(197,242,74,0.55)', top: '4%', left: '6%', x: [0, 40, 0], y: [0, 24, 0], d: 7 },
  { color: 'rgba(139,92,246,0.55)', top: '0%', left: '52%', x: [0, -30, 0], y: [0, 30, 0], d: 9 },
  { color: 'rgba(56,189,248,0.5)', top: '46%', left: '34%', x: [0, 24, 0], y: [0, -20, 0], d: 8 },
];

export default function Demo() {
  return (
    <div className="relative h-[150px] w-[230px] overflow-hidden rounded-xl border border-line bg-bg">
      <div className="absolute inset-0 blur-2xl">
        {BLOBS.map((b, i) => (
          <motion.span
            key={i}
            className="absolute h-24 w-24 rounded-full"
            style={{ background: b.color, top: b.top, left: b.left }}
            animate={{ x: b.x, y: b.y }}
            transition={{ duration: b.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-bg/50 to-transparent" />
    </div>
  );
}
