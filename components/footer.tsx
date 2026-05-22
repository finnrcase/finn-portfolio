import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { Container } from "@/components/container";

export function Footer() {
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
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted md:justify-end">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
