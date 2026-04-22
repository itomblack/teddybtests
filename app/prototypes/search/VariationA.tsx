"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { filterData } from "./searchData";

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="M12.5 12.5L17 17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M1 7h12M8 2l5 5-5 5" />
    </svg>
  );
}

export function VariationA() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = query.length >= 2 ? filterData(query) : null;

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); setQuery(""); }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative">
      {/* Nav bar */}
      <header className="flex items-center justify-between border-b border-[var(--color-line)] bg-white px-6 py-4">
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-block h-6 w-6 bg-[var(--color-brand)]" />
          <span className="t-h4">Teddy B</span>
        </div>
        <nav className="flex items-center gap-6 t-body-sm text-[var(--color-ink-muted)]">
          <span>New</span><span>Brands</span><span>Collections</span>
          <button onClick={() => { setOpen(true); setQuery(""); }} aria-label="Search">
            <SearchIcon />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => { setOpen(false); setQuery(""); }} />
          <div className="absolute inset-x-0 top-0 z-50 border-b border-[var(--color-line)] bg-white shadow-lg">
            {/* Search input bar */}
            <div className="flex items-center gap-3 border-b border-[var(--color-line)] px-6 py-4">
              <SearchIcon />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search watches, brands, articles..."
                className="flex-1 bg-transparent text-base outline-none placeholder:text-[var(--color-ink-muted)]"
              />
              <button onClick={() => { setOpen(false); setQuery(""); }} aria-label="Close">
                <CloseIcon />
              </button>
            </div>

            {/* Empty state */}
            {!results && (
              <div className="px-6 py-12 text-center">
                <p className="t-body text-[var(--color-ink-muted)]">
                  Start typing to search across products, brands, and content.
                </p>
              </div>
            )}

            {/* Results */}
            {results && (
              <div className="flex max-h-[70vh] overflow-hidden">
                {/* Left: categories */}
                <div className="w-[340px] shrink-0 overflow-y-auto border-r border-[var(--color-line)] p-6">
                  {results.brands.length > 0 && (
                    <div className="mb-6">
                      <h3 className="t-caption text-[var(--color-ink-muted)] mb-3">Brands</h3>
                      {results.brands.map((b) => (
                        <div key={b.name} className="mb-3">
                          <button className="t-body-sm font-medium text-[var(--color-ink)] flex items-center gap-2 hover:underline">
                            {b.name} <ArrowRightIcon />
                          </button>
                          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                            {b.collections.map((c) => (
                              <button key={c} className="t-body-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">{c}</button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {results.content.length > 0 && (
                    <div className="mb-6">
                      <h3 className="t-caption text-[var(--color-ink-muted)] mb-3">Content</h3>
                      {results.content.map((c) => (
                        <button key={c.title} className="mb-2 flex items-start gap-3 text-left group">
                          <div className="relative h-[45px] w-[80px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
                            <Image src={c.thumbnail} alt="" fill className="object-cover" unoptimized />
                          </div>
                          <div>
                            <span className="t-body-sm text-[var(--color-ink)] group-hover:underline leading-snug block">{c.title}</span>
                            <span className="t-caption text-[var(--color-ink-muted)]">{c.type}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {results.pages.length > 0 && (
                    <div>
                      <h3 className="t-caption text-[var(--color-ink-muted)] mb-3">Pages</h3>
                      {results.pages.map((p) => (
                        <button key={p.path} className="mb-1 block t-body-sm text-[var(--color-ink)] hover:underline">{p.title}</button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: products */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="mb-3 flex items-baseline justify-between">
                    <h3 className="t-caption text-[var(--color-ink-muted)]">Products</h3>
                    <button className="t-caption text-[var(--color-ink)] hover:underline">View all {results.products.length} results</button>
                  </div>
                  {results.products.length === 0 ? (
                    <p className="t-body-sm text-[var(--color-ink-muted)] py-8 text-center">No products found</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                      {results.products.slice(0, 6).map((p) => (
                        <button key={p.name} className="text-left group">
                          <div className="relative aspect-[3/3.7] overflow-hidden bg-[var(--color-surface-muted)] mb-2">
                            <Image src={p.image} alt={p.name} fill className="object-cover" unoptimized />
                          </div>
                          <span className="t-caption text-[var(--color-ink)]">{p.brand}</span>
                          <p className="t-body-sm text-[var(--color-ink-muted)] group-hover:underline mt-0.5 line-clamp-2">{p.name}</p>
                          <p className="t-label-md text-[var(--color-ink)] mt-1">{p.price}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
