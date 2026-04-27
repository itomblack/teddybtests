"use client";

import Image from "next/image";
import type { ResultProduct, ResultContent, ResultPage, FilterGroup } from "./resultsData";

export function SearchIcon() {
  return <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8.5" cy="8.5" r="5.5" /><path d="M12.5 12.5L17 17" /></svg>;
}

export function PlayIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="4,2 12,7 4,12" /></svg>;
}

export function GridIcon({ active }: { active: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={active ? "currentColor" : "#999"} strokeWidth="1.2"><rect x="2" y="2" width="6" height="6" /><rect x="10" y="2" width="6" height="6" /><rect x="2" y="10" width="6" height="6" /><rect x="10" y="10" width="6" height="6" /></svg>;
}

export function ListIcon({ active }: { active: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={active ? "currentColor" : "#999"} strokeWidth="1.2"><path d="M2 4h14M2 9h14M2 14h14" /></svg>;
}

export function ProductGridCard({ product }: { product: ResultProduct }) {
  return (
    <div className="group">
      <div className="relative aspect-[300/370] overflow-hidden bg-[var(--color-surface-muted)] mb-3">
        <Image src={product.image} alt={product.name} fill className="object-cover" unoptimized />
        {product.tag && (
          <span className="absolute left-2 top-2 t-caption bg-white px-2 py-0.5">{product.tag}</span>
        )}
      </div>
      <span className="t-caption text-[var(--color-ink)]">{product.brand}</span>
      <p className="t-body-sm text-[var(--color-ink-muted)] group-hover:underline mt-0.5 line-clamp-2">{product.name}</p>
      <p className="t-label-md text-[var(--color-ink)] mt-1">{product.price}</p>
    </div>
  );
}

export function ProductListRow({ product }: { product: ResultProduct }) {
  return (
    <div className="flex gap-4 py-4 border-b border-[var(--color-line)] group">
      <div className="relative h-[100px] w-[82px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
        <Image src={product.image} alt={product.name} fill className="object-cover" unoptimized />
      </div>
      <div className="flex-1 min-w-0">
        <span className="t-caption text-[var(--color-ink)]">{product.brand}</span>
        <p className="t-body-sm text-[var(--color-ink)] group-hover:underline mt-0.5">{product.name}</p>
        <p className="t-label-md text-[var(--color-ink)] mt-2">{product.price}</p>
      </div>
      {product.tag && <span className="t-caption text-[var(--color-ink-muted)] shrink-0">{product.tag}</span>}
    </div>
  );
}

export function ContentCard({ item, layout }: { item: ResultContent; layout: "card" | "row" }) {
  if (layout === "row") {
    return (
      <div className="flex gap-4 py-3 group">
        <div className="relative h-[72px] w-[128px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
          <Image src={item.thumbnail} alt="" fill className="object-cover" unoptimized />
          {item.type === "video" && <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white"><PlayIcon /></div>}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="t-caption text-[var(--color-ink-muted)]">{item.type}</span>
            <span className="t-caption text-[var(--color-ink-muted)]">{item.date}</span>
          </div>
          <p className="t-body-sm font-medium text-[var(--color-ink)] group-hover:underline">{item.title}</p>
          <p className="t-body-sm text-[var(--color-ink-muted)] mt-0.5 line-clamp-2">{item.snippet}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="group">
      <div className="relative aspect-video overflow-hidden bg-[var(--color-surface-muted)] mb-2">
        <Image src={item.thumbnail} alt="" fill className="object-cover" unoptimized />
        {item.type === "video" && <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white"><PlayIcon /></div>}
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="t-caption text-[var(--color-ink-muted)]">{item.type}</span>
        <span className="t-caption text-[var(--color-ink-muted)]">{item.date}</span>
      </div>
      <p className="t-body-sm font-medium text-[var(--color-ink)] group-hover:underline">{item.title}</p>
      <p className="t-body-sm text-[var(--color-ink-muted)] mt-0.5 line-clamp-2">{item.snippet}</p>
    </div>
  );
}

export function PageResult({ page }: { page: ResultPage }) {
  return (
    <div className="py-2 group">
      <p className="t-body-sm font-medium text-[var(--color-ink)] group-hover:underline">{page.title}</p>
      <p className="t-body-sm text-[var(--color-ink-muted)] mt-0.5">{page.snippet}</p>
      <span className="t-caption text-[var(--color-ink-muted)] mt-0.5 block">{page.path}</span>
    </div>
  );
}

export function FilterSidebar({ filters, collapsed }: { filters: FilterGroup[]; collapsed?: boolean }) {
  if (collapsed) return null;
  return (
    <aside className="w-[220px] shrink-0 pr-6 max-lg:hidden">
      {filters.map((group) => (
        <div key={group.name} className="mb-6">
          <h4 className="t-caption text-[var(--color-ink)] mb-2">{group.name}</h4>
          {group.options.map((opt) => (
            <label key={opt.label} className="flex items-center gap-2 py-1 cursor-pointer group">
              <input type="checkbox" className="h-4 w-4 accent-[var(--color-brand)]" />
              <span className="t-body-sm text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)]">{opt.label}</span>
              <span className="t-caption text-[var(--color-ink-muted)] ml-auto">{opt.count}</span>
            </label>
          ))}
        </div>
      ))}
    </aside>
  );
}

export function SearchHeader({ query }: { query: string }) {
  return (
    <header className="flex items-center justify-between border-b border-[var(--color-line)] bg-white px-6 py-4">
      <div className="flex items-center gap-2">
        <span aria-hidden className="inline-block h-6 w-6 bg-[var(--color-brand)]" />
        <span className="t-h4">Teddy B</span>
      </div>
      <div className="flex items-center gap-2 border-b border-[var(--color-ink)] pb-1">
        <SearchIcon />
        <span className="t-body-sm">{query}</span>
      </div>
    </header>
  );
}
