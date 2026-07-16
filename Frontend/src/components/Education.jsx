import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const achievements = [
    {
      title: 'Academic Achievements & Certifications',
      subtitle: 'Coding & Certifications',
      desc: [
        'GeeksforGeeks Rank: 24th at CEC, Mohali',
        'Solved 225+ DSA problems on LeetCode & GFG',
        'MERN Full Stack Development Certification',
        'DSA (Java) & SQL Certifications'
      ]
    },
    {
      title: 'Extra-Curricular Achievements',
      subtitle: 'Hackathons & Leadership',
      desc: [
        'Secured 3rd position in D4 (Google) Hackathon 2023 at CGC Jhanjeri',
        'Participated in Smart India Hackathon (SIH) 2024 with real-world problem solving',
        'Coordinated multiple college events, demonstrating teamwork and leadership'
      ]
    }
  ];

  const education = [
    { degree: 'B.Tech, Computer Science Engineering', school: 'Chandigarh Engineering College Landran, Mohali', date: '2022 - 2026', score: 'CGPA: 7.5/10' },
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
        {/* Left Side: Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="timeline-side"
        >
          <div className="section-header align-left">
            <h2 className="section-title">Achievements & <span className="gradient-text">Certifications</span></h2>
          </div>

          <div className="timeline-wrapper">
            {achievements.map((ach, index) => (
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
                  <h3>{ach.title}</h3>
                  <p className="school">{ach.subtitle}</p>
                  {Array.isArray(ach.desc) ? (
                    <ul className="exp-desc-list">
                      {ach.desc.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="exp-desc">{ach.desc}</p>
                  )}
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
