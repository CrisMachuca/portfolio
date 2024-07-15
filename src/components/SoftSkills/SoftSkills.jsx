import React from 'react';

import softskills from "../../data/softskills.json"
import styles from "./SoftSkills.module.css";
import { getImageUrl } from '../../utils';

export const SoftSkills = () => {
  return (
    <section className={styles.container} id='softskills'>
      
      <div className={styles.softSkills}>
            {softskills.map((softskill, id) => {
                return (
                <div key={id} className={styles.softSkill}>
                    <div className={styles.softSkillImageContainer}>
                        <img src={getImageUrl(softskill.imageSrc)} alt={softskill.title} /> 
                    </div>
                    <p className={styles.title}>{softskill.title}</p>
                    <p className={styles.description}>{softskill.description}</p>
                </div>
                );
            })}
        </div>
    </section>
  );
};

