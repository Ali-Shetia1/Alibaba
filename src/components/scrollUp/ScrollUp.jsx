import React, { useEffect, useState } from 'react'
import './scrollUp.css';
const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 560)
      setIsVisible(true);
    else
      setIsVisible(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  return (
    <a href="#home" className={isVisible ? "scrollUp show-scrollUp" : "scrollUp"}>
      <i className="uil uil-arrow-up scrollUp-icon"></i>
    </a>
  )
}

export default ScrollUp