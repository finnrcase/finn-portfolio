import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { PageHeader, PageShell } from "@/components/page-shell";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured projects by Finn Case across AI infrastructure, energy systems, financial modeling, and quantitative decision-making.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <PageShell>
      <PageHeader
        label="Projects"
        title="Systems built for real operational and analytical decisions."
        description="Selected work across AI infrastructure, energy, automation, financial analytics, and optimization."
      />
      <Container>
        <section className="section-reveal py-12">
          <SectionHeader
            title="Featured projects"
            description="Primary case studies spanning quantitative research and production-oriented tools."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section-reveal border-t border-line py-12">
          <SectionHeader
            title="Additional projects"
            description="Financial analysis, risk modeling, policy research, and performance optimization systems."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </Container>
    </PageShell>
  );
}
