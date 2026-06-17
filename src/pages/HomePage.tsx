import { useMemo } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { entries } from '@/entries';
import { CATEGORIES } from '@/lib/categories';
import { useFilters, type SortMode } from '@/lib/filters';
import { filterEntries } from '@/lib/search';
import { AnatomyBlueprint } from '@/components/AnatomyBlueprint';
import { EntryGrid } from '@/components/EntryGrid';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const SORT_LABEL: Record<SortMode, string> = {
  popular: 'Popular',
  az: 'A–Z',
};

export function HomePage() {
  const { query, category, sort, setSort } = useFilters();

  const visible = useMemo(
    () => filterEntries(entries, query, category, sort),
    [query, category, sort],
  );

  const activeCategory = category === 'all' ? null : CATEGORIES.find((c) => c.id === category);
  const title = activeCategory?.label ?? 'All Components';
  const tagline =
    activeCategory?.blurb ??
    'A growing dictionary of interface patterns, animations & the words for them.';

  return (
    <div>
      <AnatomyBlueprint />

      <div className="mb-5 h-px w-full bg-line" />

      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[19px] font-semibold tracking-tight text-ink">{title}</h1>
          <p className="mt-0.5 text-[13px] text-muted">{tagline}</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex h-8 items-center gap-1.5 rounded-lg border border-line bg-surface px-3 text-[12.5px] text-muted transition-colors hover:text-ink">
              Sort: {SORT_LABEL[sort]}
              <ChevronDown className="h-3.5 w-3.5 text-faint" strokeWidth={2.2} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {(Object.keys(SORT_LABEL) as SortMode[]).map((mode) => (
              <DropdownMenuItem key={mode} onSelect={() => setSort(mode)}>
                <span className="flex-1">{SORT_LABEL[mode]}</span>
                {sort === mode && <Check className="h-3.5 w-3.5 text-accent" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <EntryGrid entries={visible} />
    </div>
  );
}
