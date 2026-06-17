import { useState, type UIEvent } from 'react';
import { Loader2 } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'infinite-scroll',
  name: 'Infinite Scroll',
  category: 'selection-display',
  commonality: 3,
  aliases: ['Endless Scroll'],
  description:
    'A pattern that auto-loads more items as the user scrolls toward the bottom, with no pagination.',
  whenToUse: [
    'Exploratory feeds meant for continuous browsing (social, media)',
    'When there is no need to jump to a specific page',
  ],
  whenNotToUse: [
    'Content users must find again or cite — use pagination',
    'When a reachable footer matters',
  ],
  relatedTo: ['pagination', 'virtual-list', 'list', 'spinner'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'infinite-scroll.tsx',
    content: `function onScroll(e) {
  const el = e.currentTarget;
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 12 && !loading) {
    loadMore();
  }
}

<div onScroll={onScroll} className="overflow-auto">{rows}{loading && <Spinner />}</div>`,
  },
};

export default function Demo() {
  const [count, setCount] = useState(7);
  const [loading, setLoading] = useState(false);

  function onScroll(e: UIEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 12 && !loading && count < 40) {
      setLoading(true);
      setTimeout(() => {
        setCount((c) => c + 6);
        setLoading(false);
      }, 700);
    }
  }

  return (
    <div
      onScroll={onScroll}
      className="h-36 w-[220px] space-y-1.5 overflow-auto rounded-xl border border-line bg-surface3 p-2"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-md border border-line bg-surface2 px-2 py-1.5"
        >
          <span className="h-5 w-5 shrink-0 rounded-full bg-ink/10" />
          <span className="skel h-1.5 w-2/3" />
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 py-1 font-mono text-[10px] text-faint">
        {loading ? (
          <>
            <Loader2 className="h-3 w-3 animate-spin" /> loading…
          </>
        ) : count < 40 ? (
          'scroll for more'
        ) : (
          "you're all caught up"
        )}
      </div>
    </div>
  );
}
