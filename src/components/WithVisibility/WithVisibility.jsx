import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './WithVisibility.module.css'; // Define tus estilos aquí

const WithVisibility = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Se activa multiples veces
    threshold: 0.1, // El porcentaje del elemento que debe estar visible para activar
  });

  return (
    <div ref={ref} className={`${styles.fadeInSection} ${styles[animationClass]} ${inView ? styles.visible : ''}`}>
      {children}
    </div>
  );
};

export default WithVisibility;