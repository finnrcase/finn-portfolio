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
    company: "RMR Wealth Builders, Inc.",
    role: "Financial Service Intern",
    location: "Montclair, New Jersey, United States · Hybrid",
    startDate: "Jun 2025",
    endDate: "Present",
    summary:
      "Full-time financial services internship supporting portfolio operations, trading workflows, financial data integrity, billing operations, and advisor decision-making in a regulated wealth management environment.",
    bullets: [
      "Supported portfolio management and trading operations by assisting in account rebalancing workflows, asset allocation adjustments, and performance tracking across client portfolios.",
      "Worked with large financial datasets across Schwab, Fidelity Wealthscape, Black Diamond, and Salesforce to maintain data integrity, reconcile accounts, and ensure accurate reporting.",
      "Contributed to billing and revenue operations, helping manage fee schedules, account classifications, and operational processes tied to AUM-based pricing.",
      "Assisted in portfolio construction research, analyzing diversification strategies, asset class behavior, and risk considerations to support advisor decision-making.",
      "Collaborated cross-functionally with advisors and operations teams to improve workflow efficiency and reduce manual processing bottlenecks.",
      "Worked in person over the summer and remotely while at university.",
      "Series 65 licensed; operate in a regulated environment supporting client portfolio execution under supervision.",
    ],
    tools: [
      "Schwab",
      "Fidelity Wealthscape",
      "Black Diamond",
      "Salesforce",
      "Portfolio Management",
      "Trading Operations",
      "Data Reconciliation",
      "Series 65",
    ],
    links: [],
    image: "/images/rmr-wealth.svg",
  },
];
