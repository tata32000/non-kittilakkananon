import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import "./index.css";

export default function Home() {
  return (
    <>
      <motion.div
        id="Home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <h1>Non Kittilakkananon</h1>
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
      </motion.div>
    </>
  );
}
