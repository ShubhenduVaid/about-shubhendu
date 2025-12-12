import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import FAQSection from '@/components/FAQSection';
import StatsSection from '@/components/StatsSection';

export const metadata: Metadata = {
  title: 'Shubhendu Vaid - Senior Engineering Leader & Software Architect | London, UK',
  description: 'Senior Engineering Leader with 14+ years experience building scalable software solutions in London, UK. Expert in Next.js, React, Node.js, AWS at BT Group.',
  alternates: {
    canonical: 'https://www.shubhenduvaid.com',
  },
  openGraph: {
    title: 'Shubhendu Vaid - Senior Engineering Leader | London, UK',
    description: 'Senior Engineering Leader with 14+ years experience. Expert in scalable software solutions, Next.js, React, AWS. Currently leading at BT Group.',
    url: 'https://www.shubhenduvaid.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ExperienceSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
