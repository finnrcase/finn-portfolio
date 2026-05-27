import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader, PageShell } from "@/components/page-shell";
import { ThemeSettings } from "@/components/theme-settings";

export const metadata: Metadata = {
  title: "Settings",
  description: "Appearance settings for Finn Case's portfolio.",
};

export default function SettingsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Settings"
        title="Appearance"
        description="Soft, focused palettes for reading, scanning, and working across the portfolio."
      />
      <Container>
        <section className="section-reveal py-12">
          <ThemeSettings />
        </section>
      </Container>
    </PageShell>
  );
}
