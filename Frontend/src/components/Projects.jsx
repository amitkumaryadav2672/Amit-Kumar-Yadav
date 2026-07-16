import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Terminal, Code, Database, BarChart2, Layers } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      title: 'Student Management System',
      role: 'Full Stack Python Developer',
      duration: '75 Days',
      description: [
        'Developed a full-stack Student Management System using React.js, Flask, and MySQL.',
        'Implemented authentication, CRUD operations, and attendance management.',
        'Built REST APIs and optimized MySQL queries for efficient data management.'
      ],
      tech: ['React.js', 'Python', 'Flask', 'MySQL', 'SQL'],
      github: 'https://github.com/amitkumaryadav2672',
      live: '#',
      color: '#6366f1',
      icon: <Database size={24} color="#6366f1" />
    },
    {
      title: 'Employee Payroll Management System',
      role: 'Full Stack Python Developer',
      duration: '60 Days',
      description: [
        'Built a full-stack Payroll Management System using React.js, Flask, and MySQL.',
        'Developed employee management, salary calculation, and payroll modules.',
        'Designed REST APIs and optimized SQL queries for fast payroll processing.'
      ],
      tech: ['React.js', 'Python', 'Flask', 'MySQL', 'SQL'],
      github: 'https://github.com/amitkumaryadav2672',
      live: '#',
      color: '#eab308',
      icon: <Terminal size={24} color="#eab308" />
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
              <div className="project-desc">
                {Array.isArray(project.description) ? (
                  <ul>
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>

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
