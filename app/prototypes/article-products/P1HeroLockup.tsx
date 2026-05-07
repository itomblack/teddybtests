import Image from "next/image";

export function P1HeroLockup({
  heroImage,
  brand,
  name,
  price,
}: {
  heroImage: string;
  brand: string;
  name: string;
  price: string;
}) {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[16/9] max-sm:aspect-[4/3] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt={name}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* P1: Commerce lockup — always visible, bottom-left */}
        <div
          className="absolute bottom-6 left-6 z-10 flex items-center gap-3 px-4 py-3 max-sm:bottom-3 max-sm:left-3 max-sm:right-3 max-sm:gap-2 max-sm:px-3 max-sm:py-2.5"
          style={{
            background: "rgba(0,0,0,0.78)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div className="flex-1 min-w-0">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[1.2px] text-white/60">{brand}</span>
            <span className="block text-[12px] sm:text-[14px] text-white leading-tight mt-0.5 truncate">{name}</span>
            <span className="block text-[11px] sm:text-[13px] text-white font-semibold mt-0.5">{price}</span>
          </div>
          <button className="shrink-0 bg-white text-[#1a1a1a] px-4 py-1.5 text-[11px] sm:text-[12px] uppercase tracking-[1.2px] font-medium hover:bg-white/90 transition-colors max-sm:px-3 max-sm:py-1.5">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}
