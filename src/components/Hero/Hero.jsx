import React from 'react';
import { FaHeart, FaFacebook, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>I`m Cristina Machuca</h1>
        <h2 className={styles.subtitle}>Web Developer</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non est temporibus corporis quaerat animi fuga quis!.</p>
        <div className={styles.heroBtns}>
          <a href="/CristinaMachucaResume.pdf" download className={styles.contactBtn}>Download CV <FaDownload /></a>
          <a href=""><FaFacebook className={styles.social}/></a>
          <a href=""><FaLinkedin className={styles.social}/></a>
          <a href=""><FaGithub className={styles.social}/></a>
        </div>
    </div>
    <img 
        src={getImageUrl("hero/heroImage5.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
};
