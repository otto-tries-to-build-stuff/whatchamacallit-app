import { Bell } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'dot-indicator',
  name: 'Dot Indicator',
  category: 'feedback',
  commonality: 2,
  aliases: ['Status Dot', 'Notification Dot'],
  description:
    'A small filled circle indicating presence, status, or unread state, often attached to an avatar or icon.',
  whenToUse: [
    'Showing online/away presence or an unread state',
    'Quiet "something changed" hints without a number',
  ],
  whenNotToUse: [
    'A meaningful count — use a numeric badge',
    'Detailed status — use a labelled badge',
  ],
  relatedTo: ['badge', 'avatar', 'notification-centre', 'pulse'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'dot-indicator.tsx',
    content: `<span className="relative">
  <Avatar />
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full
                   border-2 border-bg bg-accent" />
</span>`,
  },
};

export default function Demo() {
  return (
    <div className="flex items-center gap-7">
      <div className="relative">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-surface2 text-[13px] font-semibold text-muted">
          AL
        </span>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface bg-accent" />
      </div>
      <div className="relative">
        <Bell className="h-6 w-6 text-muted" strokeWidth={2} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full border-2 border-surface bg-red-400" />
      </div>
      <span className="flex items-center gap-2 text-[12.5px] text-muted">
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        Away
      </span>
    </div>
  );
}
