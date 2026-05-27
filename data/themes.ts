export const THEME_STORAGE_KEY = "portfolio-theme";
export const MODE_STORAGE_KEY = "portfolio-mode";

export const colorThemes = [
  {
    id: "sage",
    name: "Sage",
    preview: {
      background: "#f4f7f1",
      panel: "#ffffff",
      accent: "#5f765c",
      border: "#d7dfd2",
      chart: "#a8b894",
    },
  },
  {
    id: "plum",
    name: "Plum",
    preview: {
      background: "#f7f2f7",
      panel: "#ffffff",
      accent: "#72546f",
      border: "#dfd0de",
      chart: "#b997b3",
    },
  },
  {
    id: "mustard",
    name: "Mustard",
    preview: {
      background: "#faf6e8",
      panel: "#ffffff",
      accent: "#836625",
      border: "#e6d9b4",
      chart: "#d2b464",
    },
  },
  {
    id: "terracotta",
    name: "Terracotta",
    preview: {
      background: "#fbf2ee",
      panel: "#ffffff",
      accent: "#925c48",
      border: "#e3cbc1",
      chart: "#c98972",
    },
  },
  {
    id: "slate-blue",
    name: "Slate Blue",
    preview: {
      background: "#f2f4f8",
      panel: "#ffffff",
      accent: "#596b8f",
      border: "#cfd7e5",
      chart: "#93a5c4",
    },
  },
  {
    id: "sand",
    name: "Sand",
    preview: {
      background: "#f8f4ea",
      panel: "#fffdf8",
      accent: "#78684e",
      border: "#e1d7c2",
      chart: "#b8a680",
    },
  },
  {
    id: "forest",
    name: "Forest",
    preview: {
      background: "#f1f5f0",
      panel: "#ffffff",
      accent: "#4d684f",
      border: "#cddbcf",
      chart: "#87a383",
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    preview: {
      background: "#eff6f7",
      panel: "#ffffff",
      accent: "#3f7580",
      border: "#c7dfe3",
      chart: "#79adb6",
    },
  },
  {
    id: "clay",
    name: "Clay",
    preview: {
      background: "#f7f1ec",
      panel: "#ffffff",
      accent: "#80614f",
      border: "#dfcec2",
      chart: "#b98f75",
    },
  },
  {
    id: "rosewood",
    name: "Rosewood",
    preview: {
      background: "#f8f1f2",
      panel: "#ffffff",
      accent: "#865760",
      border: "#e1cbd0",
      chart: "#bd8991",
    },
  },
] as const;

export type ColorThemeId = (typeof colorThemes)[number]["id"];
export type ThemeMode = "light" | "dark" | "system";
export type ResolvedThemeMode = Exclude<ThemeMode, "system">;

export const DEFAULT_COLOR_THEME: ColorThemeId = "sage";
export const DEFAULT_THEME_MODE: ThemeMode = "system";

export const colorThemeIds = colorThemes.map((theme) => theme.id);
export const themeModes: ThemeMode[] = ["system", "light", "dark"];
