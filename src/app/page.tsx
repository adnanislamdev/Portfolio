import Navigation from '@/components/Navigation';
import DynamicBackground from '@/components/DynamicBackground';
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from '@/components/Sections';

export default function Home() {
  return (
    <main className="relative">
      <DynamicBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}