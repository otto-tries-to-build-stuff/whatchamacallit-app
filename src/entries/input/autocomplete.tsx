import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'autocomplete',
  name: 'Autocomplete',
  category: 'input',
  commonality: 2,
  aliases: ['Typeahead', 'Suggest'],
  description:
    'A text field that suggests matching values as the user types, often allowing arbitrary input too.',
  whenToUse: [
    'Speeding up entry with suggestions (search, tags, addresses)',
    'When users may also type a value not in the list',
  ],
  whenNotToUse: [
    'The value must come from a fixed set — use a combobox or select',
    'Very few options — show them directly',
  ],
  relatedTo: ['combobox', 'text-field', 'command-palette', 'select'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'autocomplete.tsx',
    content: `<input value={query} onChange={(e) => setQuery(e.target.value)}
  aria-autocomplete="list" />
{query && (
  <ul>{suggestions.map((s) => <li key={s}>{highlight(s, query)}</li>)}</ul>
)}`,
  },
};

const CITIES = ['London', 'Lisbon', 'Los Angeles', 'Lyon', 'Lima'];

export default function Demo() {
  const [query, setQuery] = useState('L');
  const suggestions = useMemo(
    () => (query ? CITIES.filter((c) => c.toLowerCase().startsWith(query.toLowerCase())) : []),
    [query],
  );
  return (
    <div className="w-[220px]">
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface3 px-3 focus-within:border-accent/50">
        <Search className="h-3.5 w-3.5 text-faint" strokeWidth={2} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-autocomplete="list"
          placeholder="City"
          className="h-9 flex-1 bg-transparent text-[13px] text-ink placeholder:text-faint focus:outline-none"
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="mt-1.5 rounded-lg border border-line bg-surface3 p-1.5 shadow-xl">
          {suggestions.slice(0, 4).map((s) => (
            <li
              key={s}
              onClick={() => setQuery(s)}
              className="cursor-pointer rounded-md px-2.5 py-1.5 text-[12.5px] text-muted hover:bg-accent/15 hover:text-ink"
            >
              <span className="text-accent">{s.slice(0, query.length)}</span>
              {s.slice(query.length)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
