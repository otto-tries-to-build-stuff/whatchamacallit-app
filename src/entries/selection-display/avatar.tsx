import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'avatar',
  name: 'Avatar',
  category: 'selection-display',
  commonality: 1,
  aliases: ['Profile Picture', 'User Image'],
  description:
    'A small image (or initials fallback) representing a user or entity, usually circular.',
  whenToUse: [
    'Identifying the person behind a comment, message, or account',
    'Compact identity in lists, headers, and menus',
  ],
  whenNotToUse: [
    'Representing non-human entities better shown with an icon or logo',
  ],
  relatedTo: ['avatar-group', 'badge', 'dot-indicator', 'list'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'avatar.tsx',
    content: `<span className="relative">
  {src ? <img src={src} className="rounded-full" />
       : <span className="grid place-items-center rounded-full">{initials}</span>}
  <span className="absolute bottom-0 right-0 rounded-full bg-accent" /> {/* status */}
</span>`,
  },
};

export default function Demo() {
  return (
    <div className="flex items-end gap-5">
      <div className="relative">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-accent/70 to-accent/30 text-[18px] font-semibold text-accent-ink">
          AL
        </span>
        <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-accent" />
      </div>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-surface2 text-[14px] font-semibold text-muted">
        GH
      </span>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-surface2 text-[12px] font-semibold text-faint">
        TM
      </span>
    </div>
  );
}
