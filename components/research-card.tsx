import Image from "next/image";
import type { ResearchItem } from "@/data/research";
import { LinkButton } from "@/components/link-button";
import { Tag } from "@/components/tag";

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-line bg-panel md:grid-cols-[240px_1fr]">
      <div className="relative min-h-48 border-b border-line bg-panel-muted md:border-b-0 md:border-r">
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 240px, 100vw"
        />
      </div>
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {item.status} / {item.date}
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-normal">{item.title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          {item.authors.join(", ")}
        </p>
        <p className="mt-4 text-sm leading-6 text-muted">{item.abstract}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.pdf ? (
            <>
              <LinkButton href={item.pdf} variant="primary" newTab>
                View PDF
              </LinkButton>
              <LinkButton href={item.pdf} download>
                Download PDF
              </LinkButton>
            </>
          ) : null}
          {item.links.map((link) => (
            <LinkButton key={link.url} href={link.url}>
              {link.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </article>
  );
}
