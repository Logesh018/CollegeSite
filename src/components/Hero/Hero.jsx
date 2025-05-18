import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'> 
    <div className='hero-text'>
      <h1>St. Peter’s College of Engineering and Technology</h1>
      <p>Approved by AICTE | Affiliated to Anna University</p>
      <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
    </div>
    </div>
  )
}

export default Hero