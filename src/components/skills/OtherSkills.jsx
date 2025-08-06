import React from 'react'

const OtherSkills = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Other Skills</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill-name">Prompting</h3>
                            <span className="skill-level">Upper Intermediate</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill-name">Touch Typing</h3>
                            <span className="skill-level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill-name">Spoken English</h3>
                            <span className="skill-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill-name">Written English</h3>
                            <span className="skill-level">Upper Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherSkills