import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'drag-and-drop',
  name: 'Drag-and-drop',
  category: 'micro-interactions',
  commonality: 2,
  aliases: ['Sortable', 'Reorder'],
  description:
    'A pattern letting users grab items with a handle and reorder, move, or swap them via a drag gesture.',
  whenToUse: [
    'Reordering lists, building boards, or arranging layouts',
    'Direct manipulation that mirrors the real-world action',
  ],
  whenNotToUse: [
    'Touch or accessibility contexts without a keyboard alternative',
    'When simple up/down controls suffice',
  ],
  relatedTo: ['kanban-board', 'list', 'file-uploader'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'drag-and-drop.tsx',
    content: `import { Reorder } from "framer-motion";

<Reorder.Group axis="y" values={items} onReorder={setItems}>
  {items.map((item) => (
    <Reorder.Item key={item} value={item}>{item}</Reorder.Item>
  ))}
</Reorder.Group>`,
  },
};

export default function Demo() {
  const [items, setItems] = useState(['Design', 'Build', 'Test', 'Ship']);
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} className="w-[190px] space-y-2">
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          className="flex cursor-grab items-center gap-2 rounded-lg border border-line bg-surface3 px-3 py-2 text-[12.5px] text-ink shadow-sm active:cursor-grabbing"
        >
          <GripVertical className="h-4 w-4 text-faint" strokeWidth={2} />
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
