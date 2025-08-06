import React, { useState } from 'react'
import './services.css'
import { ServicesData } from '../../data/servicesData';
import ServicesModal from './ServicesModal';
const Services = () => {
  const [modalData, setModalData] = useState(null);
  const openModal = (data) => {
    setModalData(data);
    console.log(modalData)
  }
  const closeModal = () => {
    setModalData(null);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I offer</span>
      <div className="services-container container grid">
        {ServicesData.map((service, index) => (
          <div className="services-content" key={index}>
            <div>
              <i className={`uil ${service.icon} services-icon`}></i>
              <h3 className="services-title" dangerouslySetInnerHTML={{ __html: service.title}}></h3>
            </div>
            <span className={`services-button ${index === 1 || index === 2 ? "services-buttons-disabled" : ""}`} onClick={() => openModal(service)}>
              View More <i className={`uil ${index === 0 ? "uil-arrow-right" : "uil-ban"} services-button-icon`}></i>
            </span>
          </div>
        ))}
        {modalData && (
          <ServicesModal serviceData={modalData} closeModal={closeModal}/>
        )}
      </div>
    </section>
  )
}

export default Services