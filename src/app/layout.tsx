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
    "Software Engineer",
    "Senior Software Engineer",
    "Software Architect",
    "Software Developer",
    "Software Development Manager",
    "Software Development Director",
    "Software Development Engineer",
    "Software Development Lead",
    "Software Development Team Lead",
    "Software Development Team Manager",
    "Software Development Team Director",
    "Software Development Team Engineer",
    "Software Development Team Lead Engineer",
    "Software Development Team Lead Developer",
    "Software Development Team Lead Architect",
    "Software Development Team Lead Manager",
    "Software Development Team Lead Director",
    "Software Development Team Lead Engineer Manager",
    "Software Development Team Lead Engineer Director",
    "Software Development Team Lead Engineer Developer",
    "Software Development Team Lead Engineer Architect",
    "Software Architecture",
    "Next.js",
    "React",
    "Node.js",
    "Event-Driven Architecture",
    "Software Development",
    "Agile Methodologies",
    "Team Leadership",
    "Mentorship",
    "Technical Leadership",
    "Cloud Computing",
    "Microservices",
    "DevOps",
    "Continuous Integration",
    "Continuous Deployment",
    "CI/CD",
    "Software Engineering",
    "Software Development Life Cycle",
    "SDLC",
    "Software Design Patterns",
    "Software Testing",
    "Test-Driven Development",
    "TDD",
    "Behavior-Driven Development",
    "BDD",
    "Software Performance Optimization",
    "Software Security",
    "Software Scalability",
    "Software Reliability",
    "Software Maintainability",
    "Software Usability",
    "Software Accessibility",
    "Software Internationalization",
    "Software Localization",
    "Software Documentation",
    "Software Code Review",
    "Software Version Control",
    "Version Control Systems",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Software Collaboration",
    "Software Communication",
    "Software Project Management",
    "Project Management",
    "Agile Project Management",
    "Scrum",
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
    url: "https://shubhenduvaid.com",
    siteName: "Shubhendu Vaid - About Me",
    title: "Shubhendu Vaid - Engineering Leader",
    description:
      "Engineering Leader with 14+ years of experience in building scalable software solutions.",
    images: [
      {
        url: "https://shubhenduvaid.com/opengraph-image.jpg",
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
    images: ["https://shubhenduvaid.com/opengraph-image.jpg"],
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
          href="https://shubhenduvaid.com/"
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
