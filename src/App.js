import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx'
import Qualifications from './components/qualifications/Qualifications.jsx';
import Projects from './components/projects/Projects.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/scrollUp/ScrollUp.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
