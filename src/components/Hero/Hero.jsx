import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I`m Cris Machuca</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non est temporibus corporis quaerat animi fuga quis!.</p>
        <a href="mailto:cristinamachucam@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img 
        src={getImageUrl("hero/heroImage3.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
};
