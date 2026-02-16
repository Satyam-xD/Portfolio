import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const PERSONAL_INFO = {
    name: "Satyam Katiyar",
    title: "Full Stack Developer",
    email: "anshkatiyar019@gmail.com",
    location: "Bareilly, Uttar Pradesh, India",
    bio: "Full-stack developer specializing in modern web technologies. Currently focused on creating accessible, human-centered applications.",
    about: "Passionate Full Stack Developer fresh out of university with expertise in modern web technologies. I specialize in building responsive applications using React, Node.js, and MongoDB, with a strong foundation in computer science principles and problem-solving.",
    resumeLink: "https://drive.google.com/file/d/1IFnVqy8rRg8GUUV2pkqHRq9tbaS9R1Td/view?usp=sharing"
};

export const HERO_CONTENT = {
    greeting: "Hi, my name is",
    name: PERSONAL_INFO.name,
    role: "I build digital experiences.",
    description: PERSONAL_INFO.bio,
    buttons: [
        { text: "Contact Me", href: "#contact", primary: true },
        { text: "View Work", href: "#projects", primary: false },
        { text: "Resume", href: PERSONAL_INFO.resumeLink, primary: false, isExternal: true }
    ]
};

export const ABOUT_CONTENT = {
    title: "About Me",
    description: PERSONAL_INFO.about,
    education: [
        {
            degree: "Bachelor's in Computer Science",
            school: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            year: "2022 - 2026"
        }
    ],
    notableProjects: [
        "Aurora Workspace (SaaS Platform)",
        "Jobly (Job Portal)",
        "Modern Portfolio V2"
    ]
};

export const SKILLS_DATA = [
    { name: 'HTML', level: 90, color: 'from-orange-500 to-orange-400' },
    { name: 'CSS', level: 85, color: 'from-blue-500 to-blue-400' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-300' },
    { name: 'React', level: 75, color: 'from-cyan-500 to-cyan-400' },
    { name: 'Node.js', level: 70, color: 'from-green-600 to-green-500' },
    { name: 'MongoDB', level: 65, color: 'from-emerald-500 to-emerald-400' },
    { name: 'Tailwind CSS', level: 80, color: 'from-sky-500 to-sky-400' },
    { name: 'Git', level: 75, color: 'from-orange-600 to-orange-500' },
    { name: 'Python', level: 60, color: 'from-blue-600 to-blue-500' },
    { name: 'C++', level: 50, color: 'from-blue-800 to-blue-700' },
    { name: 'SQL', level: 70, color: 'from-blue-400 to-blue-300' }
];

export const PROJECTS_DATA = [
    {
        title: "Aurora Workspace",
        description: "A comprehensive project management and collaboration suite designed for remote teams.",
        features: [
            "Real-time Video Conferencing & Screen Sharing",
            "Instant Team Chat & File Sharing",
            "Interactive Kanban Board for Task Management",
            "Secure Document Storage System",
            "Built-in Team Password Manager",
            "Role-based Team Administration"
        ],
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com/Satyam-xD/Aurora-Workspace"
    },
    {
        title: "Jobly",
        description: "A modern job hunting platform connecting job seekers with opportunities.",
        features: [
            "Secure Authentication & User Management",
            "Job Search & Advanced Filtering",
            "Employer Dashboard for Job Posting",
            "Application Tracking System",
            "Responsive Design with Tailwind",
            "Profile Management for Seekers"
        ],
        tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
        github: "https://github.com/Satyam-xD/Jobly"
    },
    {
        title: "Personal Portfolio",
        description: "A high-performance, interactive personal website showcasing projects and skills.",
        features: [
            "Modern Responsive Design",
            "Dark/Light Theme Support",
            "Smooth Framer Motion Animations",
            "Performance Optimized",
            "SEO & Accessibility Oriented",
            "Interactive Project Showcase"
        ],
        tags: ["React", "Framer Motion", "Tailwind CSS"],
        github: "https://github.com/Satyam-xD/Portfolio"
    }
];

export const CONTACT_INFO = [
    {
        title: "Email",
        value: PERSONAL_INFO.email,
        icon: "FiMail"
    },
    {
        title: "Location",
        value: PERSONAL_INFO.location,
        icon: "FiMapPin"
    }
];

export const SOCIAL_LINKS = [
    {
        platform: "Github",
        url: "https://github.com/Satyam-xD",
        icon: "FaGithub"
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/satyam-katiyar-139478327",
        icon: "FaLinkedin"
    }
];

export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];
