import type { LoadedEntry } from './types';
import type { CategoryFilter, SortMode } from './filters';

/** Case-insensitive match against an entry's name and aliases. */
function matchesQuery(entry: LoadedEntry, q: string): boolean {
  if (!q) return true;
  const needle = q.toLowerCase().trim();
  if (entry.meta.name.toLowerCase().includes(needle)) return true;
  return entry.meta.aliases.some((a) => a.toLowerCase().includes(needle));
}

function byName(a: LoadedEntry, b: LoadedEntry): number {
  return a.meta.name.localeCompare(b.meta.name);
}

function byPopularity(a: LoadedEntry, b: LoadedEntry): number {
  if (a.meta.commonality !== b.meta.commonality) {
    return a.meta.commonality - b.meta.commonality;
  }
  return byName(a, b);
}

/** Apply the active category, search query and sort mode to the full entry list. */
export function filterEntries(
  entries: LoadedEntry[],
  query: string,
  category: CategoryFilter,
  sort: SortMode,
): LoadedEntry[] {
  const filtered = entries.filter(
    (e) =>
      (category === 'all' || e.meta.category === category) && matchesQuery(e, query),
  );
  return filtered.sort(sort === 'az' ? byName : byPopularity);
}
