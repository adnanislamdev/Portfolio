'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const SOCIAL = {
  email: 'mailto:adnan.islam28@gmail.com',
  linkedin: 'https://www.linkedin.com/in/a-dnanislam',
  portfolio: 'https://portfoliov2-fawn-tau.vercel.app',
  resume: '/Adnan-Islam-Resume.pdf',
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I&apos;m Adnan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Full Stack Developer passionate about building modern, user-friendly web applications
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            B.S. Computer Science · CUNY Lehman College · GPA 3.95
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={SOCIAL.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6 mt-12"
        >
          <motion.a
            href={SOCIAL.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Portfolio"
          >
            <ExternalLink size={24} />
          </motion.a>
          <motion.a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={SOCIAL.email}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const skills = [
    'Python',
    'JavaScript',
    'Next.js',
    'React',
    'Java',
    'C++',
    'OpenCV',
    'Git',
    'Linux',
    'macOS',
    'Windows',
    'Cloudflare',
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I&apos;m a full stack developer with hands-on experience leading technical teams,
            shipping client projects, and building computer vision systems from prototype to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6">
              I earned my Bachelor of Computer Science from CUNY Lehman College (graduated May 2026,
              GPA 3.95) while growing from Geek Squad Agent to Senior, where I lead a team of five and
              drive process improvements across repairs, security, and customer support.
            </p>
            <p className="text-gray-600 mb-6">
              Outside of work, I build full stack apps with Next.js and React, and personal projects
              like an automated parking detector using Python, OpenCV, and Raspberry Pi.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Education</h4>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold">CUNY Lehman College</span>
                  <br />
                  Bachelor of Computer Science
                  <br />
                  <span className="text-blue-100">Graduated May 2026 · GPA 3.95/4.0</span>
                </li>
              </ul>
              <h4 className="text-xl font-bold mb-4 mt-8">Highlights</h4>
              <ul className="space-y-2">
                <li>• Lead team of 5 Geek Squad Agents</li>
                <li>• 95% customer satisfaction as Agent</li>
                <li>• 30% faster service turnaround (Senior)</li>
                <li>• Full stack client delivery (Next.js / React)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const roles = [
    {
      company: 'Best Buy LLC',
      location: 'New York, NY',
      title: 'Geek Squad Senior',
      period: 'Aug 2024 – Present',
      highlights: [
        'Lead a team of 5 Geek Squad Agents with mentorship, training, and performance guidance.',
        'Manage high-priority escalations and workflow optimizations, cutting turnaround times by 30%.',
        'Deliver training on cybersecurity, malware removal, and data recovery.',
        'Improved repair and upgrade processes for a 15% gain in service efficiency.',
      ],
    },
    {
      company: 'Best Buy LLC',
      location: 'New York, NY',
      title: 'Geek Squad Agent',
      period: 'Apr 2021 – Aug 2024',
      highlights: [
        'Resolved complex hardware and software issues across Windows, macOS, and Linux.',
        'Maintained 95% customer satisfaction through repairs, upgrades, and optimizations.',
        'Performed malware removal, security maintenance, and data recovery.',
        'Explained technical issues clearly while handling multiple clients at once.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical leadership and hands-on support across consumer devices and enterprise workflows.
          </p>
        </motion.div>

        <div className="space-y-10">
          {roles.map((role, index) => (
            <motion.article
              key={`${role.title}-${role.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{role.title}</h3>
                  <p className="text-gray-600">
                    {role.company} · {role.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-blue-600 whitespace-nowrap">
                  {role.period}
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Automated Parking Detector',
      description:
        'Computer vision system that detects open and occupied parking spots using OpenCV, with a local web app for live monitoring via Raspberry Pi camera feed.',
      tech: ['Python', 'OpenCV', 'Raspberry Pi'],
      link: SOCIAL.portfolio,
    },
    {
      title: 'Full Stack Restaurant Website',
      description:
        'Responsive client site built with Next.js and React—optimized components, dynamic routing, and SSR for performance and branding across devices.',
      tech: ['Next.js', 'React', 'JavaScript'],
      link: 'https://adnanislamdev.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selected work spanning computer vision, full stack web development, and client delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Project
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Open to full stack roles, freelance projects, and collaborations. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href={SOCIAL.email}
                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="text-blue-600 shrink-0" size={24} />
                adnan.islam28@gmail.com
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="text-blue-600 shrink-0" size={24} />
                linkedin.com/in/a-dnanislam
              </a>
              <a
                href={SOCIAL.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="text-blue-600 shrink-0" size={24} />
                portfoliov2-fawn-tau.vercel.app
              </a>
              <p className="text-gray-600 pl-10">(929) 842-4556</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection, AboutSection, ExperienceSection, ProjectsSection, ContactSection };
