export type Watch = {
  brand: string;
  name: string;
  price: string;
  image: string;
  spec?: string;
};

export type WatchSection = {
  id: string;
  brand: string;
  model: string;
  headline: string;
  body: string[];
  heroImage: string;
  collection: Watch[];
};

export const sections: WatchSection[] = [
  {
    id: "timex-marlin",
    brand: "Timex",
    model: "Marlin",
    headline: "Timex Marlin Automatic",
    body: [
      "The Timex Marlin Automatic is a faithful reissue of the brand's mid-century dress watch — a clean, 40mm case with a domed acrylic crystal that catches light the way vintage watches should. It's one of the most compelling entry points into mechanical watches, with a price that makes the Swiss competition look absurd.",
      "What makes the Marlin special isn't any single detail — it's the restraint. The dial is uncluttered, the case is slim enough to slide under a cuff, and the exhibition caseback reveals a Miyota 8215 automatic movement that, while not hand-finished, beats reliably at 21,600 vph.",
      "The Marlin's real strength is versatility. On the stock leather strap it's a dress watch. Swap to a NATO and it's weekend-ready. At 40mm it wears comfortably on most wrists without the oversize trend that dates so many modern watches.",
      "For collectors, the Marlin represents something important: proof that a good watch doesn't need to cost thousands. It's the watch you recommend when someone asks \"what's a good first automatic?\" — and you actually mean it.",
    ],
    heroImage: "https://placehold.co/720x480/2a2a2a/888?text=Timex+Marlin",
    collection: [
      { brand: "Timex", name: "Marlin Automatic 40mm — Black Dial", price: "$249", image: "https://placehold.co/280x340/f3f3f3/222?text=Marlin+Black" },
      { brand: "Timex", name: "Marlin Automatic 40mm — Silver Dial", price: "$249", image: "https://placehold.co/280x340/f3f3f3/222?text=Marlin+Silver" },
      { brand: "Timex", name: "Marlin Automatic 40mm — Green Dial", price: "$269", image: "https://placehold.co/280x340/f3f3f3/222?text=Marlin+Green" },
      { brand: "Timex", name: "Marlin Hand-Wound 34mm — Cream", price: "$199", image: "https://placehold.co/280x340/f3f3f3/222?text=Marlin+34mm" },
    ],
  },
  {
    id: "hamilton-khaki",
    brand: "Hamilton",
    model: "Khaki Field",
    headline: "Hamilton Khaki Field Mechanical",
    body: [
      "The Hamilton Khaki Field Mechanical is the quintessential tool watch — descended from the watches Hamilton supplied to the U.S. military during World War II. The current version keeps the utilitarian DNA intact: a 38mm steel case, a hand-wound H-50 movement with an impressive 80-hour power reserve, and a dial designed for legibility above all else.",
      "There's a purity to the Khaki Field that most modern watches lack. Every element serves a function. The oversized Arabic numerals at 12, 3, 6, and 9 are there because soldiers needed to read the time at a glance. The 24-hour inner track exists because military time eliminates AM/PM confusion. Even the matte finish on the case reduces glare.",
      "At 38mm, the Khaki Field sits in that Goldilocks zone — large enough to read easily, small enough to disappear under a jacket sleeve. The hand-wound movement means a slimmer case profile than the automatic version, and the daily winding ritual is part of the charm.",
      "The H-50 movement inside is genuinely impressive for the price. An 80-hour power reserve means you can take it off Friday night and it'll still be running Monday morning. That's a spec that watches costing five times as much can't always match.",
      "This is the watch that proves you don't need a heritage Swiss brand to get heritage. Hamilton has been making field watches since before most luxury brands existed — and the Khaki Field is the living proof.",
    ],
    heroImage: "https://placehold.co/720x480/1a2a1a/888?text=Hamilton+Khaki",
    collection: [
      { brand: "Hamilton", name: "Khaki Field Mechanical 38mm — Black", price: "$495", image: "https://placehold.co/280x340/f3f3f3/222?text=Khaki+Black" },
      { brand: "Hamilton", name: "Khaki Field Mechanical 38mm — Green", price: "$495", image: "https://placehold.co/280x340/f3f3f3/222?text=Khaki+Green" },
      { brand: "Hamilton", name: "Khaki Field Auto 42mm — Black", price: "$595", image: "https://placehold.co/280x340/f3f3f3/222?text=Khaki+Auto" },
      { brand: "Hamilton", name: "Khaki Field Titanium 42mm", price: "$795", image: "https://placehold.co/280x340/f3f3f3/222?text=Khaki+Ti" },
    ],
  },
  {
    id: "seiko-presage",
    brand: "Seiko",
    model: "Presage",
    headline: "Seiko Presage Cocktail Time",
    body: [
      "The Seiko Presage Cocktail Time might be the most photogenic watch under $500. The sunburst dial — available in a range of cocktail-inspired colors from Manhattan copper to Mockingbird teal — has a depth and texture that photographs beautifully and looks even better in person.",
      "Named after cocktails crafted by legendary Tokyo bartender Shinobu Ishigaki, each dial color is paired with a specific drink. The \"Starlight\" model, with its deep navy dial and scattered pattern mimicking a frozen winter sky, has become a collector favourite and frequently sells above retail on the secondary market.",
      "Under the dial sits Seiko's 4R35 automatic movement — a proven caliber with hacking and hand-winding that punches well above its price class. It's not a chronometer, and you'll see +/- 15 seconds per day, but for a watch at this price with this level of dial finishing, the trade-off is more than fair.",
      "The 40.5mm case in stainless steel has enough presence for a night out but isn't so large that it overwhelms a shirt cuff. The curved Hardlex crystal adds to the vintage-inspired aesthetic, though some buyers opt to have a sapphire crystal fitted by an independent watchmaker.",
    ],
    heroImage: "https://placehold.co/720x480/1a1a2e/888?text=Seiko+Presage",
    collection: [
      { brand: "Seiko", name: "Presage Cocktail Time — Manhattan", price: "$425", image: "https://placehold.co/280x340/f3f3f3/222?text=Manhattan" },
      { brand: "Seiko", name: "Presage Cocktail Time — Starlight", price: "$475", image: "https://placehold.co/280x340/f3f3f3/222?text=Starlight" },
      { brand: "Seiko", name: "Presage Cocktail Time — Mockingbird", price: "$425", image: "https://placehold.co/280x340/f3f3f3/222?text=Mockingbird" },
      { brand: "Seiko", name: "Presage Cocktail Time — Skyline", price: "$450", image: "https://placehold.co/280x340/f3f3f3/222?text=Skyline" },
    ],
  },
  {
    id: "orient-bambino",
    brand: "Orient",
    model: "Bambino",
    headline: "Orient Bambino Version 2",
    body: [
      "The Orient Bambino is the watch that launched a thousand collections. For under $200, it delivers an in-house automatic movement, a 40.5mm case, and a domed mineral crystal that gives it a vintage charm no other watch at this price can match. It's the gateway drug of mechanical watches.",
      "What makes the Bambino remarkable is that Orient — a subsidiary of Seiko — uses their own caliber F6722 automatic movement rather than sourcing from a third-party movement maker. That means vertical integration at a price point where most competitors are using commodity Miyota or Chinese movements.",
      "The Version 2 specifically, with its small seconds subdial at 6 o'clock, is the most classically proportioned of the Bambino range. The cream dial with blue hands version has become iconic in watch communities — it's the model you see recommended in every \"best watches under $200\" list, and deservedly so.",
      "The trade-off is water resistance (just 30m) and the mineral crystal (not sapphire). But at this price, those compromises are expected. The Bambino isn't trying to be a tool watch — it's a dress watch that happens to cost less than dinner for two.",
    ],
    heroImage: "https://placehold.co/720x480/2a1a1a/888?text=Orient+Bambino",
    collection: [
      { brand: "Orient", name: "Bambino V2 — Cream/Blue Hands", price: "$168", image: "https://placehold.co/280x340/f3f3f3/222?text=Bambino+Cream" },
      { brand: "Orient", name: "Bambino V2 — Black Dial", price: "$168", image: "https://placehold.co/280x340/f3f3f3/222?text=Bambino+Black" },
      { brand: "Orient", name: "Bambino V2 — White/Rose Gold", price: "$178", image: "https://placehold.co/280x340/f3f3f3/222?text=Bambino+Rose" },
      { brand: "Orient", name: "Bambino Open Heart", price: "$198", image: "https://placehold.co/280x340/f3f3f3/222?text=Bambino+Open" },
    ],
  },
];
