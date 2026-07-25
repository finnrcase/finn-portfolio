import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExperienceCard } from "@/components/experience-card";
import { PageHeader, PageShell } from "@/components/page-shell";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience entries for Finn Case, including engineering roles, quantitative systems work, tools, and selected links.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader
        label="Experience"
        title="Experience across finance, education, economic strategy, and entrepreneurship."
        description="Roles combining quantitative analysis, technical development, operations, and decision support."
      />
      <Container>
        <div className="py-12">
          {experience.map((item) => (
            <ExperienceCard
              key={`${item.company}-${item.role}`}
              item={item}
            />
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
