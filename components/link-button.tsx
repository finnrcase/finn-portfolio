import Link from "next/link";
import type { ReactNode } from "react";

export function LinkButton({
  href,
  children,
  download = false,
  variant = "secondary",
}: {
  href: string;
  children: ReactNode;
  download?: boolean;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition hover:opacity-85"
      : "inline-flex items-center rounded-md border border-line bg-panel px-3 py-2 text-sm font-medium text-foreground transition hover:border-foreground";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} download={download}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      download={download}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
