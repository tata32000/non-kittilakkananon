// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Particles from "react-tsparticles";
import ParticleConfig from "./config/ParticlesConfig";
import ParticlesMobile from "./config/ParticlesMobile";
import { BrowserView, MobileView } from "react-device-detect";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedRoutes />
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
