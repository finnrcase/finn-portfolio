export type ResearchLink = {
  label: string;
  url: string;
};

export type ResearchStatus =
  | "Published"
  | "Preprint"
  | "In review"
  | "Working paper"
  | "Draft";

export type ResearchItem = {
  title: string;
  abstract: string;
  date: string;
  authors: string[];
  tags: string[];
  image: string;
  pdf: string;
  links: ResearchLink[];
  status: ResearchStatus;
};

// Paste abstracts, author lists, paper links, lab notes, and Notion research summaries here.
// Keep abstract as the longer research description. Add PDFs to /public/pdfs and images to /public/images.
export const research: ResearchItem[] = [
  {
    title: "Research Paper or Technical Report",
    abstract:
      "Paste an abstract-style summary here. Include the research question, method, core result, and contribution.",
    date: "2026",
    authors: ["Your Name", "Collaborator Name"],
    tags: ["Systems", "Evaluation", "AI"],
    image: "/images/placeholder.svg",
    pdf: "/pdfs/research-placeholder.pdf",
    links: [
      { label: "Project page", url: "https://example.com" },
      { label: "Code", url: "https://github.com/your-handle/research-project" },
    ],
    status: "Preprint",
  },
  {
    title: "Applied Research Note",
    abstract:
      "Use this for research notes, benchmarks, reproducibility work, or technical deep dives pasted from Notion.",
    date: "2025",
    authors: ["Your Name"],
    tags: ["Benchmarking", "Tooling"],
    image: "/images/placeholder.svg",
    pdf: "",
    links: [{ label: "Notes", url: "https://example.com" }],
    status: "Working paper",
  },
];
