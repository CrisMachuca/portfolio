import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects.json';
import styles from './ProjectDetail.module.css';
import { getImageUrl } from '../../utils';
import NavbarHero from '../Navbar/NavbarHero';
import { FaCode, FaEye, FaGlobe, FaPhoneVolume } from 'react-icons/fa';
import WithVisibility from '../WithVisibility/WithVisibility';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <NavbarHero />
      <div className={styles.projectDetail}>
        <h1 className={styles.title}>{project.title}</h1>
        <h2>Project Details</h2>
        <p>{project.description}</p>
        <WithVisibility animationClass="fromLeft">
          <div className={styles.imgContainer}>
            <img src={getImageUrl(project.imageSrc)} className={styles.mainImg} alt={project.title} />
            <div className={styles.block1}>
                <a href={project.demo} target="_blank"><FaGlobe /> View site on Live!</a>
                <a href={project.source} target="_blank"><FaCode /> The code</a>
              </div>
          </div>
        </WithVisibility>
        <div className={styles.mainTextContainer}>
          <div className={styles.left}>
            
            <div className={styles.block}>
              <WithVisibility animationClass="fromBottom">
              <h1>Website Functionality</h1>
              </WithVisibility>
              <ul>
                {project.functionality.map(functionality => (
                  <WithVisibility animationClass="fromBottom">
                  <li key={functionality}>{functionality}</li>
                  </WithVisibility>
                ))}
              </ul>
            </div>
            <div className={styles.block}>
              <WithVisibility animationClass="fromBottom">
              <h1>Technologies Used</h1>
              </WithVisibility>
              <ul>
                {project.technologies.map(technologies => (
                  <WithVisibility animationClass="fromBottom">
                  <li key={technologies}>{technologies}</li>
                  </WithVisibility>
                ))}
              </ul>
            </div>
            <div className={styles.block}>
              <WithVisibility animationClass="fromBottom">
              <h1>Website Purpose</h1>
              </WithVisibility>
              <WithVisibility animationClass="fromBottom">
              <p>{project.purpose}</p>
              </WithVisibility>
            </div>

            {project.extraImg && (
              <div className={styles.block4}>
                {project.extraImg.map((extraImg, index) => (
                  <img key={index} src={getImageUrl(extraImg)} className={styles.extraImg} alt={`Extra ${index}`} />
                ))}
              </div>
            )}
          </div>
          <div className={styles.right}>
            <WithVisibility animationClass="fromRight">
            <div className={styles.details}>
              <h1>Project Details</h1>
              <ul>
                <li className={styles.border}>
                  <h3 className={styles.leftList}>Name:</h3>
                  <li>{project.title}</li>
                </li>
                <li className={styles.border}>
                  <h3 className={styles.leftList}>Skills:</h3>
                  <ul>
                    {project.skills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </li>
                <li className={styles.border}>
                  <h3 className={styles.leftList}>Category</h3>
                  <li>{project.category}</li>
                </li>
                <li className={styles.border}>
                  <h3 className={styles.leftList}>Date:</h3>
                  <li>{project.date}</li>
                </li>
              </ul>
            </div>
            </WithVisibility>
            <WithVisibility animationClass="fromRight">
            <div className={styles.banner}>
              <FaPhoneVolume className={styles.phone} />
              <h3>Looking for a Full Stack Developer?</h3>
              <button><img className={styles.flag} src={getImageUrl("projectDetail/espana.png")} alt="Spain Flag" />+(34) 660 80 06 31</button>
            </div>
            </WithVisibility>
          </div>
        </div>
      </div>
    </>
  );
};
