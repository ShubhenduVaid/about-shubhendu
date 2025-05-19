import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
