import Image from "next/image";
import type { ExperienceItem } from "@/data/experience";
import { LinkButton } from "@/components/link-button";
import { Tag } from "@/components/tag";

export function ExperienceCard({
  item,
}: {
  item: ExperienceItem;
}) {
  return (
    <article className="grid gap-6 border-b border-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[220px_1fr]">
      <div>
        {item.image ? (
          <div className="relative mb-4 aspect-square max-w-28 overflow-hidden rounded-lg border border-line bg-panel-muted">
            <Image src={item.image} alt="" fill className="object-cover" sizes="112px" />
          </div>
        ) : null}
        <p className="font-mono text-sm text-muted">
          {item.startDate} - {item.endDate}
        </p>
        <p className="mt-2 text-sm text-muted">{item.location}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-normal">
          {item.role}, {item.company}
        </h2>
        {item.summary ? (
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
            {item.summary}
          </p>
        ) : null}
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="border-l border-line pl-4">
              {bullet}
            </li>
          ))}
        </ul>
        {item.tools.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        ) : null}
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
