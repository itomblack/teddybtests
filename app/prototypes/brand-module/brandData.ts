export type Brand = {
  name: string;
  slug: string;
  tier: 1 | 2;
  tagline: string;
  heroImage: string;
  logoColor: string;
};

export const brands: Brand[] = [
  { name: "Tudor", slug: "tudor", tier: 1, tagline: "Born to Dare", heroImage: "https://placehold.co/600x800/1a1a1a/fff?text=Tudor", logoColor: "#8B0000" },
  { name: "Omega", slug: "omega", tier: 1, tagline: "Master Chronometer", heroImage: "https://placehold.co/600x800/0c1d3a/fff?text=Omega", logoColor: "#C4972A" },
  { name: "IWC", slug: "iwc", tier: 1, tagline: "Engineering Dreams", heroImage: "https://placehold.co/600x800/222/fff?text=IWC", logoColor: "#1a1a1a" },
  { name: "Grand Seiko", slug: "grand-seiko", tier: 1, tagline: "The Nature of Time", heroImage: "https://placehold.co/600x800/2a3a2a/fff?text=Grand+Seiko", logoColor: "#1B3A5C" },
  { name: "Breitling", slug: "breitling", tier: 2, tagline: "Instruments for Professionals", heroImage: "https://placehold.co/600x800/1a1a2e/fff?text=Breitling", logoColor: "#FFD700" },
  { name: "Blancpain", slug: "blancpain", tier: 2, tagline: "Since 1735", heroImage: "https://placehold.co/600x800/1a1a1a/fff?text=Blancpain", logoColor: "#1a1a1a" },
  { name: "Glashütte Original", slug: "glashutte", tier: 2, tagline: "Made in Germany", heroImage: "https://placehold.co/600x800/2a2a3a/fff?text=Glash%C3%BCtte", logoColor: "#1a1a3a" },
  { name: "Zenith", slug: "zenith", tier: 2, tagline: "Time to Reach Your Star", heroImage: "https://placehold.co/600x800/1a1a1a/fff?text=Zenith", logoColor: "#C41E3A" },
  { name: "Longines", slug: "longines", tier: 2, tagline: "Elegance is an Attitude", heroImage: "https://placehold.co/600x800/1a2a3a/fff?text=Longines", logoColor: "#1a1a1a" },
  { name: "Mido", slug: "mido", tier: 2, tagline: "Inspired by Architecture", heroImage: "https://placehold.co/600x800/2a1a1a/fff?text=Mido", logoColor: "#8B0000" },
  { name: "Tissot", slug: "tissot", tier: 2, tagline: "Innovators by Tradition", heroImage: "https://placehold.co/600x800/1a1a1a/fff?text=Tissot", logoColor: "#C41E3A" },
  { name: "Hamilton", slug: "hamilton", tier: 2, tagline: "American Spirit, Swiss Precision", heroImage: "https://placehold.co/600x800/2a2a1a/fff?text=Hamilton", logoColor: "#1a1a1a" },
  { name: "Baume et Mercier", slug: "baume-mercier", tier: 2, tagline: "Life is About Moments", heroImage: "https://placehold.co/600x800/1a2a2a/fff?text=Baume+%26+Mercier", logoColor: "#1a1a3a" },
];

export const tierOneBrands = brands.filter((b) => b.tier === 1);
export const tierTwoBrands = brands.filter((b) => b.tier === 2);
