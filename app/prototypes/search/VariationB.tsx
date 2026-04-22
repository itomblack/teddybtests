"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { filterData, recentlyViewed } from "./searchData";

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

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="4,2 12,7 4,12" /></svg>
  );
}

export function VariationB() {
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
      {/* Nav */}
      <header className="flex items-center justify-between border-b border-[var(--color-line)] bg-white px-6 py-4">
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-block h-6 w-6 bg-[var(--color-brand)]" />
          <span className="t-h4">Teddy B</span>
        </div>
        <nav className="flex items-center gap-6 t-body-sm text-[var(--color-ink-muted)]">
          <span>New</span><span>Brands</span><span>Collections</span>
          <button onClick={() => { setOpen(true); setQuery(""); }} aria-label="Search"><SearchIcon /></button>
        </nav>
      </header>

      {/* Overlay */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => { setOpen(false); setQuery(""); }} />
          <div className="absolute inset-x-0 top-0 z-50 border-b border-[var(--color-line)] bg-white shadow-lg">
            {/* Input */}
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
              <button onClick={() => { setOpen(false); setQuery(""); }} aria-label="Close"><CloseIcon /></button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              {/* Default: Recently Viewed */}
              {!results && (
                <div className="px-6 py-8">
                  <h3 className="t-caption text-[var(--color-ink-muted)] mb-4">Recently Viewed</h3>
                  <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
                    {recentlyViewed.map((p) => (
                      <button key={p.name} className="text-left group">
                        <div className="relative aspect-square overflow-hidden bg-[var(--color-surface-muted)] mb-2">
                          <Image src={p.image} alt={p.name} fill className="object-cover" unoptimized />
                        </div>
                        <span className="t-caption text-[var(--color-ink)]">{p.brand}</span>
                        <p className="t-body-sm text-[var(--color-ink-muted)] group-hover:underline mt-0.5 line-clamp-1">{p.name}</p>
                        <p className="t-label-md text-[var(--color-ink)] mt-1">{p.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Active results — products first */}
              {results && (
                <div className="px-6 py-6">
                  {/* Products row — prioritized */}
                  {results.products.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-baseline justify-between mb-3">
                        <h3 className="t-caption text-[var(--color-ink-muted)]">Products</h3>
                        <button className="t-caption text-[var(--color-ink)] hover:underline">View all</button>
                      </div>
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        {results.products.slice(0, 5).map((p) => (
                          <button key={p.name} className="shrink-0 w-[160px] text-left group">
                            <div className="relative aspect-[3/3.7] overflow-hidden bg-[var(--color-surface-muted)] mb-2">
                              <Image src={p.image} alt={p.name} fill className="object-cover" unoptimized />
                            </div>
                            <span className="t-caption text-[var(--color-ink)]">{p.brand}</span>
                            <p className="t-body-sm text-[var(--color-ink-muted)] group-hover:underline mt-0.5 line-clamp-2">{p.name}</p>
                            <p className="t-label-md text-[var(--color-ink)] mt-1">{p.price}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Brands & Collections */}
                  {results.brands.length > 0 && (
                    <div className="mb-6">
                      <h3 className="t-caption text-[var(--color-ink-muted)] mb-3">Brands & Collections</h3>
                      <div className="flex flex-wrap gap-2">
                        {results.brands.flatMap((b) => [
                          <button key={b.name} className="border border-[var(--color-line)] px-4 py-2 t-body-sm font-medium hover:border-black">{b.name}</button>,
                          ...b.collections.map((c) => (
                            <button key={`${b.name}-${c}`} className="border border-[var(--color-line)] px-4 py-2 t-body-sm text-[var(--color-ink-muted)] hover:border-black">
                              {b.name} / {c}
                            </button>
                          )),
                        ])}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  {results.content.length > 0 && (
                    <div className="mb-6">
                      <h3 className="t-caption text-[var(--color-ink-muted)] mb-3">Content</h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {results.content.map((c) => (
                          <button key={c.title} className="flex items-center gap-3 text-left p-3 border border-[var(--color-line)] hover:border-[var(--color-ink)] group">
                            <div className="relative h-[48px] w-[80px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
                              <Image src={c.thumbnail} alt="" fill className="object-cover" unoptimized />
                              {c.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20"><PlayIcon /></div>
                              )}
                            </div>
                            <div>
                              <span className="t-body-sm text-[var(--color-ink)] group-hover:underline">{c.title}</span>
                              <span className="t-caption text-[var(--color-ink-muted)] mt-0.5 block">{c.type}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pages */}
                  {results.pages.length > 0 && (
                    <div>
                      <h3 className="t-caption text-[var(--color-ink-muted)] mb-3">Pages</h3>
                      <div className="flex flex-wrap gap-2">
                        {results.pages.map((p) => (
                          <button key={p.path} className="t-body-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:underline">{p.title}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
