import { GitPullRequest, Heart, MessageCircle } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'notification-centre',
  name: 'Notification Centre',
  category: 'feedback',
  commonality: 3,
  aliases: ['Inbox', 'Activity Panel'],
  description:
    'A persistent panel listing past system notifications, usually accessed via a bell icon.',
  whenToUse: [
    'Collecting activity and alerts users can review later',
    'When notifications should persist beyond a fleeting toast',
  ],
  whenNotToUse: [
    'One-off confirmations — use a toast',
    'A single urgent message — use a banner',
  ],
  relatedTo: ['toast', 'banner', 'dot-indicator', 'list'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'notification-centre.tsx',
    content: `<div role="menu" className="w-72 rounded-xl border shadow-xl">
  <header>Notifications</header>
  {items.map((n) => (
    <div key={n.id} className="flex gap-2.5 p-2.5">
      <n.icon /> <p>{n.text}</p>
      {n.unread && <span className="dot" />}
    </div>
  ))}
</div>`,
  },
};

const ITEMS = [
  { icon: Heart, text: 'Mara liked your post', time: '2m', unread: true },
  { icon: MessageCircle, text: 'New comment from Ben', time: '1h', unread: true },
  { icon: GitPullRequest, text: 'PR #214 was merged', time: '3h', unread: false },
];

export default function Demo() {
  return (
    <div className="w-[235px] overflow-hidden rounded-xl border border-line bg-surface3 shadow-2xl">
      <div className="flex items-center justify-between border-b border-line px-3 py-2">
        <span className="text-[12px] font-medium text-ink">Notifications</span>
        <span className="font-mono text-[10px] text-accent">2 new</span>
      </div>
      <div className="divide-y divide-line">
        {ITEMS.map((n) => (
          <div key={n.text} className="flex items-start gap-2.5 px-3 py-2.5">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface2 text-faint">
              <n.icon className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <p className="flex-1 text-[11.5px] leading-snug text-muted">{n.text}</p>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="font-mono text-[9px] text-faint">{n.time}</span>
              {n.unread && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
