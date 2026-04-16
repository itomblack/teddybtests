"use client";

import Image from "next/image";
import { type Product, CompareIcon } from "./ProductCard";

const MAX_SLOTS = 3;

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4l8 8M12 4L4 12" />
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
  if (items.length === 0) return null;

  const slots = Array.from({ length: MAX_SLOTS }, (_, i) => items[i] ?? null);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-stretch px-10 max-sm:px-4">
        {/* Slots */}
        {slots.map((item, i) => (
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

        {/* Actions */}
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
    </div>
  );
}
