import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';
import WithVisibility from '../WithVisibility/WithVisibility';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <WithVisibility animationClass="fromLeft">
      <h2 className={styles.title}>About Me</h2>
      </WithVisibility>
        <div className={styles.aboutItems}>
        
          <img className={styles.aboutImage} src={getImageUrl("about/about.png")} alt="Server icon" />
          <WithVisibility animationClass="fromBottom">
          <div className={styles.aboutText}>
          
            <p className={styles.subtitle}>Hi, my name is <span className={styles.accent}>Cristina Machuca</span>  and I've spent most of my waking hours for the last few years learning, designing, programming and operating Web sites. Apart from this I love to travel, hike, listen to rock music and everything related to web development. I am passionate about continuous learning, always seeking to improve my skills and stay updated with the latest technological trends. I am deeply committed to the success of every project I work on and take great joy in the development process, from initial concept to final deployment. 
            </p>
            <WithVisibility animationClass="scale">
            <a href="mailto:cristinamachucam@gmail.com" className={styles.connect}>Let's Connect</a>
            </WithVisibility>
          </div>
          </WithVisibility>
        </div>
    </section>
  );
};

