import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const experience = [
    {
      role: 'Software Developer Intern',
      company: 'WebSeeder Technologies Private Limited',
      date: 'Feb 2026 - Present',
      desc: 'Developing "Quick AI Platform" using MERN. Worked on Redis Cache optimization, integrated Clerk/Gemini AI, and collaborated via Git/GitHub for debugging and bug fixing.'
    },
    {
      role: 'MERN Stack Development Trainee | Intern',
      company: 'HopingMinds, Mohali',
      date: 'Oct 2025 – Feb 2026',
      desc: 'Developed "Trimly – Salon at Home Platform" as an internship project. Completed 6-month professional training in MERN stack, built real-world projects with REST APIs, and managed full-stack integration.'
    }
  ];

  const education = [
    { degree: 'B.Tech, Computer Science Engineering', school: 'Chandigarh Engineering College Landran, Mohali', date: '2022 - 2026', score: 'CGPA: 7.3/10' },
    { degree: 'Intermediate (B.S.E.B)', school: 'B.S.E.B', date: '2020 - 2021', score: '80.08%' },
    { degree: 'Matriculation (B.S.E.B)', school: 'B.S.E.B', date: '2018 - 2019', score: '80.02%' }
  ];

  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="education-container">
        {/* Left Side: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="timeline-side"
        >
          <div className="section-header align-left">
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          </div>

          <div className="timeline-wrapper">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-row"
              >
                <div className="timeline-dot"></div>
                <motion.div
                  className="timeline-item glass-panel"
                  whileHover={{ scale: 1.0, x: 10 }}
                >
                  <h3>{exp.role}</h3>
                  <p className="school">{exp.company}</p>
                  <p className="exp-desc">{exp.desc}</p>
                  <div className="edu-meta">
                    <span className="date gradient-text">{exp.date}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="timeline-side"
        >
          <div className="section-header align-left">
            <h2 className="section-title">Formal <span className="gradient-text">Education</span></h2>
          </div>

          <div className="timeline-wrapper">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-row"
              >
                <div className="timeline-dot right-dot"></div>
                <motion.div
                  className="timeline-item glass-panel"
                  whileHover={{ scale: 1.0, x: -10 }}
                >
                  <h3>{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                  <div className="edu-meta">
                    <span className="date">{edu.date}</span>
                    <span className="score gradient-text">{edu.score}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
