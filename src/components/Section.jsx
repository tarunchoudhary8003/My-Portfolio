import React from "react";
import "../styles/section.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import myImage from "../assets/myImage.jpeg";
function Section() {
  return (
    <div className="section-container" id="home">
      <div className="containt">
        <p className="intro">Hi, I'm</p>

        <h1>
          Tarun <br />
          <span>Choudhary</span>
        </h1>

        <h2>Aspiring Java & Full Stack Developer</h2>

        <p className="description">
          I love building web applications and turning ideas into real-world
          solutions. Currently focused on Java, React and modern web
          technologies.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="project-btn">
            View My Projects →
          </a>

          <a href="#contact" className="contact-btn">
            Contact Me ✉
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/tarunchoudhary8003">
            <FaGithub />
          </a>

          <a href="linkedin.com/in/tarun-choudhary-18886635a">
            <FaLinkedin />
          </a>

          <a href="tarunchoudhary8003@gmaiI.com">
            <MdOutlineMailOutline />
          </a>
        </div>
      </div>

      <div className="image-container">
       <img src={myImage}></img>
      </div>
    </div>
  );
}

export default Section;