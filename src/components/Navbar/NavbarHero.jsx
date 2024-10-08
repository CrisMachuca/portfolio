import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./NavbarHero.module.css";
import { getImageUrl } from '../../utils';

const NavbarHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    navigate('/');  // Navega a la página principal
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);  // Añade un pequeño retraso para asegurar que la navegación ha ocurrido
  };

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.navbarVisible : ''}`}>
      <div className={styles.navbarLeft}>
        <div className={styles.logoTitle}>
          <img src={getImageUrl("nav/logo.png")} alt="logo" className={styles.logo}/>
          <a className={styles.title} href="/"><span><i>Cristina</i></span><i>Machuca</i></a>
        </div>
        
      </div>
      
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn} 
          src={menuOpen 
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
          }
          alt='menu button'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a onClick={() => handleNavClick('about')}>About</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('resume')}>Resume</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('skills')}>Skills</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('projects')}>Projects</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('contact')}>Contact</a>
          </li>
          <a href="mailto:cristinamachucam@gmail.com" className={styles.hire}>Hire Me</a>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarHero;
