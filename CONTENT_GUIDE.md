# Portfolio Content Guide

This site is powered by TypeScript data files in `/data`. Most updates do not require editing page components. You will usually paste content into one of these files:

- Profile and homepage text: `/data/profile.ts`
- Contact links and email: `/data/contact.ts`
- Projects: `/data/projects.ts`
- Research: `/data/research.ts`
- Experience: `/data/experience.ts`

After editing, run:

```bash
npm run build
```

That catches missing commas, quotes, duplicate syntax, and broken TypeScript shapes.

## Change Homepage Text

Edit `/data/profile.ts`.

- `name`: Your displayed name.
- `headline`: A short professional headline.
- `role`: The small label shown near the top of the homepage.
- `summary`: The main homepage intro paragraph.
- `bio`: A longer multi-paragraph bio for future/about-style sections.
- `availability`: The current focus/contact note.
- `focusAreas`: Short topic labels.

Edit `/data/contact.ts` for email, location, and social/profile links.

## Add Images

Put image files in:

```text
/public/images
```

Then reference them in data files like this:

```ts
image: "/images/my-project.png"
```

Recommended formats: `.jpg`, `.png`, `.webp`, or `.svg`.

Keep filenames lowercase and URL-friendly:

```text
good: robot-dashboard.png
avoid: Robot Dashboard Final Copy 2.png
```

If you do not have an image yet, use:

```ts
image: "/images/placeholder.svg"
```

## Add PDFs

Put PDF files in:

```text
/public/pdfs
```

Then reference them like this:

```ts
pdf: "/pdfs/my-paper.pdf"
```

or for project PDFs:

```ts
pdfs: [{ label: "Case study", path: "/pdfs/my-case-study.pdf" }]
```

## Add Links

Links are arrays of `{ label, url }` objects. Use them for GitHub, Devpost, LinkedIn, demos, papers, project pages, videos, and external sites.

Examples:

```ts
links: [
  { label: "GitHub", url: "https://github.com/your-handle/repo" },
  { label: "Demo", url: "https://demo.example.com" },
  { label: "Devpost", url: "https://devpost.com/software/project-name" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
  { label: "Paper", url: "https://arxiv.org/abs/0000.00000" },
]
```

Use complete URLs that start with `https://`.

## Mark Something Featured

Projects have a `featured` field.

```ts
featured: true
```

Featured projects appear in the homepage Featured Work section and at the top of the Projects page. Use `false` for normal entries.

## Add A New Project

Open `/data/projects.ts` and paste a new object inside the `projects` array.

The `slug` controls the project detail page URL:

```text
/projects/my-project-slug
```

Each slug must be unique.

### New Project Template

```ts
{
  title: "Project Name",
  slug: "project-name",
  summary:
    "One short paragraph. Explain the problem, what you built, your role, and the outcome.",
  longDescription: `Paste a longer Notion case study here.

Suggested structure: context, problem, approach, technical decisions, tradeoffs, and outcome.`,
  image: "/images/placeholder.svg",
  tags: ["Next.js", "TypeScript", "Postgres"],
  date: "2026",
  featured: true,
  links: [
    { label: "GitHub", url: "https://github.com/your-handle/project" },
    { label: "Demo", url: "https://example.com" },
    { label: "Devpost", url: "https://devpost.com/software/project-name" },
  ],
  pdfs: [
    { label: "Case study", path: "/pdfs/project-case-study.pdf" },
  ],
  bullets: [
    "Built the core system, product, model, workflow, or interface.",
    "Describe an important technical decision, constraint, or implementation detail.",
    "Describe the result, user impact, metric, award, or lesson learned.",
  ],
  metrics: [
    { label: "Users", value: "1,000+" },
    { label: "Result", value: "40% faster" },
  ],
}
```

If you have no PDFs or metrics yet, use empty arrays:

```ts
pdfs: []
metrics: []
```

## Add A New Research Paper

Open `/data/research.ts` and paste a new object inside the `research` array.

Allowed `status` values:

```ts
"Published" | "Preprint" | "In review" | "Working paper" | "Draft"
```

### New Research Paper Template

```ts
{
  title: "Research Paper Title",
  abstract:
    "Paste the abstract here. Include the research question, method, main finding, and contribution.",
  date: "2026",
  authors: ["Your Name", "Collaborator Name"],
  tags: ["AI", "Systems", "Evaluation"],
  image: "/images/placeholder.svg",
  pdf: "/pdfs/research-paper.pdf",
  links: [
    { label: "Project page", url: "https://example.com" },
    { label: "Code", url: "https://github.com/your-handle/research-code" },
    { label: "Paper", url: "https://arxiv.org/abs/0000.00000" },
  ],
  status: "Preprint",
}
```

If there is no PDF yet, use:

```ts
pdf: ""
```

## Add A New Experience Entry

Open `/data/experience.ts` and paste a new object inside the `experience` array.

This is designed to accept LinkedIn role descriptions and resume bullets directly.

### New Experience Entry Template

```ts
{
  company: "Company Name",
  role: "Role Title",
  location: "City, Country or Remote",
  startDate: "2024",
  endDate: "Present",
  summary:
    "One short paragraph describing scope, team, product area, and impact.",
  bullets: [
    "Paste a LinkedIn or resume accomplishment bullet.",
    "Paste a technical bullet about architecture, systems, scale, or reliability.",
    "Paste a collaboration, leadership, user, or business impact bullet.",
  ],
  tools: ["TypeScript", "React", "Postgres", "AWS"],
  links: [
    { label: "Company", url: "https://example.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/example" },
  ],
  image: "/images/placeholder.svg",
}
```

If there are no links, use:

```ts
links: []
```

## Quick Editing Rules

- Keep every object separated by a comma.
- Keep strings inside quotes.
- Use backticks for multi-paragraph text.
- Use empty arrays when you have nothing to add yet: `links: []`.
- Use `/images/placeholder.svg` until the final image is ready.
- Use unique slugs for projects.
