import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'gradient-shimmer',
  name: 'Gradient Shimmer',
  category: 'text-animations',
  commonality: 3,
  aliases: ['Shine Effect', 'Sheen'],
  description:
    'A bright highlight sweeps across text from left to right on a coloured gradient base.',
  whenToUse: [
    'Premium or "pro" labels that want a subtle sheen',
    'Loading text or skeleton headings',
  ],
  whenNotToUse: [
    'Body copy — the moving highlight distracts',
    'When contrast must stay constant',
  ],
  relatedTo: ['blur-in', 'marquee-text', 'skeleton-loader'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'gradient-shimmer.tsx',
    content: `<motion.span
  className="bg-clip-text text-transparent"
  style={{ backgroundImage: "linear-gradient(110deg,#555,#555,#fff,#555,#555)",
           backgroundSize: "250% 100%" }}
  animate={{ backgroundPosition: ["200% 0", "-50% 0"] }}
  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}>
  Shimmering
</motion.span>`,
  },
};

export default function Demo() {
  return (
    <motion.span
      className="bg-clip-text text-[26px] font-bold tracking-tight text-transparent"
      style={{
        backgroundImage:
          'linear-gradient(110deg, rgb(var(--faint)) 0%, rgb(var(--faint)) 42%, rgb(var(--accent)) 50%, rgb(var(--faint)) 58%, rgb(var(--faint)) 100%)',
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      }}
      animate={{ backgroundPosition: ['200% 0', '-60% 0'] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
    >
      Whatchamacallit
    </motion.span>
  );
}
