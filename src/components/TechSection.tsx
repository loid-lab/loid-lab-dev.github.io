
const TechSection = () => {
  const techStacks = [
    {
      category: "Backend & Languages",
      technologies: [
        { name: "Go", color: "text-dev-cyan" },
        { name: "Node.js", color: "text-dev-green" },
        { name: "TypeScript", color: "text-dev-blue" },
        { name: "Python", color: "text-dev-orange" }
      ]
    },
    {
      category: "Cloud & Infrastructure", 
      technologies: [
        { name: "Docker", color: "text-dev-blue" },
        { name: "PostgreSQL", color: "text-dev-cyan" },
        { name: "Redis", color: "text-dev-orange" },
        { name: "Neon", color: "text-dev-purple" }
      ]
    },
    {
      category: "Frontend & Tools",
      technologies: [
        { name: "Next.js", color: "text-dev-gray" },
        { name: "React", color: "text-dev-cyan" },
        { name: "TailwindCSS", color: "text-dev-blue" },
        { name: "Bun", color: "text-dev-orange" }
      ]
    }
  ];

  return (
    <section id="tech" className="section-padding bg-dev-darker">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-dev-cyan font-mono">&gt;</span> Tech Stack
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div 
              key={stack.category}
              className="bg-card border border-border rounded-lg p-6 glow-border hover:border-dev-cyan/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-lg font-mono font-semibold mb-6 text-dev-cyan">
                {stack.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {stack.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`tech-tag ${tech.color} text-center font-mono font-medium`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono">
            <span className="text-dev-cyan">const</span>{' '}
            <span className="text-dev-green">passion</span> = {' '}
            <span className="text-dev-orange">"Building robust, scalable systems"</span>;
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
