import React from 'react'

import styles from "./Gallery.module.css"
import { getImageUrl } from '../../utils';

export const Gallery = ({ project }) => {
    const { title, imageSrc, description } = project;
  
    return (
      <div className={styles.gallery}>
        <div className={styles.galleryItem}>
          <img 
            src={getImageUrl(imageSrc)} 
            alt={`Image of ${title}`} 
            className={styles.image}
          />
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.caption}>{description}</div>
        </div>
      </div>
    );
  };

