
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TechSection from '../components/TechSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  useEffect(() => {
    // Easter egg for fellow developers
    console.log(`
    ╔══════════════════════════════════════╗
    ║  Welcome to Fabio's Developer Site!  ║
    ║                                      ║
    ║  Built with ❤️ using:                ║
    ║  • React + TypeScript                ║
    ║  • TailwindCSS                       ║
    ║  • Smooth animations                 ║
    ║                                      ║
    ║  Check out the source:               ║
    ║  github.com/loid-lab                 ║
    ╚══════════════════════════════════════╝
    `);
  }, []);

  return (
    <div className="min-h-screen bg-dev-dark text-foreground">
      <Navigation />
      
      <HeroSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-dev-cyan/10 via-transparent to-dev-blue/10" />
      </div>
    </div>
  );
};

export default Index;
