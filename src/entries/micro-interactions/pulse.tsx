import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'pulse',
  name: 'Pulse',
  category: 'micro-interactions',
  commonality: 2,
  aliases: ['Ping', 'Breathing'],
  description:
    'A repeating subtle scale or opacity pulse drawing attention to a control such as an unread indicator.',
  whenToUse: [
    'Gently drawing the eye to something new or live',
    '"Recording" / "live" status dots',
  ],
  whenNotToUse: [
    'Many elements at once — constant motion is fatiguing',
    'Reduced-motion contexts',
  ],
  relatedTo: ['dot-indicator', 'like-burst', 'spinner'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'pulse.tsx',
    content: `<span className="relative flex h-3 w-3">
  <span className="absolute inline-flex h-full w-full animate-ping
                   rounded-full bg-accent opacity-75" />
  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
</span>`,
  },
};

export default function Demo() {
  return (
    <div className="flex items-center gap-8">
      <span className="flex items-center gap-2 rounded-full border border-line bg-surface3 px-3 py-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[11px] text-ink">live</span>
      </span>
      <span className="relative inline-flex">
        <button className="rounded-lg border border-line bg-surface3 px-3 py-1.5 text-[12px] text-ink">
          Updates
        </button>
        <span className="absolute -right-1 -top-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
        </span>
      </span>
    </div>
  );
}
