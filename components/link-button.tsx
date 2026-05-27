import Link from "next/link";
import type { ReactNode } from "react";

export function LinkButton({
  href,
  children,
  download = false,
  newTab = false,
  variant = "secondary",
}: {
  href: string;
  children: ReactNode;
  download?: boolean;
  newTab?: boolean;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "link-button link-button-primary"
      : "link-button link-button-secondary";

  if (href.startsWith("/") && !newTab) {
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
      rel={newTab || href.startsWith("http") ? "noopener noreferrer" : undefined}
      target={newTab || href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
