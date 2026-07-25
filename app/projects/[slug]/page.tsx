import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { PageShell } from "@/components/page-shell";
import { Tag } from "@/components/tag";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {project.date}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-12">
          {project.image ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line bg-panel-muted">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          ) : null}

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
            <article className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-normal">Overview</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                {project.longDescription.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {project.detailSections?.map((section) => (
                <section key={section.title} className="mt-10">
                  <h2 className="text-2xl font-semibold tracking-normal">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {section.body}
                  </p>
                  {section.bullets?.length ? (
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="border-l border-line pl-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {project.bullets.length ? (
                <section className="mt-10">
                  <h2 className="text-2xl font-semibold tracking-normal">Highlights</h2>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="border-l border-line pl-4">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </article>

            <aside className="h-fit rounded-lg border border-line bg-panel p-5">
              {project.metrics.length ? (
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Metrics
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {project.metrics.map((metric) => (
                      <div key={`${metric.label}-${metric.value}`}>
                        <p className="text-2xl font-semibold tracking-normal">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-sm text-muted">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.metadata?.length ? (
                <div className="mt-6 border-t border-line pt-5">
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Project details
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {project.metadata.map((item) => (
                      <div key={`${item.label}-${item.value}`}>
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-foreground">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.links.length || project.pdfs.length ? (
                <div className="mt-6 border-t border-line pt-5">
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Links
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <LinkButton key={link.url} href={link.url}>
                        {link.label}
                      </LinkButton>
                    ))}
                    {project.pdfs.map((pdf) => (
                      <LinkButton key={pdf.path} href={pdf.path} download>
                        {pdf.label}
                      </LinkButton>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
