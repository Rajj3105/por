import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-slate-300">Innovative AI and web development solutions</p>
        </motion.div>

        {/* Project Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'ghost'}
            className={`glassmorphism px-6 py-3 rounded-lg hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300 ${
              activeFilter === 'all' ? 'bg-neon-cyan text-dark-blue' : ''
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'ai' ? 'default' : 'ghost'}
            className={`glassmorphism px-6 py-3 rounded-lg hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300 ${
              activeFilter === 'ai' ? 'bg-neon-cyan text-dark-blue' : ''
            }`}
            onClick={() => setActiveFilter('ai')}
          >
            AI/ML
          </Button>
          <Button 
            variant={activeFilter === 'web' ? 'default' : 'ghost'}
            className={`glassmorphism px-6 py-3 rounded-lg hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300 ${
              activeFilter === 'web' ? 'bg-neon-cyan text-dark-blue' : ''
            }`}
            onClick={() => setActiveFilter('web')}
          >
            Web Apps
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glassmorphism p-8 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      techIndex % 2 === 0 
                        ? 'bg-neon-cyan bg-opacity-20 text-neon-cyan' 
                        : 'bg-neon-magenta bg-opacity-20 text-neon-magenta'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neon-cyan hover:text-white transition-colors duration-300"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neon-magenta hover:text-white transition-colors duration-300"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
