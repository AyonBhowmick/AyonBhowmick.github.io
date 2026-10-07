import { useMemo } from 'react';
import useTheme from './hooks/useTheme.js';
import useScrollSpy from './hooks/useScrollSpy.js';
import { navLinks } from './data/portfolio.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Research from './components/Research.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Icon from './components/Icon.jsx';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const { active, progress } = useScrollSpy(ids);

  return (
    <>
      <div id="progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} active={active} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
      <a id="to-top" href="#home" aria-label="Back to top"
         className={`btn-primary grid h-11 w-11 place-items-center rounded-full shadow-lg ${progress > 0.12 ? 'show' : ''}`}>
        <Icon name="arrowUp" />
      </a>
    </>
  );
}
