import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { FaArrowPointer, FaServer } from 'react-icons/fa6';
import NavbarHero from '../Navbar/NavbarHero';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                      <div className={styles.containerButton}>
                        <div className={styles.buttons}>
                          <FaArrowPointer className={styles.icons}/>
                          Frontend
                        </div>
                      </div>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                      <div className={styles.containerButton}>
                          <div className={styles.buttons}>
                            <FaServer className={styles.icons}/>
                            Backend
                          </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      
        <div className={styles.heroBtns}>
            {/* Aquí cambiamos el botón de descarga por uno que abre el modal */}
            <button onClick={openModal} className={styles.contactBtn}>
              View CV <FaDownload />
            </button>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/in/cristina-machuca-martinez/" target="_blank"><FaLinkedin className={`${styles.social} ${styles.linkedin}`}/></a>
              <a href="https://github.com/CrisMachuca" target="_blank"><FaGithub className={`${styles.social} ${styles.github}`}/></a>
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

    {/* Modal */}
    {isModalOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <iframe src="/CristinaMachucaResume.pdf" width="100%" height="600px" title="CV"></iframe>
        </div>
      </div>
    )}
  </section>
  );
};
