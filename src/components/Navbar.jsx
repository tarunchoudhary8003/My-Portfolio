import React from 'react'
import '../styles/navbar.css'
import { FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <div className='navbar-container'>
      <h2 className='name'>Tarun</h2>

      <div className='links-contrainer'>
        <a className='links' href="#home">Home</a>
        <a className='links' href="#about">About</a>
        <a className='links' href="#skills">Skills</a>
        <a className='links' href="#projects">Projects</a>
        <a className='links' href="#education">Education</a>
        <a className='links' href="#contact">Contact</a>
      </div>

           <a
  href="/Tarun Choudhary_Resume.pdf"
  download
  className="download-btn"
>
  Download <FaDownload />
</a>
    </div>
  )
}

export default Navbar