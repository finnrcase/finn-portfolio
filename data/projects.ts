export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectPdf = {
  label: string;
  path: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  longDescription: string;
  image: string;
  tags: string[];
  date: string;
  featured: boolean;
  links: ProjectLink[];
  pdfs: ProjectPdf[];
  bullets: string[];
  metrics: ProjectMetric[];
};

// Paste project entries from LinkedIn, Notion, GitHub READMEs, case studies, or resume bullets here.
// Use summary for a short card description and longDescription for the fuller case-study version.
// Put images in /public/images and PDFs in /public/pdfs, then reference them as /images/placeholder.svg or /pdfs/name.pdf.
export const projects: Project[] = [
  {
    title: "Util",
    slug: "util",
    summary:
      "A compute scheduling and optimization platform for reducing electricity cost and carbon output for flexible workloads.",
    longDescription: `Util is a placeholder project entry for a compute scheduling and optimization platform.

Replace this with a fuller case study covering the workload model, optimization approach, electricity pricing assumptions, carbon intensity data, scheduling constraints, and measured outcomes.`,
    image: "/images/placeholder.svg",
    tags: ["Optimization", "Energy Systems", "Compute Scheduling"],
    date: "2026",
    featured: true,
    links: [
      { label: "Demo", url: "https://example.com/util" },
      { label: "GitHub", url: "https://github.com/your-handle/util" },
    ],
    pdfs: [{ label: "Case study", path: "/pdfs/util-case-study.pdf" }],
    bullets: [
      "Models flexible compute workloads against electricity price and carbon intensity signals.",
      "Optimizes scheduling decisions across cost, emissions, latency, and workload constraints.",
      "Designed as a decision-support layer for energy-aware AI and batch compute operations.",
    ],
    metrics: [
      { label: "Cost model", value: "Placeholder" },
      { label: "Carbon model", value: "Placeholder" },
    ],
  },
  {
    title: "AI Infrastructure Electricity Demand Research",
    slug: "ai-infrastructure-electricity-demand-research",
    summary:
      "A quantitative research project modeling AI data center electricity demand, carbon intensity, and policy tradeoffs.",
    longDescription: `This placeholder entry represents a quantitative research project on AI infrastructure electricity demand.

Replace this with the modeling framework, assumptions, scenario design, carbon accounting approach, policy tradeoff analysis, and key findings.`,
    image: "/images/placeholder.svg",
    tags: ["AI Infrastructure", "Energy Demand", "Policy Modeling"],
    date: "2026",
    featured: true,
    links: [
      { label: "Research page", url: "https://example.com/ai-demand-research" },
      {
        label: "Repository",
        url: "https://github.com/your-handle/ai-demand-research",
      },
    ],
    pdfs: [
      {
        label: "Research brief",
        path: "/pdfs/ai-infrastructure-electricity-demand.pdf",
      },
    ],
    bullets: [
      "Estimates data center electricity demand under multiple AI infrastructure growth scenarios.",
      "Connects load growth to grid carbon intensity, regional energy mix, and utilization patterns.",
      "Evaluates policy tradeoffs across reliability, emissions, cost, and infrastructure expansion.",
    ],
    metrics: [
      { label: "Scenarios", value: "Placeholder" },
      { label: "Regions", value: "Placeholder" },
    ],
  },
  {
    title: "Asset Intelligence Workbench",
    slug: "asset-intelligence-workbench",
    summary:
      "A SQL-driven financial analysis and decision-support platform integrating market data, sentiment signals, Monte Carlo simulations, and risk analysis.",
    longDescription: `Asset Intelligence Workbench is a placeholder entry for a financial analysis and decision-support platform.

Replace this with details about the data model, SQL workflows, market data integrations, sentiment pipeline, simulation methods, risk analytics, and decision-support interface.`,
    image: "/images/placeholder.svg",
    tags: ["Financial Modeling", "SQL", "Monte Carlo"],
    date: "2026",
    featured: true,
    links: [
      { label: "Demo", url: "https://example.com/asset-intelligence" },
      {
        label: "GitHub",
        url: "https://github.com/your-handle/asset-intelligence-workbench",
      },
    ],
    pdfs: [
      {
        label: "System overview",
        path: "/pdfs/asset-intelligence-workbench.pdf",
      },
    ],
    bullets: [
      "Integrates market data, sentiment signals, and risk analytics into SQL-driven workflows.",
      "Uses Monte Carlo simulations to evaluate uncertainty, downside risk, and scenario outcomes.",
      "Supports investment research and quantitative decision-making through repeatable analysis tools.",
    ],
    metrics: [
      { label: "Data sources", value: "Placeholder" },
      { label: "Simulations", value: "Placeholder" },
    ],
  },
  {
    title: "Financial Risk Engine",
    slug: "financial-risk-engine",
    summary:
      "A Python-based portfolio simulation platform for modeling volatility, downside risk, tail exposure, and stress scenarios.",
    longDescription: `Financial Risk Engine is a placeholder entry for a Python-based portfolio risk simulation platform.

Replace this with details about the portfolio model, return assumptions, volatility estimation, drawdown analysis, tail-risk methods, and stress-test scenarios.`,
    image: "/images/placeholder.svg",
    tags: ["Python", "Risk Analysis", "Portfolio Simulation"],
    date: "2026",
    featured: true,
    links: [
      { label: "Demo", url: "https://example.com/financial-risk-engine" },
      {
        label: "GitHub",
        url: "https://github.com/your-handle/financial-risk-engine",
      },
    ],
    pdfs: [
      { label: "Technical note", path: "/pdfs/financial-risk-engine.pdf" },
    ],
    bullets: [
      "Models portfolio volatility, drawdowns, downside risk, and tail exposure.",
      "Runs stress scenarios and simulations to evaluate sensitivity under market shocks.",
      "Designed for reproducible quantitative risk analysis and portfolio decision support.",
    ],
    metrics: [
      { label: "Risk metrics", value: "Placeholder" },
      { label: "Scenarios", value: "Placeholder" },
    ],
  },
];
