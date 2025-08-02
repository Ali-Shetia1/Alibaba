import React from 'react';
import './projects.css';

// Import project images
import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';
import Work5 from '../../assets/work5.jpg';
import Klimate from '../../assets/klimate.png';



const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: Work3,
      title: "Laptix | E-Commerce Store",
      description: "Modern e-commerce store with React and Node.js",
      link: "#project1"
    },
    {
      id: 2,
      image: Work2,
      title: "Klimate | Weather App",
      description: "Modern real-time weather app with React and TypeScript",
      link: "#project2"
    },
    {
      id: 3,
      image: Work3,
      title: "School Marines | School Management App",
      description: "Responsive portfolio with modern design principles",
      link: "#project3"
    },
    {
      id: 4,
      image: Work4,
      title: "Ihsaa Maintenance | Landing Page",
      description: "Real-time weather data visualization",
      link: "#project4"
    },
    {
      id: 5,
      image: Work5,
      title: "Social Media App",
      description: "Full-stack social media application",
      link: "#project5"
    },
    {
      id: 6,
      image: Work1,
      title: "Food Delivery App",
      description: "Mobile-first food ordering platform",
      link: "#project6"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects Carried Out</h2>
      <span className="section-subtitle">My recent work</span>
      
      <div className="projects-container container grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-overlay-content">
                  <h3 className="project-overlay-title ">{project.title}</h3>
                  <p className="project-overlay-description">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <a href={project.link} className="project-button button button-flex">
                View Project
                <i className="uil uil-arrow-right project-button-icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
