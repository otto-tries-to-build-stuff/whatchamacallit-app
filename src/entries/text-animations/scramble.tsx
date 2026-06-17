import { useEffect, useState } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'scramble',
  name: 'Scramble',
  category: 'text-animations',
  commonality: 3,
  aliases: ['Decoder', 'Cipher Text', 'Glitch Text'],
  description:
    'Letters cycle through random characters before settling on the final string.',
  whenToUse: [
    'Tech, hacker, or "decoding" aesthetics',
    'Drawing the eye to a short word or value on reveal',
  ],
  whenNotToUse: [
    'Long text — it becomes noisy and unreadable',
    'Reduced-motion or accessibility-sensitive contexts',
  ],
  relatedTo: ['typewriter', 'split-text', 'rotating-words'],
  source: 'reactbits',
  code: {
    language: 'tsx',
    filename: 'scramble.tsx',
    content: `const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#@%&";
setText(
  TARGET.split("").map((ch, i) =>
    i < revealed ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join("")
);`,
  },
};

const TARGET = 'WHATCHAMACALLIT';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@%&*';

export default function Demo() {
  const [text, setText] = useState(TARGET);
  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const revealed = Math.floor(frame / 2);
      if (revealed > TARGET.length + 16) frame = 0;
      setText(
        TARGET.split('')
          .map((ch, i) =>
            ch === ' ' ? ' ' : i < revealed ? ch : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(''),
      );
    }, 45);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="max-w-[210px] break-words text-center font-mono text-[17px] font-semibold tracking-tight text-accent">
      {text}
    </p>
  );
}
