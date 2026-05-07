import Image from "next/image";

export function P3PullQuoteCard({
  quote,
  author,
  brand,
  name,
  price,
  image,
}: {
  quote: string;
  author: string;
  brand: string;
  name: string;
  price: string;
  image: string;
}) {
  return (
    <div className="my-12 py-8 px-6 sm:px-10 sm:py-8" style={{ background: "#FAF7F2" }}>
      <div className="mx-auto max-w-[720px]">
        <div className="flex flex-col sm:flex-row sm:gap-10">
          {/* Quote side */}
          <div className="flex-[3] mb-6 sm:mb-0">
            <span
              className="block text-[48px] sm:text-[56px] leading-none font-serif"
              style={{ color: "#8B6A2A" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="text-[16px] sm:text-[18px] italic leading-relaxed -mt-4"
              style={{ color: "#2E2E2E", fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              {quote}
            </p>
            <span
              className="block text-[12px] uppercase tracking-[1.2px] mt-4"
              style={{ color: "#6B6B6B" }}
            >
              — {author}
            </span>
          </div>

          {/* Product side — desktop: stacked, mobile: horizontal */}
          <div className="flex-[2] flex flex-col items-center sm:items-start">
            {/* Desktop: stacked layout */}
            <div className="hidden sm:flex flex-col items-center w-full">
              <div className="relative w-[180px] h-[180px] bg-[#f3f0ea]">
                <Image src={image} alt={name} fill className="object-contain p-4" unoptimized />
              </div>
              <div className="text-center mt-3 w-full">
                <span className="block text-[10px] uppercase tracking-[1.2px] text-[#6B6B6B]">{brand}</span>
                <span className="block text-[14px] text-[#1A1A1A] leading-tight mt-1">{name}</span>
                <span className="block text-[14px] font-semibold text-[#1A1A1A] mt-1">{price}</span>
                <button className="mt-3 w-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[1.2px] py-2 hover:bg-[#333] transition-colors">
                  Shop
                </button>
              </div>
            </div>

            {/* Mobile: horizontal layout */}
            <div className="sm:hidden w-full">
              <div className="flex border bg-white" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="relative w-[100px] h-[100px] shrink-0 bg-[#f3f0ea]">
                  <Image src={image} alt={name} fill className="object-contain p-3" unoptimized />
                </div>
                <div className="flex-1 p-3 flex flex-col">
                  <span className="text-[10px] uppercase tracking-[1.2px] text-[#6B6B6B]">{brand}</span>
                  <span className="text-[13px] text-[#1A1A1A] leading-tight mt-0.5">{name}</span>
                  <span className="text-[13px] font-semibold text-[#1A1A1A] mt-auto">{price}</span>
                </div>
              </div>
              <button className="mt-2 w-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[1.2px] py-2.5 hover:bg-[#333] transition-colors">
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
