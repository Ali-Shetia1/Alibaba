import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
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
                  <p className="project-overlay-description">{project.shortDescription}</p>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <Link to={`/project/${project.slug}`} className="project-button button button-flex">
                View Project
                <i className="uil uil-arrow-right project-button-icon"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
