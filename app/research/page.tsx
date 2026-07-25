import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader, PageShell } from "@/components/page-shell";
import { ResearchCard } from "@/components/research-card";
import { research } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research by Finn Case on AI infrastructure, electricity demand, carbon intensity, policy tradeoffs, and quantitative systems.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHeader
        label="Research"
        title="Applied research in infrastructure, energy, and environmental economics."
        description="Technical papers and quantitative investigations using econometrics, simulation, and policy analysis."
      />
      <Container>
        <div className="grid gap-4 py-12">
          {research.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
