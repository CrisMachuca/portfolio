import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <div className={styles.aboutItems}>
          <img className={styles.aboutImage} src={getImageUrl("about/about.png")} alt="Server icon" />
          <div className={styles.aboutText}>
            <h2 className={styles.title}>About Me.</h2>
            <p className={styles.subtitle}>Hi, my name is <span className={styles.accent}>Cristina Machuca</span>  and I've spent most of my waking hours for the last  years learning, designing, programming and operating Web sites. Apart from this I love to travel, the rock music and everything related to web development. I am deeply committed to the success of every project I work on and take great joy in the development process, from initial concept to final deployment.</p>
            
            <button className={styles.connect}>Let's Connect</button>
          </div>
        </div>
    </section>
  );
};

