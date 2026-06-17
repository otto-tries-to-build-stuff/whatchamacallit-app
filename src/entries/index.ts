import type { Category, DemoComponent, Entry, LoadedEntry } from '@/lib/types';
import { categoryOrder } from '@/lib/categories';

/**
 * Auto-import every entry file under `src/entries/<category>/<id>.tsx`.
 * Each file exports `meta` (its metadata) and a default `Demo` component, so
 * dropping a new file in is enough to make it appear in the grid — no central
 * registration required.
 */
interface EntryModule {
  meta: Entry;
  default: DemoComponent;
}

const modules = import.meta.glob<EntryModule>('./*/*.tsx', { eager: true });

function loadEntries(): LoadedEntry[] {
  const loaded: LoadedEntry[] = [];

  for (const [path, mod] of Object.entries(modules)) {
    if (!mod.meta || !mod.default) {
      console.warn(`[entries] Skipping ${path}: missing "meta" or default export.`);
      continue;
    }
    loaded.push({ meta: mod.meta, Demo: mod.default });
  }

  return loaded.sort(compareEntries);
}

/** Sort by commonality ascending (essential first), then name A–Z. */
function compareEntries(a: LoadedEntry, b: LoadedEntry): number {
  if (a.meta.commonality !== b.meta.commonality) {
    return a.meta.commonality - b.meta.commonality;
  }
  return a.meta.name.localeCompare(b.meta.name);
}

export const entries: LoadedEntry[] = loadEntries();

const ENTRY_BY_ID = new Map(entries.map((e) => [e.meta.id, e] as const));

export function getEntry(id: string): LoadedEntry | undefined {
  return ENTRY_BY_ID.get(id);
}

/** Count of entries per category, used for the sidebar tallies. */
export const categoryCounts: Record<Category, number> = entries.reduce(
  (acc, { meta }) => {
    acc[meta.category] = (acc[meta.category] ?? 0) + 1;
    return acc;
  },
  {} as Record<Category, number>,
);

export const totalCount = entries.length;

/** Entries sorted for a specific category's own page (still commonality, then name). */
export function entriesInCategory(category: Category): LoadedEntry[] {
  return entries.filter((e) => e.meta.category === category);
}

/** Re-export so consumers can sort categories consistently if needed. */
export { categoryOrder };
