import { ChevronRight } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'breadcrumbs',
  name: 'Breadcrumbs',
  category: 'navigation',
  commonality: 1,
  aliases: ['Breadcrumb Trail'],
  description:
    "A horizontal sequence of links showing the user's current position in a hierarchical site or app.",
  whenToUse: [
    'Deep hierarchies where users need to see and climb back up the path',
    'Sites or apps with clearly nested sections',
  ],
  whenNotToUse: [
    'Flat structures only one or two levels deep',
    'As primary navigation — it only reflects the current path',
  ],
  relatedTo: ['tabs', 'sidebar', 'anchor-links'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'breadcrumbs.tsx',
    content: `export function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
      {items.map((label, i) => (
        <span key={label} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
          <a className={i === items.length - 1 ? "text-accent" : ""}>{label}</a>
        </span>
      ))}
    </nav>
  );
}`,
  },
};

export default function Demo() {
  const crumbs = ['Home', 'Library', 'Components', 'Tabs'];
  return (
    <nav className="flex items-center gap-1.5 font-mono text-[12px]">
      {crumbs.map((label, i) => {
        const last = i === crumbs.length - 1;
        return (
          <span key={label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 text-faint" />}
            <span className={last ? 'text-accent' : 'text-muted'}>{label}</span>
          </span>
        );
      })}
    </nav>
  );
}
