import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionNav } from "@/components/section-nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-reveal border-b border-line py-16 sm:py-20">
      <Container>
        <div className="content-reveal">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {label}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
          <SectionNav className="mt-8" />
        </div>
      </Container>
    </section>
  );
}
