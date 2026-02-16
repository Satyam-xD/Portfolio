import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const socialIcons = { Github: FiGithub, LinkedIn: FiLinkedin };

  return (
    <footer className="w-full border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-gray-400 text-sm font-medium">

        <span className="order-2 md:order-1">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </span>

        <div className="flex items-center gap-8 order-1 md:order-2">
          {SOCIAL_LINKS.map((social, i) => {
            const Icon = socialIcons[social.platform] || FiGithub;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label={social.platform}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-primary transition-colors order-3 block text-center md:text-right">
          {PERSONAL_INFO.email}
        </a>

      </div>
    </footer>
  );
};

export default Footer;