import type { ReactNode } from 'react';
import { Check, Monitor, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

type TipSide = 'bottom' | 'bottom-start' | 'top' | 'left';

const TIP_POSITION: Record<TipSide, string> = {
  bottom: 'left-1/2 top-full mt-3 w-60 -translate-x-1/2 translate-y-1 group-hover/region:translate-y-0',
  'bottom-start': 'left-0 top-full mt-3 w-60 translate-y-1 group-hover/region:translate-y-0',
  top: 'bottom-full left-1/2 mb-3 w-60 -translate-x-1/2 -translate-y-1 group-hover/region:translate-y-0',
  left: 'right-full top-1/2 mr-3 w-52 -translate-y-1/2 translate-x-1 group-hover/region:translate-x-0',
};

/** A dashed blueprint region that names itself on hover. */
function Region({
  title,
  alias,
  description,
  side = 'bottom',
  label,
  labelClass,
  className,
  children,
}: {
  title: string;
  alias?: string;
  description: string;
  side?: TipSide;
  label?: string;
  labelClass?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        'group/region relative cursor-default rounded-md border border-dashed border-ink/15 bg-ink/[0.015]',
        'transition-colors hover:z-20 hover:border-accent/70 hover:bg-accent/[0.05]',
        className,
      )}
    >
      {children}
      {label && (
        <span
          className={cn(
            'absolute rounded-[3px] bg-surface2/85 px-1 py-px font-mono text-[9px] uppercase leading-none tracking-wider text-faint group-hover/region:text-accent',
            labelClass,
          )}
        >
          {label}
        </span>
      )}
      <div
        className={cn(
          'pointer-events-none absolute z-30 rounded-lg border border-line bg-surface3 p-3 text-left opacity-0 shadow-2xl transition-all duration-150 group-hover/region:opacity-100',
          TIP_POSITION[side],
        )}
      >
        <p className="text-[12.5px] font-semibold text-ink">
          {title}
          {alias && <span className="font-mono text-[10px] font-normal text-faint"> · {alias}</span>}
        </p>
        <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}

function Skel({ className }: { className?: string }) {
  return <span className={cn('skel', className)} />;
}

