import { ChevronDown, Copy, Pencil, Trash2 } from 'lucide-react';
import type { Entry } from '@/lib/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const meta: Entry = {
  id: 'dropdown-menu',
  name: 'Dropdown Menu',
  category: 'disclosure',
  commonality: 1,
  aliases: ['Menu', 'Popover Menu', 'Action Menu'],
  description:
    'A small floating panel of action items revealed by clicking a button.',
  whenToUse: [
    'Grouping several actions behind one trigger (a "⋯" or "Options" button)',
    'Commands that act on the element they hang off',
  ],
  whenNotToUse: [
    'Picking a value for a form field — use a select or combobox',
    'Primary navigation between pages — use tabs or a nav menu',
  ],
  relatedTo: ['context-menu', 'select', 'popover', 'command-palette'],
  source: 'shadcn',
  code: {
    language: 'tsx',
    filename: 'dropdown-demo.tsx',
    content: `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Pencil, Copy, Trash2 } from "lucide-react";

export function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Options</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem><Pencil /> Edit</DropdownMenuItem>
        <DropdownMenuItem><Copy /> Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Trash2 /> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
  },
};

export default function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-lg border border-line bg-surface3 px-3 py-1.5 text-[12.5px] text-ink transition-colors hover:border-ink/20">
          Options
          <ChevronDown className="h-3.5 w-3.5 text-muted" strokeWidth={2.2} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Pencil /> Edit
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy /> Duplicate
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 focus:bg-red-500/10 focus:text-red-300">
          <Trash2 /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
