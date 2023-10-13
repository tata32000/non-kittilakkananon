import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import "./index.css";

export default function Home() {
  return (
    <>
    <div className="Home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <h1>Non Kittilakkananon</h1>
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
          url="mailto: nkittilakkananon@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        />
      </motion.div>
      </div>
    </>
  );
}
