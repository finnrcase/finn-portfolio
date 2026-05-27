import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";
import {
  colorThemeIds,
  DEFAULT_COLOR_THEME,
  DEFAULT_THEME_MODE,
  MODE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  themeModes,
} from "@/data/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `
(() => {
  try {
    const themes = ${JSON.stringify(colorThemeIds)};
    const modes = ${JSON.stringify(themeModes)};
    const storedTheme = window.localStorage.getItem("${THEME_STORAGE_KEY}");
    const storedMode = window.localStorage.getItem("${MODE_STORAGE_KEY}");
    const colorTheme = themes.includes(storedTheme) ? storedTheme : "${DEFAULT_COLOR_THEME}";
    const mode = modes.includes(storedMode) ? storedMode : "${DEFAULT_THEME_MODE}";
    const resolvedMode = mode === "system"
      ? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
      : mode;
    const root = document.documentElement;
    root.dataset.theme = colorTheme;
    root.dataset.mode = resolvedMode;
    root.dataset.modeSetting = mode;
    root.style.colorScheme = resolvedMode;
  } catch {
    document.documentElement.dataset.theme = "${DEFAULT_COLOR_THEME}";
    document.documentElement.dataset.mode = "dark";
    document.documentElement.dataset.modeSetting = "${DEFAULT_THEME_MODE}";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://finncase.com",
  ),
  title: {
    default: `${profile.name} | Quantitative Economics and AI Infrastructure`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Finn Case",
    "quantitative economics",
    "AI infrastructure",
    "systems optimization",
    "energy systems",
    "financial modeling",
  ],
  openGraph: {
    title: `${profile.name} | Quantitative Economics and AI Infrastructure`,
    description: profile.summary,
    type: "website",
    locale: "en_US",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Quantitative Economics and AI Infrastructure`,
    description: profile.summary,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
