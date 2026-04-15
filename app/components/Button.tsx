import * as React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2.5 " +
  "uppercase tracking-[1.1px] text-[11px] leading-[1.5] " +
  "transition-colors focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand)] " +
  "disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] text-[var(--color-brand-fg)] " +
    "hover:bg-[var(--color-brand-hover)] active:bg-[var(--color-brand-active)] active:border active:border-black",
  secondary:
    "bg-white text-[var(--color-ink)] border border-black " +
    "hover:border-[rgba(34,34,34,0.8)] active:border-black",
  ghost:
    "bg-transparent text-[var(--color-ink)] " +
    "hover:bg-[var(--color-surface-muted)]",
  danger:
    "bg-[var(--color-danger)] text-white hover:opacity-90 active:opacity-80",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2",
  md: "px-[25px] py-[11px]",
  lg: "px-8 py-3.5",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    children,
    ...rest
  } = props;

  const classes = [
    base,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { ...buttonRest } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
