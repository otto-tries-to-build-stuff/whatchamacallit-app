import { useEffect, useState } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'progress-bar',
  name: 'Progress Bar',
  category: 'feedback',
  commonality: 1,
  aliases: ['Determinate Progress'],
  description: 'A horizontal bar that fills as a known-duration task advances.',
  whenToUse: [
    'Tasks with measurable progress (uploads, installs, multi-step forms)',
    'When reassuring the user that something is moving',
  ],
  whenNotToUse: [
    'Unknown duration — use a spinner',
    'Tiny or instant actions',
  ],
  relatedTo: ['spinner', 'skeleton-loader', 'stepper', 'slider'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'progress-bar.tsx',
    content: `<div role="progressbar" aria-valuenow={value}
  className="h-2 w-full rounded-full bg-surface">
  <div className="h-full rounded-full bg-accent transition-all"
    style={{ width: value + "%" }} />
</div>`,
  },
};

export default function Demo() {
  const [value, setValue] = useState(12);
  useEffect(() => {
    const id = setInterval(() => setValue((v) => (v >= 100 ? 0 : v + 4)), 180);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-[230px]">
      <div className="mb-2 flex items-center justify-between text-[12px]">
        <span className="font-medium text-ink">Uploading…</span>
        <span className="font-mono text-faint">{value}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={value}
        className="h-2 w-full overflow-hidden rounded-full bg-surface2"
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-150 ease-linear"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
