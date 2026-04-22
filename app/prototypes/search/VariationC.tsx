"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { filterData } from "./searchData";

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="M12.5 12.5L17 17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4l8 8M12 4L4 12" />
    </svg>
  );
}

export function VariationC() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const results = query.length >= 2 ? filterData(query) : null;
  const hasResults = results && (results.brands.length > 0 || results.products.length > 0 || results.content.length > 0 || results.pages.length > 0);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false); setQuery("");
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); setQuery(""); }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <div>
      {/* Nav */}
      <header className="flex items-center justify-between border-b border-[var(--color-line)] bg-white px-6 py-4">
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-block h-6 w-6 bg-[var(--color-brand)]" />
          <span className="t-h4">Teddy B</span>
        </div>
        <nav className="flex items-center gap-6 t-body-sm text-[var(--color-ink-muted)]">
          <span>New</span><span>Brands</span><span>Collections</span>
          <div ref={containerRef} className="relative">
            {!open ? (
              <button onClick={() => setOpen(true)} aria-label="Search"><SearchIcon /></button>
            ) : (
              <>
                {/* Inline search input */}
                <div className="flex items-center gap-2 border-b border-[var(--color-ink)] pb-1">
                  <SearchIcon size={16} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-[200px] bg-transparent text-sm outline-none placeholder:text-[var(--color-ink-muted)]"
                  />
                  <button onClick={() => { setOpen(false); setQuery(""); }}><CloseIcon /></button>
                </div>

                {/* Dropdown */}
                {(results || query.length < 2) && (
                  <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-[420px] max-h-[70vh] overflow-y-auto border border-[var(--color-line)] bg-white shadow-xl">
                    {/* Empty state */}
                    {query.length < 2 && (
                      <div className="px-5 py-6 text-center">
                        <p className="t-body-sm text-[var(--color-ink-muted)]">Type to search products, brands, content &amp; more</p>
                      </div>
                    )}

                    {/* Results */}
                    {results && !hasResults && (
                      <div className="px-5 py-8 text-center">
                        <p className="t-body-sm text-[var(--color-ink-muted)]">No results for &quot;{query}&quot;</p>
                      </div>
                    )}

                    {results && hasResults && (
                      <div className="divide-y divide-[var(--color-line)]">
                        {/* Products — top priority */}
                        {results.products.length > 0 && (
                          <div className="p-4">
                            <h3 className="t-caption text-[var(--color-ink-muted)] mb-3">Products</h3>
                            {results.products.slice(0, 4).map((p) => (
                              <button key={p.name} className="flex items-center gap-3 w-full text-left py-2 group hover:bg-[var(--color-surface-muted)] -mx-2 px-2">
                                <div className="relative h-[56px] w-[46px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
                                  <Image src={p.image} alt={p.name} fill className="object-cover" unoptimized />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="t-caption text-[var(--color-ink)]">{p.brand}</span>
                                  <p className="t-body-sm text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] truncate">{p.name}</p>
                                </div>
                                <span className="t-label-md text-[var(--color-ink)] shrink-0">{p.price}</span>
                              </button>
                            ))}
                            {results.products.length > 4 && (
                              <button className="t-caption text-[var(--color-ink)] hover:underline mt-2 block">
                                View all {results.products.length} products
                              </button>
                            )}
                          </div>
                        )}

                        {/* Brands */}
                        {results.brands.length > 0 && (
                          <div className="p-4">
                            <h3 className="t-caption text-[var(--color-ink-muted)] mb-2">Brands</h3>
                            {results.brands.map((b) => (
                              <div key={b.name} className="mb-2">
                                <button className="t-body-sm font-medium text-[var(--color-ink)] hover:underline">{b.name}</button>
                                <div className="flex flex-wrap gap-x-3 mt-0.5">
                                  {b.collections.map((c) => (
                                    <button key={c} className="t-body-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">{c}</button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Content */}
                        {results.content.length > 0 && (
                          <div className="p-4">
                            <h3 className="t-caption text-[var(--color-ink-muted)] mb-2">Content</h3>
                            {results.content.slice(0, 3).map((c) => (
                              <button key={c.title} className="block w-full text-left py-1.5 t-body-sm text-[var(--color-ink)] hover:underline">
                                <span className="t-caption text-[var(--color-ink-muted)] mr-2">{c.type}</span>
                                {c.title}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Pages */}
                        {results.pages.length > 0 && (
                          <div className="p-4">
                            <h3 className="t-caption text-[var(--color-ink-muted)] mb-2">Pages</h3>
                            {results.pages.slice(0, 3).map((p) => (
                              <button key={p.path} className="block w-full text-left py-1 t-body-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">{p.title}</button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
