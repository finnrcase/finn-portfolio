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
  skills: {
    category: string;
    items: string[];
  }[];
};

// Paste your top-level LinkedIn/Notion profile content here.
// Good sources: LinkedIn headline, About section, resume summary, or a short Notion bio.
export const profile: Profile = {
  name: "Finn Case",
  headline: "Quantitive Economics UCLA MQE | Economics UCSB",
  role: "Quantitative Economics • AI Infrastructure • Systems Optimization",
  location: "United States",
  summary:
    "Building optimization systems and quantitative research tools at the intersection of AI infrastructure, energy markets, and decision-making under uncertainty.",
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
  // Paste skill groups from your resume, LinkedIn, or Notion here.
  // Keep categories short, then add/remove items as your toolkit changes.
  skills: [
    {
      category: "Technical",
      items: ["Python", "SQL", "Excel", "Data Analysis", "Relational Databases"],
    },
    {
      category: "Analytical",
      items: [
        "Monte Carlo Simulation",
        "Risk Modeling",
        "Scenario Analysis",
        "Forecasting",
      ],
    },
    {
      category: "Systems",
      items: [
        "Workflow Design",
        "Process Optimization",
        "Decision Systems",
        "Automation",
      ],
    },
  ],
};
