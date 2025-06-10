
const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center font-pixel">
          <span className="terminal-text">$ whoami</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-mono">
              So basically, I'm just a developer who really likes Go and building things that work. 
              Started with web stuff, got hooked on backend systems, and now I spend way too much 
              time in the terminal.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-mono">
              I'm into <span className="text-retro-green">cloud infrastructure</span>, 
              love making <span className="text-retro-amber">CLI tools</span> that actually save time, 
              and dabble in <span className="text-retro-cyan">cybersecurity</span> stuff when I can.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-mono">
              When I'm not coding, I'm probably reading about distributed systems, 
              messing with Docker containers, or finding new ways to automate boring tasks.
            </p>
          </div>
          
          <div className="project-card">
            <h3 className="text-xl font-bold mb-4 terminal-text font-pixel">
              ./stats.txt
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <div><span className="text-retro-green">name:</span> Fabio</div>
              <div><span className="text-retro-green">alias:</span> loid-lab</div>
              <div><span className="text-retro-green">focus:</span> Backend & Infrastructure</div>
              <div><span className="text-retro-green">favorite_lang:</span> Go (obviously)</div>
              <div><span className="text-retro-green">coffee_level:</span> dangerously_high</div>
              <div><span className="text-retro-green">status:</span> <span className="text-retro-green-bright animate-terminal-blink">coding...</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

