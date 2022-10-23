import { AnimatePresence } from "framer-motion";
import Home from "./index";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route, useLocation } from "react-router-dom";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
