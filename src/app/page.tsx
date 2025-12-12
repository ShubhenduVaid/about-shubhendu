import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import FAQSection from '@/components/FAQSection';
import StatsSection from '@/components/StatsSection';
import AdvisorySection from '@/components/AdvisorySection';

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ExperienceSection />
      <BlogSection />
      <AdvisorySection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
