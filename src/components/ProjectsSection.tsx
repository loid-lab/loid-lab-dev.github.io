
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ordino",
      description: "Full-stack e-commerce platform with Go backend and Next.js frontend. Features real-time inventory, secure payments, and admin dashboard.",
      techStack: ["Go", "Next.js", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com/loid-lab/ordino",
      status: "In Development"
    },
    {
      title: "Blockchain Prototype",
      description: "Experimental blockchain implementation exploring consensus mechanisms, cryptographic hashing, and distributed ledger technology in Go.",
      techStack: ["Go", "Cryptography", "P2P", "Blockchain", "Distributed Systems"],
      githubUrl: "https://github.com/loid-lab/blockchain",
      status: "Experimental"
    },
    {
      title: "Bubble Tea CLI App",
      description: "Interactive terminal user interface application built with Go's Bubble Tea framework. Demonstrates modern CLI development patterns.",
      techStack: ["Go", "Bubble Tea", "CLI", "TUI"],
      githubUrl: "https://github.com/loid-lab/todo-cli",
      status: "Completed"
    },
    {
      title: "BitTorrent Client",
      description: "Experimental BitTorrent client implementation in Go. Low-level networking project exploring peer-to-peer protocols and file sharing.",
      techStack: ["Go", "Networking", "P2P", "Concurrency"],
      githubUrl: "https://github.com/loid-lab/go-torrent",
      status: "Experimental"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-dev-green";
      case "In Development": return "text-dev-cyan";
      case "Experimental": return "text-dev-orange";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="animate-fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-dev-cyan font-mono">&gt;</span> Featured Projects
        </h2>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <h3 className="text-2xl font-mono font-bold text-dev-cyan">
                    {project.title}
                  </h3>
                  <span className={`text-sm font-mono px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-dev-cyan transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-mono text-sm">View Code</span>
                </a>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/loid-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-dev-cyan hover:text-dev-cyan-dark transition-colors duration-300 font-mono"
          >
            <span>View all projects on GitHub</span>
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
