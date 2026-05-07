import Image from "next/image";

export function P2InlineCard({
  brand,
  name,
  price,
  spec,
  image,
}: {
  brand: string;
  name: string;
  price: string;
  spec: string;
  image: string;
}) {
  return (
    <>
      {/* Desktop: float-right card */}
      <div
        className="hidden md:block float-right ml-6 mb-4 w-[240px] border bg-white"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div className="relative w-full h-[160px] bg-[#f3f0ea]">
          <Image src={image} alt={name} fill className="object-contain p-4" unoptimized />
        </div>
        <div className="p-3">
          <span className="block text-[10px] uppercase tracking-[1.2px] text-[#6B6B6B]">{brand}</span>
          <span className="block text-[14px] text-[#1A1A1A] leading-tight mt-1">{name}</span>
          <span className="block text-[11px] text-[#6B6B6B] mt-1">{spec}</span>
          <span className="block text-[14px] font-semibold text-[#1A1A1A] mt-2">{price}</span>
          <button className="mt-3 w-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[1.2px] py-2 hover:bg-[#333] transition-colors">
            Shop
          </button>
        </div>
      </div>

      {/* Mobile: full-width horizontal block */}
      <div
        className="md:hidden my-6 flex border bg-white"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div className="relative w-[100px] h-[100px] shrink-0 bg-[#f3f0ea]">
          <Image src={image} alt={name} fill className="object-contain p-3" unoptimized />
        </div>
        <div className="flex-1 p-3 flex flex-col">
          <span className="text-[10px] uppercase tracking-[1.2px] text-[#6B6B6B]">{brand}</span>
          <span className="text-[13px] text-[#1A1A1A] leading-tight mt-0.5">{name}</span>
          <span className="text-[13px] font-semibold text-[#1A1A1A] mt-auto">{price}</span>
        </div>
      </div>
      <div className="md:hidden -mt-2 mb-6">
        <button className="w-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[1.2px] py-2.5 hover:bg-[#333] transition-colors">
          Shop
        </button>
      </div>
    </>
  );
}
