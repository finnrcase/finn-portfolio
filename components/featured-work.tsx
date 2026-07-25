import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const featuredProjects = projects.filter((project) => project.featured);

  if (!featuredProjects.length) {
    return null;
  }

  return (
    <section className="section-reveal py-14">
      <Container>
        <SectionHeader
          title="Featured work"
          description="Selected systems and research spanning infrastructure, energy, automation, and quantitative decision-making."
          action={<LinkButton href="/projects">All projects</LinkButton>}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
