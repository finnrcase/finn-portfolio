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
    longDescription: `Util is a compute scheduling and optimization platform for reducing electricity cost and carbon output for flexible workloads.

The platform models tradeoffs between cost, performance, location access, deployment timing, energy pricing, carbon emissions, and infrastructure constraints. It is designed as a real-world decision support tool for compute-intensive systems, using APIs and machine learning to forecast non-public price and emissions data.`,
    image: "/images/util-dashboard.svg",
    tags: ["AI Infrastructure", "Energy Optimization", "Compute Scheduling"],
    date: "2026",
    featured: true,
    links: [
      {
        label: "Demo Video",
        url: "https://www.youtube.com/watch?v=LmOemcXx5ww",
      },
      { label: "Download", url: "https://utilcompute.com/" },
      { label: "Live Demo", url: "https://util-ten-delta.vercel.app/" },
    ],
    pdfs: [],
    bullets: [
      "Leading development of a platform to optimize compute deployment across energy pricing, carbon emissions, and infrastructure constraints.",
      "Models tradeoffs between cost, performance, location access, and deployment timing.",
      "Designed as a real-world decision support tool for compute-intensive systems.",
      "Uses APIs and machine learning to forecast non-public price and emissions data.",
    ],
    metrics: [
      { label: "Optimization target", value: "Cost + carbon" },
      { label: "Forecasting", value: "ML + APIs" },
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
    title: "AI DesignOps Automation Platform",
    slug: "ai-designops-automation-platform",
    summary:
      "An end-to-end DesignOps automation system that replaces manual product data entry and vendor follow-ups with AI-driven workflows.",
    longDescription: `AI DesignOps Automation Platform is an end-to-end automation system built for a local business to replace manual product data entry and vendor follow-ups.

The system ingests product data from PDFs, URLs, and receipts, extracts structured fields, and identifies missing information such as dimensions or pricing. When product data is incomplete, an AI voice agent automatically calls vendors to retrieve missing details in real time.`,
    image: "/images/placeholder.svg",
    tags: ["AI Automation", "Data Ingestion", "Voice Agents"],
    date: "2026",
    featured: true,
    links: [
      {
        label: "Call Demo",
        url: "https://youtu.be/DjBYYnt-ncA?si=3p6mUhBV0Pb-3Fh3",
      },
    ],
    pdfs: [],
    bullets: [
      "Built an end-to-end DesignOps automation system for product data ingestion and vendor follow-up workflows.",
      "Ingests product data from PDFs, URLs, and receipts, then extracts structured fields for downstream use.",
      "Identifies missing product information such as dimensions, pricing, or vendor-specific details.",
      "Uses an AI voice agent to call vendors and retrieve incomplete data in real time.",
    ],
    metrics: [
      { label: "Input sources", value: "PDFs, URLs, receipts" },
      { label: "Automation layer", value: "AI voice calls" },
    ],
  },
  {
    title: "Asset Intelligence Workbench",
    slug: "asset-intelligence-workbench",
    summary:
      "A SQL-driven financial analysis and decision-support platform integrating market data and external signals for structured financial analysis.",
    longDescription: `Asset Intelligence Workbench is a SQL-based platform for structured financial analysis and decision support.

The system integrates market data and external signals, supports scenario analysis and sentiment integration, and outputs multi-page reports with risk metrics, simulations, and decision-ready insights.`,
    image: "/images/asset-intelligence-briefing.svg",
    tags: ["Financial Modeling", "SQL", "Decision Support"],
    date: "2026",
    featured: true,
    links: [
      {
        label: "Live App",
        url: "https://asset-intelligence-workbench-eq2zbxelprxwjnnxendyqp.streamlit.app/",
      },
    ],
    pdfs: [],
    bullets: [
      "Built a SQL-driven system integrating market data and external signals for structured financial analysis.",
      "Designed pipelines for scenario analysis, sentiment integration, and decision support.",
      "Outputs multi-page reports with risk metrics, simulations, and insights.",
    ],
    metrics: [
      { label: "Records", value: "252 sample rows" },
      { label: "Outputs", value: "Multi-page reports" },
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
