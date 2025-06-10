
import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GITHUB_USERNAME = 'loid-lab';
const FEATURED_REPOS = ['ordino', 'blockchain', 'todo-cli', 'go-torrent', 'blockchain-prototype', 'e-commerce-api'];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed': return 'text-retro-green';
    case 'In Development': return 'text-retro-amber';
    case 'Experimental': return 'text-retro-cyan';
    default: return 'text-muted-foreground';
  }
};

const statusMap = {
  'ordino': 'In Development',
  'blockchain': 'Experimental',
  'todo-cli': 'Completed',
  'go-torrent': 'Experimental',
  'blockchain-prototype': 'Experimental',
  'e-commerce-api': 'In Development'
};

const techStackMap = {
  'ordino': ['Go', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
  'blockchain': ['Go', 'Cryptography', 'P2P', 'Blockchain', 'Distributed Systems'],
  'todo-cli': ['Go', 'Bubble Tea', 'CLI', 'TUI'],
  'go-torrent': ['Go', 'Networking', 'P2P', 'Concurrency'],
  'blockchain-prototype': ['Go', 'Blockchain', 'Consensus', 'Cryptography', 'Networking'],
  'e-commerce-api': ['Go', 'REST API', 'PostgreSQL', 'JWT', 'Microservices']
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const featured = res.data.filter(repo => FEATURED_REPOS.includes(repo.name));
        const enhanced = featured.map(repo => ({
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repo.description || 'No description provided.',
          githubUrl: repo.html_url,
          status: statusMap[repo.name] || 'Unknown',
          techStack: techStackMap[repo.name] || []
        }));
        setProjects(enhanced);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center font-pixel">
          <span className="terminal-text">$ cat projects.json</span>
        </h2>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <h3 className="text-xl font-bold terminal-text font-pixel">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono font-bold px-2 py-1 pixel-border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="pixel-button text-sm flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <span>View Code</span>
                </a>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed font-mono">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={`${project.title}-${tech}`} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button inline-flex items-center"
          >
            <span className="mr-2">More projects on GitHub</span>
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
