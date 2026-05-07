"use client";

import { useRef } from "react";
import Link from "next/link";
import { P1HeroLockup } from "./P1HeroLockup";
import { P2InlineCard } from "./P2InlineCard";
import { P3PullQuoteCard } from "./P3PullQuoteCard";
import { P4FeaturedStrip } from "./P4FeaturedStrip";
import { P5BuyBar } from "./P5BuyBar";
import {
  product,
  relatedProducts,
  editorQuote,
  heroImage,
  articleTitle,
  byline,
  intro,
  sections,
  relatedArticles,
} from "./articleData";

function PatternLabel({ num, label }: { num: number; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-2 -ml-1">
      <span className="inline-flex items-center justify-center h-5 w-5 bg-[#8B6A2A] text-white text-[10px] font-bold rounded-full">{num}</span>
      <span className="text-[11px] uppercase tracking-[1.5px] text-[#8B6A2A] font-medium">{label}</span>
    </div>
  );
}

function ArticleSection({
  id,
  title,
  paragraphs,
  inlineCardAfterParagraph,
}: {
  id: string;
  title: string;
  paragraphs: string[];
  inlineCardAfterParagraph?: number;
}) {
  return (
    <section id={id} className="mb-12">
      <h2
        className="text-[24px] font-medium mb-4"
        style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
      >
        {title}
      </h2>
      {paragraphs.map((p, i) => (
        <span key={i}>
          {inlineCardAfterParagraph === i && (
            <>
              <PatternLabel num={2} label="Inline Product Card" />
              <P2InlineCard
                brand={product.brand}
                name={product.name}
                price={product.price}
                spec={product.spec}
                image={product.image}
              />
            </>
          )}
          <p
            className="mb-4 text-[17px] leading-[1.7]"
            style={{ color: "#2E2E2E" }}
          >
            {p}
          </p>
        </span>
      ))}
      <div className="clear-both" />
    </section>
  );
}

export default function ArticleProductsPrototype() {
  const heroRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Prototype info bar */}
      <div className="border-b bg-[#faf8f4] px-6 py-3" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="mx-auto max-w-[720px] flex items-center justify-between">
          <Link href="/" className="text-[11px] uppercase tracking-[1.5px] text-[#6B6B6B] hover:text-[#1A1A1A]">
            ← Prototypes
          </Link>
          <span className="text-[11px] uppercase tracking-[1.5px] text-[#6B6B6B]">
            Article Inline-Products · 5 patterns
          </span>
        </div>
      </div>

      {/* ═══ Pattern 1: Hero Image Lockup ═══ */}
      <div ref={heroRef}>
        <PatternLabel num={1} label="Hero Image Lockup" />
        <P1HeroLockup
          heroImage={heroImage}
          brand={product.brand}
          name={product.name}
          price={product.price}
        />
      </div>

      {/* Article content */}
      <article className="mx-auto max-w-[720px] px-6 pt-10 pb-4">
        {/* Title + byline */}
        <h1
          className="text-[28px] sm:text-[32px] font-medium leading-tight mb-3"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          {articleTitle}
        </h1>
        <p className="text-[13px] uppercase tracking-[1.2px] text-[#6B6B6B] mb-8">{byline}</p>

        {/* Intro */}
        {intro.map((p, i) => (
          <p key={i} className="mb-4 text-[17px] leading-[1.7]" style={{ color: "#2E2E2E" }}>
            {p}
          </p>
        ))}

        <hr className="my-10" style={{ borderColor: "rgba(0,0,0,0.08)" }} />

        {/* Section 1: History */}
        <ArticleSection
          id={sections[0].id}
          title={sections[0].title}
          paragraphs={sections[0].paragraphs}
        />

        {/* Section 2: Design */}
        <ArticleSection
          id={sections[1].id}
          title={sections[1].title}
          paragraphs={sections[1].paragraphs}
        />
      </article>

      {/* ═══ Pattern 3: Editor's Pull-Quote Card (between Design and Movement) ═══ */}
      <div className="mx-auto max-w-[720px] px-6">
        <PatternLabel num={3} label="Editor's Pull-Quote Card" />
      </div>
      <P3PullQuoteCard
        quote={editorQuote.text}
        author={editorQuote.author}
        brand={product.brand}
        name={product.name}
        price={product.price}
        image={product.image}
      />

      <article className="mx-auto max-w-[720px] px-6 pb-4">
        {/* Section 3: Movement */}
        <ArticleSection
          id={sections[2].id}
          title={sections[2].title}
          paragraphs={sections[2].paragraphs}
        />

        {/* Section 4: On the Wrist — with Pattern 2 inline after 3rd paragraph */}
        <ArticleSection
          id={sections[3].id}
          title={sections[3].title}
          paragraphs={sections[3].paragraphs}
          inlineCardAfterParagraph={2}
        />

        {/* Section 5: Verdict */}
        <ArticleSection
          id={sections[4].id}
          title={sections[4].title}
          paragraphs={sections[4].paragraphs}
        />
      </article>

      {/* ═══ Pattern 4: Featured Strip ═══ */}
      <div className="mx-auto max-w-[720px] px-6">
        <PatternLabel num={4} label="Featured Strip" />
      </div>
      <div ref={stripRef}>
        <P4FeaturedStrip products={relatedProducts} id="featured-strip" />
      </div>

      {/* You May Also Like */}
      <div className="mx-auto max-w-[720px] px-6 py-12">
        <h3
          className="text-[18px] font-medium mb-4"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          You May Also Like
        </h3>
        <div className="flex flex-col gap-3">
          {relatedArticles.map((title) => (
            <button
              key={title}
              className="text-left text-[15px] text-[#1A1A1A] hover:underline py-2 border-b"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ Pattern 5: Slim Anchored Buy Bar ═══ */}
      <P5BuyBar
        brand={product.brand}
        name={product.name}
        price={product.price}
        thumbnail={product.thumbnail}
        heroRef={heroRef}
        stripRef={stripRef}
      />
    </div>
  );
}
