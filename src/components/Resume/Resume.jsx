import React from 'react';

import styles from "./Resume.module.css"
import education from "../../data/education.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils';
import { FaAward, FaUserGraduate } from "react-icons/fa";

export const Resume = () => {
  return <section className={styles.container} id='resume'>
    <div className={styles.content}>
        <h2 className={styles.title}><FaAward className={styles.icon}/> My Experience</h2>
        <ul className={styles.history}>
            {
                history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            
                            <div className={styles.historyItemDetails}>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <h2>{`${historyItem.role}`}</h2>
                                <h3>{`${historyItem.organisation}`}</h3>  
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    <div className={styles.content}>
        <h2 className={styles.title}><FaUserGraduate className={styles.icon}/> My Education</h2>
        <ul className={styles.history}>
            {
                education.map((educationItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            
                            <div className={styles.historyItemDetails}>
                                <h3>{`${educationItem.role}, ${educationItem.organisation}`}</h3>
                                <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                                
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    
    
    
  </section>
}
