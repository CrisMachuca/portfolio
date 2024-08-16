import React from 'react';
import { FaHeart, FaFacebook, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { FaArrowPointer, FaServer } from 'react-icons/fa6';
import NavbarHero from '../Navbar/NavbarHero';
import WithVisibility from '../WithVisibility/WithVisibility';

export const Hero = () => {
  return (
  <section className={styles.superContainer}>
    <NavbarHero />
    
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img src={getImageUrl("hero/wave-hello.gif")} alt="waving hand" className={styles.hand}/>
          <h1 className={styles.title}>Hello, I am <span className={styles.name}>Cristina</span></h1>
          
        </div>
        
        <h2 className={styles.subtitle}>&lt;Full Stack Developer/&gt;</h2>
        <div className={styles.services}>
            
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    
                    <div className={styles.aboutItemText}>
                      <FaArrowPointer className={styles.pointer}/>
                      <h3 className={styles.front}>Frontend</h3>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    
                    <div className={styles.aboutItemText}>
                      <FaServer className={styles.server}/>
                      <h3 className={styles.back}>Backend</h3>
                    </div>
                </li>
                
            </ul>
        </div>
      
        <div className={styles.heroBtns}>
            <a href="/CristinaMachucaResume.pdf" download className={styles.contactBtn}>Download CV <FaDownload /></a> 
            <div className={styles.links}>
              <a href=""><FaLinkedin className={styles.social}/></a>
              <a href=""><FaGithub className={styles.social}/></a>
            </div>
            
        </div>
      </div>
      <div className={styles.imgContainer}>
        
        
        <img 
            src={getImageUrl("hero/heroImage5555.png")} alt="Hero image of me" className={styles.heroImg}/>
        
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
      </div>
    </div>
   
  </section>
  );
};
