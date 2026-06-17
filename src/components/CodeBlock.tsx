import { useEffect, useState } from 'react';
import { Check, ChevronRight, Copy } from 'lucide-react';
import type { CodeSnippet } from '@/lib/types';
import { highlightCode } from '@/lib/shiki';
import { cn } from '@/lib/utils';

export function CodeBlock({ code }: { code: CodeSnippet }) {
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Highlight lazily — only once the block is first opened.
  useEffect(() => {
    if (!open || html) return;
    let active = true;
    highlightCode(code.content, code.language).then((result) => {
      if (active) setHtml(result);
    });
    return () => {
      active = false;
    };
  }, [open, html, code.content, code.language]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-[13px] font-medium text-ink"
        aria-expanded={open}
      >
        <ChevronRight
          className={cn('h-3.5 w-3.5 text-muted transition-transform', open && 'rotate-90')}
          strokeWidth={2.2}
        />
        {open ? 'Hide code' : 'Show code'}
        <span className="rounded border border-line bg-surface2 px-1.5 py-0.5 font-mono text-[10px] uppercase text-faint">
          {code.language}
        </span>
      </button>

      {open && (
        <div className="mt-3 overflow-hidden rounded-lg border border-line bg-[#101010]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <div className="flex items-center gap-2 font-mono text-[11px] text-faint">
              <span className="h-2 w-2 rounded-full bg-white/15" />
              {code.filename}
            </div>
            <button
              type="button"
              onClick={copy}
              className="flex items-center gap-1.5 font-mono text-[11px] text-faint transition-colors hover:text-ink"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-accent" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" /> Copy
                </>
              )}
            </button>
          </div>

          <div
            className={cn(
              'max-h-[420px] overflow-auto px-1 py-1 font-mono text-[12.5px] leading-relaxed',
              '[&_pre]:m-0 [&_pre]:!bg-transparent [&_pre]:p-3',
            )}
          >
            {html ? (
              <div dangerouslySetInnerHTML={{ __html: html }} />
            ) : (
              <pre className="m-0 whitespace-pre p-3 text-muted">{code.content}</pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
