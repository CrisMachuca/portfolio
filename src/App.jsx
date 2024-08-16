import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Skills } from './components/Skills/Skills';
import { Hero } from './components/Hero/Hero';
import { Resume } from './components/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { SoftSkills } from './components/SoftSkills/SoftSkills';
import { ProjectDetail } from './components/ProjectDetail/ProjectDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import WithVisibility from './components/WithVisibility/WithVisibility';
import { NotAvailable } from './components/NotAvailable/NotAvailable';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/not-available/:id" element={<NotAvailable />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <WithVisibility><Hero /></WithVisibility>
    <WithVisibility><SoftSkills /></WithVisibility>
    <About />
    <WithVisibility><Skills /></WithVisibility>
    <WithVisibility><Projects /></WithVisibility>
    <WithVisibility><Resume /></WithVisibility>
    <WithVisibility><Contact /></WithVisibility>
  </>
);

export default App;