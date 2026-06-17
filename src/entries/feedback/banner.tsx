import { useState } from 'react';
import { Megaphone, X } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'banner',
  name: 'Banner',
  category: 'feedback',
  commonality: 3,
  aliases: ['System Bar', 'Notification Bar'],
  description:
    'A persistent strip across the top of the page conveying a system-wide message like maintenance or an account warning.',
  whenToUse: [
    'App-wide announcements (maintenance, billing, new features)',
    'Messages that should stay until acknowledged',
  ],
  whenNotToUse: [
    'Context-specific messages — use an inline alert',
    'Transient confirmations — use a toast',
  ],
  relatedTo: ['inline-alert', 'toast', 'notification-centre'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'banner.tsx',
    content: `{visible && (
  <div role="status" className="flex items-center gap-2 border-b px-4 py-2">
    <Megaphone /> <span>Scheduled maintenance Sunday 02:00 UTC.</span>
    <button onClick={() => setVisible(false)}><X /></button>
  </div>
)}`,
  },
};

export default function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="w-[250px] overflow-hidden rounded-xl border border-line">
      {visible ? (
        <div className="flex items-center gap-2 border-b border-accent/20 bg-accent/10 px-3 py-2">
          <Megaphone className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} />
          <span className="flex-1 text-[11px] text-ink">New: dark mode is here.</span>
          <button
            onClick={() => setVisible(false)}
            className="text-faint hover:text-ink"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <div className="border-b border-line px-3 py-2 text-[11px] text-faint">Banner dismissed</div>
      )}
      <div className="space-y-2 p-3 opacity-50">
        <span className="skel h-1.5 w-1/2" />
        <span className="skel h-1.5 w-3/4" />
      </div>
    </div>
  );
}
