import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Ecommerce from "./Projects/Ecommerce";
import ColorGame from "./Projects/ColorGame";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="Portfolio_App">
      <Header />
      <Router>
        <Routes>
          <Route exact active path="/" element={<Home/>} />
          <Route exact path="/experience" element={<Experience/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/wagon" element={<Ecommerce/>} />
          <Route exact path="/color-game" element={<ColorGame/>} />
          <Route exact path="/about-me" element={<AboutMe/>} />


        </Routes>
      </Router>
      <Footer/>
      </div>
    </>
  );
}

export default App;
