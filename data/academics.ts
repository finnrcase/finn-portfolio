export type AcademicEntry = {
  university: string;
  abbreviation: string;
  degree: string;
  startDate: string;
  endDate: string;
  focus?: string;
  courseworkLabel: string;
  coursework: string[];
  activities?: {
    title: string;
    description?: string;
    href?: string;
  }[];
};

export const academics: AcademicEntry[] = [
  {
    university: "University of California, Los Angeles",
    abbreviation: "UCLA",
    degree: "Master of Quantitative Economics (MQE)",
    startDate: "September 2026",
    endDate: "June 2027",
    focus: "Data Analytics Focus",
    courseworkLabel: "Relevant coursework",
    coursework: [
      "Applied Statistics and Econometrics with R & Python",
      "Machine Learning",
      "SQL and Data Management",
      "Principles of Big Data Management Systems",
    ],
  },
  {
    university: "University of California, Santa Barbara",
    abbreviation: "UCSB",
    degree: "Bachelor’s Degree, Economics",
    startDate: "September 2024",
    endDate: "June 2026",
    courseworkLabel: "Selected coursework",
    coursework: [
      "Econometrics",
      "Statistical Programming (R)",
      "Financial Economics",
      "Game Theory",
    ],
    activities: [
      {
        title: "Undergraduate Teaching Assistant — Game Theory",
        description:
          "Guided students through problem sets and project work, held office hours to clarify theoretical concepts, and reviewed exams and projects, emphasizing formal modeling and quantitative reasoning.",
      },
      {
        title: "Economics Research — AI Infrastructure & Energy Policy",
        href: "/projects/ai-data-center-emissions-policy-model",
      },
      { title: "Economics Mentor" },
    ],
  },
];
