# Finn Case Portfolio

A professional portfolio site built with Next.js, TypeScript, Tailwind CSS, and the App Router. The site is content-driven: projects, research, experience, profile text, contact links, images, and PDFs are edited through simple files in `/data` and `/public`.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next/image` for optimized local images
- Static generation for project detail pages
- Vercel-ready build output

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Content Editing

Most portfolio content lives in `/data`:

- `/data/profile.ts`: name, headline, homepage summary, bio, resume path
- `/data/contact.ts`: email, location, social/profile links
- `/data/projects.ts`: featured projects and project detail pages
- `/data/research.ts`: research papers, abstracts, PDFs, links
- `/data/experience.ts`: roles, bullets, tools, company links

See `/CONTENT_GUIDE.md` for copy/paste templates and detailed editing instructions.

## Images

Place images in:

```text
public/images
```

Reference them from data files like:

```ts
image: "/images/my-project.png"
```

Use `/images/placeholder.svg` until final artwork is ready.

## PDFs

Place PDFs in:

```text
public/pdfs
```

Reference them from data files like:

```ts
pdf: "/pdfs/my-paper.pdf"
```

or:

```ts
pdfs: [{ label: "Case study", path: "/pdfs/my-case-study.pdf" }]
```

## Quality Checks

Run linting:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

Start the production build locally:

```bash
npm run start
```

## SEO And Metadata

Global metadata is configured in `/app/layout.tsx`. Page-specific titles and descriptions are configured in each route:

- `/app/projects/page.tsx`
- `/app/research/page.tsx`
- `/app/experience/page.tsx`
- `/app/contact/page.tsx`
- `/app/projects/[slug]/page.tsx`

Set the production site URL in Vercel as:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If this variable is not set, the site uses a placeholder metadata URL.

## Deploying To Vercel

### Git Integration

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Use the default framework preset: Next.js.
4. Build command: `npm run build`
5. Install command: `npm install`
6. Output directory: leave blank.
7. Add `NEXT_PUBLIC_SITE_URL` after you know the production domain.
8. Deploy.

Vercel will create preview deployments for branches and production deployments for the production branch.

### Vercel CLI

Install the Vercel CLI:

```bash
npm install -g vercel
```

Create a preview deployment:

```bash
vercel
```

Create a production deployment:

```bash
vercel --prod
```

## Project Detail Pages

Project detail pages are generated from `slug` values in `/data/projects.ts`.

Example:

```ts
slug: "financial-risk-engine"
```

creates:

```text
/projects/financial-risk-engine
```

Every project slug must be unique.
