import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Program from '../Components/Program'
import Form from '../Components/Form';
import Mentors from '../Components/Mentors'; 
import Alumni from '../Components/Alumni';
import Testimonial from '../Components/Testimonial';
import Highlights from '../Components/Highlights';
import Belowtext from '../Components/Belowtext';
 

function Home2() {

  return (
    <div >
      <Navbar/>
      <Form/>
      <Program/>
      <Mentors/>
      <Testimonial/>
      <Alumni/>
      <Highlights/>
      <Belowtext/>
      <Footer/>
    </div>
  )
}

export default Home2
