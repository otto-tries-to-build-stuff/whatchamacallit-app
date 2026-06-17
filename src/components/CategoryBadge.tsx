import type { Category } from '@/lib/types';
import { categoryLabel } from '@/lib/categories';
import { cn } from '@/lib/utils';

/** The motion/effect-led categories get an accent dot; structural ones a faint dot. */
const ACCENT_CATEGORIES = new Set<Category>([
  'layout-effects',
  'micro-interactions',
  'scroll-animations',
  'text-animations',
  'page-transitions',
]);

export function CategoryBadge({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  const accent = ACCENT_CATEGORIES.has(category);
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface2 px-2 py-0.5 text-[10.5px] font-medium text-muted',
        className,
      )}
    >
      <span
        className={cn('h-1 w-1 rounded-full', accent ? 'bg-accent' : 'bg-faint')}
      />
      {categoryLabel(category)}
    </span>
  );
}
