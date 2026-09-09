import React from "react";
import "../styles/projects.css";
import Gymimage1 from "../assets/Gymimage1.png";
import furnitureShopimg from "../assets/furnitureShopimg.png";
import toyShopimg from "../assets/toyShopimg.png";


function Projects() {
  const projects = [
   {
  title: "Furniture Website",
  description:
    "A responsive furniture website built with modern web technologies, featuring a clean design and an attractive product showcase.",
  image: [furnitureShopimg],
  demo: "#",
  github: "https://github.com/tarunchoudhary8003/furniture-website",
},
    {
      title: "Gym Management System",
      description:
        "A web application for managing gym members, workouts, and other gym-related information.",
      image: [Gymimage1],
      demo: "https://gym-management-system-project-wheat.vercel.app/dashbord.html",
      github: "https://github.com/tarunchoudhary8003/GYM-Management-System-Project",
    },
       {
      title: "Toy Shop Website",
      description:
        "A React-based e-commerce website where users can browse products and explore different toy categories.",
      image: [toyShopimg],
      demo: "#",
      github: "https://github.com/tarunchoudhary8003/Toy-Shop-WebSite",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;