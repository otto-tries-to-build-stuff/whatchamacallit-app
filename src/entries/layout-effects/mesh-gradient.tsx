import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'mesh-gradient',
  name: 'Mesh Gradient',
  category: 'layout-effects',
  commonality: 3,
  aliases: ['Multi-stop Gradient'],
  description:
    'A static blended gradient using multiple colour points to produce a soft, painterly background.',
  whenToUse: [
    'Calm, colourful backdrops for cards, headers, or covers',
    'When you want depth without the cost of animation',
  ],
  whenNotToUse: [
    'Behind small text — contrast varies across the field',
    'When a flat colour reads cleaner',
  ],
  relatedTo: ['aurora-background', 'spotlight-effect', 'hero'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'mesh-gradient.css',
    content: `.mesh {
  background-color: #1d1d22;
  background-image:
    radial-gradient(at 20% 20%, rgba(197,242,74,0.45) 0, transparent 50%),
    radial-gradient(at 80% 30%, rgba(139,92,246,0.45) 0, transparent 50%),
    radial-gradient(at 50% 90%, rgba(56,189,248,0.40) 0, transparent 50%);
}`,
  },
};

export default function Demo() {
  return (
    <div
      className="h-[150px] w-[230px] rounded-xl border border-line"
      style={{
        backgroundColor: 'rgb(var(--surface-3))',
        backgroundImage: [
          'radial-gradient(at 18% 22%, rgba(197,242,74,0.5) 0, transparent 50%)',
          'radial-gradient(at 82% 26%, rgba(139,92,246,0.5) 0, transparent 50%)',
          'radial-gradient(at 30% 88%, rgba(56,189,248,0.45) 0, transparent 50%)',
          'radial-gradient(at 88% 84%, rgba(244,114,182,0.4) 0, transparent 50%)',
        ].join(','),
      }}
    />
  );
}
