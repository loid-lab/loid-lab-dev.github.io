
import { Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-dev-darker">
      <div className="animate-fade-in text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-dev-cyan font-mono">&gt;</span> Let's Connect
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or discussing technology? 
          I'm always open to connecting with fellow developers and exploring new opportunities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a
            href="https://github.com/loid-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 glow-border hover:border-dev-cyan/50 transition-all duration-300 group"
          >
            <Github className="w-12 h-12 text-dev-cyan mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-mono font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground">Check out my projects and contributions</p>
            <p className="text-dev-cyan font-mono text-sm mt-2">github.com/loid-lab</p>
          </a>
          
          <div className="bg-card border border-border rounded-lg p-6 glow-border hover:border-dev-cyan/50 transition-all duration-300">
            <div className="w-12 h-12 bg-dev-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-dev-cyan font-mono text-xl">#</span>
            </div>
            <h3 className="text-lg font-mono font-semibold mb-2">Discord</h3>
            <p className="text-muted-foreground mb-2">Let's chat about tech and projects</p>
            <p className="text-dev-cyan font-mono text-sm">@loid4939</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dev-gray">
          <p className="text-muted-foreground font-mono">
            <span className="text-dev-green">const</span>{' '}
            <span className="text-dev-cyan">developer</span> = {' '}
            <span className="text-dev-orange">"Always learning, always building"</span>;
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
