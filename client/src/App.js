import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Offers from './components/Offers';
import Projects from './components/Projects';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import MobileNavbar from './components/MobileNavbar';
import ScrollUp from './components/ScrollUp';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
    <ParallaxProvider>
      <Contact />
      <ScrollUp />
      <MobileNavbar />
      <Navbar />
      <Parallax>
        <Welcome />
      </Parallax>
      <Parallax speed={0}>
        <Offers />
      </Parallax>
      <Projects />
      <AboutMe />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
