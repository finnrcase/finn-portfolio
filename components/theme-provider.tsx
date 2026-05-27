"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  colorThemeIds,
  DEFAULT_COLOR_THEME,
  DEFAULT_THEME_MODE,
  MODE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  themeModes,
  type ColorThemeId,
  type ResolvedThemeMode,
  type ThemeMode,
} from "@/data/themes";

type ThemeContextValue = {
  colorTheme: ColorThemeId;
  mode: ThemeMode;
  resolvedMode: ResolvedThemeMode;
  setColorTheme: (theme: ColorThemeId) => void;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isColorTheme(value: string | null): value is ColorThemeId {
  return colorThemeIds.includes(value as ColorThemeId);
}

function isThemeMode(value: string | null): value is ThemeMode {
  return themeModes.includes(value as ThemeMode);
}

function getSystemMode(): ResolvedThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function resolveMode(mode: ThemeMode): ResolvedThemeMode {
  return mode === "system" ? getSystemMode() : mode;
}

function applyTheme(colorTheme: ColorThemeId, mode: ThemeMode) {
  const resolvedMode = resolveMode(mode);
  const root = document.documentElement;

  root.dataset.theme = colorTheme;
  root.dataset.mode = resolvedMode;
  root.dataset.modeSetting = mode;
  root.style.colorScheme = resolvedMode;
}

function readStoredTheme() {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  const storedMode = window.localStorage.getItem(MODE_STORAGE_KEY);

  return {
    colorTheme: isColorTheme(storedTheme) ? storedTheme : DEFAULT_COLOR_THEME,
    mode: isThemeMode(storedMode) ? storedMode : DEFAULT_THEME_MODE,
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorThemeState] =
    useState<ColorThemeId>(DEFAULT_COLOR_THEME);
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_THEME_MODE);
  const [resolvedMode, setResolvedMode] = useState<ResolvedThemeMode>("dark");

  useEffect(() => {
    const readyFrame = window.requestAnimationFrame(() => {
      const stored = readStoredTheme();

      setColorThemeState(stored.colorTheme);
      setModeState(stored.mode);
      setResolvedMode(resolveMode(stored.mode));
      applyTheme(stored.colorTheme, stored.mode);
      document.documentElement.classList.add("theme-ready");
    });

    return () => window.cancelAnimationFrame(readyFrame);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");

    const handleMediaChange = () => {
      if (mode === "system") {
        const nextResolvedMode = getSystemMode();
        setResolvedMode(nextResolvedMode);
        applyTheme(colorTheme, mode);
      }
    };

    media.addEventListener("change", handleMediaChange);
    return () => media.removeEventListener("change", handleMediaChange);
  }, [colorTheme, mode]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key !== THEME_STORAGE_KEY &&
        event.key !== MODE_STORAGE_KEY
      ) {
        return;
      }

      const stored = readStoredTheme();
      setColorThemeState(stored.colorTheme);
      setModeState(stored.mode);
      setResolvedMode(resolveMode(stored.mode));
      applyTheme(stored.colorTheme, stored.mode);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const setColorTheme = useCallback(
    (nextTheme: ColorThemeId) => {
      setColorThemeState(nextTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      setResolvedMode(resolveMode(mode));
      applyTheme(nextTheme, mode);
    },
    [mode],
  );

  const setMode = useCallback(
    (nextMode: ThemeMode) => {
      setModeState(nextMode);
      window.localStorage.setItem(MODE_STORAGE_KEY, nextMode);
      setResolvedMode(resolveMode(nextMode));
      applyTheme(colorTheme, nextMode);
    },
    [colorTheme],
  );

  const value = useMemo(
    () => ({
      colorTheme,
      mode,
      resolvedMode,
      setColorTheme,
      setMode,
    }),
    [colorTheme, mode, resolvedMode, setColorTheme, setMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return value;
}
