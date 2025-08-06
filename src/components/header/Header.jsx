import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
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

    // Handle navigation - if we're on a project page, navigate to home first
    const handleNavigation = (section, navState) => {
        setSelectedNavState(navState);
        showMenu(false); // Close mobile menu
        
        if (location.pathname !== '/') {
            // If we're on a project page, navigate to home then scroll to section
            navigate('/');
            setTimeout(() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // If we're already on home, just scroll to section
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
            <header className="header">
                <nav className="nav container">
                    <button onClick={() => navigate('/')} className="nav-logo">ALIBABA</button>
                    <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
                        <ul className="nav-list grid">
                            <li className="nav-item">
                                <button 
                                    className={selectedNavState === selectedNav.HOME ? "nav-link active-link" : "nav-link"}
                                    onClick={() => handleNavigation('home', selectedNav.HOME)}
                                >
                                    <i className="uil uil-estate nav-icon"></i> Home
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={selectedNavState === selectedNav.ABOUT ? "nav-link active-link" : "nav-link"}
                                    onClick={() => handleNavigation('about', selectedNav.ABOUT)}
                                >
                                    <i className="uil uil-user nav-icon"></i> About
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={selectedNavState === selectedNav.SKILLS ? "nav-link active-link" : "nav-link"}
                                    onClick={() => handleNavigation('skills', selectedNav.SKILLS)}
                                >
                                    <i className="uil uil-file-alt nav-icon"></i> Skills
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={selectedNavState === selectedNav.SERVICES ? "nav-link active-link" : "nav-link"}
                                    onClick={() => handleNavigation('services', selectedNav.SERVICES)}
                                >
                                    <i className="uil uil-briefcase-alt nav-icon"></i> Services
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={selectedNavState === selectedNav.PROJECTS ? "nav-link active-link" : "nav-link"}
                                    onClick={() => handleNavigation('projects', selectedNav.PROJECTS)}
                                >
                                    <i className="uil uil-layers nav-icon"></i> Projects
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={selectedNavState === selectedNav.Qualifications ? "nav-link active-link" : "nav-link"}
                                    onClick={() => handleNavigation('qualifications', selectedNav.Qualifications)}
                                >
                                    <i className="uil uil-scenery nav-icon"></i> Qualifications
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={selectedNavState === selectedNav.CONTACT ? "nav-link active-link" : "nav-link"}
                                    onClick={() => handleNavigation('contact', selectedNav.CONTACT)}
                                >
                                    <i className="uil uil-message nav-icon"></i> Contact
                                </button>
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