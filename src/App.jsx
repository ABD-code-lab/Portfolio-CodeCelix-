// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Responsive Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            Portfolio
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <span onClick={() => scrollToSection('hero')}>Home</span>
              </li>
              <li className="nav-item">
                <span onClick={() => scrollToSection('about')}>About</span>
              </li>
              <li className="nav-item">
                <span onClick={() => scrollToSection('projects')}>Projects</span>
              </li>
              <li className="nav-item">
                <span onClick={() => scrollToSection('skills')}>Skills</span>
              </li>
              <li className="nav-item">
                <span onClick={() => scrollToSection('contact')}>Contact</span>
              </li>
            </ul>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Advanced Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Hafiz M. Abdullah</span></h1>
            <p className="hero-subtitle">Full-Stack Developer & AI Ethusiast</p>
            <p className="hero-description">Passionate about crafting digital experiences that blend creativity with functionality. Let's build something amazing together!</p>
            <button className="hero-btn" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">hwjhjhfjkhfdhjkhf</div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-icon"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Passionate Full-Stack Web Developer skilled in Django, React, REST APIs, and Tailwind CSS, with hands-on experience building authentication systems, dashboards, and scalable web apps.</p>
              <p>Currently exploring Agentic AI to create future-ready solutions. Eager to contribute by developing impactful, secure, and user-friendly applications for a forward-thinking organization.</p>
              <div className="about-stats">
                <div className="stat">
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">About Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-image">
                <div className="image-placeholder">Project 1 Image</div>
              </div>
              <div className="card-content">
                <h3>AI Chatbot Agent</h3>
                <p>A full-stack e-commerce app built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.</p>
                <div className="card-links">
                  <a href="#" className="link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="card-image">
                <div className="image-placeholder">Project 2 Image</div>
              </div>
              <div className="card-content">
                <h3>Institute of Dynamic Learning</h3>
                <p>A collaborative task tracker using Vue.js and Firebase. Supports drag-and-drop, notifications, and team sharing for enhanced productivity.</p>
                <div className="card-links">
                  <a href="#" className="link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="card-image">
                <div className="image-placeholder">Project 3 Image</div>
              </div>
              <div className="card-content">
                <h3>Full Stack E-Commerce Webiste</h3>
                <p>An interactive weather app with API integration, charts, and location-based forecasts. Designed with a focus on accessibility and performance.</p>
                <div className="card-links">
                  <a href="#" className="link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <span>React</span>
                  <div className="bar">
                    <div className="progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span>JavaScript</span>
                  <div className="bar">
                    <div className="progress" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span>CSS/SCSS</span>
                  <div className="bar">
                    <div className="progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <span>Django</span>
                  <div className="bar">
                    <div className="progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span>Python</span>
                  <div className="bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span>PostgreSQL</span>
                  <div className="bar">
                    <div className="progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>OpenAI Agents SDK</span>
                <span>NumPy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>Ready to discuss your next project? Send me a message!</p>
              <div className="contact-details">
                <div className="detail">
                  <span className="icon">📧</span>
                  <span>abdullah@email.com</span>
                </div>
                <div className="detail">
                  <span className="icon">📱</span>
                  <span>+92 3087017014</span>
                </div>
                <div className="detail">
                  <span className="icon">📍</span>
                  <span>Faisalabad, Pakistan</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social">LinkedIn</a>
                <a href="#" className="social">GitHub</a>
                <a href="#" className="social">Twitter</a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="form-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Hafiz M. Abdullah</h3>
              <p>Full-Stack Developer crafting innovative solutions.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Skills</h4>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>UI/UX</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;