import Image from "next/image";

type StripProduct = {
  brand: string;
  name: string;
  price: string;
  image: string;
};

export function P4FeaturedStrip({
  products,
  id,
}: {
  products: StripProduct[];
  id?: string;
}) {
  return (
    <div id={id} className="my-12 py-10 px-6 sm:px-8" style={{ background: "#F6F0E2" }}>
      <div className="mx-auto max-w-[720px]">
        {/* Heading */}
        <div className="text-center mb-6">
          <span className="text-[13px] uppercase tracking-[2px] font-medium" style={{ color: "#1A1A1A" }}>
            As Featured Above
          </span>
          <div className="mt-2 mx-auto w-16 h-px" style={{ background: "#8B6A2A" }} />
        </div>

        {/* Desktop: horizontal row */}
        <div className="hidden sm:grid grid-cols-3 gap-5">
          {products.map((p) => (
            <div key={p.name} className="bg-white border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="relative w-full h-[160px] bg-[#f3f0ea]">
                <Image src={p.image} alt={p.name} fill className="object-contain p-4" unoptimized />
              </div>
              <div className="p-3 text-center">
                <span className="block text-[10px] uppercase tracking-[1.2px] text-[#6B6B6B]">{p.brand}</span>
                <span className="block text-[13px] text-[#1A1A1A] leading-tight mt-1">{p.name}</span>
                <span className="block text-[13px] font-semibold text-[#1A1A1A] mt-1">{p.price}</span>
                <button className="mt-3 w-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[1.2px] py-2 hover:bg-[#333] transition-colors">
                  Shop
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked horizontal cards */}
        <div className="sm:hidden flex flex-col gap-3">
          {products.map((p) => (
            <div key={p.name}>
              <div className="flex border bg-white" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="relative w-[100px] h-[100px] shrink-0 bg-[#f3f0ea]">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-3" unoptimized />
                </div>
                <div className="flex-1 p-3 flex flex-col">
                  <span className="text-[10px] uppercase tracking-[1.2px] text-[#6B6B6B]">{p.brand}</span>
                  <span className="text-[13px] text-[#1A1A1A] leading-tight mt-0.5">{p.name}</span>
                  <span className="text-[13px] font-semibold text-[#1A1A1A] mt-auto">{p.price}</span>
                </div>
              </div>
              <button className="mt-1 w-full bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[1.2px] py-2.5 hover:bg-[#333] transition-colors">
                Shop
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
