import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.json';
import styles from './ProjectDetail.module.css';
import { getImageUrl } from '../../utils';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectDetail}>
      <h1>{project.title}</h1>
      <img src={getImageUrl(project.imageSrc)} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};
