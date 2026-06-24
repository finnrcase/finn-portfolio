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

export type ProjectDetailSection = {
  title: string;
  body: string;
  bullets?: string[];
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
  metadata?: ProjectMetric[];
  detailSections?: ProjectDetailSection[];
};

// Paste project entries from LinkedIn, Notion, GitHub READMEs, case studies, or resume bullets here.
// Use summary for a short card description and longDescription for the fuller case-study version.
// Put images in /public/images and PDFs in /public/pdfs, then reference them as /images/placeholder.svg or /pdfs/name.pdf.
export const projects: Project[] = [
  {
    title:
      "Power, Compute, and Geography: A Quantitative Framework for AI Infrastructure Competitiveness",
    slug: "ai-infrastructure-competitiveness",
    summary:
      "Developing a quantitative framework to evaluate AI infrastructure competitiveness across U.S. states using electricity prices, generation capacity, renewable energy, data center ecosystems, behind-the-meter potential, and interconnection constraints.",
    longDescription: `This research project investigates how electricity markets, power constraints, and infrastructure characteristics influence the competitiveness of U.S. states for future AI infrastructure deployment.

The goal is to develop a strategy-oriented framework that combines infrastructure economics, energy systems, and quantitative modeling to better understand where and how future AI infrastructure may be deployed.`,
    image: "/images/MCAIE.png",
    tags: [
      "AI Infrastructure",
      "Energy Economics",
      "Monte Carlo Simulation",
      "Infrastructure Strategy",
      "Capacity Planning",
      "Python",
    ],
    date: "2026",
    featured: true,
    links: [
      {
        label: "View Paper",
        url: "/pdfs/power-compute-geography-ai-infrastructure-competitiveness.pdf",
      },
      {
        label: "GitHub",
        url: "https://github.com/finnrcase/ai-infrastructure-economics",
      },
    ],
    pdfs: [
      {
        label: "Download Paper",
        path: "/pdfs/power-compute-geography-ai-infrastructure-competitiveness.pdf",
      },
    ],
    bullets: [],
    metrics: [
      { label: "Status", value: "In Progress" },
      { label: "Simulations", value: "10,000" },
    ],
    metadata: [
      { label: "Category", value: "Research Project" },
      { label: "Timeline", value: "2026" },
      { label: "Role", value: "Independent Researcher" },
      { label: "Tools", value: "Python, Pandas, NumPy, Matplotlib" },
      {
        label: "Focus Areas",
        value:
          "Infrastructure Economics, Energy Markets, Capacity Planning, AI Infrastructure, Monte Carlo Simulation",
      },
    ],
    detailSections: [
      {
        title: "Research Question",
        body:
          "How do electricity markets, generation capacity, renewable energy availability, data center ecosystems, behind-the-meter potential, and interconnection constraints shape state-level competitiveness for future AI infrastructure deployment?",
      },
      {
        title: "Methodology",
        body:
          "The project combines state-level competitiveness modeling, Monte Carlo robustness analysis, and behind-the-meter infrastructure economics.",
        bullets: [
          "Regional Competitiveness Framework: evaluates states using electricity prices, grid capacity, renewable penetration, data center ecosystems, behind-the-meter potential, and interconnection friction.",
          "Monte Carlo Robustness Analysis: uses 10,000 simulations with randomized weighting assumptions to identify which states remain competitive across a wide range of possible infrastructure priorities.",
          "Behind-the-Meter Infrastructure Economics: compares grid power, natural gas generation, solar generation, and hybrid power architectures to evaluate the lowest-cost energy strategies for large-scale AI infrastructure.",
        ],
      },
      {
        title: "Key Findings",
        body:
          "Initial findings focus on the interaction between low-cost power, grid availability, renewable generation, existing data center ecosystems, and deployment friction. The framework is designed to identify states that remain competitive even when infrastructure priorities shift across cost, capacity, reliability, and sustainability assumptions.",
      },
      {
        title: "Visualizations",
        body:
          "The featured visualization maps state competitiveness strength against robustness across the Monte Carlo simulation set, highlighting how median competitiveness and score volatility differ across leading states.",
      },
      {
        title: "Future Work",
        body:
          "Future work will refine data sources, expand the state-level scoring model, incorporate additional interconnection and power procurement constraints, and translate the framework into a clearer decision tool for AI infrastructure strategy.",
      },
    ],
  },
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
    title: "SolarReach - Sales Automation",
    slug: "solar-reach",
    summary:
      "An AI-powered solar prospecting pipeline that identifies homes, estimates energy costs and solar savings, generates personalized outreach, and routes qualified leads to local providers.",
    longDescription: `Built an AI-powered solar prospecting pipeline that identifies homes from ZIP codes, estimates energy costs and solar savings using live utility data, generates personalized outreach with 3D solar home renders, and routes qualified leads to local solar providers for referral commissions.`,
    image: "/images/solarai.png",
    tags: ["Solar Sales", "AI Automation", "Lead Qualification"],
    date: "2026",
    featured: true,
    links: [],
    pdfs: [],
    bullets: [
      "Automated property identification and energy-cost prediction pipeline.",
      "Integrated utility and energy APIs for solar savings estimation.",
      "Generated AI-written outreach and Blender-based 3D solar visualizations for individual clients.",
      "Built automated lead qualification and referral routing system for solar sales partners.",
    ],
    metrics: [
      { label: "Pipeline", value: "ZIP to qualified lead" },
      { label: "Output", value: "AI outreach + 3D renders" },
    ],
  },
  {
    title: "AISRI - AI Sustainability & Resource Intelligence",
    slug: "aisri-ai-sustainability-resource-intelligence",
    summary:
      "An ESG intelligence platform for evaluating clean energy adoption, infrastructure efficiency, and projected energy demand growth across AI-related companies.",
    longDescription: `AISRI is an ESG intelligence platform that parses sustainability reports and infrastructure disclosures from AI-related companies to evaluate clean energy adoption, infrastructure efficiency, and projected energy demand growth.

The platform uses a scoring framework that measures sustainability performance, confidence levels, data quality, and forward-looking clean energy requirements tied to AI infrastructure expansion. It supports comparative analysis of how responsibly companies are scaling compute-intensive operations and informs research on AI infrastructure economics, energy systems, and long-term power demand forecasting.`,
    image: "/images/aisri.png",
    tags: [
      "Python",
      "Streamlit",
      "ESG/NLP Parsing",
      "Scoring Models",
      "Sustainability Analysis",
    ],
    date: "2026",
    featured: true,
    links: [{ label: "Live App", url: "https://aisridata.streamlit.app/" }],
    pdfs: [],
    bullets: [
      "Built an ESG intelligence platform that parses sustainability reports and infrastructure disclosures from AI-related companies.",
      "Evaluates clean energy adoption, infrastructure efficiency, and projected energy demand growth.",
      "Developed a scoring framework for sustainability performance, confidence levels, data quality, and forward-looking clean energy needs.",
      "Supports comparative analysis of responsible scaling for compute-intensive operations.",
    ],
    metrics: [
      { label: "Analysis focus", value: "AI ESG" },
      { label: "Framework", value: "Scoring models" },
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
      "A multi-source adaptive performance optimization platform for real-time recovery, fueling, and workload recommendations.",
    longDescription: `PerformanceOS is a multi-source adaptive performance optimization platform that ingests and analyzes longitudinal biometric, nutrition, recovery, sleep, and training telemetry data to generate real-time recovery, fueling, and workload recommendations.

The system integrates APIs from Hevy, Strava, Fitbit, and Withings into a unified analytics pipeline, normalizes heterogeneous health/performance data streams, and applies adaptive recommendation logic to optimize recovery readiness, calorie allocation, macro timing, training stress, and body composition trends over time.`,
    image: "/images/performanceos-dashboard.svg",
    tags: ["Performance Analytics", "API Integration", "Optimization"],
    date: "2026",
    featured: false,
    links: [],
    pdfs: [],
    bullets: [
      "Built a multi-source telemetry ingestion and normalization pipeline integrating Hevy, Strava, Fitbit, and Withings APIs into a unified performance analytics system.",
      "Developed adaptive optimization engines for calorie adjustment, recovery management, training readiness, workload balancing, and macro timing using longitudinal trend analysis across bodyweight, recovery, sleep, activity, and training-load signals.",
      "Designed real-time recommendation systems for fatigue management, fueling optimization, deload detection, and recoverable training capacity estimation.",
      "Engineered longitudinal analytics infrastructure for tracking workload progression, recovery degradation, macro adherence, body composition trends, and performance adaptation over time.",
      "Implemented storage-efficient historical data aggregation, rolling-window analytics, and derived metric generation for scalable long-term telemetry analysis.",
      "Built interactive operational dashboards for monitoring recovery status, workload distribution, training quality, recovery-risk signals, and adaptive performance recommendations.",
    ],
    metrics: [
      { label: "Data sources", value: "Hevy, Strava, Fitbit, Withings" },
      { label: "Optimization focus", value: "Recovery, fueling, workload" },
    ],
  },
];
