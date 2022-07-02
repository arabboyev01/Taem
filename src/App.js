import "./App.css";
import Header from "./Components/Header/Header";
import About from './Components/About/About'
import Service from "./Components/Service/Service";
import Projects from "./Components/Projects/Projects";
import Portfolio from "./Components/Portfolio/Portfolio";
import FAQ from "./Components/FAQ/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
