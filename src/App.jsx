// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import ParticleConfig from "./config/ParticlesConfig";
import ParticlesMobile from "./config/ParticlesMobile";
import { BrowserView, MobileView } from "react-device-detect";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BrowserView>
          <Particles params={ParticleConfig} />
        </BrowserView>
        <MobileView>
          <Particles params={ParticlesMobile} />
        </MobileView>
      </Router>
    </div>
  );
}

export default App;
