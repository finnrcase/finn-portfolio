import Link from "next/link";
import type { ReactNode } from "react";

export function ItemCard({
  title,
  eyebrow,
  summary,
  href,
  tags,
  children,
}: {
  title: string;
  eyebrow?: string;
  summary: string;
  href?: string;
  tags?: string[];
  children?: ReactNode;
}) {
  const content = (
    <article className="h-full rounded-lg border border-line bg-panel p-5 transition hover:border-foreground/30">
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-xl font-semibold tracking-normal text-foreground">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted">{summary}</p>
      {children ? <div className="mt-5">{children}</div> : null}
      {tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line bg-panel-muted px-2 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
