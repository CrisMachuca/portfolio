import React from 'react';
import { FaHeart, FaFacebook, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { FaArrowPointer, FaServer } from 'react-icons/fa6';
import NavbarHero from '../Navbar/NavbarHero';

export const Hero = () => {
  return (
  <section className={styles.superContainer}>
    <NavbarHero />
    
    <div className={styles.container}>
      <div className={styles.content}>
          <h1 className={styles.title}>I'm Cristina Machuca</h1>
          <h2 className={styles.subtitle}>&lt;Full Stack Developer/&gt;</h2>
          <div className={styles.services}>
            
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <FaArrowPointer className={styles.pointer}/>
                    <div className={styles.aboutItemText}>
                        <h3 className={styles.front}>Frontend Developer</h3>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <FaServer className={styles.server}/>
                    <div className={styles.aboutItemText}>
                        <h3 className={styles.back}>Backend Developer</h3>
                    </div>
                </li>
                
            </ul>
        </div>
          <p className={styles.description}>From front-end aesthetics to back-end logic, I craft complete digital solutions. Ready to innovate together?</p>
          <div className={styles.heroBtns}>
            <a href="/CristinaMachucaResume.pdf" download className={styles.contactBtn}>Download CV <FaDownload /></a> 
            <a href=""><FaLinkedin className={styles.social}/></a>
            <a href=""><FaGithub className={styles.social}/></a>
          </div>
      </div>
      <img 
          src={getImageUrl("hero/heroImage5.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      
    </div>
   
  </section>
  );
};
