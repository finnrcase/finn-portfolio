import Link from "next/link";
import { Container } from "@/components/container";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Home"
            className="group inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-line/70 bg-panel/50 px-2 font-mono text-sm font-semibold tracking-normal text-accent transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/70 hover:bg-panel hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="transition duration-200 ease-out group-hover:scale-105">
              FC
            </span>
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
