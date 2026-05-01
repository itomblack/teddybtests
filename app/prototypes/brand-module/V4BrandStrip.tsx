"use client";

import { useState } from "react";
import Image from "next/image";
import { brands } from "./brandData";

function ChevronLeft() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 4l-8 8 8 8" /></svg>;
}

function ChevronRight() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 4l8 8-8 8" /></svg>;
}

export function V4BrandStrip() {
  const [active, setActive] = useState(0);
  const brand = brands[active];

  return (
    <section>
      {/* Full-bleed hero strip */}
      <div className="relative w-full overflow-hidden bg-[var(--color-surface-dark)]" style={{ height: "clamp(320px, 40vw, 480px)" }}>
        <Image
          src={brand.heroImage}
          alt={brand.name}
          fill
          className="object-cover opacity-40"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <button
            onClick={() => setActive((a) => (a - 1 + brands.length) % brands.length)}
            className="text-white/70 hover:text-white transition-colors shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <div className="text-center">
            <span className="t-display text-white block" style={{ fontFamily: "var(--font-heading)" }}>{brand.name}</span>
            <span className="t-body-lg text-white/50 mt-2 block">{brand.tagline}</span>
            <button className="mt-6 border border-white/50 px-8 py-3 t-label-md text-white hover:bg-white/10 transition-colors">
              Shop {brand.name}
            </button>
          </div>
          <button
            onClick={() => setActive((a) => (a + 1) % brands.length)}
            className="text-white/70 hover:text-white transition-colors shrink-0"
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {brands.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
              aria-label={`Brand ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick links below */}
      <div className="border-b border-[var(--color-line)] bg-white px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center">
            {brands.map((b, i) => (
              <button
                key={b.slug}
                onClick={() => setActive(i)}
                className={`t-caption transition-colors ${
                  i === active ? "text-[var(--color-ink)] border-b border-[var(--color-ink)] pb-0.5" : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
