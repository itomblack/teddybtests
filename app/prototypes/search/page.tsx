"use client";

import { useState } from "react";
import Link from "next/link";
import { VariationA } from "./VariationA";
import { VariationB } from "./VariationB";
import { VariationC } from "./VariationC";

type Variation = "A" | "B" | "C";

const descriptions: Record<Variation, { title: string; subtitle: string; details: string[] }> = {
  A: {
    title: "A — Clean Overlay",
    subtitle: "Net-a-Porter style",
    details: [
      "Full-width overlay drops down from nav",
      "Empty state: clean, no suggestions (search starts on typing)",
      "Two-column results: categories left (brands, collections, content, pages), product grid right",
      "Products get visual priority with images and pricing",
    ],
  },
  B: {
    title: "B — Recently Viewed",
    subtitle: "Personalised default state",
    details: [
      "Full-width overlay with \"Recently Viewed\" products on first click",
      "As you type: single-stream layout, products at top (horizontally scrollable)",
      "Brands & Collections shown as pill buttons for quick navigation",
      "Content cards with video/article type indicators",
    ],
  },
  C: {
    title: "C — Compact Dropdown",
    subtitle: "Anchored to search icon",
    details: [
      "Narrow dropdown (420px) anchored to the search icon — no full overlay",
      "Products shown as compact list rows with thumbnails",
      "Brands with nested collections in single column",
      "Lightweight feel, doesn't take over the page",
    ],
  },
};

export default function SearchPrototype() {
  const [active, setActive] = useState<Variation>("A");
  const desc = descriptions[active];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Prototype info bar */}
      <div className="border-b border-[var(--color-line)] bg-[var(--color-surface-muted)] px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="t-caption text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
              ← Back to prototypes
            </Link>
            <span className="t-caption text-[var(--color-ink-muted)]">Quick Search Prototype</span>
          </div>

          {/* Variation tabs */}
          <div className="flex gap-2 mb-4">
            {(["A", "B", "C"] as Variation[]).map((v) => (
              <button
                key={v}
                onClick={() => setActive(v)}
                className={`px-4 py-2 t-caption transition-colors ${
                  active === v
                    ? "bg-[var(--color-brand)] text-white"
                    : "bg-white border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
                }`}
              >
                Variation {v}
              </button>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="t-h4">{desc.title} <span className="t-body-sm text-[var(--color-ink-muted)] font-normal">— {desc.subtitle}</span></h2>
            <ul className="mt-2 flex flex-col gap-1">
              {desc.details.map((d, i) => (
                <li key={i} className="t-body-sm text-[var(--color-ink-muted)]">• {d}</li>
              ))}
            </ul>
            <p className="t-body-sm text-[var(--color-ink-muted)] mt-3 italic">
              Try typing &quot;grand&quot;, &quot;omega&quot;, &quot;tudor&quot;, or &quot;guide&quot; into the search.
            </p>
          </div>
        </div>
      </div>

      {/* Active variation */}
      <div className="flex-1 bg-white">
        {active === "A" && <VariationA />}
        {active === "B" && <VariationB />}
        {active === "C" && <VariationC />}

        {/* Placeholder page content */}
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="t-h1 mb-4">Shop Watches</h1>
          <p className="t-body-lg text-[var(--color-ink-muted)] max-w-2xl">
            This is placeholder page content. Click the search icon in the nav above to test the quick search experience.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/3.7] bg-[var(--color-surface-muted)]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
