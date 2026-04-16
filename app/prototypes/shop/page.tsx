"use client";

import { useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";
import { ProductCard, type Product } from "../../components/ProductCard";
import { ComparisonModal } from "../../components/ComparisonModal";

/* ── Inline SVG icons ─────────────────────────────────────────────── */

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#666" strokeWidth="1.5">
      <path d="M7.5 5l5 5-5 5" />
    </svg>
  );
}

function SortArrowIcon() {
  return (
    <svg width="7" height="4" viewBox="0 0 7 4" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M1 1l2.5 2L6 1" />
    </svg>
  );
}

/* ── Product data ─────────────────────────────────────────────────── */

const products: Product[] = [
  {
    brand: "Brew Watch Co.",
    name: "Brew Metric Teddy Baldassarre Edition 36mm - Blue on Bracelet",
    price: "$475",
    image: "https://www.figma.com/api/mcp/asset/8bd0ea7c-0a9b-4ad4-bf8e-a64b2c4529d6",
    tag: "Exclusive",
    added: true,
  },
  {
    brand: "Omega",
    name: "Speedmaster Moonwatch Professional Moonshine\u2122 Gold and Steel 42mm \u2011 Silver on Leather Strap",
    price: "$13,100",
    image: "https://www.figma.com/api/mcp/asset/bc1e63c3-5429-4ef1-bddf-73821261d25b",
  },
  {
    brand: "Omega",
    name: 'Speedmaster Moonwatch Professional 18K Moonshine\u2122 Gold "Reverse Panda" 42mm - Black on Bracelet',
    price: "$49,300",
    image: "https://www.figma.com/api/mcp/asset/7c752834-6b79-4e6a-a181-a585a07b1838",
  },
  {
    brand: "Grand Seiko",
    name: 'SBGA413 "Spring Shunbun" Heritage Spring Drive 40mm - Pink on Bracelet',
    price: "$7,200",
    image: "https://www.figma.com/api/mcp/asset/9a639173-3403-48c4-acb9-719aaccee845",
  },
  {
    brand: "Tudor",
    name: "Black Bay 41mm - Black, Burgundy Bezel on Bracelet",
    price: "$5,325",
    image: "https://www.figma.com/api/mcp/asset/6b59fe9d-109d-4549-bcf1-83fd629d87dc",
  },
  {
    brand: "Longines",
    name: "Spirit 37mm - Blue on Bracelet",
    price: "$2,850",
    image: "https://www.figma.com/api/mcp/asset/80404af3-db7b-4b10-8288-5abb541bf15d",
  },
  {
    brand: "Seiko",
    name: "SPB505 Prospex Land Mechanical 39.5mm - Black on Bracelet",
    price: "$995",
    image: "https://www.figma.com/api/mcp/asset/2b1d6037-2821-4a3a-9264-79f2af9af2c7",
  },
  {
    brand: "Mido",
    name: "Multifort 8 One Crown 40mm - Turquoise on Bracelet",
    price: "$1,070",
    image: "https://www.figma.com/api/mcp/asset/89ae9ffe-cdd0-401d-b8c4-01157e607a5f",
  },
];

/* ── Comparison modal data (reused from comparison-modal prototype) ─ */

