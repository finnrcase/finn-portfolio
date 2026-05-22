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
  email: "hello@example.com",
  phone: "",
  location: "City, Country",
  preferredContact: "Email is best for project, research, and collaboration inquiries.",
  intro:
    "Replace this with a short note about what kinds of messages you welcome and the best way to reach you.",
  links: [
    { label: "GitHub", url: "https://github.com/your-handle" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-handle" },
    { label: "Notion", url: "https://notion.so/your-page" },
    { label: "Google Scholar", url: "https://scholar.google.com" },
  ],
};
