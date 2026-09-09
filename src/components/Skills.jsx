import React from "react";
import "../styles//skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        
        {/* Frontend */}
        <div className="skill-card">
          <h3>🖥️ Frontend</h3>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>💻 Backend / Programming</h3>

          <ul>
            <li>Java</li>
            <li>Core Java</li>
            <li>OOP</li>
            <li>Collections</li>
            {/* <li>REST APIs</li> */}
          </ul>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3>🗄️ Database</h3>

          <ul>
            <li>MySQL</li>
            {/* <li>PostgreSQL</li> */}
            <li>SQL</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>🛠️ Tools & Others</h3>

          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;