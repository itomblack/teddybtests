"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export function P5BuyBar({
  brand,
  name,
  price,
  thumbnail,
  heroRef,
  stripRef,
}: {
  brand: string;
  name: string;
  price: string;
  thumbnail: string;
  heroRef: React.RefObject<HTMLDivElement | null>;
  stripRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const checkVisibility = useCallback(() => {
    if (dismissed) return;
    const hero = heroRef.current;
    const strip = stripRef.current;
    if (!hero) return;

    const heroRect = hero.getBoundingClientRect();
    const heroPastViewport = heroRect.bottom < window.innerHeight * 0.1;

    let stripInViewport = false;
    if (strip) {
      const stripRect = strip.getBoundingClientRect();
      stripInViewport = stripRect.top < window.innerHeight;
    }

    setVisible(heroPastViewport && !stripInViewport);
  }, [heroRef, stripRef, dismissed]);

  useEffect(() => {
    if (dismissed) { setVisible(false); return; }

    const hero = heroRef.current;
    const strip = stripRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      () => checkVisibility(),
      { threshold: [0, 0.1, 0.5, 1] }
    );

    observer.observe(hero);
    if (strip) observer.observe(strip);

    window.addEventListener("scroll", checkVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [heroRef, stripRef, dismissed, checkVisibility]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-200 ease-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div
        className="bg-white flex items-center gap-3 px-4 sm:px-6 h-[72px] sm:h-[64px]"
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 -4px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* Thumbnail */}
        <div className="relative h-[48px] w-[48px] sm:h-[44px] sm:w-[44px] shrink-0 bg-[#f3f0ea]">
          <Image src={thumbnail} alt={name} fill className="object-contain p-1" unoptimized />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <span className="block text-[10px] uppercase tracking-[1.2px] text-[#6B6B6B]">{brand}</span>
          <span className="block text-[13px] sm:text-[14px] text-[#1A1A1A] leading-tight truncate">{name}</span>
        </div>

        {/* Price */}
        <span className="text-[13px] sm:text-[14px] font-semibold text-[#1A1A1A] shrink-0 hidden sm:block">{price}</span>

        {/* Shop button */}
        <button className="shrink-0 bg-[#1A1A1A] text-white px-5 py-2 sm:py-1.5 text-[11px] sm:text-[12px] uppercase tracking-[1.2px] font-medium hover:bg-[#333] transition-colors">
          Shop {price}
        </button>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 text-[#6B6B6B] hover:text-[#1A1A1A] ml-1"
          aria-label="Dismiss"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l8 8M12 4L4 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
