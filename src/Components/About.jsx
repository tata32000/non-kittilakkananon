import "./index.css";
export default function About() {
  return (
    <>
      <div id="about">
        <h1>About me</h1>
        <p>
          Second-year Electrical Engineering student at the National University
          of Singapore, passionate about Software Engineering.
        </p>
        <p>
          I have experience building a web application with my project partner
          using React and Firebase under Independent Software Development
          Project (Orbital).{" "}
        </p>
        <h2>Projects:</h2>
        <h3>
          <a href="http://creativenoters.vercel.app/">Creative Noters</a>
        </h3>
        <ul>
          <li>
            Developed a web application using React and Firebase to allow users
            to annotate on images and pdf.
          </li>
          <li>
            <a href="https://github.com/parnikkapore/quiknotes-fe">
              Github repo
            </a>
          </li>
        </ul>
        <h2>Skills:</h2>
        <ul>
          <li>Programming Languages: Python, Java, JavaScript, C, C++</li>
          <li>Web Development: React.js, Firebase, HTML, CSS</li>
        </ul>
      </div>
    </>
  );
}
