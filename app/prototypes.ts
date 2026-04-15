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
  // Example placeholder — replace as we build real prototypes.
  // {
  //   slug: "hello-world",
  //   title: "Hello world",
  //   description: "A first sample prototype.",
  //   status: "draft",
  // },
];
