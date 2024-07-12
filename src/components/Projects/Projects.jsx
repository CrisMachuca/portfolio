import React, { useState } from 'react'

import styles from "./Projects.module.css"
import Masonry from 'react-masonry-css';
import projects from "../../data/projects.json"
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
  <section className={styles.container} id='projects'>
    <h2 className={styles.title}>My Recent Projects</h2>
    <h3 className={styles.subtitle}>DESIGNED TO IMPRESS!</h3>
    <div className={styles.filters}>
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('e-commerce')}>E-commerce</button>
        <button onClick={() => setSelectedCategory('web aplication')}>Web Application</button>
        <button onClick={() => setSelectedCategory('Landing Page')}>Landing Page</button>
        <button onClick={() => setSelectedCategory('personal project')}>Personal Project</button>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {
          projects
            .filter(project => selectedCategory === 'all' || project.category === selectedCategory)
            .map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })
        }
      </Masonry>
  </section>
  )
}

