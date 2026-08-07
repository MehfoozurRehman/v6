"use client";

import { Moon, Sun } from "lucide-react";

import { useEffect } from "react";

type Theme = "dark" | "light";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getCurrentTheme(): Theme {
  if (document.documentElement.dataset.theme === "dark") {
    return "dark";
  }

  return "light";
}

export function ThemeToggle() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if (localStorage.getItem("portfolio-theme")) {
        return;
      }

      const nextTheme = getSystemTheme();
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme;
      document.documentElement.style.backgroundColor =
        nextTheme === "dark" ? "#050507" : "#f1efe5";
    };

    query.addEventListener("change", syncSystemTheme);

    return () => {
      query.removeEventListener("change", syncSystemTheme);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    document.documentElement.style.backgroundColor =
      nextTheme === "dark" ? "#050507" : "#f1efe5";
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      className="inline-grid size-9 place-items-center rounded-full border border-[var(--border-card)] text-[var(--color-text)] transition hover:border-[var(--border-hover)] hover:text-[var(--color-accent)] sm:size-10"
      onClick={toggleTheme}
    >
      <Moon className="theme-toggle-icon-light" size={17} aria-hidden="true" />
      <Sun className="theme-toggle-icon-dark" size={17} aria-hidden="true" />
    </button>
  );
}
