export type ContactLink = {
  label: string;
  url: string;
};

export type Contact = {
  email: string;
  phone?: string;
  location: string;
  preferredContact: string;
  intro: string;
  links: ContactLink[];
};

// Paste contact details and external profile URLs here.
// LinkedIn, GitHub, Google Scholar, Notion, Calendly, and personal site links all fit in links.
export const contact: Contact = {
  email: "finnrcase@gmail.com",
  phone: "",
  location: "United States",
  preferredContact: "Email is best for project, research, and collaboration inquiries.",
  intro:
    "Reach out for research, engineering, AI infrastructure, energy systems, financial modeling, or quantitative decision-making work.",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/finn-case-318253355" },
    { label: "GitHub", url: "https://github.com/finnrcase" },
  ],
};
