import type { Metadata } from "next";
import "./globals.css";

/*
 * Teddy B uses three commercial font families (from Figma):
 *   1. Victor Serif (50 Medium) — headings
 *   2. Relative Pro (Book) — body copy
 *   3. Sharp Grotesk DB Book 20 — labels & buttons
 *
 * To activate them, add .woff2 files to app/fonts/ and configure
 * next/font/local here. Until then, CSS fallbacks are used
 * (Georgia for headings, system sans-serif for body & labels).
 */

export const metadata: Metadata = {
  title: "Teddy B Prototypes",
  description: "Prototype hub for the Teddy B 2026 design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
