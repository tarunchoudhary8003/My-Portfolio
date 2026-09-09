import React from "react";
import "../styles/education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">

        {/* Education 1 */}
        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div className="education-content">
            <span className="education-year">Completed</span>

            <h3>Bachelor of Computer Applications (BCA)</h3>

            <p>
              Completed my graduation in Computer Applications, where I built
              a foundation in programming, computer science, and software
              development.
            </p>
          </div>
        </div>

        {/* Education 2 */}
        <div className="education-card">
          <div className="education-icon">💻</div>

          <div className="education-content">
            <span className="education-year">Currently Learning</span>

            <h3>Full Stack Java Development</h3>

            <p>
              Learning Java, SQL, frontend development, React, and modern web
              development technologies to build full-stack applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;