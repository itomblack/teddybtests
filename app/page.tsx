import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { Button } from "./components/Button";
import { prototypes } from "./prototypes";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <section className="mb-16 max-w-2xl">
          <span className="t-caption text-[var(--color-brand)]">
            Teddy B · 2026
          </span>
          <h1 className="t-h1 mt-3">Prototypes</h1>
          <p className="t-body-lg mt-4 text-[var(--color-ink-muted)]">
            A working hub for Teddy B prototypes. Built on the lightweight 2026
            design system. Pick one below — or peek at the{" "}
            <Link
              href="/design-system"
              className="text-[var(--color-ink)] underline underline-offset-4"
            >
              design system
            </Link>
            .
          </p>
        </section>

        <section>
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="t-h3">All prototypes</h2>
            <span className="t-body-sm text-[var(--color-ink-muted)]">
              {prototypes.length} total
            </span>
          </div>

          {prototypes.length === 0 ? (
            <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-line)] p-12 text-center">
              <p className="t-body text-[var(--color-ink-muted)]">
                No prototypes yet. Add one to{" "}
                <code className="rounded bg-[var(--color-surface-muted)] px-1.5 py-0.5 text-sm">
                  app/prototypes.ts
                </code>{" "}
                and create a route at{" "}
                <code className="rounded bg-[var(--color-surface-muted)] px-1.5 py-0.5 text-sm">
                  app/prototypes/&lt;slug&gt;/page.tsx
                </code>
                .
              </p>
              <div className="mt-6">
                <Button href="/design-system" variant="secondary">
                  Browse the design system
                </Button>
              </div>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {prototypes.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/prototypes/${p.slug}`}
                    className="block h-full rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-ink)]"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="t-h4">{p.title}</h3>
                      {p.status && (
                        <span className="t-caption text-[var(--color-ink-muted)]">
                          {p.status}
                        </span>
                      )}
                    </div>
                    <p className="t-body-sm mt-2 text-[var(--color-ink-muted)]">
                      {p.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <footer className="border-t border-[var(--color-line)] px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-[var(--color-ink-muted)]">
          <span>Teddy B prototypes</span>
          <Link
            href="/design-system"
            className="hover:text-[var(--color-ink)]"
          >
            Design system →
          </Link>
        </div>
      </footer>
    </>
  );
}
