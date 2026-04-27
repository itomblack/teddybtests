"use client";

import { useState } from "react";
import { resultProducts, resultContent, resultPages, filters, QUERY, TOTAL_PRODUCTS, TOTAL_CONTENT, TOTAL_PAGES, TOTAL_ALL } from "./resultsData";
import { SearchHeader, ProductGridCard, ProductListRow, ContentCard, PageResult, FilterSidebar, GridIcon, ListIcon } from "./SharedUI";

type Tab = "all" | "products" | "content" | "pages";

export function ResultsV1() {
  const [tab, setTab] = useState<Tab>("all");
  const [productView, setProductView] = useState<"grid" | "list">("grid");
  const [shown, setShown] = useState(6);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "all", label: "All", count: TOTAL_ALL },
    { key: "products", label: "Products", count: TOTAL_PRODUCTS },
    { key: "content", label: "Content", count: TOTAL_CONTENT },
    { key: "pages", label: "Pages", count: TOTAL_PAGES },
  ];

  return (
    <div>
      <SearchHeader query={QUERY} />

      {/* Tabs */}
      <div className="border-b border-[var(--color-line)] bg-white px-6">
        <div className="mx-auto max-w-6xl flex gap-0">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); setShown(6); }}
              className={`px-5 py-3 t-label-md transition-colors border-b-2 ${
                tab === t.key ? "border-[var(--color-ink)] text-[var(--color-ink)]" : "border-transparent text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {t.label} ({t.count})
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* All tab */}
        {tab === "all" && (
          <div>
            {/* Content + Pages banner */}
            {(resultContent.length > 0 || resultPages.length > 0) && (
              <div className="mb-8 border border-[var(--color-line)] bg-[var(--color-surface-muted)] p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="t-caption text-[var(--color-ink-muted)]">Pages & Content</h3>
                  <button onClick={() => setTab("content")} className="t-caption text-[var(--color-ink)] hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {resultPages.slice(0, 1).map((p) => (
                    <PageResult key={p.path} page={p} />
                  ))}
                  {resultContent.slice(0, 2).map((c) => (
                    <ContentCard key={c.title} item={c} layout="row" />
                  ))}
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="t-body-sm text-[var(--color-ink-muted)]">
                Showing {Math.min(shown, resultProducts.length)} of {TOTAL_PRODUCTS} products
              </h3>
              <div className="flex items-center gap-2">
                <button onClick={() => setProductView("grid")}><GridIcon active={productView === "grid"} /></button>
                <button onClick={() => setProductView("list")}><ListIcon active={productView === "list"} /></button>
              </div>
            </div>
            <div className="flex gap-0">
              <FilterSidebar filters={filters} />
              <div className="flex-1">
                {productView === "grid" ? (
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                    {resultProducts.slice(0, shown).map((p) => <ProductGridCard key={p.name} product={p} />)}
                  </div>
                ) : (
                  <div>{resultProducts.slice(0, shown).map((p) => <ProductListRow key={p.name} product={p} />)}</div>
                )}
                {shown < resultProducts.length && (
                  <div className="mt-8 text-center">
                    <button onClick={() => setShown((s) => s + 6)} className="border border-[var(--color-ink)] px-8 py-3 t-label-md text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)]">
                      Load more products
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Products tab */}
        {tab === "products" && (
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="t-body-sm text-[var(--color-ink-muted)]">{TOTAL_PRODUCTS} products for &ldquo;{QUERY}&rdquo;</h3>
              <div className="flex items-center gap-2">
                <button onClick={() => setProductView("grid")}><GridIcon active={productView === "grid"} /></button>
                <button onClick={() => setProductView("list")}><ListIcon active={productView === "list"} /></button>
              </div>
            </div>
            <div className="flex gap-0">
              <FilterSidebar filters={filters} />
              <div className="flex-1">
                {productView === "grid" ? (
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">{resultProducts.slice(0, shown).map((p) => <ProductGridCard key={p.name} product={p} />)}</div>
                ) : (
                  <div>{resultProducts.slice(0, shown).map((p) => <ProductListRow key={p.name} product={p} />)}</div>
                )}
                {shown < resultProducts.length && (
                  <div className="mt-8 text-center">
                    <button onClick={() => setShown((s) => s + 6)} className="border border-[var(--color-ink)] px-8 py-3 t-label-md text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)]">Load more</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content tab — auto list view */}
        {tab === "content" && (
          <div>
            <h3 className="t-body-sm text-[var(--color-ink-muted)] mb-4">{TOTAL_CONTENT} content results for &ldquo;{QUERY}&rdquo;</h3>
            <div className="max-w-3xl divide-y divide-[var(--color-line)]">
              {resultContent.map((c) => (
                <div key={c.title} className="py-2"><ContentCard item={c} layout="row" /></div>
              ))}
            </div>
          </div>
        )}

        {/* Pages tab */}
        {tab === "pages" && (
          <div>
            <h3 className="t-body-sm text-[var(--color-ink-muted)] mb-4">{TOTAL_PAGES} pages for &ldquo;{QUERY}&rdquo;</h3>
            <div className="max-w-3xl divide-y divide-[var(--color-line)]">
              {resultPages.map((p) => <PageResult key={p.path} page={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
