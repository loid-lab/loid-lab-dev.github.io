
import { ArrowDown, Terminal } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="w-12 h-12 text-retro-green mr-4" />
            <div className="terminal-text">
              <span className="text-2xl">$</span>
              <span className="animate-terminal-blink ml-1">_</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pixel">
            <span className="text-foreground">Hey, I'm </span>
            <span className="terminal-text">Fabio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-retro-green mb-2 font-mono">
            aka <span className="text-retro-green-bright">loid-lab</span>
          </p>
          
          <div className="w-32 h-1 bg-retro-green mx-auto mb-6 pixel-border" />
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-mono">
          I build stuff with <span className="text-retro-green">Go</span>, 
          mess around with <span className="text-retro-amber">cloud infrastructure</span>, 
          and sometimes pretend I know <span className="text-retro-cyan">cybersecurity</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="tech-tag">Go enthusiast</span>
          <span className="tech-tag">CLI addict</span>
          <span className="tech-tag">Backend guy</span>
          <span className="tech-tag">Terminal dweller</span>
        </div>

        <button
          onClick={scrollToAbout}
          className="pixel-button group animate-pixel-float"
        >
          <span className="mr-2">Check out my stuff</span>
          <ArrowDown className="w-4 h-4 inline" />
        </button>
      </div>
      
      {/* Pixel art style background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-retro-green" />
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-retro-amber" />
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-retro-cyan" />
      </div>
    </section>
  );
};

export default HeroSection;

