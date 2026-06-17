import {
  createHighlighterCore,
  createJavaScriptRegexEngine,
  type HighlighterCore,
} from 'shiki/core';

/** Syntax theme used for all code blocks (kept dark in both app themes). */
export const CODE_THEME = 'vesper';

/** Only the languages our entries actually use are bundled. */
const LANGS = ['tsx', 'typescript', 'javascript', 'css', 'bash'] as const;

const ALIASES: Record<string, string> = {
  ts: 'typescript',
  js: 'javascript',
  jsx: 'tsx',
  shell: 'bash',
  sh: 'bash',
};

let highlighterPromise: Promise<HighlighterCore> | null = null;

/** Load the Shiki highlighter once and reuse it across all code blocks. */
function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [import('shiki/themes/vesper.mjs')],
      langs: [
        import('shiki/langs/tsx.mjs'),
        import('shiki/langs/typescript.mjs'),
        import('shiki/langs/javascript.mjs'),
        import('shiki/langs/css.mjs'),
        import('shiki/langs/bash.mjs'),
      ],
      engine: createJavaScriptRegexEngine(),
    });
  }
  return highlighterPromise;
}

/** Highlight a snippet to HTML, falling back to `tsx` for unknown languages. */
export async function highlightCode(code: string, language: string): Promise<string> {
  const hl = await getHighlighter();
  const normalized = ALIASES[language] ?? language;
  const loaded = hl.getLoadedLanguages();
  const lang = loaded.includes(normalized) ? normalized : 'tsx';
  return hl.codeToHtml(code, { lang, theme: CODE_THEME });
}

// Keep the bundled language list reachable for tooling without widening the API.
export type SupportedLang = (typeof LANGS)[number];
