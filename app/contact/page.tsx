import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader, PageShell } from "@/components/page-shell";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

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
        title="A direct way to reach out."
        description="Update your email, location, preferred contact note, and external links in data/contact.ts."
      />
      <Container>
        <div className="grid gap-4 py-12 md:grid-cols-3">
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
            <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
              {contact.intro}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              {profile.availability}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Links
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
