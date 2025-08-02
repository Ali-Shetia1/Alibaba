import React from 'react'
import './skills.css';
import Frontend from './Frontend';
import UIUX from './Backend';
const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>
        
        <div className="skills-container container grid">
            <Frontend />
            <UIUX />
        </div>
    </section>
  )
}

export default Skills