import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaGithub, FaLink, FaNetworkWired, FaSearch, FaShieldAlt, FaClipboardCheck } from 'react-icons/fa';
import { SiMongodb, SiGo, SiMysql, SiExpress, SiVisualstudiocode } from 'react-icons/si';

const getIcon = (name) => {
  switch (name) {
    case 'HTML': return <FaHtml5 className="text-orange-500" />;
    case 'CSS': return <FaCss3Alt className="text-blue-500" />;
    case 'JavaScript': return <FaJs className="text-yellow-400" />;
    case 'React': return <FaReact className="text-cyan-400" />;
    case 'Node.js': return <FaNodeJs className="text-green-500" />;
    case 'Express': return <SiExpress className="text-gray-400" />;
    case 'MongoDB': return <SiMongodb className="text-green-600" />;
    case 'MySQL': return <SiMysql className="text-blue-500" />;
    case 'Python': return <FaPython className="text-blue-400" />;
    case 'Go': return <SiGo className="text-cyan-500" />;
    case 'Git': return <FaGitAlt className="text-orange-600" />;
    case 'GitHub': return <FaGithub className="text-white" />;
    case 'VS Code': return <SiVisualstudiocode className="text-blue-500" />;
    case 'LangChain': return <FaLink className="text-green-400" />;
    case 'LangGraph': return <FaNetworkWired className="text-teal-400" />;
    case 'RAG': return <FaSearch className="text-purple-400" />;
    case 'Guardrails': return <FaShieldAlt className="text-red-400" />;
    case 'LLM Evaluation': return <FaClipboardCheck className="text-yellow-500" />;
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
      title: "Languages",
      skills: ['Python', 'Go', 'JavaScript']
    },
    {
      title: "Web Development",
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express']
    },
    {
      title: "Agentic AI",
      skills: ['LangChain', 'LangGraph', 'RAG', 'Guardrails', 'LLM Evaluation']
    },
    {
      title: "Database",
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: "Tools and Platforms",
      skills: ['Git', 'GitHub', 'VS Code']
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-2.5">
                <span className="w-1 h-7 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-5">
                {category.skills.map((skillName, skillIndex) => {
                  const iconKey = skillName === 'Tailwind' ? 'Tailwind' : skillName;
                  return (
                    <div key={skillIndex} className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="text-[32px] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(112,77,242,0.5)] transition-all duration-300">
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
