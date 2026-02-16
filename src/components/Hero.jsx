import { motion } from 'framer-motion';
import { HERO_CONTENT, SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden bg-background flex flex-col items-center justify-center">
      <ParticleBackground />

      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] animate-pulse-slow delay-1000 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 w-full max-w-7xl mx-auto">

        <motion.h1
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 font-display"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            {HERO_CONTENT.name}
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-3xl font-light text-gray-300 mb-8 h-[40px] flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>I build</span>
          <span className="text-secondary font-semibold">
            <Typewriter
              words={['Scalable Web Apps', 'Interactive UI/UX', 'Digital Experiences', 'Future Tech']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.p
          className="max-w-2xl text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {HERO_CONTENT.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-bold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Explore Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            <span className="absolute inset-0 z-10 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">Explore Work</span>
          </a>
          <a
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-card-border bg-card-bg text-white font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 hover:border-white/30"
          >
            <FaFileAlt /> Resume
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon === 'FaGithub' ? FaGithub : FaLinkedin;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 transform hover:scale-110 p-2 hover:bg-white/5 rounded-full"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </motion.div>

      </div>

      <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] z-0 pointer-events-none" />
    </section>
  );
};

export default Hero;