const comparisonWatches = [
  {
    brand: "Omega",
    name: "Speedmaster Moonwatch Professional Moonshine\u2122 Gold and Steel 42mm \u2011 Silver on Leather Strap",
    image: "https://www.figma.com/api/mcp/asset/568d234d-6d61-4fb1-9419-c62749bd4609",
    reviewLink: "#",
    specs: {
      "Teddy's Review": "Watch now",
      Price: "$13,100",
      Style: "Chronograph",
      "Case Size": "42 mm",
      Thickness: "13.2 mm",
      "Lug to Lug": "47.5 mm",
      "Lug Width": "20 mm",
      "Water Resistance": "50m",
      "Movement Type": "Hand-winding",
      Crystal: "Scratch-resistant sapphire (AR coated)",
      Reference: "310.23.42.50.02.001",
      "Case Material": "Bi-colour steel & 18K Moonshine\u2122 Gold",
      "Case Back": "Transparent sapphire crystal caseback",
      Bezel: "Asymmetrical black ceramic, tachymeter, Ceragold\u2122",
      "Clasp / Buckle": "Foldover clasp",
      "Attachment Type": "Leather",
      "Dial Color": "Silver",
      Hands: "18K Moonshine\u2122 Gold",
      "Strap / Bracelet": "Brown alligator leather strap",
      Weight: "96 g",
      "Movement Ref": "3861",
      "Power Reserve": "50 Hours",
      Accuracy: "N/A",
      Functions: "Manual-winding chronograph, Co-Axial, Master Chronometer, METAS certified, anti-magnetic 15,000 gauss",
      Features: "Anti-magnetic, master chronometer certified, silicon balance spring, rhodium finish",
      Jewels: "26 Jewels",
      "Movement Details": "Manual-winding, Co-Axial Master Chronometer",
    },
  },
  {
    brand: "Omega",
    name: 'Speedmaster Moonwatch Professional 18K Moonshine\u2122 Gold "Reverse Panda" 42mm - Black on Bracelet',
    image: "https://www.figma.com/api/mcp/asset/a20c0cf8-899f-41bd-854a-25d8d81b5338",
    specs: {
      Price: "$49,500",
      Style: "Chronograph",
      "Case Size": "42 mm",
      Thickness: "13.63 mm",
      "Lug to Lug": "47.46 mm",
      "Lug Width": "20 mm",
      "Water Resistance": "50m",
      "Movement Type": "Hand-winding",
      Crystal: "Scratch-resistant sapphire (AR coated)",
      Reference: "O31060425001002",
      "Case Material": "Moonshine\u2122 Gold",
      "Case Back": "18K Moonshine\u2122 Gold & sapphire caseback",
      Bezel: "Black ceramic bezel ring",
      "Clasp / Buckle": "Foldover clasp with comfort setting",
      "Attachment Type": "Bracelet",
      "Dial Color": "Black",
      Hands: "18K Moonshine\u2122 Gold",
      "Strap / Bracelet": "Polished & brushed Moonshine\u2122 Gold bracelet",
      Weight: "224 g",
      "Movement Ref": "3861",
      "Power Reserve": "50 Hours",
      Accuracy: "0 to +5 secs/day",
      Functions: "Chronograph, small seconds, tachymeter",
      Features: "Anti-magnetic 15,000 gauss, silicon balance spring, rhodium finish",
      Jewels: "N/A",
      "Movement Details": "Manual-winding chronograph, Co-Axial Master Chronometer",
    },
  },
  {
    brand: "Grand Seiko",
    name: 'SBGA413 "Spring Shunbun" Heritage Spring Drive 40mm - Pink on Bracelet',
    image: "https://www.figma.com/api/mcp/asset/50fed59a-56a9-4050-86b8-ba8d89eaabc3",
    reviewLink: "#",
    specs: {
      "Teddy's Review": "Watch now",
      Price: "$7,200",
      Style: "Everyday",
      "Case Size": "40 mm",
      Thickness: "12.7 mm",
      "Lug to Lug": "47 mm",
      "Lug Width": "21 mm",
      "Water Resistance": "100m",
      "Movement Type": "Spring Drive",
      Crystal: "Box-shape sapphire crystal",
      Reference: "SBGA413",
      "Case Material": "High-intensity titanium",
      "Case Back": "Stainless steel transparent sapphire",
      Bezel: "Bezel-free",
      "Clasp / Buckle": "Three-fold clasp",
      "Attachment Type": "Bracelet",
      "Dial Color": "Pink",
      Hands: "N/A",
      "Strap / Bracelet": "High-intensity titanium bracelet",
      Weight: "N/A",
      "Movement Ref": "9R65",
      "Power Reserve": "72 Hours",
      Accuracy: "\u00b11 sec/day / \u00b115 secs/month",
      Functions: "Time and date",
      Features: "Power reserve indicator",
      Jewels: "30 Jewels",
      "Movement Details": "Spring Drive",
    },
  },
];

