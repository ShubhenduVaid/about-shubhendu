import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ErrorBoundary from '@/components/ErrorBoundary';
import data from '@/data';
import { config } from '@/lib/config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(config.app.url),
  title: {
    default:
      'Shubhendu Vaid - Senior Engineering Leader & Software Architect | London, UK',
    template: `%s | ${data.name}`,
  },
  description:
    'Senior Engineering Leader with 14+ years experience building scalable software solutions in London, UK. Expert in Next.js, React, Node.js, AWS, and event-driven architecture. Currently at BT Group leading Sales Convergence initiatives.',
  keywords: [
    'Engineering Leader London',
    'Software Engineering Manager UK',
    'Senior Engineering Manager London',
    'Engineering Director BT Group',
    'Software Architect London',
    'Next.js Expert UK',
    'React Developer London',
    'AWS Solutions Architect',
    'Event-driven Architecture',
    'Microservices Expert',
    'JavaScript Engineer London',
    'TypeScript Developer UK',
    'Node.js Expert London',
    'Engineering Leadership',
    'Software Development Manager',
    'Tech Lead London',
    'Shubhendu Vaid',
    'BT Group Engineering',
    'London Tech Leader',
    'UK Software Engineer',
    'Engineering Leadership Coaching',
    'Software Architecture Consulting London',
    'Generative AI Consultant UK',
    'CTO Advisory London',
    'Engineering Manager Coach'
  ],
  authors: [{ name: data.name, url: config.app.url }],
  creator: data.name,
  publisher: data.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: config.app.url,
    types: {
      'application/rss+xml': [
        {
          url: `${config.app.url}/rss.xml`,
          title: 'Shubhendu Vaid Blog',
        },
      ],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: config.app.url,
    siteName: 'Shubhendu Vaid - Engineering Leader',
    title: 'Shubhendu Vaid - Senior Engineering Leader & Software Architect | London, UK',
    description:
      'Senior Engineering Leader with 14+ years experience in London, UK. Expert in scalable software solutions, Next.js, React, AWS. Currently leading at BT Group.',
    images: [
      {
        url: `${config.app.url}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Shubhendu Vaid - Senior Engineering Leader in London, UK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubhendu Vaid - Senior Engineering Leader | London, UK',
    description:
      'Senior Engineering Leader with 14+ years experience. Expert in Next.js, React, AWS, and scalable software architecture.',
    images: [`${config.app.url}/opengraph-image.jpg`],
    creator: '@shubhenduvaid',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: 'Technology',
  classification: 'Professional Portfolio',
  other: {
    'geo.region': 'GB-LND',
    'geo.placename': 'London',
    'geo.position': '51.5074;-0.1278',
    'ICBM': '51.5074, -0.1278',
    'DC.title': 'Shubhendu Vaid - Senior Engineering Leader',
    'DC.creator': data.name,
    'DC.subject': 'Software Engineering, Leadership, Technology',
    'DC.description': 'Senior Engineering Leader specializing in scalable software solutions',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <ErrorBoundary>{children}</ErrorBoundary>
          {config.analytics.enabled ? <Analytics /> : null}
          {config.features.performanceMonitoring ? <SpeedInsights /> : null}
          <Footer />
        </div>
      </body>
    </html>
  );
}
