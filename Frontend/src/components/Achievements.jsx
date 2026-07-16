import React from 'react';
import { motion } from 'framer-motion';
import './Education.css'; // Reuse timeline styling

const Achievements = () => {
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

  return (
    <motion.section
      id="achievements"
      className="education-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      style={{ paddingBottom: '6rem' }}
    >
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title">Academic & Extra-Curricular <span className="gradient-text">Achievements</span></h2>
        <p className="section-subtitle">Recognitions, hackathons, and certifications I've earned.</p>
      </div>

      <div className="education-container" style={{ justifyContent: 'center' }}>
        <div className="timeline-side" style={{ maxWidth: '800px', width: '100%' }}>
          <div className="timeline-wrapper">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-row"
              >
                <div className="timeline-dot" style={{ left: '15px' }}></div>
                <motion.div
                  className="timeline-item glass-panel"
                  whileHover={{ scale: 1.01, x: 10 }}
                  style={{ marginLeft: '40px' }}
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
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
