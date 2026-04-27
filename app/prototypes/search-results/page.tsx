"use client";

import { useState } from "react";
import Link from "next/link";
import { ResultsV1 } from "./ResultsV1";
import { ResultsV2 } from "./ResultsV2";
import { ResultsV3 } from "./ResultsV3";

type Variation = "1" | "2" | "3";

const descriptions: Record<Variation, { title: string; subtitle: string; details: string[]; baymard: string[] }> = {
  "1": {
    title: "V1 — Tabbed + Sidebar Filters",
    subtitle: "Traditional e-commerce pattern",
    details: [
      "Tabs: All | Products | Content | Pages — each with result count",
      "\"All\" tab shows compact content/pages banner, then product grid",
      "Sidebar filters by collection, movement, price, case size (ordered by relevance)",
      "Grid/list toggle for products; \"Load more\" button",
    ],
    baymard: ["#35 result counts in tabs", "#32 auto list-view for content tab", "#34 load more", "#36 sidebar filters", "#38 relevance-ordered filters"],
  },
  "2": {
    title: "V2 — Stacked Sections",
    subtitle: "Products first, no tabs",
    details: [
      "Single page: total result count at top, then content in a collapsible horizontal band",
      "Products dominate below with grid layout, sidebar filters, sort dropdown",
      "Content section starts collapsed (3 cards) with \"Show all\" to expand",
      "Load more with remaining count",
    ],
    baymard: ["#35 prominent total count", "#32 grid for products", "#34 load more with count", "#36/#38 relevance-ordered sidebar filters", "#31 contextual snippets on content"],
  },
  "3": {
    title: "V3 — Adaptive Layout",
    subtitle: "Layout shifts by result mix",
    details: [
      "Product-heavy (>70%): slim content bar at top, full product grid below",
      "Mixed (40-60%): two-column split — content list left, product grid right",
      "Content-heavy (>70%): content list primary, products as compact scroll row at bottom",
      "Use scenario switcher to preview each layout",
    ],
    baymard: ["#32 auto-switch layout", "#35 result counts", "#36 filters when product-heavy", "#39 weighted sorting per scenario"],
  },
};

export default function SearchResultsPrototype() {
  const [active, setActive] = useState<Variation>("1");
  const desc = descriptions[active];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Info bar */}
      <div className="border-b border-[var(--color-line)] bg-[var(--color-surface-muted)] px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="t-caption text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Back to prototypes</Link>
            <span className="t-caption text-[var(--color-ink-muted)]">Search Results Page Prototype</span>
          </div>

          <div className="flex gap-2 mb-4">
            {(["1", "2", "3"] as Variation[]).map((v) => (
              <button
                key={v}
                onClick={() => setActive(v)}
                className={`px-4 py-2 t-caption transition-colors ${
                  active === v ? "bg-[var(--color-brand)] text-white" : "bg-white border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
                }`}
              >
                Variant {v}
              </button>
            ))}
          </div>

          <h2 className="t-h4">{desc.title} <span className="t-body-sm text-[var(--color-ink-muted)] font-normal">— {desc.subtitle}</span></h2>
          <ul className="mt-2 flex flex-col gap-1">
            {desc.details.map((d, i) => <li key={i} className="t-body-sm text-[var(--color-ink-muted)]">• {d}</li>)}
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            {desc.baymard.map((b) => <span key={b} className="t-caption text-[var(--color-accent-navy)] bg-[var(--color-accent-navy)]/10 px-2 py-0.5">{b}</span>)}
          </div>
        </div>
      </div>

      {/* Active variant */}
      <div className="flex-1 bg-white">
        {active === "1" && <ResultsV1 />}
        {active === "2" && <ResultsV2 />}
        {active === "3" && <ResultsV3 />}
      </div>
    </div>
  );
}
