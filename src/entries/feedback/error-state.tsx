import { RefreshCw, WifiOff } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'error-state',
  name: 'Error State',
  category: 'feedback',
  commonality: 2,
  aliases: ['Failure State'],
  description:
    'A view shown when something failed, explaining what went wrong and offering recovery actions.',
  whenToUse: [
    'A request or action failed and the user can retry',
    'When you need to explain the problem and a way forward',
  ],
  whenNotToUse: [
    'There is simply no data yet — use an empty state',
    'Minor, recoverable field errors — use inline validation',
  ],
  relatedTo: ['empty-state', 'inline-alert', 'banner', 'toast'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'error-state.tsx',
    content: `<div className="flex flex-col items-center gap-3 text-center">
  <WifiOff className="text-red-400" />
  <p className="font-medium">Couldn't load data</p>
  <button onClick={retry}><RefreshCw /> Try again</button>
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="flex w-[230px] flex-col items-center gap-2.5 rounded-xl border border-line bg-surface3 px-4 py-6 text-center">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-red-500/10 text-red-400">
        <WifiOff className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-[13px] font-medium text-ink">Couldn't load data</p>
        <p className="mt-0.5 text-[11.5px] text-muted">Check your connection and try again.</p>
      </div>
      <button className="mt-1 flex items-center gap-1.5 rounded-lg border border-line bg-surface2 px-3 py-1.5 text-[12px] text-ink hover:border-accent/40">
        <RefreshCw className="h-3.5 w-3.5" strokeWidth={2.2} />
        Try again
      </button>
    </div>
  );
}
