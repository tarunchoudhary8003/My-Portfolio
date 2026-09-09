import React from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contect'

function Home() {
  return (
   <div>
    <div>
      <Section />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
    </div>
  )
}

export default Home
