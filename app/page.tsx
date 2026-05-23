import { PageTransition } from "@/components/layout/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ServicesSection,
  TestimonialsSection,
} from "@/sections";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </PageTransition>
  );
}
