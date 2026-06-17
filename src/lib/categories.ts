import type { Category } from './types';

export interface CategoryMeta {
  id: Category;
  label: string;
  /** Short blurb used as the category's tagline. */
  blurb: string;
}

/**
 * The ten categories in CLAUDE.md display order (most common first). This is the
 * single source of truth for ordering and labels across the sidebar and badges.
 */
export const CATEGORIES: CategoryMeta[] = [
  { id: 'navigation', label: 'Navigation', blurb: 'Getting around the app.' },
  { id: 'disclosure', label: 'Disclosure', blurb: 'Show or hide content on demand.' },
  { id: 'input', label: 'Input', blurb: 'Capturing data from the user.' },
  { id: 'selection-display', label: 'Selection & Display', blurb: 'Showing content collections.' },
  { id: 'feedback', label: 'Feedback', blurb: 'Telling the user something happened.' },
  { id: 'layout-effects', label: 'Layout & Effects', blurb: 'Page-level structure & ambient effects.' },
  { id: 'micro-interactions', label: 'Micro-interactions', blurb: 'Small reactive animations.' },
  { id: 'scroll-animations', label: 'Scroll Animations', blurb: 'Triggered by or linked to scroll.' },
  { id: 'text-animations', label: 'Text Animations', blurb: 'Typography in motion.' },
  { id: 'page-transitions', label: 'Page Transitions', blurb: 'Effects between routes or views.' },
];

const LABEL_BY_ID = new Map(CATEGORIES.map((c) => [c.id, c.label] as const));
const ORDER_BY_ID = new Map(CATEGORIES.map((c, i) => [c.id, i] as const));

export function categoryLabel(id: Category): string {
  return LABEL_BY_ID.get(id) ?? id;
}

/** Position of a category in display order (used for sorting). */
export function categoryOrder(id: Category): number {
  return ORDER_BY_ID.get(id) ?? Number.MAX_SAFE_INTEGER;
}
