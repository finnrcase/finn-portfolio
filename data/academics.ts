export type AcademicEntry = {
  university: string;
  abbreviation: string;
  image: string;
  imageAlt: string;
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
    image: "/images/academics/ucla.jpg",
    imageAlt: "Royce Hall on the UCLA campus",
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
    activities: [{ title: "Graduate AI Committee — Member" }],
  },
  {
    university: "University of California, Santa Barbara",
    abbreviation: "UCSB",
    image: "/images/academics/ucsb.jpg",
    imageAlt: "UC Santa Barbara campus and its coastal setting at Campus Point",
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
