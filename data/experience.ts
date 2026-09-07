import { kelvoltaPublicExperience } from "./kelvolta.ts";

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
  summary?: string;
  bullets: readonly string[];
  tools: readonly string[];
  links: readonly ExperienceLink[];
  image?: string;
};

// Paste LinkedIn role descriptions, resume bullets, company links, and Notion notes here.
// Keep summary to one short paragraph. Use bullets for the accomplishment-style details.
export const experience: ExperienceItem[] = [
  kelvoltaPublicExperience,
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
    image: "/images/RMR.png",
  },
  {
    company: "Kaiizen Foundation",
    role: "Platform Developer & Economic Strategy Lead",
    location: "Economic Empowerment",
    startDate: "Nov 2025",
    endDate: "Present",
    summary:
      "Lead economic strategy, program development, and analytics platform work for the Male Mentorship Project, focused on improving economic mobility for young men in low-opportunity communities.",
    bullets: [
      "Lead economic research and labor market analysis to design mentorship frameworks aimed at improving economic mobility for young men in low-opportunity communities.",
      "Develop data-driven program curriculum incorporating education attainment data, NEET statistics, and earnings trajectory modeling to guide career pathway decisions.",
      "Design structured decision frameworks to help participants evaluate skill acquisition, internship targeting, and long-term income optimization strategies.",
      "Build the analytics platform, a data system designed to track participant engagement, mentorship outcomes, and behavioral progress over time.",
      "Develop analytical dashboards and cohort analysis tools to measure program effectiveness, retention, and long-term economic outcomes.",
      "Apply quantitative analysis and economic modeling to inform program design, resource allocation, and strategic expansion.",
    ],
    tools: [
      "Economic Strategy",
      "Labor Market Analysis",
      "Program Development",
      "Analytics Platforms",
      "Cohort Analysis",
      "Economic Modeling",
    ],
    links: [{ label: "App repository", url: "https://github.com/finnrcase/bloke-app" }],
    image: "/images/kaiizen.png",
  },
  {
    company: "Malibu Delivery Service LLC",
    role: "Business Owner",
    location: "Malibu, California, United States · Hybrid",
    startDate: "Feb 2024",
    endDate: "Present",
    summary:
      "Owner and operator of Malibu Delivery, a local delivery business spanning operations, strategy, financial management, hiring, KPI tracking, and daily execution.",
    bullets: [
      "Built and operated a local delivery business generating approximately $100K in annual revenue in 2025.",
      "Hired and managed a team of 5 employees, including 2 full-time and 3 part-time team members.",
      "Tracked and analyzed key business KPIs including revenue growth, customer acquisition, order volume, and unit economics to inform decision-making.",
      "Managed budgeting, cost structure, and cash flow, balancing growth with profitability and operational constraints.",
      "Built the company website and managed LLC formation, finances, and daily operations.",
    ],
    tools: [
      "Operations",
      "Strategy",
      "Financial Management",
      "KPI Tracking",
      "Budgeting",
      "Team Management",
    ],
    links: [{ label: "Website", url: "https://budelivery.com/" }],
    image: "/images/malibudelivery.jpg",
  },
];
