import React, {useState, useEffect} from 'react';

import styles from "./NavbarHero.module.css";
import { getImageUrl } from '../../utils';

const NavbarHero = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

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

  return <nav className={`${styles.navbar} ${isVisible ? styles.navbarVisible : ''}`}>
    <div className={styles.navbarLeft}>
    <a className={styles.title} href="/">Portfolio</a>
    <a href="mailto:cristinamachucam@gmail.com" className={styles.email}>cristinamachucam@gmail.com </a>
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
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <a href="mailto:cristinamachucam@gmail.com" className={styles.hire}>Hire Me</a>
        </ul>
    </div>
  </nav>;
    
};

export default NavbarHero