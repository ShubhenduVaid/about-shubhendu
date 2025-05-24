import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubhendu Vaid - Engineering Leader",
  description:
    "Engineering Leader with 14+ years of experience in building scalable software solutions. Expertise in Next.js, React, Node.js, and event-driven architecture.",
  keywords: [
    "Engineering Leader",
    "Engineering Manager",
    "Software Engineering Manager",
    "Senior Software Engineering Manager",
    "Engineering Director",
    "Senior Engineering Director",
    "VP of Engineering",
    "Vice President of Engineering",
    "CTO",
    "Chief Technology Officer",
    "Head of Engineering",
    "Head of Software Engineering",
    "Software Engineer",
    "Senior Software Engineer",
    "Software Architect",
    "Software Developer",
    "Software Development Manager",
    "Software Development Director",
    "Software Development Engineer",
    "Software Development Lead",
    "Software Development Team Lead",
    "Software Architecture",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.shubhenduvaid.com",
    siteName: "Shubhendu Vaid - About Me",
    title: "Shubhendu Vaid - Engineering Leader",
    description:
      "Engineering Leader with 14+ years of experience in building scalable software solutions.",
    images: [
      {
        url: "https://www.shubhenduvaid.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubhendu Vaid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhendu Vaid - Engineering Leader",
    description:
      "Engineering Leader with 14+ years of experience in building scalable software solutions.",
    images: ["https://www.shubhenduvaid.com/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href="https://www.shubhenduvaid.com"
          key="canonical"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <div className="min-h-screen flex flex-col">
          <NavBar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </div>
      </body>
    </html>
  );
}
