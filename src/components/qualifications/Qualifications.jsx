import React, { useState } from 'react'
import './qualifications.css'
const Qualifications = () => {
  const tabStates = {
      EDUCATION: 'education',
      EXPERIENCE: 'experience'
  }
  const [toggleState, setToggleState] = useState(tabStates.EDUCATION);
  return (
    <section className="qualifications section" id='qualifications'>
        <h2 className="section-title">Qualifications</h2>
        <span className="section-subtitle">My personal journey</span>
        <div className="qualifications-container container">
          <div className="qualifications-tabs">
            <div onClick={() => setToggleState(tabStates.EDUCATION)} className={toggleState === tabStates.EDUCATION ? "qualifications-button button-flex qualifications-tab-active" : "qualifications-button button-flex"}>
              <i className="uil uil-graduation-cap qualifications-icon"></i>Education
            </div>
            <div onClick={() => setToggleState(tabStates.EXPERIENCE)} className={toggleState === tabStates.EXPERIENCE ? "qualifications-button button-flex qualifications-tab-active" : "qualifications-button button-flex"}>
              <i className="uil uil-book-open qualifications-icon"></i>Courses
            </div>
            <div onClick={() => setToggleState(tabStates.EXPERIENCE)} className={toggleState === tabStates.EXPERIENCE ? "qualifications-button button-flex qualifications-tab-active" : "qualifications-button button-flex"}>
              <i className="uil uil-brain qualifications-icon"></i>Experience
            </div>
          </div>
          <div className="qualifications-sections"> 

            <div className={toggleState === tabStates.EDUCATION ? "qualifications-content qualifications-content-active" : "qualifications-content"}>
              <div className="qualifications-data">
                <div> 
                  <h3 className="qualifications-title">Programming</h3>
                  <span className="qualifications-subtitle">Ismailia - School</span>
                  <div className="qualifications-calendar">
                    <i className="uil uil-calendar-alt"></i> 2014 - 2018
                  </div>
                </div>
                <div>
                  <span className="qualifications-round"></span>
                  <span className="qualifications-line"></span>
                </div>
              </div>

              <div className="qualifications-data">
                <div></div>
                <div>
                  <span className="qualifications-round"></span>
                  <span className="qualifications-line"></span>
                </div>
                <div>
                  <h3 className="qualifications-title">Structural Engineering</h3>
                  <span className="qualifications-subtitle">Tanta - University</span>
                  <div className="qualifications-calendar">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2023
                  </div>
                </div>
              </div>

              <div className="qualifications-data">
                <div>
                  <h3 className="qualifications-title">Web Development</h3>
                  <span className="qualifications-subtitle">Self Learning</span>
                  <div className="qualifications-calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - Continous
                  </div>
                </div>
                <div>
                  <span className="qualifications-round"></span>
                  <span className="qualifications-line"></span>
                </div>
              </div>

              <div className="qualifications-data">
                <div></div>
                <div>
                  <span className="qualifications-round"></span>
                  <span className="qualifications-line"></span>
                </div>
                <div>
                  <h3 className="qualifications-title">UI, UX Design</h3>
                  <span className="qualifications-subtitle">Online Learning</span>
                  <div className="qualifications-calendar">
                    <i className="uil uil-calendar-alt"></i> 2025 - Continous
                  </div>
                </div>
              </div>
            </div>

            <div className={toggleState === tabStates.EXPERIENCE ? "qualifications-content qualifications-content-active" : "qualifications-content"}>
              <div className="qualifications-data">
                <div>
                  <h3 className="qualifications-title">Product Designer</h3>
                  <span className="qualifications-subtitle">Alex - Institute</span>
                  <div className="qualifications-calendar">
                    <i className="uil uil-calendar-alt"></i> 2025 - Preset
                  </div>
                </div>
                <div>
                  <span className="qualifications-round"></span>
                  <span className="qualifications-line"></span>
                </div>
              </div>

              <div className="qualifications-data">
                <div></div>
                <div>
                  <span className="qualifications-round"></span>
                  <span className="qualifications-line"></span>
                </div>
                <div>
                  <h3 className="qualifications-title">UX Designer</h3>
                  <span className="qualifications-subtitle">Alex - Institute</span>
                  <div className="qualifications-calendar">
                    <i className="uil uil-calendar-alt"></i> 2025 - Preset
                  </div>
                </div>
              </div>

              <div className="qualifications-data">
                <div>
                  <h3 className="qualifications-title">Web Designer</h3>
                  <span className="qualifications-subtitle">Alex - Institute</span>
                  <div className="qualifications-calendar">
                    <i className="uil uil-calendar-alt"></i> 2025 - Preset
                  </div>
                </div>
                <div>
                  <span className="qualifications-round"></span>
                  <span className="qualifications-line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Qualifications