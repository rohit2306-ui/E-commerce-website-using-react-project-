import React from 'react'
import Data from './Data'
import Poster from './Poster'
import SimpleParallax from "simple-parallax-js";
import collection from '../img/newcollection.jpg'
import Joinform from './Joinform';
import About_story from './About_story';
import Footer from "./Footer.jsx"

function About() {
  return (
    <>
    <div className="about-nav">
      <div className="first-form">
      <Joinform/>
      </div>
      <div className="second-story">
        <About_story/>
      </div>
      
      </div>
      <Footer/>
    </>
  )
}

export default About