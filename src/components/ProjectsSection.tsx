
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GITHUB_USERNAME = 'loid-lab';
const FEATURED_REPOS = ['ordino', 'blockchain', 'todo-cli', 'go-torrent'];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed': return 'text-dev-green';
    case 'In Development': return 'text-dev-cyan';
    case 'Experimental': return 'text-dev-orange';
    default: return 'text-muted-foreground';
  }
};

const statusMap = {
  'ordino': 'In Development',
  'blockchain': 'Experimental',
  'todo-cli': 'Completed',
  'go-torrent': 'Experimental'
};

const techStackMap = {
  'ordino': ['Go', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
  'blockchain': ['Go', 'Cryptography', 'P2P', 'Blockchain', 'Distributed Systems'],
  'todo-cli': ['Go', 'Bubble Tea', 'CLI', 'TUI'],
  'go-torrent': ['Go', 'Networking', 'P2P', 'Concurrency']
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
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-dev-cyan font-mono">&gt;</span> Featured Projects
        </h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
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
                  aria-label={`View ${project.title} on GitHub`}
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
                  <span key={`${project.title}-${tech}`} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
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