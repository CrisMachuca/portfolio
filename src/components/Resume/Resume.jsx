import React from 'react';

import styles from "./Resume.module.css"
import education from "../../data/education.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils';
import { FaAward, FaUserGraduate } from "react-icons/fa";
import WithVisibility from '../WithVisibility/WithVisibility';

export const Resume = () => {
  return <section className={styles.container} id='resume'>
    <div className={styles.content}>
        <h2 className={styles.title}><FaAward className={styles.icon}/>Experience</h2>
        <ul className={styles.history}>
            {
                history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <WithVisibility animationClass="fromTop2">
                            <div className={styles.historyItemDetails}>
                                <div className={styles.circleContainer}>
                                    <div className={styles.circle}>
                                        <div className={styles.innerCircle}></div>
                                    </div>
                                    <div className={styles.line}></div>

                                </div>
                                <div className={styles.details}>
                                    <h2>{`${historyItem.role}`}</h2>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    
                                    <h4>{`${historyItem.organisation}`}</h4>  
                                </div>
                            </div>
                            </WithVisibility>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    <div className={styles.content}>
        <h2 className={styles.title}><FaUserGraduate className={styles.icon}/>Education</h2>
        <ul className={styles.history}>
            {
                education.map((educationItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <WithVisibility animationClass="fromTop2">
                            <div className={styles.historyItemDetails}>
                                <div className={styles.circleContainer}>
                                        <div className={styles.circle}>
                                            <div className={styles.innerCircle}></div>
                                        </div>
                                        <div className={styles.line}></div>

                                </div>
                                <div className={styles.details}>
                                    <h2>{`${educationItem.role}`}</h2>
                                    <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                                    
                                    <h4>{`${educationItem.organisation}`}</h4>
                                    
                                </div>
                            </div>
                            </WithVisibility>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    
    
    
  </section>
}
