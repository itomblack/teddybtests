"use client";

import { useState } from "react";
import Image from "next/image";
import { type Product, CompareIcon } from "./ProductCard";

const MAX_SLOTS_DESKTOP = 3;
const MAX_SLOTS_MOBILE = 2;

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4l8 8M12 4L4 12" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`transition-transform ${open ? "" : "rotate-180"}`}
    >
      <path d="M5 12.5l5-5 5 5" />
    </svg>
  );
}

export function CompareDrawer({
  items,
  onRemove,
  onClearAll,
  onCompare,
}: {
  items: Product[];
  onRemove: (index: number) => void;
  onClearAll: () => void;
  onCompare: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (items.length === 0) return null;

  const desktopSlots = Array.from({ length: MAX_SLOTS_DESKTOP }, (_, i) => items[i] ?? null);
  const mobileSlots = Array.from({ length: MAX_SLOTS_MOBILE }, (_, i) => items[i] ?? null);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-white">
      {/* ── Desktop layout ──────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-[1440px] items-stretch px-10 max-sm:hidden">
        {desktopSlots.map((item, i) => (
          <div
            key={i}
            className="flex w-1/4 min-w-0 items-center border-r border-[var(--color-line)] px-4 py-3 first:pl-0"
          >
            {item ? (
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                    unoptimized
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="t-caption text-black">{item.brand}</span>
                  <p className="t-body-sm truncate text-[var(--color-ink-muted)]">{item.name}</p>
                </div>
                <button
                  onClick={() => onRemove(i)}
                  className="shrink-0 p-1"
                  aria-label={`Remove ${item.name}`}
                >
                  <CloseIcon />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 opacity-40">
                <CompareIcon />
                <span className="t-body-sm text-[var(--color-ink-muted)]">Add watch</span>
              </div>
            )}
          </div>
        ))}

        <div className="flex flex-1 shrink-0 items-center justify-end gap-4 pl-6">
          <button onClick={onClearAll} className="t-caption tracking-[1px]">
            Clear all
          </button>
          {items.length >= 2 && (
            <button
              onClick={onCompare}
              className="t-caption bg-[var(--color-brand)] px-6 py-3 tracking-[1px] text-white"
            >
              Compare
            </button>
          )}
        </div>
      </div>

      {/* ── Mobile layout ───────────────────────────────────────────── */}
      <div className="sm:hidden">
        {/* Collapsed header — always visible */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center gap-2 px-5 py-3"
        >
          <ChevronIcon open={mobileOpen} />
          <span className="flex-1 text-left" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-body-lg)" }}>
            Compare watches ({Math.min(items.length, MAX_SLOTS_MOBILE)}/{MAX_SLOTS_MOBILE})
          </span>
          <span
            onClick={(e) => { e.stopPropagation(); onClearAll(); }}
            className="t-caption tracking-[1px]"
          >
            Clear all
          </span>
        </button>

        {/* Expanded content */}
        {mobileOpen && (
          <div className="border-t border-[var(--color-line)]">
            {/* Watch list */}
            {mobileSlots.map((item, i) => (
              <div
                key={i}
                className="flex items-center border-b border-[var(--color-line)] px-5 py-3"
              >
                {item ? (
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                        unoptimized
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="t-caption text-black">{item.brand}</span>
                      <p className="t-body-sm truncate text-[var(--color-ink-muted)]">{item.name}</p>
                    </div>
                    <button
                      onClick={() => onRemove(i)}
                      className="shrink-0 p-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 opacity-40">
                    <CompareIcon />
                    <span className="t-body-sm text-[var(--color-ink-muted)]">Add watch</span>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom actions */}
            <div className="flex items-center gap-4 px-5 py-3">
              <button onClick={onClearAll} className="t-caption flex-1 tracking-[1px]">
                Clear all
              </button>
              {items.length >= 2 && (
                <button
                  onClick={onCompare}
                  className="t-caption flex-1 bg-[var(--color-brand)] py-3 tracking-[1px] text-center text-white"
                >
                  Compare
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
