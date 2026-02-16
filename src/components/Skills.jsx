import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus, SiMysql, SiPostgresql } from 'react-icons/si';

const getIcon = (name) => {
  switch (name) {
    case 'HTML': return <FaHtml5 className="text-orange-500" />;
    case 'CSS': return <FaCss3Alt className="text-blue-500" />;
    case 'JavaScript': return <FaJs className="text-yellow-400" />;
    case 'React': return <FaReact className="text-cyan-400" />;
    case 'Node.js': return <FaNodeJs className="text-green-500" />;
    case 'MongoDB': return <SiMongodb className="text-green-600" />;
    case 'Tailwind': return <SiTailwindcss className="text-cyan-300" />;
    case 'Github': return <FaGithub className="text-white" />;
    case 'Git': return <FaGitAlt className="text-orange-600" />;
    case 'Python': return <FaPython className="text-blue-400" />;
    case 'C++': return <SiCplusplus className="text-blue-600" />;
    case 'SQL': return <SiMysql className="text-blue-500" />;
    case 'PostgreSQL': return <SiPostgresql className="text-blue-400" />;
    case 'Docker': return <FaDocker className="text-blue-500" />;
    default: return <FaDatabase className="text-gray-400" />;
  }
};

const Skills = () => {
  const getSkill = (name) => {
    const found = SKILLS_DATA.find(s => s.name === name || s.name === name.replace('Tailwind', 'Tailwind CSS'));
    return found || { name };
  };

  const categories = [
    {
      title: "Frontend",
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind']
    },
    {
      title: "Backend",
      skills: ['Node.js']
    },
    {
      title: "Databases",
      skills: ['MongoDB', 'SQL']
    },
    {
      title: "Languages",
      skills: ['JavaScript', 'Python', 'C++']
    },
    {
      title: "Tools",
      skills: ['Git', 'Github']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-surface-secondary relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-6">
                {category.skills.map((skillName, skillIndex) => {
                  const iconKey = skillName === 'Tailwind' ? 'Tailwind' : skillName;
                  return (
                    <div key={skillIndex} className="flex flex-col items-center gap-3 group cursor-default">
                      <div className="text-4xl group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(112,77,242,0.5)] transition-all duration-300">
                        {getIcon(iconKey) || getIcon(skillName)}
                      </div>
                      <span className="text-sm text-gray-400 font-medium group-hover:text-primary transition-colors">{skillName}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
