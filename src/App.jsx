import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Vision from './components/Vision-mission/Vision'
import Student from './components/Student/Student'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" /> 
        <Programs />
         <Title subTitle="If you are a Student" title="Enter your Reg.No here" /> 
        <Student />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" /> 
        <Campus />
         <Title subTitle="Testimonials" title="What Student Says" /> 
         <Testimonials />
         <Title subTitle="Objectives" title="Our Vision and Mission" /> 
         <Vision />
         <Title subTitle="Contact Us" title="Get In Touch" /> 
         <Contact />
         <Footer />
      </div>
    </div>
  )
}

export default App