import { SiteHeader } from "../components/SiteHeader";
import { Button } from "../components/Button";

const colorTokens: { name: string; varName: string; hex: string }[] = [
  { name: "Brand",         varName: "--color-brand",         hex: "#e62b1e" },
  { name: "Brand hover",   varName: "--color-brand-hover",   hex: "#c4241a" },
  { name: "Brand active",  varName: "--color-brand-active",  hex: "#a01d15" },
  { name: "Ink",           varName: "--color-ink",           hex: "#1a1a1a" },
  { name: "Ink muted",     varName: "--color-ink-muted",     hex: "#5c5c5c" },
  { name: "Line",          varName: "--color-line",          hex: "#e6e6e6" },
  { name: "Surface",       varName: "--color-surface",       hex: "#ffffff" },
  { name: "Surface muted", varName: "--color-surface-muted", hex: "#f5f5f5" },
  { name: "Success",       varName: "--color-success",       hex: "#1a8f3c" },
  { name: "Warning",       varName: "--color-warning",       hex: "#d97706" },
  { name: "Danger",        varName: "--color-danger",        hex: "#d32f2f" },
];

const typeTokens: { name: string; className: string; spec: string }[] = [
  { name: "Display", className: "t-display", spec: "64 / 1.1 / 700" },
  { name: "Heading 1", className: "t-h1", spec: "48 / 1.1 / 700" },
  { name: "Heading 2", className: "t-h2", spec: "36 / 1.25 / 600" },
  { name: "Heading 3", className: "t-h3", spec: "28 / 1.25 / 600" },
  { name: "Heading 4", className: "t-h4", spec: "22 / 1.25 / 600" },
  { name: "Body large", className: "t-body-lg", spec: "18 / 1.65 / 400" },
  { name: "Body", className: "t-body", spec: "16 / 1.5 / 400" },
  { name: "Body small", className: "t-body-sm", spec: "14 / 1.5 / 400" },
  { name: "Caption", className: "t-caption", spec: "12 / 1.5 / 500 · uppercase" },
];

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-[var(--color-line)] py-12">
      <header className="mb-8">
        <h2 className="t-h2">{title}</h2>
        {description && (
          <p className="t-body mt-2 max-w-2xl text-[var(--color-ink-muted)]">
            {description}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <header className="mb-12 max-w-2xl">
          <span className="t-caption text-[var(--color-brand)]">
            Foundations
          </span>
          <h1 className="t-h1 mt-3">Design system</h1>
          <p className="t-body-lg mt-4 text-[var(--color-ink-muted)]">
            A lightweight set of tokens and components for Teddy B prototypes.
            Tokens live in{" "}
            <code className="rounded bg-[var(--color-surface-muted)] px-1.5 py-0.5 text-sm">
              app/globals.css
            </code>
            ; tune them against the Figma file to match the 2026 brand.
          </p>
          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#color" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">Color</a>
            <a href="#type" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">Type</a>
            <a href="#buttons" className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">Buttons</a>
          </nav>
        </header>

        <Section
          id="color"
          title="Color"
          description="Brand and neutral tokens. Reference via CSS variable names so that updating Figma values only requires editing globals.css."
        >
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {colorTokens.map((c) => (
              <li
                key={c.varName}
                className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)]"
              >
                <div
                  className="h-20 w-full"
                  style={{ background: `var(${c.varName})` }}
                />
                <div className="p-3">
                  <div className="t-body-sm font-medium">{c.name}</div>
                  <div className="t-caption text-[var(--color-ink-muted)]">
                    {c.hex}
                  </div>
                  <code className="mt-1 block text-xs text-[var(--color-ink-muted)]">
                    {c.varName}
                  </code>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="type"
          title="Typography"
          description="Inter is the default placeholder. Swap the font in app/layout.tsx once the Figma type is confirmed."
        >
          <ul className="divide-y divide-[var(--color-line)] rounded-[var(--radius-md)] border border-[var(--color-line)]">
            {typeTokens.map((t) => (
              <li key={t.className} className="flex flex-col gap-2 p-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex-1">
                  <div className={t.className}>{t.name} — The quick brown fox</div>
                </div>
                <div className="flex shrink-0 flex-col gap-1 text-right sm:w-64">
                  <code className="t-body-sm text-[var(--color-ink)]">.{t.className}</code>
                  <span className="t-caption text-[var(--color-ink-muted)]">{t.spec}</span>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="buttons"
          title="Buttons"
          description="Four variants × three sizes. Use the Button component from app/components/Button.tsx — it supports both anchors (via href) and buttons."
        >
          <div className="space-y-10">
            <div>
              <h3 className="t-caption mb-4 text-[var(--color-ink-muted)]">Variants</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>

            <div>
              <h3 className="t-caption mb-4 text-[var(--color-ink-muted)]">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="t-caption mb-4 text-[var(--color-ink-muted)]">As link</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/" variant="secondary">
                  ← Back to home
                </Button>
                <Button href="/design-system" variant="ghost">
                  Reload this page
                </Button>
              </div>
            </div>

            <div>
              <h3 className="t-caption mb-4 text-[var(--color-ink-muted)]">Full width</h3>
              <div className="max-w-sm">
                <Button fullWidth>Continue</Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
