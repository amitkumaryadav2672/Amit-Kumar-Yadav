import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Terminal, Code, Database } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      title: 'Quick AI Platform',
      role: 'Internship Project – Software Developer Intern',
      duration: 'Feb 2026 - Present',
      description: 'Built a comprehensive AI content platform featuring text and image generation. Integrated Clerk for secure authentication, Gemini AI for smart text responses, and Clipdrop for advanced image processing. Managed media assets using Cloudinary and database operations with MongoDB.',
      tech: ['MERN Stack', 'Clerk Auth', 'Gemini AI', 'Clipdrop', 'Cloudinary', 'Tailwind CSS'],
      github: 'https://github.com/amitkumaryadav2672/Quick-Ai',
      live: 'https://quick-ai-swart-phi.vercel.app/',
      color: '#6366f1',
      icon: <Database size={24} color="#6366f1" />
    },
    {
      title: 'Trimly – Salon at Home Platform',
      role: 'Internship Project – Full Stack Developer',
      duration: '90 Days',
      description: 'Developed a scalable service booking platform with JWT authentication, RESTful APIs, and role-based access control. Implemented a dynamic booking system with time-slot selection, pricing logic, and real-time status updates. Built Admin Dashboard and Service Provider Panel and integrated a demo payment gateway.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/amitkumaryadav2672/Trimly-SALON-AT-HOME',
      live: 'https://trimly-salon-at-home.vercel.app/',
      color: '#eab308',
      icon: <Terminal size={24} color="#eab308" />
    },
    {
      title: 'VivaMate AI – AI Interview Preparation Platform',
      role: 'Full Stack Developer',
      duration: '75 Days',
      description: 'Integrated Gemini API for resume analysis, job description parsing, and intelligent recommendations. Built features for technical & behavioral question generation, 7-day roadmap, and skill gap analysis. Designed and implemented secure authentication and scalable backend APIs for efficient data processing.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Gemini API'],
      github: 'https://github.com/amitkumaryadav2672/VivaMate-AI',
      live: 'https://viva-mate-ai.vercel.app/',
      color: '#10b981',
      icon: <Code size={24} color="#10b981" />
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="section-header"
      >
        <h2 className="section-title">Featured <span className="gradient-text">Experience & Projects</span></h2>
        <p className="section-subtitle">Real-world systems, full-stack applications, and backend architectures I've built.</p>
      </motion.div>

      <motion.div style={{ y: yOffset }} className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
            whileHover={{ y: -15, scale: 1.02, rotateY: 2 }}
            className="project-card glass-panel"
          >
            <div className="project-color-bar" style={{ background: project.color, boxShadow: `0 0 15px ${project.color}` }}></div>
            <div className="project-content">
              <div className="project-header">
                {project.icon}
                <span className="project-duration">{project.duration}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-desc">{project.description}</p>
              
              <ul className="project-tech">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              
              <div className="project-links">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="Github Repo">
                  <Github size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.live} target="_blank" rel="noreferrer" className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
