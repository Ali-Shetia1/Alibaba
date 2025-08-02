import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Alibaba</h1>
                <ul className="footer-list">
                    <li>
                        <a className='footer-link' href="#about">About</a>
                    </li>
                    <li>
                        <a className='footer-link' href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className='footer-link' href="#testimonials">Testimonials</a>
                    </li>
                </ul>
                <div className="footer-social">
                    <a href="https://www.facebook.com" className="footer-social-link" target='_blank'>
                        <i class='bx bxl-facebook'></i>
                    </a>

                    <a href="https://www.instagram.com" className="footer-social-link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="htts://www.x.com" className="footer-social-link" target='_blank'>
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer-copy">&#169; Aircode. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;