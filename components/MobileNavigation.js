// components/MobileNavigation.js
import { useState, useEffect } from 'react';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
    handleLinkClick();
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
          <img src="/logo.png" alt="Peter Bidle Logo" className="logo-image" />
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li>
                <a href="#home" onClick={() => scrollToSection('home')}>
                  <i className="fas fa-home"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection('about')}>
                  <i className="fas fa-user"></i>
                  About
                </a>
              </li>
              <li>
                <a href="#education" onClick={() => scrollToSection('education')}>
                  <i className="fas fa-graduation-cap"></i>
                  Education
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>
                  <i className="fas fa-briefcase"></i>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => scrollToSection('skills')}>
                  <i className="fas fa-code"></i>
                  Skills
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={() => scrollToSection('certifications')}>
                  <i className="fas fa-certificate"></i>
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection('contact')}>
                  <i className="fas fa-envelope"></i>
                  Contact
                </a>
              </li>
            </ul>

            {/* Social Links in Mobile Menu */}
            <div className="mobile-social">
              <a href="mailto:peterbidle1@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com/in/peterbidle" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/PJay1994" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div 
            className="mobile-backdrop" 
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
}