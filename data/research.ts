export type ResearchLink = {
  label: string;
  url: string;
};

export type ResearchStatus =
  | "Published"
  | "Preprint"
  | "In review"
  | "Working paper"
  | "In Progress"
  | "Draft";

export type ResearchItem = {
  title: string;
  abstract: string;
  date: string;
  authors: string[];
  category?: string;
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
    title:
      "Power, Compute, and Geography: A Quantitative Framework for AI Infrastructure Competitiveness",
    abstract:
      "Developing a quantitative framework to evaluate AI infrastructure competitiveness across U.S. states using electricity prices, generation capacity, renewable energy, data center ecosystems, behind-the-meter potential, and interconnection constraints. The project combines state-level competitiveness modeling, 10,000 Monte Carlo simulations, and behind-the-meter power economics to analyze how energy markets and grid conditions may influence future AI infrastructure deployment.",
    date: "2026",
    authors: ["Finn Case"],
    category: "Research Project",
    tags: [
      "AI Infrastructure",
      "Energy Economics",
      "Monte Carlo Simulation",
      "Infrastructure Strategy",
      "Capacity Planning",
      "Python",
    ],
    image: "/images/MCAIE.png",
    pdf: "",
    links: [
      {
        label: "Project page",
        url: "/projects/ai-infrastructure-competitiveness",
      },
    ],
    status: "In Progress",
  },
  {
    title:
      "Quantitative Modeling of AI Data Center Emissions Under Alternative Energy Policies",
    abstract:
      "Independent ECON 199 research evaluating how economic policy can mitigate the environmental impact of AI-driven data centers using a formal emissions framework. The work models projected 2028 electricity demand and carbon intensity to estimate baseline emissions and policy-induced abatement, then compares carbon taxes, clean energy subsidies, dynamic pricing, and clean energy mandates under cost-effectiveness and fiscal tradeoff criteria. The Python extension translates the paper into a structured modeling framework with deterministic policy modeling, +/-10% sensitivity analysis, 10,000-draw Monte Carlo simulation, downside-risk evaluation, cost-per-ton volatility metrics, and hybrid policy portfolio comparisons under uncertainty.",
    date: "Sep 2025 - Dec 2025",
    authors: ["Finn Case"],
    tags: [
      "AI Infrastructure",
      "Energy Economics",
      "Carbon Policy",
      "Monte Carlo Simulation",
      "Python",
    ],
    image: "/images/researchgraph.png",
    pdf:
      "https://zenodo.org/records/20320804/files/A%20Quantitative%20Model%20of%20AI%20Data%20Center%20Electricity%20Demand%2C%20Carbon%20Intensity%2C%20and%20Policy%20Tradeoffs%20%281%29.pdf",
    links: [
      { label: "AISRI App", url: "https://aisridata.streamlit.app/" },
      {
        label: "Repository",
        url: "https://github.com/finnrcase/ai-data-center-policy-model",
      },
      { label: "Zenodo", url: "https://zenodo.org/records/20320804" },
      { label: "DOI", url: "https://doi.org/10.5281/zenodo.20320804" },
    ],
    status: "Working paper",
  },
  {
    title:
      "Environmental Health Impact Analysis: Air Quality, Asthma, and the Salton Sea",
    abstract:
      "Led the quantitative analysis for a research project examining whether worsening environmental conditions around California's Salton Sea contributed to elevated pediatric asthma outcomes. Using R, public health datasets, air quality measurements, demographic controls, and econometric methods, the team evaluated asthma emergency department visit rates across counties and assessed potential environmental health impacts. The analysis applied Difference-in-Differences modeling with clustered standard errors, integrated CHHS, EPA Air Quality System, Census, and environmental monitoring data, and identified a persistent pediatric asthma burden in Imperial County, approximately 2.2x higher than Riverside County, while finding no statistically significant post-2018 deterioration after controlling for COVID-era distortions. The project presented policy recommendations on environmental justice, air quality monitoring, and Salton Sea restoration, earning 1st Place in a university research competition and a $500 award.",
    date: "2025",
    authors: ["Finn Case"],
    tags: [
      "R",
      "dplyr",
      "ggplot2",
      "Econometrics",
      "Difference-in-Differences",
      "Statistical Inference",
      "Data Visualization",
      "Public Policy Analysis",
    ],
    image: "/images/annual_pm10_imperial_vs_fresno_2016_2025.png",
    pdf: "/pdfs/salton-sea-project.pdf",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/finnrcase/salton_sea_asthma_project",
      },
    ],
    status: "Published",
  },
];
