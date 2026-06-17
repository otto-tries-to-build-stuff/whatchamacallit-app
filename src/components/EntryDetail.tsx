import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getEntry } from '@/entries';
import { categoryLabel } from '@/lib/categories';
import { useFilters } from '@/lib/filters';
import type { Category, SourceType } from '@/lib/types';
import { CategoryBadge } from './CategoryBadge';
import { CodeBlock } from './CodeBlock';

const SOURCE_LABEL: Record<SourceType, string> = {
  'hand-coded': 'Hand-coded',
  reactbits: 'ReactBits',
  shadcn: 'shadcn/ui',
  'svg-illustration': 'SVG',
  lottie: 'Lottie',
};

function humanize(id: string): string {
  return id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function EntryDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setCategory } = useFilters();
  const entry = id ? getEntry(id) : undefined;

  if (!entry) {
    return (
      <div className="flex flex-col items-start gap-3 py-20">
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">404</p>
        <h1 className="text-[22px] font-semibold tracking-tight text-ink">Entry not found</h1>
        <p className="text-[13px] text-muted">
          There's no entry with the id <span className="font-mono text-ink">{id}</span> (yet).
        </p>
        <Link
          to="/"
          className="mt-2 rounded-lg border border-line bg-surface2 px-3 py-1.5 text-[13px] text-ink transition-colors hover:border-accent/40"
        >
          ← Back to all components
        </Link>
      </div>
    );
  }

  const { meta, Demo } = entry;

  function goToCategory(category: Category) {
    setCategory(category);
    navigate('/');
  }

  return (
    <div className="pb-12">
      {/* Breadcrumb */}
      <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-faint">
        <Link to="/" className="transition-colors hover:text-ink">
          All Components
        </Link>
        <ChevronRight className="h-3 w-3" />
        <button
          type="button"
          onClick={() => goToCategory(meta.category)}
          className="transition-colors hover:text-ink"
        >
          {categoryLabel(meta.category)}
        </button>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">{meta.name}</span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="grid lg:grid-cols-[minmax(0,46%)_1fr]">
          {/* Hero demo */}
          <div className="relative min-h-[300px] border-b border-line bg-surface2 lg:border-b-0 lg:border-r">
            <div className="flex h-full w-full items-center justify-center p-8">
              <Demo />
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-line bg-bg/40 px-3 py-1 font-mono text-[10.5px] text-ink backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              live demo
            </div>
          </div>

          {/* Meta */}
          <div className="p-6 lg:p-7">
            <div className="mb-2 flex items-center gap-2">
              <CategoryBadge category={meta.category} />
              <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-[10.5px] text-faint">
                {SOURCE_LABEL[meta.source]}
              </span>
            </div>

            <h2 className="text-[24px] font-semibold tracking-tight text-ink">{meta.name}</h2>
            {meta.aliases.length > 0 && (
              <p className="mt-1 font-mono text-[12px] text-faint">
                a.k.a. {meta.aliases.join(' · ')}
              </p>
            )}

            <p className="mt-5 text-[14.5px] leading-relaxed text-muted">{meta.description}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                  When to use
                </h4>
                <ul className="space-y-2 text-[13px] text-muted">
                  {meta.whenToUse.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                  When not to use
                </h4>
                <ul className="space-y-2 text-[13px] text-muted">
                  {meta.whenNotToUse.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-2 shrink-0 rounded-full bg-ink/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {meta.relatedTo.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                  Related to
                </h4>
                <div className="flex flex-wrap gap-2">
                  {meta.relatedTo.map((relId) => {
                    const target = getEntry(relId);
                    const label = target?.meta.name ?? humanize(relId);
                    const chipClass =
                      'rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-[11.5px] transition-colors';
                    return target ? (
                      <Link
                        key={relId}
                        to={`/entry/${relId}`}
                        className={`${chipClass} text-muted hover:border-accent/40 hover:text-accent`}
                      >
                        {label}
                      </Link>
                    ) : (
                      <span key={relId} className={`${chipClass} text-faint`}>
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-7 border-t border-line pt-5">
              <CodeBlock code={meta.code} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