export function AnatomyBlueprint() {
  return (
    <section className="mb-9">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="mb-1 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Start here
          </div>
          <h1 className="text-[19px] font-semibold tracking-tight text-ink">
            Anatomy of an interface
          </h1>
          <p className="mt-0.5 text-[13px] text-muted">
            The skeleton most screens share. Hover any region to learn what it's called and what it does.
          </p>
        </div>
        <div className="hidden items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted sm:flex">
          <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
          Hover a region
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto]">
          {/* ── Website blueprint ── */}
          <div>
            <div className="mb-2.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
              <Monitor className="h-3.5 w-3.5" strokeWidth={2} />
              Website
            </div>
            <div className="overflow-visible rounded-xl border border-line bg-surface2 p-2.5">
              <div className="mb-2.5 flex items-center gap-2 px-1.5 pt-0.5">
                <span className="h-2 w-2 rounded-full bg-ink/15" />
                <span className="h-2 w-2 rounded-full bg-ink/15" />
                <span className="h-2 w-2 rounded-full bg-ink/15" />
                <span className="ml-2 h-4 flex-1 rounded-md border border-line bg-ink/[0.02]" />
              </div>

              <div className="flex h-[316px] flex-col gap-2.5">
                <Region
                  title="Header"
                  alias="Navbar"
                  description="Top bar carrying the logo, primary navigation and global actions. Usually sticks to the top as you scroll."
                  side="bottom"
                  label="Header"
                  labelClass="left-2.5 bottom-1"
                  className="flex h-11 shrink-0 items-center justify-between px-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-ink/20 group-hover/region:bg-accent/60" />
                    <Skel className="h-1.5 w-10 group-hover/region:bg-accent/40" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Skel className="h-1.5 w-7" />
                    <Skel className="h-1.5 w-7" />
                    <Skel className="h-1.5 w-7" />
                  </div>
                </Region>

                <Region
                  title="Hero"
                  alias="Above the fold"
                  description="The first full-width band — headline, value proposition and the primary call-to-action a visitor sees first."
                  side="bottom"
                  label="Hero"
                  labelClass="right-2 top-2"
                  className="flex h-16 shrink-0 flex-col justify-center gap-1.5 px-3"
                >
                  <Skel className="h-2 w-2/5 group-hover/region:bg-accent/40" />
                  <Skel className="h-1.5 w-3/5" />
                  <span className="mt-0.5 h-3.5 w-16 rounded-[4px] bg-ink/15 group-hover/region:bg-accent/50" />
                </Region>

                <div className="flex min-h-0 flex-1 gap-2.5">
                  <Region
                    title="Sidebar"
                    alias="Side nav"
                    description="A vertical rail of secondary navigation or filters running alongside the main content."
                    side="bottom-start"
                    label="Sidebar"
                    labelClass="left-1.5 bottom-1.5"
                    className="flex w-[26%] flex-col gap-2 p-2.5"
                  >
                    <Skel className="h-1.5 w-3/4 group-hover/region:bg-accent/40" />
                    <Skel className="h-1.5 w-full" />
                    <Skel className="h-1.5 w-2/3" />
                    <Skel className="h-1.5 w-5/6" />
                  </Region>

                  <Region
                    title="Content"
                    alias="Main / body"
                    description="The primary work area — the grid, feed or document the whole page is built around."
                    side="bottom"
                    label="Content"
                    labelClass="right-1.5 bottom-1.5"
                    className="flex flex-1 flex-col p-2.5"
                  >
                    <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span
                          key={i}
                          className={cn(
                            'rounded border border-line bg-ink/[0.02]',
                            i === 0 && 'group-hover/region:border-accent/30',
                          )}
                        />
                      ))}
                    </div>
                  </Region>
                </div>

                <Region
                  title="Footer"
                  description="The closing band — secondary links, legal, social and metadata that lives at the very bottom."
                  side="top"
                  label="Footer"
                  labelClass="right-2.5 top-1.5"
                  className="flex h-12 shrink-0 items-center justify-between px-3"
                >
                  <div className="flex flex-col gap-1.5">
                    <Skel className="h-1.5 w-12 group-hover/region:bg-accent/40" />
                    <Skel className="h-1 w-8" />
                  </div>
                  <div className="flex gap-4">
                    <Skel className="h-1 w-6" />
                    <Skel className="h-1 w-6" />
                    <Skel className="h-1 w-6" />
                  </div>
                </Region>
              </div>
            </div>
          </div>

          {/* ── Mobile blueprint ── */}
          <div>
            <div className="mb-2.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
              <Smartphone className="h-3.5 w-3.5" strokeWidth={2} />
              Mobile app
            </div>
            <div className="w-[200px] overflow-visible rounded-[26px] border border-line bg-surface2 p-2.5">
              <div className="flex h-[372px] flex-col gap-2 rounded-[18px] p-1.5">
                <Region
                  title="Status bar"
                  description="The OS row — time, signal and battery. Owned by the device, not your app."
                  side="left"
                  className="flex h-5 shrink-0 items-center justify-between px-2.5"
                >
                  <Skel className="h-1 w-5 group-hover/region:bg-accent/40" />
                  <div className="flex gap-1">
                    <Skel className="h-1 w-2" />
                    <Skel className="h-1 w-2" />
                    <Skel className="h-1 w-3" />
                  </div>
                </Region>

                <Region
                  title="App bar"
                  alias="Top bar"
                  description="The mobile header — screen title, a back affordance and one or two key actions."
                  side="left"
                  className="flex h-10 shrink-0 items-center justify-between px-2.5"
                >
                  <span className="h-3.5 w-3.5 rounded-[3px] bg-ink/15 group-hover/region:bg-accent/50" />
                  <Skel className="h-1.5 w-12 group-hover/region:bg-accent/40" />
                  <span className="h-3.5 w-3.5 rounded-full bg-ink/15 group-hover/region:bg-accent/50" />
                </Region>

                <Region
                  title="Feed"
                  alias="Content area"
                  description="The scrollable body — the cards, list or feed the screen is centered on."
                  side="left"
                  label="Feed"
                  labelClass="right-1.5 top-1.5"
                  className="flex min-h-0 flex-1 flex-col gap-2 p-2.5"
                >
                  <span className="h-12 w-full shrink-0 rounded border border-line bg-ink/[0.02] group-hover/region:border-accent/30" />
                  <span className="h-9 w-full shrink-0 rounded border border-line bg-ink/[0.02]" />
                  <span className="h-9 w-full shrink-0 rounded border border-line bg-ink/[0.02]" />
                </Region>

                <Region
                  title="Tab bar"
                  alias="Bottom nav"
                  description="Bottom navigation — 3–5 primary destinations kept within thumb's reach."
                  side="top"
                  className="flex h-12 shrink-0 items-center justify-around px-2"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="flex flex-col items-center gap-1">
                      <span
                        className={cn(
                          'h-3 w-3 rounded-[3px]',
                          i === 0 ? 'bg-ink/25 group-hover/region:bg-accent/60' : 'bg-ink/15',
                        )}
                      />
                      <Skel className="h-0.5 w-3" />
                    </span>
                  ))}
                </Region>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
