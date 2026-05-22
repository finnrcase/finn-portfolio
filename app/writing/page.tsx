import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader, PageShell } from "@/components/page-shell";
import { WritingCard } from "@/components/writing-card";
import { writing } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Finn Case on engineering, research, systems, AI infrastructure, and quantitative decision-making.",
};

export default function WritingPage() {
  return (
    <PageShell>
      <PageHeader
        label="Writing"
        title="Essays, notes, and technical writing."
        description="Writing cards render from data/writing.ts with post metadata, tags, images, and links."
      />
      <Container>
        <div className="grid gap-4 py-12 md:grid-cols-2">
          {writing.map((item) => (
            <WritingCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
