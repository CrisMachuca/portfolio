import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Gallery.module.css";
import { getImageUrl } from '../../utils';

export const Gallery = ({ project }) => {
  const { id, title, imageSrc, description } = project;

  return (
    <Link to={`/project/${id}`} className={styles.gallery}>
      <div className={styles.effectZoe}>
        <img 
          src={getImageUrl(imageSrc)} 
          alt={`Image of ${title}`} 
          className={styles.image}
        />
      </div>
      <div className={styles.underImage}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
