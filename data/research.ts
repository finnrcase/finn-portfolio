export type ResearchLink = {
  label: string;
  url: string;
};

export type ResearchStatus =
  | "Published"
  | "Preprint"
  | "In review"
  | "Working paper"
  | "Draft";

export type ResearchItem = {
  title: string;
  abstract: string;
  date: string;
  authors: string[];
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
    image: "/images/researchgraph.jpg",
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
];
