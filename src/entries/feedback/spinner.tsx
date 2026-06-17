import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'spinner',
  name: 'Spinner',
  category: 'feedback',
  commonality: 1,
  aliases: ['Loader', 'Loading Spinner', 'Indeterminate Progress'],
  description:
    'A rotating shape indicating an in-progress task of unknown duration.',
  whenToUse: [
    'Short waits where you cannot show real progress',
    'Inline loading inside buttons or small regions',
  ],
  whenNotToUse: [
    'Known-duration tasks — use a progress bar',
    'Longer content loads — a skeleton preserves layout better',
  ],
  relatedTo: ['progress-bar', 'skeleton-loader', 'button-press'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'spinner.tsx',
    content: `<span
  role="status" aria-label="Loading"
  className="h-6 w-6 animate-spin rounded-full
             border-2 border-surface border-t-accent" />`,
  },
};

export default function Demo() {
  return (
    <div className="flex items-center gap-6">
      <span
        role="status"
        aria-label="Loading"
        className="h-8 w-8 animate-spin rounded-full border-[3px] border-surface2 border-t-accent"
      />
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-bounce rounded-full bg-accent"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>
    </div>
  );
}
