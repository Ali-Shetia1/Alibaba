import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SingleProject from './components/single-project/SingleProject.jsx';
import PlayGround from './components/playground/PlayGround.jsx';

// Home Page Component (all sections together)
const HomePage = () => (
  <>
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualifications />
    <Projects />
    <Testimonials />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={
          <main className='main'>
            <HomePage />
          </main>
        } />
        {/* Individual project pages */}
        <Route path="/project/:slug" element={<SingleProject />} />
        <Route path='/playground' element={<PlayGround />} />
      </Routes>
      <Footer />
      <ScrollUp />
    </Router>
  );
}

export default App;
