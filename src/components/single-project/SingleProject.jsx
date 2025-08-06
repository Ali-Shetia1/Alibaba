import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projectsData';
import './SingleProject.css';

const SingleProject = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get project data by slug
  const project = getProjectBySlug(slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [slug]);

  return (
    <main className="single-project-main">
      <section className="single-project-section">
        <div className="single-project-container container">
          
          {/* Back to Projects Button */}
          <div className="back-button-container">
            <button 
              onClick={() => navigate('/#projects')} 
              className="back-button button button-flex"
            >
              <i className="uil uil-arrow-left"></i>
              Back to Projects
            </button>
          </div>

          {/* Project Layout: Image Left, Content Right */}
          <div className="project-layout">
            {/* Left Column - Image */}
            <div className="project-image-section">
              <div className="project-image-main">
                <img 
                  src={project.images ? project.images[currentImageIndex] : project.image} 
                  alt={project.title} 
                />
              </div>
              
              {/* Image Gallery Thumbnails */}
              {project.images && project.images.length > 1 && (
                <div className="image-gallery">
                  <h3 className="gallery-title">
                    <i className="uil uil-images"></i>
                    Project Gallery
                  </h3>
                  <div className="gallery-thumbnails">
                    {project.images.map((image, index) => (
                      <div 
                        key={index}
                        className={`gallery-thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img src={image} alt={`${project.title} view ${index + 1}`} />
                        <div className="thumbnail-overlay">
                          <i className="uil uil-eye"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Content */}
            <div className="project-content-section">
              {/* Project Info */}
              <div className="project-info">
                <h1 className="project-main-title">{project.title}</h1>
                <p className="project-description">{project.longDescription}</p>
              </div>

              {/* Technologies Used */}
              <div className="project-section">
                <h2 className="project-section-title">
                  <i className="uil uil-brackets-curly project-section-icon"></i>
                  Technologies Used
                </h2>
                <div className="technologies-grid">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Features */}
              <div className="project-section">
                <div className="features-header">
                  <h2 className="project-section-title">
                    <i className="uil uil-star project-section-icon"></i>
                    Key Features
                  </h2>
                  <button 
                    onClick={() => setShowFeatures(!showFeatures)}
                    className="features-toggle-btn button button-flex"
                  >
                    {showFeatures ? (
                      <>
                        <i className="uil uil-eye-slash"></i>
                        Hide Features
                      </>
                    ) : (
                      <>
                        <i className="uil uil-eye"></i>
                        Show Features
                      </>
                    )}
                  </button>
                </div>
                {showFeatures && (
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <i className="uil uil-check-circle feature-icon"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Project Actions */}
              <div className="project-actions">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="visit-website-button button button-flex"
                >
                  <i className="uil uil-external-link-alt"></i>
                  View Project
                </a>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-button button button-flex button-white"
                  >
                    <i className="uil uil-github-alt"></i>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProject;
