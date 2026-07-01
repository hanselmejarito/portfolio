import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hansel V. Mejarito Jr. — Senior Software Engineer",
  description:
    "Portfolio of Hansel V. Mejarito Jr., Senior Software Engineer with over 8 years of experience in full-stack development, Docker deployments, and enterprise systems. Open to new opportunities.",
  keywords: [
    "Hansel Mejarito",
    "Software Engineer",
    "Philippines",
    "Full-stack Developer",
    "PHP",
    "Next.js",
    "Docker",
  ],
  authors: [{ name: "Hansel V. Mejarito Jr." }],
  openGraph: {
    title: "Hansel V. Mejarito Jr. — Senior Software Engineer",
    description:
      "Open to new opportunities — over 8 years building enterprise and government systems across the full stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
