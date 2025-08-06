import './services.css'
const ServicesModal = ({ serviceData, closeModal }) => {
    return (
        <div className="services-modal">
            <div className="services-modal-content">
                <i className="uil uil-times services-modal-close" onClick={closeModal}></i>
                <h3 className="services-modal-title">
                    {serviceData.title.replace(/<br\s*\/?>/gi, ' ')}
                </h3>
                <p className="services-modal-description">{serviceData.description}</p>
                <ul className="services-modal-services grid">
                    {serviceData.services.map((service, index) => (
                        <li className="services-modal-service" key={index}>
                            <i className="uil uil-check-circle service-modal-icon"></i>
                            <p className="service-modal-description">{service}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServicesModal;