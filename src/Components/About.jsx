import { motion } from "framer-motion";
import "./index.css";
export default function About() {
  return (
    <>
      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <h1>Who am I?</h1>
        <p>
          Second-year Electrical Engineering student at the National University
          of Singapore, passionate about Software Engineering.
        </p>
        <h2>Education</h2>
        <p id="info">
          National University of Singapore <br />
          <em>Bachelor of Engineering - BE, Electrical Engineering </em>
          <br />
          <em>Aug 2021 - May 2025</em>
        </p>
        <p id="info">
          Auckland Grammar School <br />
          <em>CAIE A-Level </em>
          <br />
          <em>Jan 2017 - Dec 2020</em>
        </p>
        <h2>Projects</h2>
        <h3>
          <a
            href="https://github.com/parnikkapore/quiknotes-fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Noters
          </a>
        </h3>
        <ul>
          <li>
            Developed a web application using React and Firebase to allow users
            to annotate on images and pdf
          </li>
          <li>
            NUS Orbital (Apollo 11) LEVEL OF ACHIEVEMENT FOR THE ORBITAL
            PROGRAMME
          </li>
          <li>
            <strong>Technologies:</strong> React.js, Firebase, MUI, Konva.js,
            pdf.js
          </li>
        </ul>
        <h3>
          <a
            href="https://github.com/tata32000/non-kittilakkananon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Website
          </a>
        </h3>
        <ul>
          <li>My personal website to showcase my projects and resume</li>
          <li>
            <strong>Technologies:</strong> React.js, React Bootstrap, EmailJS,
            Framer Motion
          </li>
        </ul>
        <h2>Certificates</h2>
        <ul>
          <li>
            <a
              href="https://credentials.nus.edu.sg/292c2dbd-55b2-418b-b3c3-877cbbd5e31a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orbital - Apollo 11 (Advanced)
            </a>{" "}
            <br />
            <em>NUS Computing</em>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/certificates/8be1ab945aeb"
              target="_blank"
              rel="noopener noreferrer"
            >
              React (Basic)
            </a>
            <br />
            <em>HackerRank</em>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/certificates/c5351e367305"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript (Basic)
            </a>
            <br />
            <em>HackerRank</em>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/certificates/934c52bff714"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python (Basic)
            </a>
            <br />
            <em>HackerRank</em>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/certificates/cb87645735b4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java (Basic)
            </a>
            <br />
            <em>HackerRank</em>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/certificates/0077e6f93412"
              target="_blank"
              rel="noopener noreferrer"
            >
              Problem Solving (Basic)
            </a>
            <br />
            <em>HackerRank</em>
          </li>
          <li>
            <a
              href="https://www.datacamp.com/statement-of-accomplishment/course/609f47e1b60d21438fbc975f61d4764e5814292d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to Python & Machine Learning (with Analytics Vidhya
              Hackathons) – DataCamp
            </a>
            <br />
            <em>DataCamp</em>
          </li>
          <li>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/5S5M6XT2V34F"
              target="_blank"
              rel="noopener noreferrer"
            >
              C for Everyone: Programming Fundamentals
            </a>
            <br />
            <em>Coursera</em>
          </li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Programming Languages:</strong> Python, Java, JavaScript, C,
            C++
          </li>
          <li>
            <strong>Technologies:</strong> React.js, Git, Firebase, Vim,
            Arduino, HTML, CSS
          </li>
        </ul>
      </motion.div>
    </>
  );
}
