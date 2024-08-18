import React, { useState } from 'react';
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { Gallery } from '../Gallery/Gallery';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>My Recent Projects</h2>
      {/*<h3 className={styles.subtitle}>DESIGNED TO IMPRESS!</h3>*/}
      <div className={styles.filters}>
        <button
          className={selectedCategory === 'all' ? styles.activeButton : ''}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'e-commerce' ? styles.activeButton : ''}
          onClick={() => setSelectedCategory('e-commerce')}
        >
          E-commerce
        </button>
        <button
          className={selectedCategory === 'web aplication' ? styles.activeButton : ''}
          onClick={() => setSelectedCategory('web aplication')}
        >
          Web Application
        </button>
        <button
          className={selectedCategory === 'Landing Page' ? styles.activeButton : ''}
          onClick={() => setSelectedCategory('Landing Page')}
        >
          Landing Page
        </button>
        <button
          className={selectedCategory === 'personal project' ? styles.activeButton : ''}
          onClick={() => setSelectedCategory('personal project')}
        >
          Personal Project
        </button>
      </div>
      
      <div className={styles.galleryContainer}>
        {projects
          .filter(project => selectedCategory === 'all' || project.category === selectedCategory)
          .map((project, id) => (
            <Gallery key={id} project={project} />
          ))
        }
      </div>
    </section>
  );
}
