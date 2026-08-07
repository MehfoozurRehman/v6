import "./globals.css";

import { CursorHighlight } from "../components/cursor-highlight";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import { ScrollToTopButton } from "../components/scroll-to-top-button";
import { ServiceWorkerResetScript } from "../components/sw-reset-script";
import { themeScript } from "../components/theme-script";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mehfooz-ur-Rehman | Full-stack Product Developer",
  description:
    "Portfolio of Mehfooz-ur-Rehman, a full-stack product developer building web, mobile, desktop and AI-powered business systems.",
  metadataBase: new URL("https://mehfooz-ur-rehman.web.app"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mehfooz-ur-Rehman | Full-stack Product Developer",
    description:
      "Web, mobile, desktop, dashboards, automation and AI-powered business systems.",
    url: "https://mehfooz-ur-rehman.web.app",
    siteName: "Mehfooz-ur-Rehman",
    images: [
      { url: "/pic.webp", width: 900, height: 900, alt: "Mehfooz-ur-Rehman" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehfooz-ur-Rehman | Full-stack Product Developer",
    description:
      "Full-stack product developer building web, mobile, desktop and AI-powered business systems.",
    images: ["/pic.webp"],
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
      className={`${nunito.variable} h-full bg-[var(--color-page)] antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-[var(--color-page)] font-[family-name:var(--font-nunito)] text-[var(--color-text)]">
        <ServiceWorkerResetScript />
        <Script
          async
          data-collect-dnt="true"
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
            src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
          />
        </noscript>
        <CursorHighlight />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  );
}
