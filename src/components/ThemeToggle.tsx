import { Moon, Sun } from 'lucide-react';
import { useTheme, type Theme } from '@/lib/theme';
import { cn } from '@/lib/utils';

const OPTIONS: { value: Theme; label: string; Icon: typeof Moon }[] = [
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'light', label: 'Light', Icon: Sun },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center rounded-lg border border-line bg-surface p-0.5">
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={active}
            className={cn(
              'grid h-7 w-7 place-items-center rounded-[6px] transition-colors',
              active ? 'bg-surface3 text-ink shadow-sm' : 'text-faint hover:text-muted',
            )}
          >
            <Icon className="h-[15px] w-[15px]" strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
