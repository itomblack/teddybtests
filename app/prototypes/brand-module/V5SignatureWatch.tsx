"use client";

import Image from "next/image";
import { brands } from "./brandData";

export function V5SignatureWatch() {
  return (
    <section className="py-16 px-6 bg-[var(--color-surface-dark)]">
      <div className="mx-auto max-w-6xl">
        <h2 className="t-caption text-white/50 text-center mb-10">Shop by Brand</h2>
        <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-5 sm:gap-3 lg:grid-cols-7 sm:overflow-visible">
          {brands.map((brand) => (
            <button
              key={brand.slug}
              className="group shrink-0 w-[120px] sm:w-auto snap-start relative"
            >
              <div className="relative aspect-[2/5] overflow-hidden bg-black/30">
                <Image
                  src={brand.heroImage}
                  alt={brand.name}
                  fill
                  className="object-cover opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                {/* Vertical brand name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-white/90 font-medium text-[11px] uppercase tracking-[4px] whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                    {brand.name}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
