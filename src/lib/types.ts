import type { ComponentType } from 'react';

/** The ten taxonomy categories, in display order (most common first). */
export type Category =
  | 'navigation'
  | 'disclosure'
  | 'input'
  | 'selection-display'
  | 'feedback'
  | 'layout-effects'
  | 'micro-interactions'
  | 'scroll-animations'
  | 'text-animations'
  | 'page-transitions';

/** How a demo was produced — drives the little provenance tag in the detail view. */
export type SourceType =
  | 'hand-coded'
  | 'reactbits'
  | 'shadcn'
  | 'svg-illustration'
  | 'lottie';

/** 1 = essential / used everywhere · 5 = obscure / niche. The grid sorts ascending. */
export type Commonality = 1 | 2 | 3 | 4 | 5;

/** A representative code snippet shown under the "Show code" toggle. */
export interface CodeSnippet {
  language: string;
  filename: string;
  content: string;
}

/**
 * The metadata every entry file exports as `meta`. The same file's default
 * export is the live `Demo` component.
 */
export interface Entry {
  id: string;
  name: string;
  category: Category;
  /** 1 = essential, 5 = obscure. */
  commonality: Commonality;
  /** Other names this pattern goes by — searched alongside `name`. */
  aliases: string[];
  /** One sentence a non-developer could understand. */
  description: string;
  /** 1–3 short bullets. */
  whenToUse: string[];
  /** 1–3 short bullets. */
  whenNotToUse: string[];
  /** Ids of related entries (rendered as chips in the detail view). */
  relatedTo: string[];
  source: SourceType;
  code: CodeSnippet;
}

/** The default-exported demo component for an entry (takes no props). */
export type DemoComponent = ComponentType;

/** An entry's metadata paired with its loaded demo component. */
export interface LoadedEntry {
  meta: Entry;
  Demo: DemoComponent;
}
