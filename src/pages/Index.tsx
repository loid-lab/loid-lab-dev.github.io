
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
    ║     Welcome to my digital space!     ║
    ║                                      ║
    ║  Built with:                         ║
    ║  • React + TypeScript                ║
    ║  • TailwindCSS                       ║
    ║  • Pixel-perfect vibes               ║
    ║                                      ║
    ║  Source: github.com/loid-lab         ║
    ║                                      ║
    ║  PS: I really like Go                ║
    ╚══════════════════════════════════════╝
    `);
  }, []);

  return (
    <div className="min-h-screen bg-retro-dark text-foreground">
      <Navigation />
      
      <HeroSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Retro grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </div>
  );
};

export default Index;

