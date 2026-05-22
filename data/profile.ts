export type Profile = {
  name: string;
  headline: string;
  role: string;
  location: string;
  summary: string;
  bio: string;
  avatar: string;
  resumePdf: string;
  availability: string;
  focusAreas: string[];
};

// Paste your top-level LinkedIn/Notion profile content here.
// Good sources: LinkedIn headline, About section, resume summary, or a short Notion bio.
export const profile: Profile = {
  name: "Finn Case",
  headline: "Quantitative Economics • AI Infrastructure • Systems Optimization",
  role: "Quantitative Economics • AI Infrastructure • Systems Optimization",
  location: "United States",
  summary:
    "I build research and tools at the intersection of AI infrastructure, energy systems, financial modeling, and quantitative decision-making.",
  bio: `I work across quantitative economics, AI infrastructure, systems optimization, and applied research.

My portfolio focuses on technical projects, research, and tools that connect rigorous modeling with practical systems. I am especially interested in infrastructure, energy, financial decision-making, and the analytical workflows that make complex systems easier to understand and improve.`,
  avatar: "/images/profile.jpg",
  resumePdf: "/pdfs/resume.pdf",
  availability: "Open to research, engineering, and quantitative systems work.",
  focusAreas: [
    "AI infrastructure",
    "Energy systems",
    "Financial modeling",
    "Quantitative decision-making",
  ],
};
