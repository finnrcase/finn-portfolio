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
        title="Technical work with clear systems, interfaces, and outcomes."
        description="Projects render from data/projects.ts. Featured work appears first, followed by the full project grid."
      />
      <Container>
        <section className="py-12">
          <SectionHeader
            title="Featured projects"
            description="Primary case studies and selected work."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="border-t border-line py-12">
          <SectionHeader
            title="All projects"
            description="Every project entry currently defined in the data file."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[...featuredProjects, ...otherProjects].map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </PageShell>
  );
}
