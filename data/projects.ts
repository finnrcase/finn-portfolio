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
    image: "/images/utildemo.png",
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
    image: "/images/researchgraph.png",
    tags: ["AI Infrastructure", "Energy Demand", "Policy Modeling"],
    date: "2026",
    featured: false,
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
    image: "/images/aiingestionpic.png",
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
    title: "Solar Reach",
    slug: "solar-reach",
    summary:
      "Placeholder project entry for Solar Reach. Replace this summary with the final project description, links, and image when ready.",
    longDescription: `Solar Reach is a placeholder project entry.

Replace this text with the full Solar Reach case study, including the problem, technical approach, system design, data sources, outcomes, and links.`,
    image: "/images/solarai.png",
    tags: ["Energy", "Decision Systems", "Optimization"],
    date: "2026",
    featured: true,
    links: [],
    pdfs: [],
    bullets: [
      "Replace this bullet with the first Solar Reach accomplishment.",
      "Replace this bullet with the technical approach or system design.",
      "Replace this bullet with measurable outcomes, users, or project impact.",
    ],
    metrics: [
      { label: "Status", value: "Placeholder" },
      { label: "Focus", value: "Solar systems" },
    ],
  },
  {
    title: "Asset Intelligence Workbench",
    slug: "asset-intelligence-workbench",
    summary:
      "A SQL-driven financial analysis and decision-support platform integrating market data and external signals for structured financial analysis.",
    longDescription: `Asset Intelligence Workbench is a SQL-based platform for structured financial analysis and decision support.

The system integrates market data and external signals, supports scenario analysis and sentiment integration, and outputs multi-page reports with risk metrics, simulations, and decision-ready insights.`,
    image: "/images/AssetIntelligenceWorkbench.png",
    tags: ["Financial Modeling", "SQL", "Decision Support"],
    date: "2026",
    featured: false,
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
      "A Python-based platform for modeling portfolio risk, return distributions, downside exposure, Monte Carlo simulations, and stress scenarios.",
    longDescription: `Financial Risk Engine is a Python-based portfolio simulation platform for modeling portfolio risk, return distributions, downside exposure, and stress scenarios.

The platform implements Monte Carlo simulation and stress testing to support risk-aware capital allocation decisions. It provides a dashboard for portfolio setup, correlation assumptions, risk attribution, scenario comparison, and optimization.`,
    image: "/images/financial%20risk%20engine.png",
    tags: ["Python", "Monte Carlo", "Portfolio Risk"],
    date: "2026",
    featured: false,
    links: [
      {
        label: "Live App",
        url: "https://financial-risk-engine-lrmaf4egwyhpoyrw7ivtmw.streamlit.app/",
      },
    ],
    pdfs: [],
    bullets: [
      "Developed a Python-based platform for modeling portfolio risk, return distributions, and downside exposure.",
      "Implemented Monte Carlo simulation and stress testing.",
      "Designed to support risk-aware capital allocation decisions.",
    ],
    metrics: [
      { label: "Simulation method", value: "Monte Carlo" },
      { label: "Decision focus", value: "Capital allocation" },
    ],
  },
  {
    title: "PerformanceOS",
    slug: "performanceos",
    summary:
      "An adaptive performance analytics and recommendation engine integrating biometric, nutrition, recovery, sleep, and training data.",
    longDescription: `PerformanceOS is a multi-source performance analytics and recommendation engine that integrates biometric, nutrition, recovery, sleep, and training data.

The system dynamically optimizes calorie intake, macro allocation, recovery management, and workout performance. It connects APIs from Hevy, Withings, Fitbit, and Strava into a unified analytics pipeline, then uses adaptive recommendation logic to track bodyweight trends, body composition, sleep quality, training load, recovery metrics, and caloric intake over time.`,
    image: "/images/performanceos-dashboard.svg",
    tags: ["Performance Analytics", "API Integration", "Optimization"],
    date: "2026",
    featured: false,
    links: [],
    pdfs: [],
    bullets: [
      "Integrated APIs from Hevy, Withings, Fitbit, and Strava into a unified analytics pipeline for real-time performance monitoring and trend analysis.",
      "Built adaptive recommendation logic using bodyweight trends, body composition, sleep quality, training load, recovery metrics, and caloric intake data.",
      "Developed data-driven optimization models to improve performance outcomes, recovery efficiency, and lean mass progression while minimizing fatigue and performance decline.",
      "Designed interactive dashboards and longitudinal analytics for monitoring workload balance, macro adjustments, recovery readiness, and training adaptation over time.",
    ],
    metrics: [
      { label: "Data sources", value: "Hevy, Withings, Fitbit, Strava" },
      { label: "Optimization focus", value: "Performance + recovery" },
    ],
  },
];
