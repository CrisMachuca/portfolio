import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        
        <h2 className={styles.title}>About Me.</h2>
        <p className={styles.subtitle}>Hello! I’m Cristina a self-taught Web Designer & Developer. I started in my children’s room and got professional knowledge until nowadays.</p>
        <div className={styles.details}>
            <ul>
                <li>Phone: (+34) 660 800 631</li>
                <li>Email: cristinamachucam@gmail.com</li>
                <li>Languages: English, Spanish</li>
            </ul>

        </div>
        <div className={styles.content}>
            <img
            src={getImageUrl("about/aboutImage.png")}
            alt='Me sitting with a laptop'
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience developing APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UX/UI</h3>
                        <p>I'm a backend developer with experience developing APIs</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};

