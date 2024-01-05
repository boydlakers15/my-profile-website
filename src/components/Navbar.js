import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the Menu styles

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
  
      // Check if the sections exist before accessing their properties
      if (aboutSection && skillsSection) {
        const scrollPosition = window.scrollY + 64; // Consider header height
  
        if (scrollPosition < aboutSection.offsetTop) {
          setActiveSection('about');
        } else if (scrollPosition < skillsSection.offsetTop) {
          setActiveSection('skills');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav>
      <ul className="vertical-menu">
        <li className={activeSection === 'home' ? 'active' : ''}><a href="/">Home</a></li>
        <li className={activeSection === 'home' ? 'active' : ''}><a href="/Profile">Profile</a></li>
        <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">About Me</a></li>
        <li className={activeSection === 'skills' ? 'active' : ''}><a href="/Skills">Skills</a></li>
        <li className={activeSection === 'contact' ? 'active' : ''}><a href="https://github.com/boydlakers15/certificates-jared">Certificates</a></li>
        {/* Add more creative elements to your menu, like icons or animations */}
        <div className="cursor"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
