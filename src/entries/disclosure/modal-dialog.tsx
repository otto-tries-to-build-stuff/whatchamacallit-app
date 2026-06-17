import type { Entry } from '@/lib/types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const meta: Entry = {
  id: 'modal-dialog',
  name: 'Modal Dialog',
  category: 'disclosure',
  commonality: 1,
  aliases: ['Modal', 'Lightbox', 'Dialog'],
  description:
    'An overlay window that interrupts the main flow and demands user interaction before continuing.',
  whenToUse: [
    'A focused task or decision must be resolved before anything else',
    'Confirming a consequential or destructive action',
  ],
  whenNotToUse: [
    'Non-blocking, dismissible info — prefer a popover or toast',
    'Long forms or rich content — use a dedicated page or drawer',
  ],
  relatedTo: ['drawer', 'popover', 'confirmation-dialog', 'toast'],
  source: 'shadcn',
  code: {
    language: 'tsx',
    filename: 'modal-demo.tsx',
    content: `import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog";

export function Demo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Delete project</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This permanently removes the project and all its data.
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild><button>Cancel</button></DialogClose>
          <button>Delete</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
  },
};

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="max-w-[200px] text-[12px] leading-relaxed text-muted">
        Some actions need a confirmation before they run.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded-lg bg-accent px-3.5 py-1.5 text-[12.5px] font-medium text-accent-ink transition-opacity hover:opacity-90">
            Delete project
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete project?</DialogTitle>
            <DialogDescription>
              This permanently removes the project and all its data. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button className="rounded-lg border border-line bg-surface2 px-3 py-1.5 text-[12.5px] text-ink transition-colors hover:bg-surface">
                Cancel
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button className="rounded-lg bg-red-500/90 px-3 py-1.5 text-[12.5px] font-medium text-white transition-opacity hover:opacity-90">
                Delete
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
