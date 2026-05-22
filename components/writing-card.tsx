import Image from "next/image";
import type { WritingItem } from "@/data/writing";
import { LinkButton } from "@/components/link-button";
import { Tag } from "@/components/tag";

export function WritingCard({ item }: { item: WritingItem }) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-panel transition hover:border-foreground/30">
      <div className="relative aspect-[16/9] border-b border-line bg-panel-muted">
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {item.date} / {item.publication}
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-normal">{item.title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.links.map((link) => (
            <LinkButton key={link.url} href={link.url} variant="primary">
              {link.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </article>
  );
}
