import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: "Hansel V. Mejarito Jr. — Web Engineer",
  description:
    "Portfolio of Hansel V. Mejarito Jr., Web Engineer with over 8 years shipping production interfaces in HTML, CSS, JavaScript, jQuery, Bootstrap, and React. Open to hybrid and remote roles.",
  keywords: [
    "Hansel Mejarito",
    "Web Engineer",
    "Philippines",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "React",
    "Next.js",
    "REST APIs",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Hansel V. Mejarito Jr. — Web Engineer",
    description: siteConfig.tagline,
    type: "website",
    url: siteConfig.website,
    siteName: "Hansel Mejarito Portfolio",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hansel V. Mejarito Jr. — Web Engineer",
    description: siteConfig.tagline,
  },
  alternates: {
    canonical: siteConfig.website,
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-ink-950 font-sans text-ink-100 antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
