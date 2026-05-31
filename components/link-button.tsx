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
      ? "inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-background shadow-[0_0_0_1px_rgba(232,106,51,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#f07a45]"
      : "inline-flex items-center rounded-md border border-line bg-panel px-3 py-2 text-sm font-medium text-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent";

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
