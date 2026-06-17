import { useState } from 'react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'anchor-links',
  name: 'Anchor Links',
  category: 'navigation',
  commonality: 2,
  aliases: ['Jump Links', 'In-page Nav', 'Table of Contents'],
  description:
    'Links that scroll the page to a specific section, often shown in a sticky list alongside long content.',
  whenToUse: [
    'Long articles or docs split into named sections',
    'When readers need to jump between sections quickly',
  ],
  whenNotToUse: [
    'Navigating between separate pages — use normal links',
    'Short content with no distinct sections',
  ],
  relatedTo: ['breadcrumbs', 'sidebar', 'scroll-progress-bar', 'sticky-section'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'anchor-links.tsx',
    content: `const sections = ["Overview", "Install", "Usage", "API"];

<nav className="flex flex-col gap-1">
  {sections.map((s) => (
    <a key={s} href={"#" + s.toLowerCase()}
       aria-current={s === active ? "location" : undefined}>
      {s}
    </a>
  ))}
</nav>`,
  },
};

const SECTIONS = ['Overview', 'Installation', 'Usage', 'API', 'FAQ'];

export default function Demo() {
  const [active, setActive] = useState('Installation');
  return (
    <nav className="flex flex-col gap-0.5">
      <p className="mb-1.5 px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        On this page
      </p>
      {SECTIONS.map((s) => {
        const on = active === s;
        return (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={cn(
              'border-l-2 px-3 py-1 text-left text-[12.5px] transition-colors',
              on
                ? 'border-accent font-medium text-accent'
                : 'border-line text-muted hover:border-faint hover:text-ink',
            )}
          >
            {s}
          </button>
        );
      })}
    </nav>
  );
}
