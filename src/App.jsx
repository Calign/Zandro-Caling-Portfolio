import "./App.css";
import { useEffect, useState } from "react";
import ProjectSlideshow from "./ProjectSlideshow";

import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaFolder,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaReact,
  FaPython,
  FaJava,
  FaJs,
  FaCamera,
} from "react-icons/fa";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <div className="clock-time">
        {time.toLocaleTimeString("en-PH", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Manila",
        })}
      </div>

      <div className="clock-location">
        PHILIPPINES · UTC+8
      </div>
    </div>
  );
}


function App() {
  return (
    
    <div className="app">

      <aside className="sidebar">

        <div className="sidebar-brand">
          <h2>ZC Portfolio</h2>
        </div>

        <nav>
          <a href="#home">
            <FaHome />
            <span>Home</span>
          </a>

          <a href="#frameworks">
            <FaCode />
            <span>Frameworks & Languages</span>
          </a>

          <a href="#experience">
            <FaBriefcase />
            <span>Experience</span>
          </a>

          <a href="#education">
            <FaGraduationCap />
            <span>Education</span>
          </a>

          <a href="#skills">
            <FaTools />
            <span>Technical Skills</span>
          </a>

          <a href="#projects">
            <FaFolder />
            <span>Projects</span>
          </a>
        </nav>
      </aside>


      <main className="content">

        <Clock />

        

        <section id="home" className="hero">
          <img
            src="/profile.jpg"
            alt="Zandro Caling"
            className="profile-picture"
          />

          <h1>Zandro Caling</h1>

          <h2>Entry-Level Software Developer</h2>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/zandro-alvaro-caling-49a7a2368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Calign"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=calingzalvo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
          </div>

          <p className="intro">
            Computer Science graduate specializing in Intelligent Systems
            with experience in software development. Lead developer of
            STREMA, a CNN-based stress detection and management system.
          </p>
        </section>


        <section id="frameworks" className="Frameworks_Languages">
          <h1>Frameworks & Languages</h1>

          <h2>Frameworks</h2>

          <div className="skills">

            <div className="skill-card">
              <FaReact className="skill-icon" />
              <span>React</span>
            </div>

            <div className="skill-card">
              <FaCode className="skill-icon" />
              <span>Eel</span>
            </div>

            <div className="skill-card">
              <FaCamera className="skill-icon" />
              <span>MediaPipe</span>
            </div>

          </div>


          <h2>Languages</h2>

          <div className="skills">

            <div className="skill-card">
              <FaPython className="skill-icon" />
              <span>Python</span>
            </div>

            <div className="skill-card">
              <FaJs className="skill-icon" />
              <span>JavaScript</span>
            </div>


          </div>

        </section>


        <section id="experience" className="Pre_professional_Experience">
          <h1>Pre-professional Experience</h1>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h2>IT Support Intern</h2>
                    <h3>Landco Pacific Corporation</h3>
                  </div>

                  <span className="experience-date">
                    Internship
                  </span>

                </div>

                <ul>
                  <li>
                    Provided technical support and assistance to employees.
                  </li>

                  <li>
                    Assisted with troubleshooting hardware and software issues.
                  </li>

                  <li>
                    Supported day-to-day IT operations and maintenance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section id="education" className="Education">

          <h1>Education</h1>

          <div className="education-card">

            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div className="education-content">

              <div className="education-header">

                <div>
                  <h2>De La Salle University - Dasmariñas</h2>

                  <p className="education-degree">
                    Bachelor of Science in Computer Science
                  </p>
                </div>

                <span className="education-date">
                  2022 — 2026
                </span>

              </div>

              <p className="education-specialization">
                Specialization in Intelligent Systems
              </p>

            </div>

          </div>

        </section>


        <section id="skills" className="Technical_Skills">

          <h1>Technical Skills</h1>

          <div className="technical-skills-grid">

            <div className="technical-skill-card">

              <div className="technical-skill-header">
                <FaCode className="technical-skill-icon" />

                <h2>Software Development</h2>
              </div>

              <ul>
                <li>Object-Oriented Programming</li>
                <li>Debugging & Troubleshooting</li>
                <li>Version Control</li>
              </ul>

            </div>


            <div className="technical-skill-card">

              <div className="technical-skill-header">
                <FaTools className="technical-skill-icon" />

                <h2>AI / Machine Learning</h2>
              </div>

              <ul>
                <li>Computer Vision</li>
                <li>Neural Networks</li>
                <li>Data Preprocessing</li>
                <li>Model Training & Evaluation</li>
              </ul>

            </div>

          </div>

        </section>


        <section id="projects" className="Projects">

          <h1>Projects</h1>



          <ProjectSlideshow />

        </section>



        <footer className="footer">

            <div className="footer-copyright">
              <span className="footer-year">@2026 /</span>{" "}
              <span className="footer-name">Zandro Caling</span>
            </div>


          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/zandro-alvaro-caling-49a7a2368/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Calign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=calingzalvo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <FaGoogle />
            </a>

          </div>
        </footer>


      </main>

    </div>
  );
}

export default App;