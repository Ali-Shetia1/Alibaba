import React from 'react'
import './skills.css';
import Frontend from './Frontend';
import OtherSkills from './OtherSkills';
const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>
        
        <div className="skills-container container grid">
            <Frontend />
            <OtherSkills />
        </div>
    </section>
  )
}

export default Skills