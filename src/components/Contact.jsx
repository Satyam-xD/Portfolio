import { CONTACT_INFO, SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';
import { useState } from 'react';
import { Tilt } from 'react-tilt';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(gmailLink, '_blank');
  };

  const contactItems = CONTACT_INFO.map(item => ({
    ...item,
    iconElement: item.icon === 'FiMail' ? <FiMail size={22} /> : <FiMapPin size={22} />
  }));

  const socialIcons = { Github: FiGithub, LinkedIn: FiLinkedin };

  const tiltOptions = {
    reverse: false,
    max: 10,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const inputClassName = "w-full px-6 py-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium";

  return (
    <section id="contact" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-lg">
            Have a project in mind or just want to chat? I'm open to new opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            className="lg:w-2/5 flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <Tilt key={index} options={tiltOptions}>
                  <div className="flex items-center gap-5 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xl">
                      {item.iconElement}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-lg font-semibold text-primary">{item.value}</p>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 text-primary">Follow Me</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = socialIcons[social.platform] || FiGithub;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-secondary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full pointer-events-none"></div>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClassName} placeholder="Your Name" required />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClassName} placeholder="email@example.com" required />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputClassName} placeholder="Project Inquiry" required />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className={`${inputClassName} min-h-[160px] resize-y`} placeholder="Tell me about your project..." required></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-10 py-5 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
                >
                  <span>Send Message</span>
                  <FiSend />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
