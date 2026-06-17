import { MapPin } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'hovercard',
  name: 'Hovercard',
  category: 'disclosure',
  commonality: 3,
  aliases: ['Preview Card', 'Rich Tooltip'],
  description:
    'A larger card-shaped overlay shown on hover that previews richer content like a user profile or link preview.',
  whenToUse: [
    'Previewing a profile, repo, or page without navigating',
    'Adding context to an @mention or link',
  ],
  whenNotToUse: [
    'Touch-first interfaces — there is no hover',
    'Essential info — keep it visible instead of hover-gated',
  ],
  relatedTo: ['tooltip', 'popover', 'avatar', 'card'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'hovercard.tsx',
    content: `<span className="group relative">
  <a>@ada</a>
  <div className="absolute hidden group-hover:block w-60 rounded-xl border p-3 shadow-xl">
    {/* avatar, name, bio, meta */}
  </div>
</span>`,
  },
};

export default function Demo() {
  return (
    <div className="w-60 rounded-xl border border-line bg-surface3 p-3 shadow-2xl">
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[13px] font-semibold text-accent-ink">
          A
        </span>
        <div>
          <p className="text-[13px] font-medium text-ink">Ada Lovelace</p>
          <p className="font-mono text-[10.5px] text-faint">@ada</p>
        </div>
      </div>
      <p className="mt-2.5 text-[11.5px] leading-relaxed text-muted">
        Writing the first algorithm before there was a machine to run it.
      </p>
      <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[10px] text-faint">
        <MapPin className="h-3 w-3" strokeWidth={2} />
        London, 1843
      </div>
    </div>
  );
}
