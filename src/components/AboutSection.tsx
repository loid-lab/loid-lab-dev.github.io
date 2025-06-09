
const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="text-dev-cyan font-mono">&gt;</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey there! I'm <span className="text-dev-cyan font-mono">Fabio</span>, 
              but you might know me as <span className="text-dev-cyan font-mono">Loid Lab</span> in 
              the development community. I'm passionate about building robust, scalable systems 
              that solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across <span className="text-dev-green font-mono">cloud infrastructure</span>, 
              <span className="text-dev-blue font-mono"> backend development</span>, and 
              <span className="text-dev-purple font-mono"> cybersecurity</span>. I have a particular 
              love for <span className="text-dev-orange font-mono">Golang</span> and enjoy crafting 
              CLI tools that make developers' lives easier.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not debugging distributed systems or diving deep into networking protocols, 
              you'll find me experimenting with new technologies or contributing to open-source projects.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 glow-border">
            <h3 className="text-xl font-mono font-semibold mb-4 text-dev-cyan">
              $ whoami
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <div><span className="text-dev-green">Name:</span> Fabio (Loid Lab)</div>
              <div><span className="text-dev-green">Focus:</span> Backend & Cloud</div>
              <div><span className="text-dev-green">Languages:</span> Go, TypeScript, Python</div>
              <div><span className="text-dev-green">Interests:</span> Distributed Systems, CLI Tools</div>
              <div><span className="text-dev-green">Status:</span> <span className="animate-glow">Available for opportunities</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
