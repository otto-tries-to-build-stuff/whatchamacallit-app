import { Check } from 'lucide-react';
import type { Entry } from '@/lib/types';
import { cn } from '@/lib/utils';

export const meta: Entry = {
  id: 'stepper',
  name: 'Stepper',
  category: 'navigation',
  commonality: 2,
  aliases: ['Wizard', 'Progress Steps'],
  description:
    'A horizontal or vertical indicator showing progress through a multi-step process.',
  whenToUse: [
    'Sequential flows like checkout, onboarding or setup',
    'When users benefit from seeing how many steps remain',
  ],
  whenNotToUse: [
    'Peer views with no order — use tabs',
    'Single-step forms',
  ],
  relatedTo: ['tabs', 'progress-bar', 'form-field'],
  source: 'hand-coded',
  code: {
    language: 'tsx',
    filename: 'stepper.tsx',
    content: `const steps = ["Account", "Profile", "Confirm"];
const current = 1; // 0-indexed

{steps.map((label, i) => (
  <Step key={label}
    done={i < current}
    active={i === current}
    label={label} index={i + 1} />
))}`,
  },
};

const STEPS = ['Account', 'Profile', 'Confirm'];
const CURRENT = 1;

export default function Demo() {
  return (
    <div className="flex items-center">
      {STEPS.map((label, i) => {
        const done = i < CURRENT;
        const active = i === CURRENT;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'grid h-7 w-7 place-items-center rounded-full border text-[11px] font-medium transition-colors',
                  done && 'border-accent bg-accent text-accent-ink',
                  active && 'border-accent text-accent',
                  !done && !active && 'border-line text-faint',
                )}
              >
                {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : i + 1}
              </div>
              <span
                className={cn(
                  'font-mono text-[10px] uppercase tracking-wider',
                  active ? 'text-ink' : 'text-faint',
                )}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  'mx-2 mb-5 h-0.5 w-10 rounded-full',
                  i < CURRENT ? 'bg-accent' : 'bg-line',
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
