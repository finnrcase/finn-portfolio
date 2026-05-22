import { Container } from "@/components/container";
import { ExperienceCard } from "@/components/experience-card";
import { FeaturedWork } from "@/components/featured-work";
import { LinkButton } from "@/components/link-button";
import { PageShell } from "@/components/page-shell";
import { ResearchCard } from "@/components/research-card";
import { SectionNav } from "@/components/section-nav";
import { SectionHeader } from "@/components/section-header";
import { Tag } from "@/components/tag";
import { contact } from "@/data/contact";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { research } from "@/data/research";

export default function Home() {
  const featuredResearch = research.slice(0, 2);
  const previewExperience = experience.slice(0, 2);

  return (
    <PageShell>
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="content-reveal max-w-4xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {profile.headline}
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-normal text-foreground sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={profile.resumePdf} variant="primary">
                Resume
              </LinkButton>
              <LinkButton href="/contact">Contact</LinkButton>
              <LinkButton href="/projects">Projects</LinkButton>
            </div>
          </div>
          <SectionNav className="mt-10" />
        </Container>
      </section>

      <FeaturedWork />

      <section className="border-y border-line bg-panel-muted py-14">
        <Container>
          <SectionHeader
            label="Research"
            title="Research preview"
            description="Selected research artifacts and technical investigations."
            action={<LinkButton href="/research">All research</LinkButton>}
          />
          <div className="grid gap-4">
            {featuredResearch.map((item) => (
              <ResearchCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeader
            label="Experience"
            title="Experience preview"
            description="Recent roles and operating context."
            action={<LinkButton href="/experience">Full experience</LinkButton>}
          />
          <div>
            {previewExperience.map((item, index) => (
              <ExperienceCard
                key={`${item.company}-${item.role}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-panel-muted py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <SectionHeader
              label="About"
              title="Short about"
              description="A compact overview of focus areas and working interests."
            />
            <div>
              <div className="space-y-4 text-sm leading-7 text-muted">
                {profile.bio.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.focusAreas.map((area) => (
                  <Tag key={area}>{area}</Tag>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {profile.skills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="rounded-lg border border-line bg-panel p-4"
                  >
                    <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {skillGroup.category}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-lg border border-line bg-panel p-6 sm:p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl">
                  Let&apos;s talk about research, infrastructure, or quantitative systems.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                  {profile.availability}
                </p>
              </div>
              <div className="flex lg:justify-end">
                <LinkButton href="/contact" variant="primary">
                  Contact
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
