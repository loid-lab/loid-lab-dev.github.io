
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground">Fabio</span>
            <br />
            <span className="text-dev-cyan glow-text font-mono">(Loid Lab)</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-dev-cyan to-dev-blue mx-auto mb-6 animate-glow" />
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Full-stack developer crafting robust{' '}
          <span className="text-dev-cyan font-mono">backend systems</span>,{' '}
          <span className="text-dev-green font-mono">cloud infrastructure</span>, and{' '}
          <span className="text-dev-purple font-mono">secure applications</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="tech-tag">Go</span>
          <span className="tech-tag">Cloud</span>
          <span className="tech-tag">Cybersecurity</span>
          <span className="tech-tag">CLI Tools</span>
        </div>

        <button
          onClick={scrollToAbout}
          className="group flex items-center justify-center mx-auto space-x-2 text-dev-cyan hover:text-dev-cyan-dark transition-all duration-300 animate-float"
        >
          <span className="font-mono">Explore my work</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-dev-cyan/5 rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-dev-blue/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
