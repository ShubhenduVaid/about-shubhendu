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
  title: "Shubhendu Vaid - Engineering Leader & Software Architect",
  description:
    "Engineering Leader with 14+ years of experience in building scalable software solutions. Expertise in Next.js, React, Node.js, and event-driven architecture.",
  keywords: [
    "Engineering Leader",
    "Software Architecture",
    "Next.js",
    "React",
    "Node.js",
    "Event-Driven Architecture",
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
    siteName: "Shubhendu Vaid",
    title: "Shubhendu Vaid - Engineering Leader & Software Architect",
    description:
      "Engineering Leader with 14+ years of experience in building scalable software solutions.",
    images: [
      {
        url: "https://shubhenduvaid.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubhendu Vaid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhendu Vaid - Engineering Leader & Software Architect",
    description:
      "Engineering Leader with 14+ years of experience in building scalable software solutions.",
    images: ["https://shubhenduvaid.com/og-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
