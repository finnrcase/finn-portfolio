import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { PageShell } from "@/components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="flex min-h-[60vh] items-center border-b border-line py-20">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            404
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            This page does not exist.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            The page may have moved, or the URL may not match an active project,
            research item, writing post, or portfolio section.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/" variant="primary">
              Home
            </LinkButton>
            <LinkButton href="/projects">Projects</LinkButton>
            <LinkButton href="/contact">Contact</LinkButton>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
