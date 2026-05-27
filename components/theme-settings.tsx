"use client";

import type { CSSProperties } from "react";
import { colorThemes, themeModes } from "@/data/themes";
import { useTheme } from "@/components/theme-provider";

const modeLabels = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

export function ThemeSettings() {
  const { colorTheme, mode, resolvedMode, setColorTheme, setMode } = useTheme();

  return (
    <div className="grid gap-8">
      <section className="rounded-lg border border-line bg-panel p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-normal text-foreground">
              Mode
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Current: {resolvedMode}
            </p>
          </div>
          <div className="settings-segmented" aria-label="Display mode">
            {themeModes.map((themeMode) => (
              <button
                key={themeMode}
                type="button"
                className={`settings-mode-button ${
                  mode === themeMode ? "is-active" : ""
                }`}
                aria-pressed={mode === themeMode}
                onClick={() => setMode(themeMode)}
              >
                {modeLabels[themeMode]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-line bg-panel p-5 sm:p-6">
        <div>
          <h2 className="text-xl font-semibold tracking-normal text-foreground">
            Color Theme
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            {colorThemes.find((theme) => theme.id === colorTheme)?.name}
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {colorThemes.map((theme) => (
            <ThemeOption
              key={theme.id}
              theme={theme}
              isActive={colorTheme === theme.id}
              onSelect={() => setColorTheme(theme.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ThemeOption({
  theme,
  isActive,
  onSelect,
}: {
  theme: (typeof colorThemes)[number];
  isActive: boolean;
  onSelect: () => void;
}) {
  const style = {
    "--preview-bg": theme.preview.background,
    "--preview-panel": theme.preview.panel,
    "--preview-accent": theme.preview.accent,
    "--preview-border": theme.preview.border,
    "--preview-chart": theme.preview.chart,
  } as CSSProperties;

  return (
    <button
      type="button"
      className={`theme-option ${isActive ? "is-active" : ""}`}
      aria-pressed={isActive}
      onClick={onSelect}
      style={style}
    >
      <span className="theme-option-preview" aria-hidden="true">
        <span className="theme-preview-topline" />
        <span className="theme-preview-card">
          <span className="theme-preview-copy">
            <span />
            <span />
          </span>
          <span className="theme-preview-button" />
        </span>
        <span className="theme-preview-chart">
          <span />
          <span />
          <span />
        </span>
      </span>
      <span className="flex items-center justify-between gap-3">
        <span>{theme.name}</span>
        <span className="theme-option-dot" aria-hidden="true" />
      </span>
    </button>
  );
}
