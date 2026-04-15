"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";

/* ── Types ─────────────────────────────────────────────────────────── */

type WatchProduct = {
  brand: string;
  name: string;
  image: string;
  reviewLink?: string;
  specs: Record<string, string>;
};

type Section = {
  title: string;
  rows: string[];
};

type ComparisonModalProps = {
  open: boolean;
  onClose: () => void;
  watches: WatchProduct[];
  sections: Section[];
};

/* ── Icons ─────────────────────────────────────────────────────────── */

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

function ChevronUpIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`transition-transform ${open ? "" : "rotate-180"}`}
    >
      <path d="M5 12.5l5-5 5 5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <polygon points="6,3 15,9 6,15" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M9 15.3l-1.1-1C4.2 11 2 9 2 6.5 2 4.4 3.7 3 5.5 3c1.1 0 2.2.5 3 1.4L9 5l.5-.6c.8-.9 1.9-1.4 3-1.4C14.3 3 16 4.4 16 6.5c0 2.5-2.2 4.5-5.9 7.8L9 15.3z" />
    </svg>
  );
}

/* ── Sub-components ────────────────────────────────────────────────── */

function WatchCard({ watch }: { watch: WatchProduct }) {
  return (
    <div className="flex flex-1 min-w-0 flex-col gap-4 p-5">
      {/* Image */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[var(--color-surface-muted)]">
        <Image
          src={watch.image}
          alt={watch.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 322px"
          unoptimized
        />
        <button className="absolute right-3 top-3 bg-[rgba(255,255,255,0.75)] p-1.5" aria-label="Add to wishlist">
          <HeartIcon />
        </button>
      </div>
      {/* Info */}
      <div className="flex flex-1 flex-col gap-[5px]">
        <span className="t-caption text-[var(--color-ink)]">{watch.brand}</span>
        <p className="t-body-sm flex-1 text-[var(--color-ink-muted)]">{watch.name}</p>
        <div className="flex flex-col gap-3 pt-6">
          <Button variant="primary" fullWidth>Add to Cart</Button>
          <Button variant="secondary" fullWidth>View</Button>
        </div>
      </div>
    </div>
  );
}

function AccordionSection({
  section,
  watches,
}: {
  section: Section;
  watches: WatchProduct[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {/* Accordion header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 border-y border-[var(--color-line)] bg-white px-[var(--margin,40px)] py-5"
      >
        <span className="t-h4 flex-1 text-left" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-body-lg)" }}>
          {section.title}
        </span>
        <ChevronUpIcon open={open} />
      </button>

      {/* Rows */}
      {open && (
        <div className="flex flex-col">
          {section.rows.map((rowKey, i) => {
            const isEven = i % 2 === 1;
            const bg = isEven ? "bg-[#f6f6f6]" : "bg-white";

            return (
              <div
                key={rowKey}
                className={`flex gap-[var(--gutter,24px)] items-center px-[var(--margin,40px)] ${bg}`}
              >
                {/* Label */}
                <div className="flex-1 min-w-0 py-4">
                  <span className="t-body-sm text-[#737373] whitespace-nowrap">{rowKey}</span>
                </div>
                {/* Values */}
                {watches.map((watch, wi) => (
                  <div
                    key={wi}
                    className={`flex-1 min-w-0 px-5 py-4 ${bg} flex items-center gap-2`}
                  >
                    {rowKey === "Teddy's Review" && watch.reviewLink ? (
                      <a href={watch.reviewLink} className="t-body-sm flex items-center gap-2 text-[#141414]">
                        Watch now <PlayIcon />
                      </a>
                    ) : (
                      <span className="t-body-sm text-[#141414]">
                        {watch.specs[rowKey] || "-"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Main modal ────────────────────────────────────────────────────── */

export function ComparisonModal({ open, onClose, watches, sections }: ComparisonModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[rgba(0,0,0,0.5)]" onClick={onClose}>
      <div
        className="flex max-h-[calc(100vh-85px)] w-full flex-col overflow-y-auto border-t border-[var(--color-line)] bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-[var(--margin,40px)] py-5">
          <h2 className="flex-1" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--font-h4)", lineHeight: "var(--leading-relaxed)" }}>
            Compare watches
          </h2>
          <button onClick={onClose} className="shrink-0" aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* Hero watch row */}
        <div className="flex shrink-0 gap-[var(--gutter,24px)] bg-white px-[var(--margin,40px)]">
          {/* Empty label column */}
          <div className="flex-1 min-w-0 py-4" />
          {/* Watch cards */}
          {watches.map((watch, i) => (
            <WatchCard key={i} watch={watch} />
          ))}
        </div>

        {/* Comparison sections */}
        {sections.map((section) => (
          <AccordionSection key={section.title} section={section} watches={watches} />
        ))}
      </div>
    </div>
  );
}
