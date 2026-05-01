"use client";

import Image from "next/image";
import { tierOneBrands, tierTwoBrands } from "./brandData";

export function V2TieredShowcase() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="t-caption text-[var(--color-ink-muted)] text-center mb-8">Shop by Brand</h2>

        {/* Tier 1: hero cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 mb-10">
          {tierOneBrands.map((brand) => (
            <button key={brand.slug} className="group relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-dark)]">
              <Image
                src={brand.heroImage}
                alt={brand.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="t-h4 text-white block" style={{ fontFamily: "var(--font-heading)" }}>{brand.name}</span>
                <span className="t-body-sm text-white/60 mt-1 block">{brand.tagline}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tier 2: compact text links */}
        <div className="border-t border-[var(--color-line)] pt-6">
          <h3 className="t-caption text-[var(--color-ink-muted)] mb-4">More Brands</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {tierTwoBrands.map((brand) => (
              <button
                key={brand.slug}
                className="t-label-md text-[var(--color-ink)] hover:text-[var(--color-ink-muted)] transition-colors"
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
