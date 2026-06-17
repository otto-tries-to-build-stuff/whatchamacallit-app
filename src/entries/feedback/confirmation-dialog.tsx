import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'confirmation-dialog',
  name: 'Confirmation Dialog',
  category: 'feedback',
  commonality: 2,
  aliases: ['Alert Dialog'],
  description: 'A modal asking the user to confirm or cancel a consequential action.',
  whenToUse: [
    'Destructive or irreversible actions (delete, discard, sign out)',
    'When you need an explicit yes/no before proceeding',
  ],
  whenNotToUse: [
    'Routine, reversible actions — they slow users down',
    'Non-blocking info — use a toast or inline alert',
  ],
  relatedTo: ['modal-dialog', 'inline-alert', 'toast'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'confirmation-dialog.tsx',
    content: `<div role="alertdialog" aria-modal>
  <h2>Discard changes?</h2>
  <p>Your edits will be lost. This can't be undone.</p>
  <div>
    <button onClick={cancel}>Cancel</button>
    <button onClick={confirm}>Discard</button>
  </div>
</div>`,
  },
};

export default function Demo() {
  return (
    <div className="relative grid h-32 w-[230px] place-items-center overflow-hidden rounded-xl border border-line bg-surface2">
      <div className="absolute inset-0 space-y-2 p-3 opacity-25">
        <span className="skel h-1.5 w-1/2" />
        <span className="skel h-1.5 w-5/6" />
        <span className="skel h-1.5 w-2/3" />
      </div>
      <div className="absolute inset-0 bg-bg/50" />
      <div
        role="alertdialog"
        className="relative w-[88%] rounded-xl border border-line bg-surface3 p-3 shadow-2xl"
      >
        <p className="text-[12.5px] font-semibold text-ink">Discard changes?</p>
        <p className="mt-1 text-[11px] leading-relaxed text-muted">
          Your edits will be lost. This can't be undone.
        </p>
        <div className="mt-2.5 flex justify-end gap-1.5">
          <button className="rounded-md border border-line bg-surface2 px-2.5 py-1 text-[11px] text-ink">
            Cancel
          </button>
          <button className="rounded-md bg-red-500/90 px-2.5 py-1 text-[11px] font-medium text-white">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
