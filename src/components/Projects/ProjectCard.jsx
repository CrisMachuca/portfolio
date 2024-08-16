import React from 'react'

import styles from "./ProjectCard.module.css"
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ project : {title, imageSrc, description, skills, demo, source} }) => {
    
  return (
    <div className={styles.container}>
                    <div className={styles.imageContainer}>
                      <img 
                          src={getImageUrl(imageSrc)} 
                          alt={`Image of ${title}`} 
                          className={styles.image}
                      />
                    </div>
                    <div className={styles.more}>
                      <h2 className={styles.title}>{title}</h2>
                      <p className={styles.description}>{description}</p>
                    </div>
                    
    </div>
  )
}

