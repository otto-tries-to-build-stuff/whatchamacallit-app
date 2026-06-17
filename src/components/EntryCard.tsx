import { Link } from 'react-router-dom';
import type { LoadedEntry } from '@/lib/types';
import { CategoryBadge } from './CategoryBadge';

export function EntryCard({ entry }: { entry: LoadedEntry }) {
  const { meta, Demo } = entry;
  const aka = meta.aliases.slice(0, 2).join(' · ');

  return (
    <Link
      to={`/entry/${meta.id}`}
      className="group block rounded-xl border border-line bg-surface p-3 transition-colors hover:border-ink/20"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg border border-line bg-surface2">
        {/* Demo is purely visual on the card; full interaction lives in the detail view. */}
        <div className="pointer-events-none h-full w-full">
          <Demo />
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2 px-1">
        <div className="min-w-0">
          <h3 className="text-[15px] font-medium text-ink">{meta.name}</h3>
          {aka && <p className="mt-1 truncate font-mono text-[11px] text-faint">a.k.a. {aka}</p>}
        </div>
        <CategoryBadge category={meta.category} />
      </div>
    </Link>
  );
}
