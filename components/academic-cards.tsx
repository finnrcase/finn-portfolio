import Link from "next/link";
import { Tag } from "@/components/tag";
import { academics } from "@/data/academics";

export function AcademicCards({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="grid gap-4">
      {academics.map((item) => (
        <article
          key={item.abbreviation}
          className="grid gap-6 rounded-lg border border-line bg-panel p-5 sm:p-6 md:grid-cols-[220px_1fr]"
        >
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {item.abbreviation}
            </p>
            <p className="mt-3 font-mono text-sm leading-6 text-muted">
              {item.startDate} – {item.endDate}
            </p>
            {item.focus ? (
              <p className="mt-3 text-sm font-medium text-foreground">{item.focus}</p>
            ) : null}
          </div>
          <div className="min-w-0">
            <Heading className="text-xl font-semibold tracking-normal sm:text-2xl">
              {item.university}
            </Heading>
            <p className="mt-2 text-base leading-7 text-foreground">{item.degree}</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {item.courseworkLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <li key={course} className="flex min-w-0 max-w-full">
                  <Tag>{course}</Tag>
                </li>
              ))}
            </ul>
            {item.activities ? (
              <div className="mt-6 border-t border-line pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  Academic activities
                </p>
                <ul className="mt-4 grid gap-4 text-sm leading-6">
                  {item.activities.map((activity) => (
                    <li key={activity.title} className="border-l border-line pl-4">
                      {activity.href ? (
                        <Link href={activity.href} className="font-medium text-accent hover:underline">
                          {activity.title}
                        </Link>
                      ) : (
                        <p className="font-medium">{activity.title}</p>
                      )}
                      {activity.description ? (
                        <p className="mt-2 max-w-3xl text-muted">{activity.description}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
