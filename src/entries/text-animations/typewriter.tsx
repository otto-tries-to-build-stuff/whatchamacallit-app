import { useEffect, useState } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'typewriter',
  name: 'Typewriter',
  category: 'text-animations',
  commonality: 2,
  aliases: ['Type-on', 'Typing Effect'],
  description:
    'Characters appear one at a time as if being typed, often with a blinking cursor.',
  whenToUse: [
    'Hero headlines that cycle through phrases',
    'Conveying a conversational or terminal feel',
  ],
  whenNotToUse: [
    'Long passages — typing them out is tedious to watch',
    'Content screen readers should announce cleanly',
  ],
  relatedTo: ['rotating-words', 'scramble', 'split-text'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'typewriter.tsx',
    content: `useEffect(() => {
  const word = phrases[index];
  const t = setTimeout(() => {
    setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
  }, deleting ? 35 : 70);
  return () => clearTimeout(t);
}, [text, deleting, index]);`,
  },
};

const PHRASES = ['interfaces.', 'animations.', 'the right words.'];

export default function Demo() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = PHRASES[index];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1100);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % PHRASES.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 35 : 75,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <p className="font-mono text-[16px] text-ink">
      Whatchamacallit for <span className="text-accent">{text}</span>
      <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-accent align-middle" />
    </p>
  );
}
