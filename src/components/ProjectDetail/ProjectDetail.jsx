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
        
      </div>
    </>
  );
};
