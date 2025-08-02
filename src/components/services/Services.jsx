import React, { useState } from 'react'
import './services.css'
const Services = () => {
  const [toggleIndex, setToggleIndex] = useState(null);
  const toggleTab = (index) => {
    setToggleIndex(index);
  }
  return (
    <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What I offer</span>
        <div className="services-container container grid">
            <div className="services-content">
                <div>
                    <i className="uil uil-web-grid services-icon"></i>
                    <h3 className="services-title">Product <br /> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(0)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>
                <div className={toggleIndex === 0 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={() => toggleTab(null)}></i>
                        <h3 className="services-modal-title">Product Designer</h3>
                        <p className="services-modal-description">Service with more than three years of experience. Providing quality work to clients and companies</p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i developed the user interface.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">web page development.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i create UX element interactions.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i position your company brand.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">Design and mockups of products for company.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-arrow services-icon"></i>
                    <h3 className="services-title">UI/UX <br /> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>
                <div className={toggleIndex === 1 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={() => toggleTab(null)}></i>
                        <h3 className="services-modal-title">UI/UX Designer</h3>
                        <p className="services-modal-description">Service with more than three years of experience. Providing quality work to clients and companies</p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i developed the user interface.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">web page development.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i create UX element interactions.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i position your company brand.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">Design and mockups of products for company.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-edit services-icon"></i>
                    <h3 className="services-title">Visual <br /> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>
                <div className={toggleIndex === 2 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={() => toggleTab(null)}></i>
                        <h3 className="services-modal-title">Visual Designer</h3>
                        <p className="services-modal-description">Service with more than three years of experience. Providing quality work to clients and companies</p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i developed the user interface.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">web page development.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i create UX element interactions.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">i position your company brand.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle service-modal-icon"></i>
                                <p className="service-modal-description">Design and mockups of products for company.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services