import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useFilters } from '@/lib/filters';

export function SearchBar() {
  const { query, setQuery } = useFilters();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ⌘K / Ctrl+K focuses search (and returns to the grid so results are visible).
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (location.pathname !== '/') navigate('/');
        inputRef.current?.focus();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [location.pathname, navigate]);

  function handleChange(value: string) {
    setQuery(value);
    if (value && location.pathname !== '/') navigate('/');
  }

  return (
    <div className="ml-2 flex-1">
      <div className="flex h-9 max-w-md items-center gap-2.5 rounded-lg border border-line bg-surface px-3 transition-colors focus-within:border-accent/40">
        <Search className="h-4 w-4 shrink-0 text-faint" strokeWidth={2} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
          placeholder="Search components, animations, patterns…"
          className="flex-1 bg-transparent text-[13px] text-ink placeholder:text-faint focus:outline-none"
          aria-label="Search the library"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="shrink-0 text-faint transition-colors hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd className="hidden shrink-0 rounded border border-line bg-surface2 px-1.5 py-0.5 font-mono text-[10px] text-faint sm:inline-block">
            ⌘K
          </kbd>
        )}
      </div>
    </div>
  );
}
