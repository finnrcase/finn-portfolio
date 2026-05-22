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
            className="group inline-flex size-9 items-center justify-center rounded-md border border-transparent text-muted transition duration-200 ease-out hover:-translate-y-0.5 hover:border-line hover:bg-panel hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              aria-hidden="true"
              className="size-4 transition duration-200 ease-out group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="m3 10.5 9-7 9 7" />
              <path d="M5.5 9.5V20h13V9.5" />
              <path d="M9.5 20v-6h5v6" />
            </svg>
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
