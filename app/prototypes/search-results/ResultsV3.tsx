"use client";

import { useState } from "react";
import { resultProducts, resultContent, resultPages, filters, QUERY, TOTAL_PRODUCTS, TOTAL_CONTENT, TOTAL_PAGES, TOTAL_ALL } from "./resultsData";
import { SearchHeader, ProductGridCard, ContentCard, PageResult, FilterSidebar } from "./SharedUI";
import { MobileFilterSheet, MobileFilterSortBar } from "./MobileFilterSheet";

type Scenario = "product-heavy" | "mixed" | "content-heavy";

export function ResultsV3() {
  const [scenario, setScenario] = useState<Scenario>("product-heavy");
  const [shown, setShown] = useState(6);
  const [mobileSheet, setMobileSheet] = useState<"filter" | "sort" | null>(null);
  const [sort, setSort] = useState("relevance");
  const sortLabel = sort === "relevance" ? "Relevant" : sort === "price-asc" ? "Price ↑" : sort === "price-desc" ? "Price ↓" : "Newest";

  const scenarios: { key: Scenario; label: string; desc: string }[] = [
    { key: "product-heavy", label: "Product-heavy (>70%)", desc: "e.g. \"grand seiko\" — mostly products, content in slim top bar" },
    { key: "mixed", label: "Mixed (40-60%)", desc: "e.g. \"spring drive\" — two-column split, content left, products right" },
    { key: "content-heavy", label: "Content-heavy (>70%)", desc: "e.g. \"buying guide\" — content list first, products in compact sidebar" },
  ];

  return (
    <div>
      <SearchHeader query={QUERY} />

      {/* Scenario switcher */}
      <div className="border-b border-[var(--color-line)] bg-[var(--color-accent-gold)]/10 px-6 py-3">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-3">
          <span className="t-caption text-[var(--color-ink-muted)]">Simulate:</span>
          {scenarios.map((s) => (
            <button
              key={s.key}
              onClick={() => { setScenario(s.key); setShown(6); }}
              className={`px-3 py-1.5 t-caption transition-colors ${
                scenario === s.key ? "bg-[var(--color-brand)] text-white" : "bg-white border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <p className="mx-auto max-w-6xl t-body-sm text-[var(--color-ink-muted)] mt-1">
          {scenarios.find((s) => s.key === scenario)?.desc}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="t-h3 mb-6">{TOTAL_ALL} results for &ldquo;{QUERY}&rdquo;</h1>

        {/* Product-heavy: slim content bar + full product grid */}
        {scenario === "product-heavy" && (
          <div>
            {/* Slim content bar */}
            <div className="mb-6 flex items-center gap-4 bg-[var(--color-surface-muted)] p-4 overflow-x-auto">
              <span className="t-caption text-[var(--color-ink-muted)] shrink-0">Related:</span>
              {resultPages.slice(0, 1).map((p) => (
                <button key={p.path} className="shrink-0 t-body-sm text-[var(--color-ink)] hover:underline font-medium">{p.title}</button>
              ))}
              <span className="text-[var(--color-line)]">|</span>
              {resultContent.slice(0, 2).map((c) => (
                <button key={c.title} className="shrink-0 t-body-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:underline flex items-center gap-1.5">
                  <span className="t-caption text-[var(--color-ink-muted)]">{c.type}</span> {c.title}
                </button>
              ))}
              <button className="shrink-0 t-caption text-[var(--color-ink)] hover:underline">+{TOTAL_CONTENT + TOTAL_PAGES - 3} more</button>
            </div>

            {/* Mobile filter+sort */}
            <MobileFilterSortBar
              count={TOTAL_PRODUCTS}
              onOpenFilter={() => setMobileSheet("filter")}
              onOpenSort={() => setMobileSheet("sort")}
              sortLabel={sortLabel}
            />

            {/* Products */}
            <div className="flex items-baseline justify-between mb-4 max-lg:hidden">
              <h2 className="t-body-sm text-[var(--color-ink-muted)]">{TOTAL_PRODUCTS} products</h2>
              <select className="t-body-sm border border-[var(--color-line)] px-3 py-1.5 bg-white">
                <option>Most relevant</option>
                <option>Price: Low to High</option>
              </select>
            </div>
            <div className="flex gap-0">
              <FilterSidebar filters={filters} />
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {resultProducts.slice(0, shown).map((p) => <ProductGridCard key={p.name} product={p} />)}
                </div>
                {shown < resultProducts.length && (
                  <div className="mt-8 text-center">
                    <button onClick={() => setShown((s) => s + 6)} className="border border-[var(--color-ink)] px-8 py-3 t-label-md hover:bg-[var(--color-surface-muted)]">Load more</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mixed: two-column on desktop, products-first on mobile */}
        {scenario === "mixed" && (
          <div className="flex gap-8 max-lg:flex-col">
            {/* Content + pages — order-2 on mobile so products appear first */}
            <div className="w-[320px] shrink-0 max-lg:w-full max-lg:order-2">
              <h2 className="t-caption text-[var(--color-ink-muted)] mb-3">Pages & Content ({TOTAL_CONTENT + TOTAL_PAGES})</h2>
              <div className="divide-y divide-[var(--color-line)] border border-[var(--color-line)] bg-[var(--color-surface-muted)]">
                {resultPages.map((p) => (
                  <div key={p.path} className="p-4"><PageResult page={p} /></div>
                ))}
                {resultContent.map((c) => (
                  <div key={c.title} className="p-4"><ContentCard item={c} layout="row" /></div>
                ))}
              </div>
            </div>

            {/* Products — order-1 on mobile */}
            <div className="flex-1 min-w-0 max-lg:order-1">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="t-caption text-[var(--color-ink-muted)]">Products ({TOTAL_PRODUCTS})</h2>
                <select className="t-body-sm border border-[var(--color-line)] px-3 py-1.5 bg-white">
                  <option>Most relevant</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {resultProducts.slice(0, shown).map((p) => <ProductGridCard key={p.name} product={p} />)}
              </div>
              {shown < resultProducts.length && (
                <div className="mt-8 text-center">
                  <button onClick={() => setShown((s) => s + 6)} className="border border-[var(--color-ink)] px-8 py-3 t-label-md hover:bg-[var(--color-surface-muted)] max-sm:w-full">Load more</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content-heavy: content list first, products in compact row at bottom */}
        {scenario === "content-heavy" && (
          <div>
            {/* Content — primary */}
            <h2 className="t-caption text-[var(--color-ink-muted)] mb-4">Content & Pages ({TOTAL_CONTENT + TOTAL_PAGES})</h2>
            <div className="max-w-3xl">
              {resultPages.map((p) => (
                <div key={p.path} className="border-b border-[var(--color-line)] py-3"><PageResult page={p} /></div>
              ))}
              {resultContent.map((c) => (
                <div key={c.title} className="border-b border-[var(--color-line)]"><ContentCard item={c} layout="row" /></div>
              ))}
            </div>

            {/* Products — compact row at bottom */}
            <div className="mt-10 pt-8 border-t border-[var(--color-line)]">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="t-caption text-[var(--color-ink-muted)]">Products ({TOTAL_PRODUCTS})</h2>
                <button className="t-caption text-[var(--color-ink)] hover:underline">View all products →</button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {resultProducts.slice(0, 5).map((p) => (
                  <div key={p.name} className="shrink-0 w-[180px]">
                    <ProductGridCard product={p} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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
