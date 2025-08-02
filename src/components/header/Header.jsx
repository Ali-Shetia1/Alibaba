import React, { useState } from "react";
import "./header.css";
import Qualifications from "../qualifications/Qualifications";
const Header = () => {
    const selectedNav = {
        HOME: 'HOME',
        ABOUT: 'ABOUT',
        SKILLS: 'SKILLS',
        SERVICES: 'SERVICES',
        PROJECTS: 'PROJECTS',
        Qualifications: 'Qualifications',
        CONTACT: 'CONTACT',
    }
    const [toggle, showMenu] = useState(false);
    const [selectedNavState, setSelectedNavState] = useState(selectedNav.HOME);
    
    return (
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav-logo">ALIBABA</a>
                    <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
                        <ul className="nav-list grid">
                            <li className="nav-item">
                                <a href="#home" className={selectedNavState === selectedNav.HOME ? "nav-link active-link" : "nav-link"}
                                onClick={() => setSelectedNavState(selectedNav.HOME)}>
                                    <i className="uil uil-estate nav-icon"></i> Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about"
                                className={selectedNavState === selectedNav.ABOUT ? "nav-link active-link" : "nav-link"}
                                onClick={() => setSelectedNavState(selectedNav.ABOUT)}>
                                    <i className="uil uil-user nav-icon"></i> About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className={selectedNavState === selectedNav.SKILLS ? "nav-link active-link" : "nav-link"}
                                onClick={() => setSelectedNavState(selectedNav.SKILLS)}>
                                    <i className="uil uil-file-alt nav-icon"></i> Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className={selectedNavState === selectedNav.SERVICES ? "nav-link active-link" : "nav-link"}
                                onClick={() => setSelectedNavState(selectedNav.SERVICES)}>
                                    <i className="uil uil-briefcase-alt nav-icon"></i> Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className={selectedNavState === selectedNav.PROJECTS ? "nav-link active-link" : "nav-link"}
                                onClick={() => setSelectedNavState(selectedNav.PROJECTS)}>
                                    <i className="uil uil-layers nav-icon"></i> Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#qualifications" className={selectedNavState === selectedNav.Qualifications ? "nav-link active-link" : "nav-link"}
                                onClick={() => setSelectedNavState(selectedNav.Qualifications)}>
                                    <i className="uil uil-scenery nav-icon"></i> Qualifications
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className={selectedNavState === selectedNav.CONTACT ? "nav-link active-link" : "nav-link"}
                                onClick={() => setSelectedNavState(selectedNav.CONTACT)}>
                                    <i className="uil uil-message nav-icon"></i> Contact
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav-close" onClick={() => {showMenu(!toggle)}}></i>
                    </div>
                    <div className="nav-toggle" onClick={() => {showMenu(!toggle)}}>
                        <i className="uil uil-apps"></i>
                    </div>
                </nav>
            </header>     
    )
}

export default Header;