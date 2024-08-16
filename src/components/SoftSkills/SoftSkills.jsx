import React from 'react';

import softskills from "../../data/softskills.json"
import styles from "./SoftSkills.module.css";
import { getImageUrl } from '../../utils';
import WithVisibility from '../WithVisibility/WithVisibility';

export const SoftSkills = () => {
  return (
    <section className={styles.container} id='softskills'>
      
      <div className={styles.softSkills}>
            {softskills.map((softskill, id) => {
                return (
                <WithVisibility animationClass="fromTop">
                <div className={styles.softSkill}>
                    <div className={styles.softSkillImageContainer}>
                        <img src={getImageUrl(softskill.imageSrc)} alt={softskill.title} /> 
                    </div>
                    <p className={styles.title}>{softskill.title}</p>
                    <div className={styles.description}>
                    <div className={styles.softSkillImageContainer2}>
                        <img src={getImageUrl(softskill.imageSrc)} alt={softskill.title} /> 
                    </div>
                        <p>{softskill.description}</p>
                    </div>
                </div>
                </WithVisibility>
                );
            })}
        </div>
    </section>
  );
};

