import { useState } from 'react';
import { ChevronRight, File, Folder } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'tree-view',
  name: 'Tree View',
  category: 'selection-display',
  commonality: 3,
  aliases: ['Tree', 'Hierarchical List'],
  description:
    'A nested expandable list showing parent–child hierarchies like folder structures or org charts.',
  whenToUse: [
    'Navigating nested data (file trees, categories, org charts)',
    'When users expand and collapse to manage depth',
  ],
  whenNotToUse: [
    'Flat collections — use a list',
    'Very deep trees on small screens — consider drill-down navigation',
  ],
  relatedTo: ['list', 'accordion', 'sidebar'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'tree-view.tsx',
    content: `function Node({ node, depth }) {
  const [open, setOpen] = useState(depth === 0);
  return (
    <>
      <Row onClick={() => setOpen((o) => !o)} depth={depth}>{node.name}</Row>
      {open && node.children?.map((c) => <Node node={c} depth={depth + 1} />)}
    </>
  );
}`,
  },
};

type Node = { name: string; children?: Node[] };
const TREE: Node = {
  name: 'src',
  children: [
    { name: 'components', children: [{ name: 'Button.tsx' }, { name: 'Card.tsx' }] },
    { name: 'lib', children: [{ name: 'utils.ts' }] },
    { name: 'index.ts' },
  ],
};

function TreeNode({ node, depth }: { node: Node; depth: number }) {
  const [open, setOpen] = useState(depth < 1);
  const isFolder = !!node.children;
  return (
    <div>
      <button
        onClick={() => isFolder && setOpen((o) => !o)}
        style={{ paddingLeft: depth * 14 + 6 }}
        className="flex w-full items-center gap-1.5 rounded-md py-1 pr-2 text-left text-[12px] text-muted hover:bg-ink/[0.04] hover:text-ink"
      >
        {isFolder ? (
          <ChevronRight
            className={cn('h-3 w-3 shrink-0 text-faint transition-transform', open && 'rotate-90')}
          />
        ) : (
          <span className="w-3 shrink-0" />
        )}
        {isFolder ? (
          <Folder className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} />
        ) : (
          <File className="h-3.5 w-3.5 shrink-0 text-faint" strokeWidth={2} />
        )}
        {node.name}
      </button>
      {isFolder && open && node.children!.map((c) => <TreeNode key={c.name} node={c} depth={depth + 1} />)}
    </div>
  );
}

export default function Demo() {
  return (
    <div className="w-[200px] rounded-xl border border-line bg-surface3 p-1.5">
      <TreeNode node={TREE} depth={0} />
    </div>
  );
}
