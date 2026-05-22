import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  role: profile.role,
  location: profile.location,
  email: contact.email,
  summary: profile.summary,
  availability: profile.availability,
  socials: contact.links.map((link) => ({ label: link.label, href: link.url })),
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];
