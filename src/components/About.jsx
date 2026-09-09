import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* Left Side */}
        <div className="about-content">
          <p>
            I am a BCA graduate and an aspiring Java Full Stack Developer.
            I enjoy creating interactive and user-friendly web applications.
            I have experience in Java, SQL, JavaScript, React and building
            responsive web pages.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <span>👤</span>
              <div>
                <small>Name</small>
                <p>Tarun Choudhary</p>
              </div>
            </div>

            <div className="about-card">
              <span>🎓</span>
              <div>
                <small>Degree</small>
                <p>BCA Graduate</p>
              </div>
            </div>

            <div className="about-card">
              <span>📍</span>
              <div>
                <small>Location</small>
                <p>Pune, Maharashtra</p>
              </div>
            </div>

            <div className="about-card">
              <span>💼</span>
              <div>
                <small>Experience</small>
                <p>Fresher</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-image">
          <div className="developer-icon">👨‍💻</div>
        </div>
      </div>
    </section>
  );
}

export default About;