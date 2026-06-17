import { AlertTriangle } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'inline-alert',
  name: 'Inline Alert',
  category: 'feedback',
  commonality: 1,
  aliases: ['Callout', 'Notice'],
  description:
    'A coloured rectangular message embedded in the page, communicating info, success, warning, or error.',
  whenToUse: [
    'Contextual messages tied to a section of the page',
    'Validation summaries or important notices that should persist',
  ],
  whenNotToUse: [
    'Transient confirmations — use a toast',
    'Blocking decisions — use a confirmation dialog',
  ],
  relatedTo: ['toast', 'banner', 'error-state', 'confirmation-dialog'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'inline-alert.tsx',
    content: `<div role="alert" className="flex gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3">
  <AlertTriangle className="text-amber-400" />
  <div>
    <p className="font-medium">Heads up</p>
    <p className="text-muted">Your trial ends in 3 days.</p>
  </div>
</div>`,
  },
};

export default function Demo() {
  return (
    <div
      role="alert"
      className="flex w-[250px] gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3"
    >
      <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" strokeWidth={2.2} />
      <div className="space-y-0.5">
        <p className="text-[12.5px] font-medium text-ink">Heads up</p>
        <p className="text-[11.5px] leading-relaxed text-muted">
          Your trial ends in 3 days. Upgrade to keep your projects.
        </p>
      </div>
    </div>
  );
}
