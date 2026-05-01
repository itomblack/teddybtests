"use client";

import Image from "next/image";
import { brands } from "./brandData";

export function V1EditorialCards() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="t-caption text-[var(--color-ink-muted)] text-center mb-8">Shop by Brand</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:gap-5 sm:overflow-visible lg:grid-cols-5">
          {brands.map((brand) => (
            <button
              key={brand.slug}
              className="group shrink-0 w-[200px] sm:w-auto snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface-dark)] mb-3">
                <Image
                  src={brand.heroImage}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="t-label-lg text-white block">{brand.name}</span>
                  <span className="t-caption text-white/60 mt-1 block">{brand.tagline}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
