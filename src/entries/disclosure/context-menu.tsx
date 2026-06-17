import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, Scissors, Star, Trash2 } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'context-menu',
  name: 'Context Menu',
  category: 'disclosure',
  commonality: 3,
  aliases: ['Right-click Menu'],
  description:
    'A dropdown menu triggered by right-click or long-press, showing actions relevant to the target element.',
  whenToUse: [
    'Power-user surfaces (editors, file managers) with object-specific actions',
    'Offering shortcuts without cluttering the UI',
  ],
  whenNotToUse: [
    'Primary actions — they are hidden until right-click and undiscoverable on touch',
    'When a visible button or dropdown would serve better',
  ],
  relatedTo: ['dropdown-menu', 'popover', 'bottom-sheet'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'context-menu.tsx',
    content: `function onContextMenu(e: MouseEvent) {
  e.preventDefault();
  setMenu({ x: e.clientX, y: e.clientY });
}

<div onContextMenu={onContextMenu}>Right-click me</div>
{menu && <Menu x={menu.x} y={menu.y} />}`,
  },
};

const ITEMS = [
  { icon: Copy, label: 'Copy' },
  { icon: Scissors, label: 'Cut' },
  { icon: Star, label: 'Favourite' },
  { icon: Trash2, label: 'Delete', danger: true },
];

export default function Demo() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>({ x: 96, y: 28 });

  function onContextMenu(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      onContextMenu={onContextMenu}
      onClick={() => setPos(null)}
      className="relative grid h-32 w-[220px] place-items-center rounded-xl border border-dashed border-line bg-surface2 text-[11px] text-faint"
    >
      Right-click here
      <AnimatePresence>
        {pos && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ left: pos.x, top: pos.y }}
            className="absolute z-10 w-32 origin-top-left rounded-lg border border-line bg-surface3 p-1.5 shadow-2xl"
          >
            {ITEMS.map(({ icon: Icon, label, danger }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] ${
                  danger ? 'text-red-400' : 'text-muted'
                } hover:bg-accent/15`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                {label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
