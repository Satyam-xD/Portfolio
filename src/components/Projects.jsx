import { PROJECTS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { Tilt } from 'react-tilt';

const Projects = () => {
  const tiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section id="projects" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-lg">
            A selection of my recent work, featuring full-stack applications and experimental interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-card-bg backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-card-border hover:border-primary/50 h-full flex flex-col transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      title="View GitHub Repo"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>

                <p className="mb-4 text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                {Array.isArray(project.features) && project.features.length > 0 && (
                  <ul className="mb-6 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-500">
                        <span className="mr-2 mt-1 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {(project.tags || []).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://github.com/Satyam-xD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-primary font-bold hover:shadow-lg hover:border-primary transition-all duration-300 group">
            <FiGithub className="text-xl group-hover:rotate-12 transition-transform" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
