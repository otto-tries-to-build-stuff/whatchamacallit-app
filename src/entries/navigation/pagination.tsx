import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'pagination',
  name: 'Pagination',
  category: 'navigation',
  commonality: 1,
  aliases: ['Pager', 'Page Numbers'],
  description:
    'Numbered links that split long content across multiple pages, with previous and next controls.',
  whenToUse: [
    'Large result sets where users may want to jump to a specific page',
    'When stable, shareable page URLs matter (e.g. search results)',
  ],
  whenNotToUse: [
    'Feeds meant for continuous browsing — use infinite scroll',
    'Short lists that fit on one page',
  ],
  relatedTo: ['infinite-scroll', 'data-table', 'list'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'pagination.tsx',
    content: `const [page, setPage] = useState(3);
const pages = [1, 2, 3, 4, 5];

<nav className="flex items-center gap-1">
  <button onClick={() => setPage((p) => Math.max(1, p - 1))}>‹</button>
  {pages.map((p) => (
    <button key={p} onClick={() => setPage(p)}
      aria-current={p === page ? "page" : undefined}>
      {p}
    </button>
  ))}
  <button onClick={() => setPage((p) => Math.min(12, p + 1))}>›</button>
</nav>`,
  },
};

export default function Demo() {
  const [page, setPage] = useState(3);
  const pages = [1, 2, 3, 4, 5];
  const btn =
    'grid h-8 w-8 place-items-center rounded-lg border border-line text-[12.5px] font-mono transition-colors';
  return (
    <nav className="flex items-center gap-1">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className={cn(btn, 'text-muted hover:text-ink')}
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={cn(
            btn,
            p === page
              ? 'border-accent/40 bg-accent/15 text-accent'
              : 'text-muted hover:text-ink',
          )}
        >
          {p}
        </button>
      ))}
      <span className="px-1 font-mono text-[12px] text-faint">…</span>
      <button className={cn(btn, 'text-muted hover:text-ink')}>12</button>
      <button
        onClick={() => setPage((p) => Math.min(12, p + 1))}
        className={cn(btn, 'text-muted hover:text-ink')}
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
