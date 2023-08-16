import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home/Home";
import Startup from "./Pages/StartupFastTrack/StartupFastTrack";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import About from "./Pages/AboutUs/About";
import Contact from "./Pages/ContactUs/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Home /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/startup_fast_track" element={<Startup />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
