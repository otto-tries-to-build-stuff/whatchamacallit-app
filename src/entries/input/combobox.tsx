import { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'combobox',
  name: 'Combobox',
  category: 'input',
  commonality: 2,
  aliases: ['Searchable Select', 'Autocomplete Select'],
  description:
    'A select-style field where typing filters the list of options, blending an input and a dropdown.',
  whenToUse: [
    'Choosing one value from a long list that benefits from search',
    'Country, currency, repo, or user pickers',
  ],
  whenNotToUse: [
    'A short list — a plain select or radios is simpler',
    'Free-form values not from a fixed set — use autocomplete',
  ],
  relatedTo: ['select', 'autocomplete', 'command-palette', 'dropdown-menu'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'combobox.tsx',
    content: `const filtered = options.filter((o) =>
  o.toLowerCase().includes(query.toLowerCase()));

<input value={query} onChange={(e) => setQuery(e.target.value)}
  role="combobox" aria-expanded />
<ul role="listbox">
  {filtered.map((o) => <li key={o} role="option">{o}</li>)}
</ul>`,
  },
};

const FRUITS = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Mango'];

export default function Demo() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => FRUITS.filter((f) => f.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  return (
    <div className="w-[210px]">
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface3 px-2.5 focus-within:border-accent/50">
        <Search className="h-3.5 w-3.5 text-faint" strokeWidth={2} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          role="combobox"
          aria-expanded="true"
          placeholder="Search fruit…"
          className="h-9 flex-1 bg-transparent text-[13px] text-ink placeholder:text-faint focus:outline-none"
        />
        <ChevronDown className="h-3.5 w-3.5 text-muted" strokeWidth={2.2} />
      </div>
      <ul
        role="listbox"
        className="mt-1.5 max-h-[104px] overflow-auto rounded-lg border border-line bg-surface3 p-1.5"
      >
        {filtered.length === 0 ? (
          <li className="px-2 py-1.5 text-[12px] text-faint">No matches</li>
        ) : (
          filtered.map((o) => (
            <li
              key={o}
              role="option"
              className="cursor-pointer rounded-md px-2.5 py-1.5 text-[12.5px] text-muted hover:bg-accent/15 hover:text-ink"
            >
              {o}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
