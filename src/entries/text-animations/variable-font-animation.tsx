import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'variable-font-animation',
  name: 'Variable Font Animation',
  category: 'text-animations',
  commonality: 4,
  aliases: ['Weight Morph', 'Axis Animation'],
  description:
    'Text fluidly shifts along a variable font axis — weight, width, or slant — during interaction or over time.',
  whenToUse: [
    'Expressive typographic branding with a single font file',
    'Hover or loop effects that feel smooth and modern',
  ],
  whenNotToUse: [
    'Fonts without variable axes — it will snap between weights',
    'Body text where shifting weight harms readability',
  ],
  relatedTo: ['wavy-text', 'gradient-shimmer', 'split-text'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'variable-font-animation.tsx',
    content: `<motion.span
  animate={{ fontWeight: [400, 700, 400], letterSpacing: ["0px", "1.5px", "0px"] }}
  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
  Weight
</motion.span>`,
  },
};

export default function Demo() {
  return (
    <motion.span
      className="text-[30px] text-ink"
      animate={{ fontWeight: [400, 700, 400], letterSpacing: ['0px', '1.5px', '0px'] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      morphing&nbsp;weight
    </motion.span>
  );
}
