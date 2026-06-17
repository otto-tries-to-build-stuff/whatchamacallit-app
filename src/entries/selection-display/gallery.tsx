import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'gallery',
  name: 'Gallery',
  category: 'selection-display',
  commonality: 3,
  aliases: ['Image Gallery', 'Lightbox Gallery'],
  description:
    'A grid of thumbnails that opens larger images in a lightbox when clicked.',
  whenToUse: [
    'Browsing photo or media collections',
    'When users want to preview at full size on demand',
  ],
  whenNotToUse: [
    'Single images — no lightbox needed',
    'Mixed content better suited to cards',
  ],
  relatedTo: ['grid', 'carousel', 'masonry', 'modal-dialog'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'gallery.tsx',
    content: `<div className="grid grid-cols-3 gap-2">
  {images.map((src, i) => (
    <button key={i} onClick={() => setOpen(i)}>
      <img src={src} />
    </button>
  ))}
</div>
{open != null && <Lightbox src={images[open]} onClose={() => setOpen(null)} />}`,
  },
};

const TILES = [
  'from-accent/40',
  'from-sky-400/40',
  'from-violet-400/40',
  'from-pink-400/40',
  'from-orange-400/40',
  'from-emerald-400/40',
];

export default function Demo() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="relative w-[210px]">
      <div className="grid grid-cols-3 gap-2">
        {TILES.map((c, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`aspect-square rounded-lg border border-line bg-gradient-to-br to-transparent ${c}`}
          />
        ))}
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="absolute inset-0 z-10 grid place-items-center rounded-xl bg-bg/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              className={`h-28 w-32 rounded-xl border border-line bg-gradient-to-br to-transparent ${TILES[open]}`}
            />
            <button className="absolute right-2 top-2 text-faint hover:text-ink">
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
