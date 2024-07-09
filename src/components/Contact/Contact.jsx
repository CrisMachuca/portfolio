import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:cristinamachucam@gmail.com">cristinamachucam@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email icon" />
                <a href="https://www.linkedin.com/in/cristina-machuca-martinez">linkedin.com/in/cristina-machuca-martinez</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
                <a href="https://github.com/CrisMachuca">github.com/CrisMachuca</a>
            </li>
        </ul>
    </footer>
  )
}
