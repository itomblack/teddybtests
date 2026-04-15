import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-6 w-6 rounded-sm bg-[var(--color-brand)]"
          />
          <span className="t-h4">Teddy B</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Prototypes
          </Link>
          <Link
            href="/design-system"
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Design system
          </Link>
        </nav>
      </div>
    </header>
  );
}
