// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // to do: work, about, contact
  // inspiration: https://diogotc.com
  return (
    <div className="pages">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
