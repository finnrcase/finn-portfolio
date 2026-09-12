import { Tag } from "@/components/tag";
import type { Project } from "@/data/projects";

export function InlineResearchCard({ project }: { project: Project }) {
  return (
    <article className="section-reveal overflow-hidden rounded-lg border border-line bg-panel md:col-span-2">
      <div className="p-5 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs tracking-[0.16em] text-muted">{project.date}</p>
          {project.status ? <Tag>{project.status}</Tag> : null}
        </div>
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-accent">{project.category}</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-normal sm:text-3xl">{project.title}</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Research thesis</h3>
            <p className="mt-3 text-base leading-7 text-foreground">{project.summary}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Why it matters</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{project.longDescription}</p>
            <p className="mt-4 border-l border-accent pl-4 text-sm leading-6 text-foreground">{project.currentStage}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </div>
      <details className="group border-t border-line">
        <summary className="cursor-pointer px-5 py-5 text-sm font-medium text-accent transition-colors hover:bg-panel-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent sm:px-8">
          Research design & planned methodology
        </summary>
        <div className="px-5 pb-6 sm:px-8 sm:pb-8">
          {project.researchProcess ? (
            <ol className="grid gap-3 border-b border-line pb-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Research process">
              {project.researchProcess.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="font-mono text-accent">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          ) : null}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {project.detailSections?.map((section) => (
              <section key={section.title}>
                <h3 className="text-base font-semibold tracking-normal">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </details>
    </article>
  );
}
