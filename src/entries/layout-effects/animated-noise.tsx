import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'animated-noise',
  name: 'Animated Noise',
  category: 'layout-effects',
  commonality: 4,
  aliases: ['Grain Overlay', 'Film Grain'],
  description:
    'A subtle moving noise or grain texture overlaid on backgrounds for a tactile, filmic feel.',
  whenToUse: [
    'Adding analogue warmth over flat colour or gradients',
    'Hero and cover art aiming for a filmic mood',
  ],
  whenNotToUse: [
    'Behind body text — it reduces legibility',
    'Performance-critical or reduced-motion contexts',
  ],
  relatedTo: ['mesh-gradient', 'aurora-background', 'dot-grid-background'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'animated-noise.tsx',
    content: `<svg className="absolute inset-0 opacity-50 mix-blend-overlay">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="1">
      <animate attributeName="seed" values="1;8;1" dur="0.6s" repeatCount="indefinite" />
    </feTurbulence>
  </filter>
  <rect width="100%" height="100%" filter="url(#grain)" />
</svg>`,
  },
};

export default function Demo() {
  return (
    <div className="relative h-[150px] w-[230px] overflow-hidden rounded-xl border border-line">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgb(var(--accent) / 0.35), rgb(var(--surface-3)) 60%, rgb(var(--surface)))',
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.55] mix-blend-overlay">
        <filter id="wcm-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="1">
            <animate attributeName="seed" values="1;9;1" dur="0.5s" repeatCount="indefinite" />
          </feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#wcm-grain)" />
      </svg>
      <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-wider text-ink/70">
        grain
      </span>
    </div>
  );
}
