import React from 'react'

import { FaHeart, FaFacebook, FaGithub, FaLinkedin, FaDownload, FaEye, FaPaperclip } from "react-icons/fa";

import styles from "./Gallery.module.css"
import { getImageUrl } from '../../utils';

export const Gallery = ({ project }) => {
    const { title, imageSrc, description, skills } = project;
  
    return (
      
      <div className={styles.gallery}>
      <figure className={styles.effectZoe}>
        <img 
          src={getImageUrl(imageSrc)} 
          alt={`Image of ${title}`} 
          className={styles.image}
        />
        <figcaption>
          <h2>{title}</h2>
          <p className={styles.iconLinks}>
            <a href="#"><FaHeart className={styles.iconHeart}/></a>
            <a href="#"><FaEye className={styles.iconEye}/></a>
            <a href="#"><FaPaperclip className={styles.iconPaper}/></a>
          </p>
          <p className={styles.description}>{description}</p>
        </figcaption>			
      </figure>
    </div>
      
      
    );
  };

