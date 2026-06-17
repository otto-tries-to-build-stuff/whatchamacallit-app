import { SearchX } from 'lucide-react';
import type { LoadedEntry } from '@/lib/types';
import { EntryCard } from './EntryCard';

export function EntryGrid({ entries }: { entries: LoadedEntry[] }) {
  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line bg-surface/50 py-20 text-center">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface2 text-faint">
          <SearchX className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <p className="text-[14px] font-medium text-ink">No matches</p>
          <p className="mt-1 text-[13px] text-muted">
            Try a different search term or category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
      {entries.map((entry) => (
        <EntryCard key={entry.meta.id} entry={entry} />
      ))}
    </div>
  );
}
