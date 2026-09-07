import type { Metadata } from "next";
import { CertificationCard } from "@/components/certification-card";
import { Container } from "@/components/container";
import { PageHeader, PageShell } from "@/components/page-shell";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Finn Case’s credentials in cloud architecture, FinOps, investment knowledge, and AI-assisted software development.",
};

export default function CertificationsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Certifications"
        title="Cloud architecture, financial knowledge, and AI development."
        description="AWS Certified Solutions Architect, FinOps Certified Practitioner, Series 65, and Claude Code in Action."
      />
      <Container>
        <section className="section-reveal grid gap-4 py-12 md:grid-cols-2" aria-label="Certifications">
          {certifications.map((item) => (
            <CertificationCard key={item.name} item={item} />
          ))}
        </section>
      </Container>
    </PageShell>
  );
}
