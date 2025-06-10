
import { Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-retro-darker">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 font-pixel">
          <span className="terminal-text">$ echo "Let's chat"</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-mono">
          Got something cool to build? Want to talk about Go, infrastructure, or just geek out about tech? 
          Hit me up!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="https://github.com/loid-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group"
          >
            <Github className="w-12 h-12 terminal-text mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 font-pixel terminal-text">GitHub</h3>
            <p className="text-muted-foreground font-mono mb-2">Check out my repos and contributions</p>
            <p className="text-retro-green font-mono text-sm">github.com/loid-lab</p>
          </a>
          
          <div className="project-card">
            <div className="w-12 h-12 bg-retro-green pixel-border flex items-center justify-center mx-auto mb-4">
              <span className="text-retro-dark font-bold text-xl">#</span>
            </div>
            <h3 className="text-lg font-bold mb-2 font-pixel terminal-text">Discord</h3>
            <p className="text-muted-foreground font-mono mb-2">Let's chat about code and stuff</p>
            <p className="text-retro-green font-mono text-sm">@loid4939</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-retro-green">
          <p className="text-muted-foreground font-mono">
            <span className="text-retro-green">// </span>
            Always down to collaborate on interesting projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

