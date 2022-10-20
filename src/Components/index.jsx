import { SocialIcon } from "react-social-icons";
import "./index.css";

export default function Home() {
  return (
    <>
      <div id="Home">
        <h1>
          <strong>Non Kittilakkananon</strong>
        </h1>
        <p>
          Electrical Engineering Student at the National University of Singapore
        </p>
        <SocialIcon
          bgColor="none"
          fgColor="lightblue"
          url="https://www.linkedin.com/in/non-kittilakkananon-047728b7/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          bgColor="none"
          fgColor="lightblue"
          url="https://github.com/tata32000"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          bgColor="none"
          fgColor="lightblue"
          url="mailto: tata32000@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </>
  );
}
