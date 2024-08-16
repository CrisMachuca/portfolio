import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import styles from './NotAvailable.module.css';
import { getImageUrl } from '../../utils';
import NavbarHero from '../Navbar/NavbarHero';
import { FaCode, FaEye, FaGlobe, FaPhoneVolume } from 'react-icons/fa';


export const NotAvailable = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleBackClick = (e) => {
        
        navigate(`/project/${id}`);
        }
    

    return (
        <>
        
        <div className={styles.notAvailable}>
        <NavbarHero />
            <div className={styles.container}>
                <h1>Project Not Available</h1>
                <p>The project you are trying to view is not available for live preview at the moment.</p>
                <div className={styles.imgContainer}>
                    <img src={getImageUrl("notAvailable/notfound2.png")} alt="Not Found" className={styles.mainImg}/>
                    <button className={styles.backButton} onClick={handleBackClick}>Back</button>
                </div>
            </div>
        </div>
        </>
      );
    };