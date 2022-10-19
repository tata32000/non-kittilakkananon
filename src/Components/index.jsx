import { SocialIcon } from "react-social-icons";
import "./index.css";

export default function Home() {
  return (
    <>
      <div id="Home">
        <h1><strong>Non Kittilakkananon</strong></h1>
        <p>
          Electrical Engineering Student at the National University of Singapore
        </p>
        <SocialIcon
          bgColor="#21252b"
          fgColor="white"
          url="https://www.linkedin.com/in/non-kittilakkananon-047728b7/"
        />
        <SocialIcon
          bgColor="#21252b"
          fgColor="white"
          url="https://github.com/tata32000"
        />
      </div>
    </>
  );
}
