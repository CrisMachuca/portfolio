import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Gallery.module.css";
import { getImageUrl } from '../../utils';
import { FaArrowRightToBracket } from 'react-icons/fa6';

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
        <div className={styles.hoverOverlay}>
          <div className={styles.left}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.right}>
            <FaArrowRightToBracket className={styles.arrow}/>
          </div>
          
        </div>
      </div>
      
    </Link>
  );
};
