"use client";

import { useState } from "react";
import { resultProducts, resultContent, resultPages, filters, QUERY, TOTAL_ALL, TOTAL_PRODUCTS } from "./resultsData";
import { SearchHeader, ProductGridCard, ContentCard, PageResult, FilterSidebar } from "./SharedUI";
import { MobileFilterSheet, MobileFilterSortBar } from "./MobileFilterSheet";

export function ResultsV2() {
  const [shown, setShown] = useState(6);
  const [contentExpanded, setContentExpanded] = useState(false);
  const [mobileSheet, setMobileSheet] = useState<"filter" | "sort" | null>(null);
  const [sort, setSort] = useState("relevance");
  const sortLabel = sort === "relevance" ? "Relevant" : sort === "price-asc" ? "Price ↑" : sort === "price-desc" ? "Price ↓" : "Newest";

  return (
    <div>
      <SearchHeader query={QUERY} />

      <div className="mx-auto max-w-6xl px-6 py-8 max-sm:py-5">
        {/* Result count */}
        <div className="mb-6 max-sm:mb-4">
          <h1 className="t-h3">{TOTAL_ALL} results for &ldquo;{QUERY}&rdquo;</h1>
        </div>

        {/* Pages & Content section — compact, collapsible */}
        {(resultContent.length > 0 || resultPages.length > 0) && (
          <div className="mb-8">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="t-caption text-[var(--color-ink-muted)]">Pages & Content ({resultContent.length + resultPages.length})</h2>
              {!contentExpanded && (
                <button onClick={() => setContentExpanded(true)} className="t-caption text-[var(--color-ink)] hover:underline">
                  Show all
                </button>
              )}
            </div>

            {/* Collapsed: compact row */}
            {!contentExpanded && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {resultPages.slice(0, 1).map((p) => (
                  <div key={p.path} className="shrink-0 w-[280px] border border-[var(--color-line)] p-4 group hover:border-[var(--color-ink)]">
                    <span className="t-caption text-[var(--color-ink-muted)]">Page</span>
                    <p className="t-body-sm font-medium text-[var(--color-ink)] group-hover:underline mt-1">{p.title}</p>
                    <p className="t-body-sm text-[var(--color-ink-muted)] mt-0.5 line-clamp-1">{p.snippet}</p>
                  </div>
                ))}
                {resultContent.slice(0, 2).map((c) => (
                  <div key={c.title} className="shrink-0 w-[280px] border border-[var(--color-line)] p-4 group hover:border-[var(--color-ink)]">
                    <span className="t-caption text-[var(--color-ink-muted)]">{c.type} · {c.date}</span>
                    <p className="t-body-sm font-medium text-[var(--color-ink)] group-hover:underline mt-1">{c.title}</p>
                    <p className="t-body-sm text-[var(--color-ink-muted)] mt-0.5 line-clamp-1">{c.snippet}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Expanded: full content list */}
            {contentExpanded && (
              <div className="border border-[var(--color-line)] bg-[var(--color-surface-muted)] p-5">
                <div className="divide-y divide-[var(--color-line)]">
                  {resultPages.map((p) => <PageResult key={p.path} page={p} />)}
                  {resultContent.map((c) => (
                    <div key={c.title} className="py-2"><ContentCard item={c} layout="row" /></div>
                  ))}
                </div>
                <button onClick={() => setContentExpanded(false)} className="t-caption text-[var(--color-ink)] hover:underline mt-3">
                  Collapse
                </button>
              </div>
            )}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-[var(--color-line)] mb-6" />

        {/* Products section — main content */}
        {/* Mobile filter+sort */}
        <MobileFilterSortBar
          count={TOTAL_PRODUCTS}
          onOpenFilter={() => setMobileSheet("filter")}
          onOpenSort={() => setMobileSheet("sort")}
          sortLabel={sortLabel}
        />

        {/* Desktop count + sort */}
        <div className="flex items-baseline justify-between mb-4 max-lg:hidden">
          <h2 className="t-body-sm text-[var(--color-ink-muted)]">
            Showing {Math.min(shown, resultProducts.length)} of {TOTAL_PRODUCTS} products
          </h2>
          <select className="t-body-sm border border-[var(--color-line)] px-3 py-1.5 bg-white text-[var(--color-ink)]">
            <option>Most relevant</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        <div className="flex gap-0">
          <FilterSidebar filters={filters} />
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {resultProducts.slice(0, shown).map((p) => (
                <ProductGridCard key={p.name} product={p} />
              ))}
            </div>
            {shown < resultProducts.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShown((s) => s + 6)}
                  className="border border-[var(--color-ink)] px-8 py-3 t-label-md text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)] max-sm:w-full"
                >
                  Load more ({resultProducts.length - shown} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <MobileFilterSheet
        open={mobileSheet !== null}
        onClose={() => setMobileSheet(null)}
        filters={filters}
        mode={mobileSheet ?? "filter"}
        sort={sort}
        onSortChange={setSort}
      />
    </div>
  );
}
