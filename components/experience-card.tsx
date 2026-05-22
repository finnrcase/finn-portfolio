import Image from "next/image";
import type { ExperienceItem } from "@/data/experience";
import { LinkButton } from "@/components/link-button";
import { Tag } from "@/components/tag";

export function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <article className="grid gap-6 border-b border-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[220px_1fr]">
      <div>
        <div className="relative mb-4 aspect-square max-w-28 overflow-hidden rounded-lg border border-line bg-panel-muted">
          <Image src={item.image} alt="" fill className="object-cover" sizes="112px" />
        </div>
        <p className="font-mono text-sm text-muted">
          {item.startDate} - {item.endDate}
        </p>
        <p className="mt-2 text-sm text-muted">{item.location}</p>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Role {index + 1}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-normal">
          {item.role}, {item.company}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
          {item.summary}
        </p>
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="border-l border-line pl-4">
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
        {item.links.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.links.map((link) => (
              <LinkButton key={link.url} href={link.url}>
                {link.label}
              </LinkButton>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
