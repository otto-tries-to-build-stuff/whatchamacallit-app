import { useLocation, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '@/lib/categories';
import { categoryCounts, totalCount } from '@/entries';
import { useFilters, type CategoryFilter } from '@/lib/filters';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const { category, setCategory } = useFilters();
  const navigate = useNavigate();
  const location = useLocation();

  function select(next: CategoryFilter) {
    setCategory(next);
    if (location.pathname !== '/') navigate('/');
  }

  return (
    <aside className="sticky top-[78px] hidden h-fit w-[210px] shrink-0 lg:block">
      <p className="px-3 pb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
        Library
      </p>
      <nav className="space-y-0.5 text-[13.5px]">
        <button
          type="button"
          onClick={() => select('all')}
          className={cn(
            'flex w-full items-center justify-between rounded-lg px-3 py-1.5 transition-colors',
            category === 'all'
              ? 'bg-surface2 font-medium text-ink ring-1 ring-inset ring-line'
              : 'text-muted hover:bg-surface2/60 hover:text-ink',
          )}
        >
          <span className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            All Components
          </span>
          <span className="font-mono text-[11px] text-muted">{totalCount}</span>
        </button>

        <div className="h-2" />
        <p className="px-3 pb-1 pt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
          Categories
        </p>

        {CATEGORIES.map(({ id, label }) => {
          const active = category === id;
          const count = categoryCounts[id] ?? 0;
          return (
            <button
              key={id}
              type="button"
              onClick={() => select(id)}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-1.5 transition-colors',
                active
                  ? 'bg-surface2 font-medium text-ink ring-1 ring-inset ring-line'
                  : 'text-muted hover:bg-surface2/60 hover:text-ink',
              )}
            >
              <span>{label}</span>
              <span className="font-mono text-[11px] text-faint">{count}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
