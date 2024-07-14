
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Skills } from './components/Skills/Skills';
import { Hero } from './components/Hero/Hero';
import { Resume } from './components/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Divisor } from './components/Divisor/Divisor';



function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Divisor />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
