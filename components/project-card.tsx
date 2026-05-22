import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { LinkButton } from "@/components/link-button";
import { Tag } from "@/components/tag";

export function ProjectCard({ project }: { project: Project }) {
  const imageHref = project.links[0]?.url ?? `/projects/${project.slug}`;
  const isExternalImageHref = imageHref.startsWith("http");
  const image = (
    <div className="relative aspect-[16/9] border-b border-line bg-panel-muted">
      <Image
        src={project.image}
        alt=""
        fill
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  );

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-panel transition hover:border-foreground/30">
      {isExternalImageHref ? (
        <a href={imageHref} className="block" rel="noreferrer" target="_blank">
          {image}
        </a>
      ) : (
        <Link href={imageHref} className="block">
          {image}
        </Link>
      )}
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
