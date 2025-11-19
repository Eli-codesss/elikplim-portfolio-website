// components/theme-provider.tsx
"use client";

import { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark" | "system";
type Props = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

const ThemeContext = createContext({
  theme: "system",
  setTheme: (t: Theme) => {},
} as {
  theme: Theme;
  setTheme: (t: Theme) => void;
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
}: Props) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // initialize from localStorage or system
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as Theme | null)
        : null;
    if (stored) setThemeState(stored);
    else if (enableSystem) setThemeState("system");
  }, [enableSystem]);

  useEffect(() => {
    const apply = (t: Theme) => {
      const root = document.documentElement;
      const resolved =
        t === "system"
          ? window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : t;
      if (attribute === "class") {
        if (resolved === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
      } else {
        root.setAttribute(attribute, resolved);
      }
    };

    apply(theme);

    if (typeof window !== "undefined") localStorage.setItem("theme", theme);
  }, [theme, attribute]);

  const setTheme = (t: Theme) => setThemeState(t);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
