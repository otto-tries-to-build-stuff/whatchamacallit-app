import { useState, type MouseEvent } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'spotlight-effect',
  name: 'Spotlight Effect',
  category: 'layout-effects',
  commonality: 3,
  aliases: ['Cursor Spotlight'],
  description:
    'A bright radial glow that follows the cursor across a dark surface, highlighting whatever it is near.',
  whenToUse: [
    'Adding interactivity to dark hero or feature cards',
    'Inviting exploration of a surface',
  ],
  whenNotToUse: [
    'Touch-only contexts — there is no cursor to follow',
    'Behind content that needs steady contrast',
  ],
  relatedTo: ['aurora-background', 'mesh-gradient', 'magnetic-button', 'hover-lift'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'spotlight-effect.tsx',
    content: `<div onMouseMove={(e) => setPos(localXY(e))}
  style={{ background:
    \`radial-gradient(160px circle at \${pos.x}px \${pos.y}px,
      rgba(197,242,74,0.25), transparent 70%)\` }} />`,
  },
};

export default function Demo() {
  const [pos, setPos] = useState({ x: 115, y: 70 });
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }
  return (
    <div
      onMouseMove={onMove}
      className="relative grid h-[150px] w-[230px] place-items-center overflow-hidden rounded-xl border border-line bg-surface2"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(140px circle at ${pos.x}px ${pos.y}px, rgb(var(--accent) / 0.28), transparent 70%)`,
        }}
      />
      <span className="pointer-events-none relative font-mono text-[10px] uppercase tracking-wider text-muted">
        move your cursor
      </span>
    </div>
  );
}
