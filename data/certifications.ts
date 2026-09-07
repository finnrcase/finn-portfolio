export type Certification = {
  name: string;
  issuer: string;
  image: string;
  imageAlt: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    image: "/images/certifications/aws.svg",
    imageAlt: "Amazon Web Services logo",
  },
  {
    name: "FinOps Certified Practitioner",
    issuer: "FinOps Foundation",
    image: "/images/certifications/finops-practitioner.svg",
    imageAlt: "FinOps Certified Practitioner badge",
  },
  {
    name: "Series 65",
    issuer: "North American Securities Administrators Association (NASAA)",
    image: "/images/certifications/nasaa.png",
    imageAlt: "North American Securities Administrators Association logo",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    image: "/images/certifications/claude-code.svg",
    imageAlt: "Claude Code in Action official course artwork",
  },
];
