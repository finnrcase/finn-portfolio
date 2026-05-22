export type ExperienceLink = {
  label: string;
  url: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  bullets: string[];
  tools: string[];
  links: ExperienceLink[];
  image: string;
};

// Paste LinkedIn role descriptions, resume bullets, company links, and Notion notes here.
// Keep summary to one short paragraph. Use bullets for the accomplishment-style details.
export const experience: ExperienceItem[] = [
  {
    company: "Company Name",
    role: "Role Title",
    location: "City, Country",
    startDate: "2024",
    endDate: "Present",
    summary:
      "Paste a concise role summary here. Focus on scope, systems, teams, and business or research impact.",
    bullets: [
      "Paste a LinkedIn or resume bullet about a system, product, or workflow you owned.",
      "Paste a bullet about technical depth, architecture, performance, reliability, or scale.",
      "Paste a bullet about collaboration, leadership, users, or measurable outcomes.",
    ],
    tools: ["TypeScript", "React", "Postgres", "Vercel"],
    links: [{ label: "Company", url: "https://example.com" }],
    image: "/images/placeholder.svg",
  },
  {
    company: "Previous Company",
    role: "Engineer",
    location: "Remote",
    startDate: "2022",
    endDate: "2024",
    summary:
      "Use this as a second template entry for prior roles, internships, fellowships, or consulting work.",
    bullets: [
      "Owned a clear area of responsibility.",
      "Shipped measurable product or infrastructure improvements.",
    ],
    tools: ["Node.js", "AWS", "Observability"],
    links: [],
    image: "/images/placeholder.svg",
  },
];
