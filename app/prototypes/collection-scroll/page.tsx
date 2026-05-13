"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sections } from "./collectionData";

function ShopButton({ className = "" }: { className?: string }) {
  return (
    <button className={`bg-[#1a1a1a] text-white text-[11px] uppercase tracking-[1.1px] px-5 py-2.5 hover:bg-[#333] transition-colors ${className}`}>
      Shop
    </button>
  );
}

export default function CollectionScrollPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[rgba(0,0,0,0.08)] bg-white px-6 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 bg-[#1a1a1a]" />
            <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 500 }}>Teddy B</span>
          </Link>
          <span className="text-[11px] uppercase tracking-[1.6px] text-[#6b6b6b]">Best Entry-Level Watches 2026</span>
        </div>
      </header>

      {/* Page title */}
      <div className="mx-auto max-w-7xl px-6 py-12 max-sm:py-8">
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, fontWeight: 400 }}>
          The Best Entry-Level Watches for Every Budget
        </h1>
        <p className="mt-3 text-[17px] leading-relaxed text-[#6b6b6b] max-w-2xl">
          Four watches that prove you don&apos;t need to spend thousands to start a collection worth caring about.
        </p>
      </div>

      {/* Main two-column layout */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex gap-12 max-lg:flex-col">
          {/* LEFT: scrolling content */}
          <div className="flex-1 min-w-0 max-w-[720px]">
            {sections.map((section, i) => (
              <article
                key={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className={i > 0 ? "mt-20 pt-20 border-t border-[rgba(0,0,0,0.08)]" : ""}
              >
                {/* Section hero image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-[#f3f3f3] mb-8">
                  <Image src={section.heroImage} alt={section.headline} fill className="object-cover" unoptimized />
                </div>

                {/* Brand + model label */}
                <span className="text-[11px] uppercase tracking-[1.6px] text-[#6b6b6b] block mb-2">
                  {section.brand} · {section.model}
                </span>

                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", lineHeight: 1.2, fontWeight: 400 }}>
                  {section.headline}
                </h2>

                {/* Body paragraphs */}
                <div className="mt-6 space-y-5">
                  {section.body.map((p, pi) => (
                    <p key={pi} className="text-[17px] leading-[1.7] text-[#2e2e2e]">{p}</p>
                  ))}
                </div>

                {/* Mobile collection (hidden on desktop) */}
                <div className="lg:hidden mt-10">
                  <h3 className="text-[11px] uppercase tracking-[1.6px] text-[#6b6b6b] mb-4">
                    Shop the {section.model} Collection
                  </h3>
                  <div className="flex gap-3 overflow-x-auto pb-3 -mx-6 px-6 snap-x snap-mandatory">
                    {section.collection.map((watch) => (
                      <div key={watch.name} className="shrink-0 w-[200px] snap-start">
                        <div className="relative aspect-[280/340] overflow-hidden bg-[#f3f3f3] mb-2">
                          <Image src={watch.image} alt={watch.name} fill className="object-cover" unoptimized />
                        </div>
                        <span className="text-[10px] uppercase tracking-[1.2px] text-[#6b6b6b] block">{watch.brand}</span>
                        <p className="text-[13px] text-[#1a1a1a] mt-0.5 line-clamp-2 leading-snug">{watch.name}</p>
                        <p className="text-[13px] font-semibold text-[#1a1a1a] mt-1">{watch.price}</p>
                        <ShopButton className="mt-2 w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT: sticky collection panel (desktop only) */}
          <div className="w-[340px] shrink-0 max-lg:hidden">
            <div className="sticky top-8">
              {/* Animated crossfade between collections */}
              <div className="relative">
                <span className="text-[11px] uppercase tracking-[1.6px] text-[#6b6b6b] block mb-4">
                  Shop the {activeSection.model} Collection
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {activeSection.collection.map((watch) => (
                    <div key={watch.name} className="group">
                      <div className="relative aspect-[280/340] overflow-hidden bg-[#f3f3f3] mb-2">
                        <Image src={watch.image} alt={watch.name} fill className="object-cover" unoptimized />
                      </div>
                      <span className="text-[10px] uppercase tracking-[1.2px] text-[#6b6b6b] block">{watch.brand}</span>
                      <p className="text-[13px] text-[#1a1a1a] mt-0.5 line-clamp-2 leading-snug group-hover:underline">{watch.name}</p>
                      <p className="text-[13px] font-semibold text-[#1a1a1a] mt-1">{watch.price}</p>
                      <ShopButton className="mt-2 w-full text-[10px] py-2" />
                    </div>
                  ))}
                </div>

                {/* Section nav dots */}
                <div className="mt-8 flex items-center gap-3">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        sectionRefs.current[s.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className="group flex items-center gap-2"
                    >
                      <span className={`block h-1.5 rounded-full transition-all ${
                        s.id === activeId ? "w-6 bg-[#1a1a1a]" : "w-1.5 bg-[#ccc] group-hover:bg-[#999]"
                      }`} />
                      {s.id === activeId && (
                        <span className="text-[10px] uppercase tracking-[1.2px] text-[#6b6b6b]">{s.brand}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
