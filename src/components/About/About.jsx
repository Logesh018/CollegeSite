import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <a href="https://youtu.be/jw0ZUridPko?si=ivaM0CaaFAJSrVIG" target='_blank'><img src={about_img} alt="" className='about-img'/></a>
        <a href="https://youtu.be/jw0ZUridPko?si=ivaM0CaaFAJSrVIG" target='_blank'><img src={play_icon} alt="" className='play-icon'/></a> 
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>St.Peter’s College of Engineering and Technology, a co-educational college was established by 
          Lakshmi Saraswathi Educational Trust in the year 2008. The college aims to impart training to students to 
          develop their Intellectual powers, identify and cultivate interest andtalents, and train them to become 
          responsible and eminent citizens of india. The institution is spread over a sprawling campus with its 
          calm surrounding, creating a study atmosphere. The invigorative and serene milieu of the institution is 
          conducive for higher education.</p>
          <p>With a focus of innovation, hands-on learning, and personalized mentorship, our programs prepare 
            aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
      </div>
    </div>
  )
}

export default About