import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Category } from './types';

export type CategoryFilter = Category | 'all';
export type SortMode = 'popular' | 'az';

interface FilterContextValue {
  query: string;
  setQuery: (q: string) => void;
  category: CategoryFilter;
  setCategory: (c: CategoryFilter) => void;
  sort: SortMode;
  setSort: (s: SortMode) => void;
  reset: () => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [sort, setSort] = useState<SortMode>('popular');

  const value = useMemo<FilterContextValue>(
    () => ({
      query,
      setQuery,
      category,
      setCategory,
      sort,
      setSort,
      reset: () => {
        setQuery('');
        setCategory('all');
      },
    }),
    [query, category, sort],
  );

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export function useFilters(): FilterContextValue {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilters must be used within a FilterProvider');
  return ctx;
}
