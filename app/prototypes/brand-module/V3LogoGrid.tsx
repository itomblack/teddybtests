"use client";

import { brands } from "./brandData";

export function V3LogoGrid() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="t-caption text-[var(--color-ink-muted)] text-center mb-10">Shop by Brand</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand) => (
            <button
              key={brand.slug}
              className="group flex items-center justify-center border border-[var(--color-line)] -mt-px -ml-px py-8 sm:py-10 transition-colors hover:bg-[var(--color-surface-muted)] hover:z-10 hover:border-[var(--color-ink)]"
            >
              <span
                className="t-label-lg text-center leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-brand)]"
                style={{ letterSpacing: "2px" }}
              >
                {brand.name.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
