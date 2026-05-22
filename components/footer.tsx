import Link from "next/link";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { navItems, siteConfig } from "@/data/site";
import { Container } from "@/components/container";

export function Footer() {
  const github = contact.links.find((link) => link.label === "GitHub")?.url;
  const linkedIn = contact.links.find((link) => link.label === "LinkedIn")?.url;
  const footerLinks = [
    ...(github
      ? [
          {
            label: "GitHub",
            href: github,
            icon: <GitHubIcon />,
          },
        ]
      : []),
    ...(linkedIn
      ? [
          {
            label: "LinkedIn",
            href: linkedIn,
            icon: <LinkedInIcon />,
          },
        ]
      : []),
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      icon: <EmailIcon />,
    },
    {
      label: "Resume",
      href: profile.resumePdf,
      icon: <ResumeIcon />,
    },
  ];

  return (
    <footer className="border-t border-line">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-medium">{siteConfig.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              {siteConfig.role} based in {siteConfig.location}.
            </p>
          </div>
          <div className="grid gap-5 md:justify-items-end">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted md:justify-end">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition duration-200 ease-out hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {footerLinks.map((link) => {
                const opensNewTab =
                  link.href.startsWith("http") || link.label === "Resume";

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="footer-link inline-flex size-9 items-center justify-center rounded-md border border-line bg-panel text-muted"
                    rel={opensNewTab ? "noopener noreferrer" : undefined}
                    target={opensNewTab ? "_blank" : undefined}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.14 2.14 0 0 1 .64-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.87 3.87 0 0 1 1.03-2.69 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.37.84.4 1.8.1 2.65a3.86 3.86 0 0 1 1.03 2.69c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.98H3.95V20h2.99V8.98ZM5.45 4a1.73 1.73 0 1 0 0 3.46 1.73 1.73 0 0 0 0-3.46Zm14.6 9.7c0-3.02-1.61-4.42-3.76-4.42a3.25 3.25 0 0 0-2.94 1.62h-.04V8.98h-2.86V20h2.98v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h2.99l-.2-6.3Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Zm.5.5 6.75 5.25 6.75-5.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.25 3.75h6.5l3 3v13.5h-9.5V3.75Zm6.25 0V7h3.25M9.5 11.25h5M9.5 14.25h5M9.5 17.25h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}
