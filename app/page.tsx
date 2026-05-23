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
  const github = contact.links.find((link) => link.label === "GitHub")?.url;
  const linkedIn = contact.links.find((link) => link.label === "LinkedIn")?.url;

  return (
    <PageShell>
      <section className="section-reveal border-b border-line py-20 sm:py-28">
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
              <LinkButton href={profile.resumePdf} variant="primary" newTab>
                Resume
              </LinkButton>
              <LinkButton href={profile.projectsSummaryPdf} newTab>
                Projects summary download
              </LinkButton>
              {github ? (
                <a
                  href={github}
                  aria-label="GitHub"
                  className="footer-link inline-flex size-10 items-center justify-center rounded-md border border-line bg-panel text-muted"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              ) : null}
              {linkedIn ? (
                <a
                  href={linkedIn}
                  aria-label="LinkedIn"
                  className="footer-link inline-flex size-10 items-center justify-center rounded-md border border-line bg-panel text-muted"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              ) : null}
            </div>
          </div>
          <SectionNav className="mt-10" />
        </Container>
      </section>

      <FeaturedWork />

      <section className="section-reveal border-y border-line bg-panel-muted py-14">
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

      <section className="section-reveal py-14">
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

      <section className="section-reveal border-y border-line bg-panel-muted py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <SectionHeader
              title="Interested in compute infrastructure, infrastructure economics, financial analytics, and data-driven optimization systems."
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

      <section className="section-reveal py-16">
        <Container>
          <div className="rounded-lg border border-line bg-panel p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Contact
              </p>
              <LinkButton href="/contact" variant="primary">
                Contact
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.14 2.14 0 0 1 .64-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.87 3.87 0 0 1 1.03-2.69 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.37.84.4 1.8.1 2.65a3.86 3.86 0 0 1 1.03 2.69c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.98H3.95V20h2.99V8.98ZM5.45 4a1.73 1.73 0 1 0 0 3.46 1.73 1.73 0 0 0 0-3.46Zm14.6 9.7c0-3.02-1.61-4.42-3.76-4.42a3.25 3.25 0 0 0-2.94 1.62h-.04V8.98h-2.86V20h2.98v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h2.99l-.2-6.3Z" />
    </svg>
  );
}
