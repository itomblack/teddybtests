"use client";

import { useState } from "react";
import Link from "next/link";
import { V1EditorialCards } from "./V1EditorialCards";
import { V2TieredShowcase } from "./V2TieredShowcase";
import { V3LogoGrid } from "./V3LogoGrid";
import { V4BrandStrip } from "./V4BrandStrip";
import { V5SignatureWatch } from "./V5SignatureWatch";

type Variation = "1" | "2" | "3" | "4" | "5";

const descriptions: Record<Variation, { title: string; subtitle: string; notes: string }> = {
  "1": {
    title: "V1 — Editorial Cards",
    subtitle: "3:4 ratio cards with hero watch imagery",
    notes: "Horizontal scroll on mobile, grid on desktop. Each card shows the brand's hero watch with name + tagline overlaid. More curated/magazine feel than circular crops.",
  },
  "2": {
    title: "V2 — Tiered Showcase",
    subtitle: "Feature brands large, rest as text links",
    notes: "Top 4 brands (Tudor, Omega, IWC, Grand Seiko) get hero cards. Remaining brands listed as clean uppercase text links below. Creates hierarchy that matches business priority.",
  },
  "3": {
    title: "V3 — Logo Grid",
    subtitle: "Clean wordmarks, no imagery",
    notes: "No watch images at all — just brand names as uppercase text in a bordered grid. Quiet luxury. Hover highlights individual cells. Think SSENSE or Matches Fashion brand index.",
  },
  "4": {
    title: "V4 — Full-Bleed Brand Strip",
    subtitle: "Cinematic carousel with quick links",
    notes: "One brand at a time in a full-width dark hero banner. Navigate with arrows, dots, or the text link bar below. Gives editorial control — feature a brand for a campaign or season.",
  },
  "5": {
    title: "V5 — Signature Watch",
    subtitle: "Tall narrow cards with vertical type",
    notes: "2:5 ratio cards on a dark background with brand names set vertically. Architectural, distinctive. The narrow crop creates a gallery/index feel unlike typical e-commerce carousels.",
  },
};

export default function BrandModulePrototype() {
  const [active, setActive] = useState<Variation>("1");
  const desc = descriptions[active];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Info bar */}
      <div className="border-b border-[var(--color-line)] bg-[var(--color-surface-muted)] px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="t-caption text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Back to prototypes</Link>
            <span className="t-caption text-[var(--color-ink-muted)]">Shop by Brand Module</span>
          </div>

          <div className="flex gap-2 flex-wrap mb-4">
            {(["1", "2", "3", "4", "5"] as Variation[]).map((v) => (
              <button
                key={v}
                onClick={() => setActive(v)}
                className={`px-3 py-2 t-caption transition-colors ${
                  active === v ? "bg-[var(--color-brand)] text-white" : "bg-white border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
                }`}
              >
                V{v}
              </button>
            ))}
          </div>

          <h2 className="t-h4">{desc.title} <span className="t-body-sm text-[var(--color-ink-muted)] font-normal">— {desc.subtitle}</span></h2>
          <p className="t-body-sm text-[var(--color-ink-muted)] mt-1">{desc.notes}</p>
        </div>
      </div>

      {/* Preview area — simulates page context */}
      <div className="flex-1 bg-white">
        {/* Fake page content above */}
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-6 max-sm:pt-8">
          <h1 className="t-h2 text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>New Arrivals</h1>
          <p className="t-body text-[var(--color-ink-muted)] text-center">The latest from the brands we love.</p>
        </div>

        {/* Variation */}
        {active === "1" && <V1EditorialCards />}
        {active === "2" && <V2TieredShowcase />}
        {active === "3" && <V3LogoGrid />}
        {active === "4" && <V4BrandStrip />}
        {active === "5" && <V5SignatureWatch />}

        {/* Fake page content below */}
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/3.7] bg-[var(--color-surface-muted)]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
