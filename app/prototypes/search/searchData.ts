export type SearchProduct = {
  brand: string;
  name: string;
  price: string;
  image: string;
};

export type SearchBrand = {
  name: string;
  collections: string[];
};

export type SearchContent = {
  title: string;
  type: "video" | "article";
  thumbnail: string;
};

export type SearchPage = {
  title: string;
  path: string;
};

export const brands: SearchBrand[] = [
  { name: "Grand Seiko", collections: ["Sport Collection", "Heritage Collection", "Elegance Collection"] },
  { name: "Omega", collections: ["Speedmaster", "Seamaster", "Constellation"] },
  { name: "Tudor", collections: ["Black Bay", "Pelagos", "Royal"] },
  { name: "Rolex", collections: ["Submariner", "Datejust", "GMT-Master II"] },
  { name: "Cartier", collections: ["Tank", "Santos", "Ballon Bleu"] },
];

export const products: SearchProduct[] = [
  { brand: "Grand Seiko", name: "SLGA021 White Birch Spring Drive", price: "$6,300", image: "https://placehold.co/300x370/f3f3f3/222?text=SLGA021" },
  { brand: "Grand Seiko", name: "SBGW231 Hand-Wound Elegance", price: "$4,200", image: "https://placehold.co/300x370/f3f3f3/222?text=SBGW231" },
  { brand: "Omega", name: "Speedmaster Moonwatch Professional 42mm", price: "$6,550", image: "https://placehold.co/300x370/f3f3f3/222?text=Speedmaster" },
  { brand: "Omega", name: "Seamaster Planet Ocean 600M", price: "$7,100", image: "https://placehold.co/300x370/f3f3f3/222?text=Planet+Ocean" },
  { brand: "Tudor", name: "Black Bay Fifty-Eight 39mm", price: "$3,800", image: "https://placehold.co/300x370/f3f3f3/222?text=BB58" },
  { brand: "Tudor", name: "Pelagos FXD 42mm", price: "$4,575", image: "https://placehold.co/300x370/f3f3f3/222?text=Pelagos" },
  { brand: "Rolex", name: "Submariner Date 41mm", price: "$10,250", image: "https://placehold.co/300x370/f3f3f3/222?text=Submariner" },
  { brand: "Cartier", name: "Santos de Cartier Medium", price: "$7,550", image: "https://placehold.co/300x370/f3f3f3/222?text=Santos" },
];

export const content: SearchContent[] = [
  { title: "Grand Seiko White Birch — Is the Hype Real?", type: "video", thumbnail: "https://placehold.co/160x90/f3f3f3/222?text=Video" },
  { title: "Top 5 Watches Under $5,000 in 2026", type: "video", thumbnail: "https://placehold.co/160x90/f3f3f3/222?text=Video" },
  { title: "Omega Speedmaster vs Tudor Black Bay: A Buyer's Guide", type: "article", thumbnail: "https://placehold.co/160x90/f3f3f3/222?text=Article" },
  { title: "The Complete Guide to Grand Seiko Spring Drive", type: "article", thumbnail: "https://placehold.co/160x90/f3f3f3/222?text=Article" },
];

export const pages: SearchPage[] = [
  { title: "Return Policy", path: "/return-policy" },
  { title: "Shipping Information", path: "/shipping" },
  { title: "Watch Care Guide", path: "/watch-care" },
  { title: "About Teddy B", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

export const recentlyViewed: SearchProduct[] = products.slice(0, 4);

export function filterData(query: string) {
  const q = query.toLowerCase();
  return {
    brands: brands.filter((b) => b.name.toLowerCase().includes(q) || b.collections.some((c) => c.toLowerCase().includes(q))),
    products: products.filter((p) => p.brand.toLowerCase().includes(q) || p.name.toLowerCase().includes(q)),
    content: content.filter((c) => c.title.toLowerCase().includes(q)),
    pages: pages.filter((p) => p.title.toLowerCase().includes(q)),
  };
}
