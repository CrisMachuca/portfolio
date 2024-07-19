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

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <Hero />
    <SoftSkills />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Contact />
  </>
);

export default App;
