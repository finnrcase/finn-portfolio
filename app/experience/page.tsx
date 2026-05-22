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
        title="Engineering roles, collaborations, and operating context."
        description="Experience entries render from data/experience.ts with tools, links, images, and LinkedIn-style bullets."
      />
      <Container>
        <div className="py-12">
          {experience.map((item, index) => (
            <ExperienceCard
              key={`${item.company}-${item.role}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
