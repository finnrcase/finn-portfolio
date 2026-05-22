import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/container";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-normal text-foreground transition duration-200 ease-out hover:text-accent"
          >
            {siteConfig.name}
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-line bg-panel px-3 py-2 text-sm font-medium text-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
