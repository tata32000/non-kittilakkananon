import "./index.css";
export default function About() {
  return (
    <>
      <div id="about">
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
          <li>Technologies: React.js, Firebase, MUI, Konva.js, pdf.js</li>
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
          <li>Technologies: React.js, React Bootstrap</li>
        </ul>
        <h2>Certificates</h2>
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Python, Java, JavaScript, C, C++</li>
          <li>Technologies: React.js, Git, Firebase, Vim, Arduino, HTML, CSS</li>
        </ul>
      </div>
    </>
  );
}
