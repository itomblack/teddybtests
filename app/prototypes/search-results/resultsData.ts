export type ResultProduct = {
  brand: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
};

export type ResultContent = {
  title: string;
  type: "video" | "article";
  thumbnail: string;
  snippet: string;
  date: string;
};

export type ResultPage = {
  title: string;
  path: string;
  snippet: string;
};

export type FilterOption = {
  label: string;
  count: number;
};

export type FilterGroup = {
  name: string;
  options: FilterOption[];
};

export const resultProducts: ResultProduct[] = [
  { brand: "Grand Seiko", name: "SLGA021 White Birch Spring Drive", price: "$6,300", image: "https://placehold.co/300x370/f3f3f3/222?text=SLGA021", tag: "Teddy's Pick" },
  { brand: "Grand Seiko", name: "SBGW231 Hand-Wound Elegance", price: "$4,200", image: "https://placehold.co/300x370/f3f3f3/222?text=SBGW231" },
  { brand: "Grand Seiko", name: "SBGA413 Shunbun Spring Drive", price: "$5,800", image: "https://placehold.co/300x370/f3f3f3/222?text=SBGA413" },
  { brand: "Grand Seiko", name: "SBGJ249 GMT Hi-Beat", price: "$7,400", image: "https://placehold.co/300x370/f3f3f3/222?text=SBGJ249" },
  { brand: "Grand Seiko", name: "SLGH005 White Birch Hi-Beat", price: "$9,100", image: "https://placehold.co/300x370/f3f3f3/222?text=SLGH005" },
  { brand: "Grand Seiko", name: "SBGX261 Quartz 37mm", price: "$2,700", image: "https://placehold.co/300x370/f3f3f3/222?text=SBGX261" },
  { brand: "Grand Seiko", name: "SBGE283 Spring Drive GMT", price: "$6,200", image: "https://placehold.co/300x370/f3f3f3/222?text=SBGE283" },
  { brand: "Grand Seiko", name: "SBGY007 Omiwatari Platinum", price: "$28,500", image: "https://placehold.co/300x370/f3f3f3/222?text=SBGY007", tag: "Limited" },
];

export const resultContent: ResultContent[] = [
  { title: "Grand Seiko White Birch — Is the Hype Real?", type: "video", thumbnail: "https://placehold.co/320x180/f3f3f3/222?text=Video", snippet: "Teddy takes a deep dive into the Grand Seiko SLGA021 White Birch, examining the dial texture, Spring Drive movement, and whether it lives up to...", date: "Mar 2026" },
  { title: "The Complete Guide to Grand Seiko Spring Drive", type: "article", thumbnail: "https://placehold.co/320x180/f3f3f3/222?text=Article", snippet: "Everything you need to know about Grand Seiko's proprietary Spring Drive technology — how it works, why it matters, and which models to consider.", date: "Feb 2026" },
  { title: "Top 5 Grand Seiko Watches Under $5,000", type: "video", thumbnail: "https://placehold.co/320x180/f3f3f3/222?text=Video", snippet: "Our picks for the best entry-level Grand Seiko watches that deliver exceptional value for money in 2026.", date: "Jan 2026" },
  { title: "Grand Seiko vs Omega: Which Offers Better Value?", type: "article", thumbnail: "https://placehold.co/320x180/f3f3f3/222?text=Article", snippet: "A head-to-head comparison of two of the most popular brands in the $4,000–$8,000 range. We break down finishing, movements, and resale value.", date: "Dec 2025" },
];

export const resultPages: ResultPage[] = [
  { title: "Grand Seiko Brand Page", path: "/brands/grand-seiko", snippet: "Explore the full Grand Seiko collection — Sport, Heritage, and Elegance lines." },
  { title: "Grand Seiko Spring Drive Explained", path: "/guides/spring-drive", snippet: "Learn about the technology behind Grand Seiko's unique movement." },
  { title: "Shipping & Returns", path: "/shipping", snippet: "Free shipping on all orders. 14-day return policy on unworn watches." },
];

export const filters: FilterGroup[] = [
  { name: "Collection", options: [
    { label: "Heritage Collection", count: 12 },
    { label: "Sport Collection", count: 8 },
    { label: "Elegance Collection", count: 6 },
  ]},
  { name: "Movement", options: [
    { label: "Spring Drive", count: 9 },
    { label: "Hi-Beat Automatic", count: 7 },
    { label: "Hand-Wound", count: 5 },
    { label: "Quartz", count: 3 },
  ]},
  { name: "Price", options: [
    { label: "Under $3,000", count: 2 },
    { label: "$3,000 – $5,000", count: 4 },
    { label: "$5,000 – $10,000", count: 6 },
    { label: "Over $10,000", count: 2 },
  ]},
  { name: "Case Size", options: [
    { label: "36–38mm", count: 4 },
    { label: "39–41mm", count: 8 },
    { label: "42mm+", count: 3 },
  ]},
];

export const QUERY = "grand seiko";
export const TOTAL_PRODUCTS = 38;
export const TOTAL_CONTENT = 6;
export const TOTAL_PAGES = 3;
export const TOTAL_ALL = TOTAL_PRODUCTS + TOTAL_CONTENT + TOTAL_PAGES;
