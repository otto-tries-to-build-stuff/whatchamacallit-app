import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';
import { totalCount } from '@/entries';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1320px] items-center gap-4 px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-accent">
            <span className="h-2.5 w-2.5 rounded-[3px] bg-accent-ink" />
          </span>
          <span className="text-[16px] font-semibold tracking-tight text-ink">
            Whatchamacallit
          </span>
          <span className="hidden font-mono text-[10px] text-faint sm:inline">v0.4</span>
        </Link>

        <SearchBar />

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <div className="hidden h-5 w-px bg-line md:block" />
          <span className="hidden font-mono text-[11px] text-faint md:inline">
            {totalCount} {totalCount === 1 ? 'term' : 'terms'}
          </span>
        </div>
      </div>
    </header>
  );
}
