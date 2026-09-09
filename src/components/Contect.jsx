import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">
        
        {/* Left Side - Contact Information */}
        <div className="contact-info">
          <h3>Let's work together!</h3>

          <p>
            I'm currently looking for new opportunities and would love to
            connect with you. Feel free to contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span>📧</span>
              <div>
                <small>Email</small>
                <p>tarunchoudhary10102004@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <small>Location</small>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-item">
              <span>💼</span>
              <div>
                <small>Availability</small>
                <p>Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <a href="https://github.com/tarunchoudhary8003">GitHub</a>
            <a href="linkedin.com/in/tarun-choudhary-18886635a">LinkedIn</a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="submit">Send Message →</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;