import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'scroll-triggered-counter',
  name: 'Scroll-triggered Counter',
  category: 'scroll-animations',
  commonality: 2,
  aliases: ['Count-up on View'],
  description:
    'A numerical value animates from zero to its final number as it enters the viewport.',
  whenToUse: [
    'Stat blocks and metrics on landing pages',
    'Making numbers feel earned and noticeable',
  ],
  whenNotToUse: [
    'Precise figures users must read instantly',
    'Tables of data',
  ],
  relatedTo: ['count-up', 'fade-in-on-view', 'progress-bar'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'scroll-triggered-counter.tsx',
    content: `useEffect(() => {
  const controls = animate(0, target, {
    duration: 1.4,
    onUpdate: (v) => setValue(Math.round(v)),
  });
  return () => controls.stop();
}, []);`,
  },
};

function Stat({ target, suffix, label, k }: { target: number; suffix: string; label: string; k: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [k, target]);
  return (
    <div className="text-center">
      <p className="text-[22px] font-semibold tabular-nums text-ink">
        {value.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="font-mono text-[9px] uppercase tracking-wider text-faint">{label}</p>
    </div>
  );
}

export default function Demo() {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 3200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center gap-5">
      <TrendingUp className="h-5 w-5 text-accent" strokeWidth={2} />
      <Stat k={k} target={1280} suffix="+" label="Users" />
      <Stat k={k} target={99} suffix="%" label="Uptime" />
    </div>
  );
}
