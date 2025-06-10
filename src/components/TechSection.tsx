
const TechSection = () => {
  const techStacks = [
    {
      category: "Backend Stuff",
      technologies: [
        { name: "Go", color: "text-retro-green" },
        { name: "Node.js", color: "text-retro-amber" },
        { name: "TypeScript", color: "text-retro-cyan" },
        { name: "Python", color: "text-retro-purple" }
      ]
    },
    {
      category: "Infrastructure & DBs", 
      technologies: [
        { name: "Docker", color: "text-retro-cyan" },
        { name: "PostgreSQL", color: "text-retro-green" },
        { name: "Redis", color: "text-retro-amber" },
        { name: "Neon", color: "text-retro-purple" }
      ]
    },
    {
      category: "Frontend & Tools",
      technologies: [
        { name: "Next.js", color: "text-foreground" },
        { name: "React", color: "text-retro-cyan" },
        { name: "TailwindCSS", color: "text-retro-green" },
        { name: "Bun", color: "text-retro-amber" }
      ]
    }
  ];

  return (
    <section id="tech" className="section-padding bg-retro-darker">
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center font-pixel">
          <span className="terminal-text">$ ls -la skills/</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {techStacks.map((stack, index) => (
            <div 
              key={stack.category}
              className="project-card"
            >
              <h3 className="text-lg font-bold mb-6 terminal-text font-pixel">
                {stack.category}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {stack.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`tech-tag ${tech.color} font-bold`}
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
            <span className="text-retro-green">// </span>
            Always learning new stuff and breaking things in production
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSection;

