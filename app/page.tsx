import Navbar         from "@/components/Navbar";
import HeroSection     from "@/components/HeroSection";
import AboutSection    from "@/components/AboutSection";
import SkillsSection   from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection   from "@/components/ResumeSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* Divider */}
      <div className="divider" />

      <AboutSection />

      <div className="divider" />

      <SkillsSection />

      <div className="divider" />

      <ProjectsSection />

      <div className="divider" />

      <ResumeSection />

      <div className="divider" />

      <ContactSection />

      <Footer />
    </main>
  );
}
