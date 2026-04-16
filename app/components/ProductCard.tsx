"use client";

import Image from "next/image";

/* ── Types ─────────────────────────────────────────────────────────── */

export type Product = {
  brand: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  reviewLink?: string;
  specs?: Record<string, string>;
};

/* ── Icons ─────────────────────────────────────────────────────────── */

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M9 15.3l-1.1-1C4.2 11 2 9 2 6.5 2 4.4 3.7 3 5.5 3c1.1 0 2.2.5 3 1.4L9 5l.5-.6c.8-.9 1.9-1.4 3-1.4C14.3 3 16 4.4 16 6.5c0 2.5-2.2 4.5-5.9 7.8L9 15.3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8.5l3.5 3.5L13 5" />
    </svg>
  );
}

export function CompareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="6" width="8" height="12" rx="1" />
      <rect x="14" y="6" width="8" height="12" rx="1" />
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

/* ── ProductCard ───────────────────────────────────────────────────── */

export function ProductCard({
  product,
  isAdded,
  onToggleCompare,
}: {
  product: Product;
  isAdded?: boolean;
  onToggleCompare?: () => void;
}) {
  return (
    <div className="flex flex-col pb-[22px]">
      <div className="flex flex-col gap-4 max-sm:gap-3">
        {/* Image section */}
        <div className="relative aspect-[325/397] overflow-hidden bg-[var(--color-surface-muted)] max-sm:aspect-[155/189]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, 25vw"
            unoptimized
          />

          {/* Tag */}
          {product.tag && (
            <div className="absolute left-3 top-3 max-sm:left-1 max-sm:top-1">
              <span className="t-caption bg-white px-3 py-1 max-sm:px-2">{product.tag}</span>
            </div>
          )}

          {/* Wishlist */}
          <button
            className="absolute right-3 top-3 bg-[rgba(255,255,255,0.75)] p-1.5 max-sm:right-1 max-sm:top-1 max-sm:p-1"
            aria-label="Add to wishlist"
          >
            <HeartIcon />
          </button>

          {/* Compare / Added button */}
          {onToggleCompare && (
            <div className="absolute bottom-3 left-3 max-sm:bottom-1 max-sm:left-1">
              <button
                onClick={onToggleCompare}
                className={`flex h-[25px] items-center gap-1 border ${
                  isAdded
                    ? "border-white bg-[var(--color-surface-dark)] text-white"
                    : "border-[var(--color-surface-muted)] bg-white text-black"
                } pl-1.5 pr-3.5 max-sm:pl-1 max-sm:pr-2`}
              >
                {isAdded ? <CheckIcon /> : <CompareIcon />}
                <span className="t-caption">{isAdded ? "Added" : "Compare"}</span>
              </button>
            </div>
          )}
        </div>

        {/* Watch review button */}
        <button className="flex w-fit items-center justify-center gap-2 bg-[var(--color-surface-muted)] py-1.5 pl-1.5 pr-3.5 max-sm:w-full">
          <PlayIcon />
          <span className="t-caption text-[var(--color-brand)]">
            <span className="max-sm:hidden">Watch </span>Teddy&apos;s review
          </span>
        </button>

        {/* Product info */}
        <div className="flex flex-col gap-[5px] max-sm:gap-1">
          <span className="t-caption text-black">{product.brand}</span>
          <p className="t-body-sm text-[var(--color-ink-muted)]">{product.name}</p>
          <p className="t-label-md pt-1 text-black">{product.price}</p>
        </div>
      </div>
    </div>
  );
}
