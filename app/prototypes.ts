/**
 * Registry of prototypes. Add a new entry here whenever you create a
 * prototype under app/prototypes/<slug>/page.tsx and it will automatically
 * appear on the homepage.
 */
export type Prototype = {
  slug: string;
  title: string;
  description: string;
  status?: "draft" | "in-progress" | "ready";
};

export const prototypes: Prototype[] = [
  {
    slug: "brand-module",
    title: "Shop by Brand Module",
    description:
      "Five variations: editorial cards, tiered showcase, logo grid, full-bleed strip, and signature watch columns.",
    status: "in-progress",
  },
  {
    slug: "search-results",
    title: "Search Results Page",
    description:
      "Three search results page variants: tabbed, stacked sections, and adaptive layout — with Baymard UX guidelines.",
    status: "in-progress",
  },
  {
    slug: "search",
    title: "Quick Search",
    description:
      "Three variations of quick search: clean overlay, recently-viewed default, and compact dropdown.",
    status: "in-progress",
  },
  {
    slug: "shop",
    title: "Shop Watches",
    description:
      "Product listing page with grid, filters, and compare functionality that launches the comparison modal.",
    status: "in-progress",
  },
  {
    slug: "comparison-modal",
    title: "Watch Comparison Modal",
    description:
      "Slide-up overlay comparing watch specifications side-by-side with accordion sections.",
    status: "in-progress",
  },
];
