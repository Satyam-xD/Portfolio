import { EXPERIENCE_DATA } from '../constants';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My career path and hands-on professional experiences.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 md:pl-12">
          {/* Vertical Timeline Line Track & Glow */}
          <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-white/10" />
          <div className="absolute left-[2px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-primary via-secondary to-transparent shadow-[0_0_8px_rgba(112,77,242,0.4)]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[55px] top-2 z-20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#030014] border-2 border-primary flex items-center justify-center shadow-glow group-hover:scale-125 group-hover:border-secondary transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-primary transition-all duration-300" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="relative overflow-hidden glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(112,77,242,0.15)] hover:-translate-y-1 transition-all duration-300">
                  {/* Left glowing highlight bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <FaBriefcase className="text-primary text-xl" />
                        {exp.role}
                      </h3>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold text-base mt-1 block">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5 self-start md:self-center">
                      <FaCalendarAlt className="text-secondary" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Bullet points description */}
                  <ul className="space-y-3 mb-6 text-gray-300 text-sm md:text-base">
                    {exp.description.map((item, bulletIdx) => (
                      <li key={bulletIdx} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0 animate-pulse" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills/Tools Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/10 hover:text-white px-3 py-1 rounded-md transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
