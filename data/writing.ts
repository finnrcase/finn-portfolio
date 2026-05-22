export type WritingLink = {
  label: string;
  url: string;
};

export type WritingItem = {
  title: string;
  slug: string;
  summary: string;
  body: string;
  date: string;
  publication: string;
  tags: string[];
  links: WritingLink[];
  image: string;
  featured: boolean;
};

// Paste essays, talks, publication links, Notion notes, or short summaries here.
// Use body for a longer excerpt or draft text. Use links for canonical URLs, videos, or related resources.
export const writing: WritingItem[] = [
  {
    title: "Essay or Technical Post",
    slug: "essay-or-technical-post",
    summary:
      "Paste a short description of the piece here. Mention the topic, audience, and why it matters.",
    body: `Paste a longer excerpt, draft, or Notion page content here.

If the full piece lives elsewhere, keep this as a teaser and add the external URL in links.`,
    date: "2026-01-15",
    publication: "Publication or Blog",
    tags: ["Engineering", "Research"],
    links: [{ label: "Read", url: "https://example.com" }],
    image: "/images/placeholder.svg",
    featured: true,
  },
  {
    title: "Notes on Building Systems",
    slug: "notes-on-building-systems",
    summary:
      "Use this entry for essays, talks, documentation, papers, or external posts.",
    body: "Paste the longer note, outline, or excerpt here.",
    date: "2025-09-02",
    publication: "Personal site",
    tags: ["Systems", "Product"],
    links: [{ label: "Read", url: "https://example.com" }],
    image: "/images/placeholder.svg",
    featured: false,
  },
];
