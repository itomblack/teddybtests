"use client";

import { useEffect } from "react";
import type { FilterGroup } from "./resultsData";

type SortOption = { label: string; value: string };

const sortOptions: SortOption[] = [
  { label: "Most relevant", value: "relevance" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

function CloseIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5l10 10M15 5L5 15" /></svg>;
}

export function MobileFilterSheet({
  open,
  onClose,
  filters,
  mode = "filter",
  sort = "relevance",
  onSortChange,
}: {
  open: boolean;
  onClose: () => void;
  filters: FilterGroup[];
  mode?: "filter" | "sort";
  sort?: string;
  onSortChange?: (v: string) => void;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-black/40" onClick={onClose}>
      <div
        className="flex max-h-[85vh] flex-col bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4">
          <h3 className="t-h4">{mode === "filter" ? "Filter" : "Sort"}</h3>
          <button onClick={onClose} aria-label="Close"><CloseIcon /></button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {mode === "filter" && filters.map((group) => (
            <div key={group.name} className="mb-6">
              <h4 className="t-caption text-[var(--color-ink)] mb-2">{group.name}</h4>
              {group.options.map((opt) => (
                <label key={opt.label} className="flex items-center gap-3 py-2.5 cursor-pointer">
                  <input type="checkbox" className="h-5 w-5 accent-[var(--color-brand)]" />
                  <span className="t-body-sm text-[var(--color-ink)] flex-1">{opt.label}</span>
                  <span className="t-caption text-[var(--color-ink-muted)]">{opt.count}</span>
                </label>
              ))}
            </div>
          ))}

          {mode === "sort" && (
            <div className="flex flex-col">
              {sortOptions.map((opt) => (
                <label key={opt.value} className="flex items-center gap-3 py-3 cursor-pointer border-b border-[var(--color-line)]">
                  <input
                    type="radio"
                    name="sort"
                    value={opt.value}
                    checked={sort === opt.value}
                    onChange={() => onSortChange?.(opt.value)}
                    className="h-5 w-5 accent-[var(--color-brand)]"
                  />
                  <span className="t-body-sm text-[var(--color-ink)]">{opt.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--color-line)] p-4">
          <button
            onClick={onClose}
            className="w-full bg-[var(--color-brand)] text-white py-3 t-label-md uppercase tracking-[1.1px]"
          >
            {mode === "filter" ? "Show results" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function MobileFilterSortBar({
  count,
  onOpenFilter,
  onOpenSort,
  sortLabel,
}: {
  count: number;
  onOpenFilter: () => void;
  onOpenSort: () => void;
  sortLabel: string;
}) {
  return (
    <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-[var(--color-line)] -mx-6 px-6 py-3 flex items-center gap-3 mb-4">
      <span className="t-body-sm text-[var(--color-ink-muted)] flex-1 truncate">{count} products</span>
      <button onClick={onOpenSort} className="t-caption uppercase border border-[var(--color-line)] px-3 py-2 hover:border-[var(--color-ink)]">
        Sort: {sortLabel}
      </button>
      <button onClick={onOpenFilter} className="t-caption uppercase border border-[var(--color-ink)] bg-[var(--color-ink)] text-white px-3 py-2">
        Filter
      </button>
    </div>
  );
}
