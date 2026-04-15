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
    slug: "comparison-modal",
    title: "Watch Comparison Modal",
    description:
      "Slide-up overlay comparing watch specifications side-by-side with accordion sections.",
    status: "in-progress",
  },
];
