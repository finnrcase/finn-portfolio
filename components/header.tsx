import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { Container } from "@/components/container";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-normal text-foreground"
          >
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition hover:bg-panel-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-md border border-line bg-panel px-3 py-2 text-sm font-medium text-foreground transition hover:border-foreground"
          >
            Contact
          </Link>
        </div>
        <nav
          className="flex gap-1 overflow-x-auto border-t border-line py-2 md:hidden"
          aria-label="Mobile main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 text-sm text-muted transition hover:bg-panel-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
