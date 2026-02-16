import { motion } from 'framer-motion';
import { FiCode, FiAward, FiBookOpen, FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { ABOUT_CONTENT, PERSONAL_INFO } from '../constants';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FiMapPin size={14} />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FiCode size={18} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <FiAward size={18} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Certifications</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium group mt-2"
            >
              See my work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </a>
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Education */}
            <div className="bg-card-bg backdrop-blur-md border border-card-border rounded-2xl p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <FiBookOpen size={16} />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Education</h3>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {ABOUT_CONTENT.education[0].degree}
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                {ABOUT_CONTENT.education[0].school}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiCalendar size={12} />
                <span>{ABOUT_CONTENT.education[0].year}</span>
              </div>
            </div>

            {/* Notable Projects */}
            <div className="bg-card-bg backdrop-blur-md border border-card-border rounded-2xl p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                  <FiCode size={16} />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Notable Work</h3>
              </div>
              <ul className="space-y-3">
                {ABOUT_CONTENT.notableProjects.map((project, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                    {project}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
