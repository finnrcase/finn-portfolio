import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { LinkButton } from "@/components/link-button";
import { Tag } from "@/components/tag";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const image = (
    <div className="relative aspect-[16/9] border-b border-line bg-panel-muted">
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      ) : (
        <div className="flex h-full flex-col justify-end bg-[linear-gradient(135deg,var(--color-panel-muted),var(--color-panel))] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Project
          </p>
          <p className="mt-3 max-w-md text-2xl font-semibold tracking-normal text-foreground">
            {project.title}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <article
      className="project-card overflow-hidden rounded-lg border border-line bg-panel hover:border-foreground/30"
      style={{ animationDelay: `${Math.min(index, 6) * 35}ms` }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {image}
      </Link>
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {project.date}
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-normal">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <LinkButton href={`/projects/${project.slug}`} variant="primary">
            Details
          </LinkButton>
          {project.links.map((link) => (
            <LinkButton key={link.url} href={link.url}>
              {link.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </article>
  );
}
