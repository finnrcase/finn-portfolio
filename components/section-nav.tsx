"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SectionNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={`section-nav flex gap-2 overflow-x-auto rounded-lg border border-line bg-panel p-2 ${className}`}
      aria-label="Primary sections"
    >
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`section-nav-link ${isActive ? "is-active" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
