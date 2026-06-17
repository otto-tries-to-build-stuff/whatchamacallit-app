import { Inbox, Plus } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'empty-state',
  name: 'Empty State',
  category: 'feedback',
  commonality: 2,
  aliases: ['Zero State', 'Blank Slate'],
  description:
    'A purposeful "nothing here yet" view with illustration and guidance, shown when a list or page has no content.',
  whenToUse: [
    'First-run screens before any data exists',
    'Filtered or search views that return nothing',
  ],
  whenNotToUse: [
    'Errors or failures — use an error state',
    'Temporary loading — use a skeleton or spinner',
  ],
  relatedTo: ['error-state', 'skeleton-loader', 'banner'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'empty-state.tsx',
    content: `<div className="flex flex-col items-center gap-3 text-center">
  <Inbox className="opacity-50" />
  <p className="font-medium">No messages yet</p>
  <button>New message</button>
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="flex w-[230px] flex-col items-center gap-2.5 rounded-xl border border-dashed border-line bg-surface3 px-4 py-6 text-center">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-surface2 text-faint">
        <Inbox className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-[13px] font-medium text-ink">No messages yet</p>
        <p className="mt-0.5 text-[11.5px] text-muted">Start a conversation to see it here.</p>
      </div>
      <button className="mt-1 flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-[12px] font-medium text-accent-ink">
        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
        New message
      </button>
    </div>
  );
}
