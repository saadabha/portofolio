import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sa'ad Abdul Hakim",
  description:
    "Portfolio of Sa'ad Abdul Hakim, an Informatics Engineering student at Bandung Institute of Technology specializing in software engineering and AI.",
  keywords: [
    "Sa'ad Abdul Hakim",
    "Software Engineer",
    "Portfolio",
    "ITB",
    "Bandung Institute of Technology",
    "AI",
    "Informatics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
