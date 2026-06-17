import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

/**
 * Colors are stored as space-separated RGB channels in CSS variables (see
 * src/index.css) and wrapped here as `rgb(var(--x) / <alpha-value>)` so Tailwind
 * opacity modifiers (e.g. `bg-accent/15`) work and the whole palette stays
 * theme-swappable via a class on <html>.
 */
const withChannel = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Design system ──
        bg: withChannel('--bg'),
        surface: withChannel('--surface'),
        surface2: withChannel('--surface-2'),
        surface3: withChannel('--surface-3'),
        ink: withChannel('--ink'),
        muted: withChannel('--muted'),
        faint: withChannel('--faint'),
        accent: withChannel('--accent'),
        'accent-ink': withChannel('--accent-ink'),
        // Border lines carry their own alpha, so they stay a plain var.
        line: 'var(--line)',
        // ── shadcn convenience aliases ──
        border: 'var(--line)',
        ring: withChannel('--accent'),
        popover: withChannel('--surface-3'),
        'popover-foreground': withChannel('--ink'),
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
