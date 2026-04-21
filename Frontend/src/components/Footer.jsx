import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-left">
          &copy; 2026 Mr. Amit Kumar Yadav. All rights reserved.
        </div>
        <div className="footer-middle">
          <a href="https://github.com/amitkumaryadav2672" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/amit-kumar-yadav-52a56529a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yadavamit847412@gmail.com&su=Let's discuss an opportunity" target="_blank" rel="noreferrer" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <div className="footer-right">
          Created with ♥ and a mind for logic & a heart for design.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
