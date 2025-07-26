// components/MobileNavigation.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';  // ADD THIS IMPORT

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();  // ADD THIS

  // Check if we're on the home page
  const isHomePage = router.pathname === '/';  // ADD THIS

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

  // UPDATED: Smooth scroll to section with proper page navigation
  const scrollToSection = (id) => {
    if (isHomePage) {
      // If we're on the home page, scroll normally
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80;
        window.scrollTo({
          top: element.offsetTop - navHeight,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on a project page, navigate to home page with hash
      router.push(`/#${id}`);
    }
    handleLinkClick();
  };

  // UPDATED: Handle logo click
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHomePage) {
      // If on home page, scroll to top
      scrollToSection('home');
    } else {
      // If on project page, navigate to home page
      router.push('/');
    }
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
        {/* Logo - UPDATED */}
        <a href="/" className="logo" onClick={handleLogoClick}>
          <img src="/logo.svg" alt="Peter Bidle Logo" className="logo-image" />
        </a>

        {/* Desktop Navigation - UPDATED */}
        <ul className="nav-links desktop-nav">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
          <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
          <li><a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>Certifications</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
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

        {/* Mobile Menu Overlay - UPDATED */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  <i className="fas fa-home"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  <i className="fas fa-user"></i>
                  About
                </a>
              </li>
              <li>
                <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>
                  <i className="fas fa-graduation-cap"></i>
                  Education
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>
                  <i className="fas fa-briefcase"></i>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                  <i className="fas fa-code"></i>
                  Skills
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>
                  <i className="fas fa-certificate"></i>
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
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