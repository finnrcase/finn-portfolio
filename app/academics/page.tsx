import type { Metadata } from "next";
import { AcademicCards } from "@/components/academic-cards";
import { Container } from "@/components/container";
import { PageHeader, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Finn Case’s academic background: UCLA Master of Quantitative Economics and UC Santa Barbara Economics, with coursework, teaching, and academic research.",
};

export default function AcademicsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Academics"
        title="Quantitative economics, data analytics, and applied research."
        description="Academic training at UCLA and UC Santa Barbara, with teaching and research in economics."
      />
      <Container>
        <section className="section-reveal py-12" aria-label="Academic background">
          <AcademicCards headingLevel={2} />
        </section>
      </Container>
    </PageShell>
  );
}
