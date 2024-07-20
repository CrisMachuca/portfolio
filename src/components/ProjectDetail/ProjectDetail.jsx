import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.json';
import styles from './ProjectDetail.module.css';
import { getImageUrl } from '../../utils';
import NavbarHero from '../Navbar/NavbarHero';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
    <NavbarHero />
      <div className={styles.projectDetail}>
        <h1>{project.title}</h1>
        <h2>Project Details</h2>
        <p>{project.description}</p>
        <img src={getImageUrl(project.imageSrc)} alt={project.title} />
        <div className={styles.mainTextContainer}>
          <div className={styles.left}>
            <div className={styles.block1}>
            <h1>Delivering Better Business News With an Improved User Experience.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam ex saepe nesciunt iusto, in tempora pariatur delectus atque quibusdam, ad aperiam qui ea fugiat repellat voluptatum voluptatibus quos totam? Eius, molestiae qui maxime accusantium odit consequuntur voluptatem quas harum, ea quasi ullam voluptatibus corrupti! Quae quod magnam laborum quaerat temporibus, nulla animi suscipit consequuntur exercitationem iure expedita nam iste consectetur saepe necessitatibus nemo, voluptatum recusandae dolores quibusdam ea impedit?</p>
            </div>
            <div className={styles.block2}>
            <h1>Overview</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam ex saepe nesciunt iusto, in tempora pariatur delectus atque quibusdam, ad aperiam qui ea fugiat repellat voluptatum voluptatibus quos totam? Eius, molestiae qui maxime accusantium odit consequuntur voluptatem quas harum, ea quasi ullam voluptatibus corrupti! Quae quod magnam laborum quaerat temporibus, nulla animi suscipit consequuntur exercitationem iure expedita nam iste consectetur saepe necessitatibus nemo, voluptatum recusandae dolores quibusdam ea impedit?</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.details}>
              <h1>Project Details</h1>
              <ul>
                <li>Name</li>
                <li>skills</li>
                <li>Date</li>
                
              </ul>
            </div>
            <div className={styles.banner}>
              <img src="" alt="" />
              <p>hola hola</p>
              <button>llamame</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
