import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader, PageShell } from "@/components/page-shell";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Finn Case for research, engineering, AI infrastructure, energy systems, and quantitative systems work.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        label="Contact"
        title="Let’s discuss research, quantitative systems, or technical work."
        description={contact.intro}
      />
      <Container>
        <div className="grid gap-4 py-12 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-panel p-5 md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Email
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 block break-words text-2xl font-semibold tracking-normal hover:underline"
            >
              {contact.email}
            </a>
          </div>
          <div className="rounded-lg border border-line bg-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Contact details
            </p>
            <dl className="mt-4 grid gap-4 text-sm leading-6">
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="font-medium text-foreground">{contact.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Preferred contact</dt>
                <dd className="font-medium text-foreground">
                  {contact.preferredContact}
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-lg border border-line bg-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Professional profiles
            </p>
            <div className="mt-4 grid gap-3">
              {contact.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="text-sm font-medium text-accent hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