const comparisonSections = [
  {
    title: "Overview",
    rows: ["Teddy's Review", "Price", "Style", "Case Size", "Thickness", "Lug to Lug", "Lug Width", "Water Resistance", "Movement Type", "Crystal", "Reference"],
  },
  {
    title: "Case & Exterior",
    rows: ["Case Material", "Case Back", "Bezel", "Clasp / Buckle", "Attachment Type", "Dial Color", "Hands", "Strap / Bracelet", "Weight"],
  },
  {
    title: "Movement",
    rows: ["Movement Ref", "Power Reserve", "Accuracy", "Functions", "Features", "Jewels", "Movement Details"],
  },
];

/* ── Filter chip ──────────────────────────────────────────────────── */

function FilterChip({ label }: { label: string }) {
  return (
    <button className="flex h-[27px] items-center gap-2 border border-black px-3 max-sm:hidden">
      <span className="t-caption tracking-[1px]">{label}</span>
      <SortArrowIcon />
    </button>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default function ShopPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        {/* Breadcrumbs */}
        <div className="mx-auto w-full max-w-[1440px] px-10 pt-8 pb-2 max-sm:px-6 max-sm:pt-4">
          <nav className="flex items-center gap-1 max-sm:gap-0.5">
            <span className="t-body-sm text-[#666]">All watches</span>
            <ChevronRightIcon />
            <span className="t-body-sm text-[#666]">Seiko</span>
            <ChevronRightIcon />
            <span className="t-body-sm text-[#666]">Heritage</span>
          </nav>
        </div>

        {/* Title */}
        <div className="mx-auto w-full max-w-[1440px] border-b border-[var(--color-line)] px-10 pb-6 max-sm:px-5">
          <h1 className="t-h3 max-sm:t-h2" style={{ fontFamily: "var(--font-heading)" }}>
            Shop Watches
          </h1>
          <p className="t-body-sm mt-1 text-[var(--color-ink)]">
            Shop our curated collection from over 30 of the industry&apos;s leading luxury brands.
          </p>
        </div>

        {/* Filters */}
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-2.5 border-b border-[var(--color-line)] px-10 py-6 max-sm:px-5 max-sm:py-5">
          {/* Desktop filter chips */}
          <div className="flex gap-2.5 max-sm:hidden">
            <FilterChip label="Brands" />
            <FilterChip label="Price" />
            <FilterChip label="Movement" />
            <FilterChip label="Case size" />
            <FilterChip label="Style" />
            <FilterChip label="Case Movement" />
            <FilterChip label="Gender" />
          </div>

          {/* Mobile filter button */}
          <button className="flex h-[27px] flex-1 items-center gap-2 border border-black px-3 sm:hidden">
            <span className="t-caption tracking-[1px]">Filters</span>
            <SortArrowIcon />
          </button>

          <div className="flex flex-1 items-center justify-end gap-6 max-sm:flex-initial max-sm:gap-3">
            <span className="t-body-sm text-[#686868] max-sm:flex-1 max-sm:text-center" style={{ fontSize: "var(--font-caption)" }}>
              1223 products
            </span>
            <button className="flex h-[27px] items-center gap-2 border border-black px-3 max-sm:flex-1">
              <span className="t-caption tracking-[1px]">Relevance</span>
              <SortArrowIcon />
            </button>
          </div>
        </div>

        {/* Product grid */}
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-4 gap-x-6 gap-y-2 px-10 pt-8 pb-2 max-sm:grid-cols-2 max-sm:gap-x-3 max-sm:px-5 max-sm:pt-8">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              onCompare={() => setModalOpen(true)}
            />
          ))}
        </div>
      </main>

      <ComparisonModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        watches={comparisonWatches}
        sections={comparisonSections}
      />
    </>
  );
}
