"use client";

import { Suspense, useEffect, useState } from "react";

import { GitHubCalendar } from "react-github-calendar";

const lightTheme = {
  light: ["#f1efe5", "#d7f0e3", "#a8e4c3", "#79d7a0", "#4ab580"],
  dark: ["#0c2120", "#0a3f35", "#0a5a46", "#0d7a5c", "#1a9d6f"],
};

function GitHubCalendarContent() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.getAttribute("data-theme") === "dark";
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setIsDark(
            document.documentElement.getAttribute("data-theme") === "dark",
          );
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-340 px-5 py-12 sm:px-8 lg:px-12 lg:py-18 xl:px-16 border-t border-(--border-subtle)">
      <div className="mb-9 max-w-3xl">
        <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.16em] text-(--color-accent)">
          Activity
        </p>
        <h2 className="font-(family-name:--font-nunito) font-extrabold leading-[0.98] tracking-normal text-[clamp(1.35rem,1.65vw,1.85rem)]">
          GitHub contributions this year.
        </h2>
      </div>

      <div suppressHydrationWarning>
        {mounted ? (
          <Suspense
            fallback={
              <div className="h-32 bg-(--color-field) rounded-lg animate-pulse" />
            }
          >
            <GitHubCalendar
              username="MehfoozurRehman"
              colorScheme={isDark ? "dark" : "light"}
              theme={{
                light: lightTheme.light,
                dark: lightTheme.dark,
              }}
              blockRadius={5}
              fontSize={14}
              year={new Date().getFullYear()}
              style={{
                color: "white",
                margin: "0 2em",
                marginBottom: "3em",
                marginTop: "-3em",
                padding: "2em",
              }}
              blockSize={18}
            />
          </Suspense>
        ) : (
          <div className="h-32 bg-(--color-field) rounded-lg animate-pulse" />
        )}
      </div>
    </section>
  );
}

export function GitHubCalendarSection() {
  return (
    <Suspense fallback={<div />}>
      <GitHubCalendarContent />
    </Suspense>
  );
}
