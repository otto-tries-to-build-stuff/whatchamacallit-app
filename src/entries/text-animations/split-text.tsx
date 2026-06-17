import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'split-text',
  name: 'Split Text',
  category: 'text-animations',
  commonality: 1,
  aliases: ['Stagger Reveal', 'Letter Split', 'Per-character Animation'],
  description:
    'Text broken into individual letters or words that animate into place one after another in a staggered sequence.',
  whenToUse: [
    'Drawing the eye to a hero headline as it first appears',
    'Adding polish to short, prominent phrases',
  ],
  whenNotToUse: [
    'Body copy or long paragraphs — it hurts readability',
    'Content screen readers must read cleanly — keep an unsplit copy',
  ],
  relatedTo: ['blur-in', 'typewriter', 'fade-in-on-view', 'rotating-words'],
  source: 'reactbits',
  code: {
    language: 'tsx',
    filename: 'split-text.tsx',
    // Mirrors the ReactBits "SplitText" component (jsrepo copies the source in);
    // here it's a minimal Framer Motion equivalent.
    content: `import { motion } from "framer-motion";

export function SplitText({ text }: { text: string }) {
  return (
    <span className="inline-flex">
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}`,
  },
};

const TEXT = 'Stagger';
const ACCENT_INDEX = 2;

export default function Demo() {
  const [cycle, setCycle] = useState(0);

  // Replay the reveal periodically by remounting via a changing key.
  useEffect(() => {
    const id = window.setInterval(() => setCycle((c) => c + 1), 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      key={cycle}
      className="inline-flex font-mono text-[34px] font-semibold leading-none tracking-tight"
    >
      {[...TEXT].map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '0.6em', opacity: 0, filter: 'blur(5px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
          className={i === ACCENT_INDEX ? 'text-accent' : 'text-ink'}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
