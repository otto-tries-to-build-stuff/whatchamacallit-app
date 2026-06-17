import { useState } from 'react';
import { FileText, UploadCloud } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'file-uploader',
  name: 'File Uploader',
  category: 'input',
  commonality: 2,
  aliases: ['File Input', 'Dropzone'],
  description:
    'A control accepting one or more files via a file-browser button and/or drag-and-drop.',
  whenToUse: [
    'Uploading documents, images, or attachments',
    'When drag-and-drop speeds up bulk uploads',
  ],
  whenNotToUse: [
    'Capturing a single value — use the right typed input instead',
  ],
  relatedTo: ['drag-and-drop', 'progress-bar', 'form-field'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'file-uploader.tsx',
    content: `<label onDragOver={(e) => { e.preventDefault(); setOver(true); }}
       onDrop={handleDrop} className="dropzone">
  <UploadCloud />
  <span>Drag & drop or <b>browse</b></span>
  <input type="file" multiple className="sr-only" />
</label>`,
  },
};

export default function Demo() {
  const [over, setOver] = useState(false);
  return (
    <div className="w-[230px] space-y-2">
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
        }}
        className={cn(
          'flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border border-dashed p-4 text-center transition-colors',
          over ? 'border-accent/60 bg-accent/[0.06]' : 'border-line bg-surface3',
        )}
      >
        <UploadCloud className="h-5 w-5 text-accent" strokeWidth={2} />
        <span className="text-[11.5px] text-muted">
          Drag &amp; drop or <span className="font-medium text-ink">browse</span>
        </span>
        <input type="file" multiple className="sr-only" />
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface2 px-2.5 py-1.5">
        <FileText className="h-4 w-4 shrink-0 text-faint" strokeWidth={2} />
        <span className="flex-1 truncate text-[11px] text-muted">report.pdf</span>
        <span className="font-mono text-[10px] text-faint">2.4mb</span>
      </div>
    </div>
  );
}
