import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Startup from "./Pages/StartupFastTrack/StartupFastTrack";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import About from "./Pages/AboutUs/About";
import Contact from "./Pages/ContactUs/Contact";
import Blog from "./Pages/Blog/Blog.jsx";
import FrichCaseStudy from "./Pages/Portfolio/CaseStudy/FrichCaseStudy";
import SwvlCaseStudy from "./Pages/Portfolio/CaseStudy/SwvlCaseStudy";
import HalahiCaseStudy from "./Pages/Portfolio/CaseStudy/HalahiCaseStudy";
import UmileCaseStudy from "./Pages/Portfolio/CaseStudy/UmileCaseStudy";
import RRFCaseStudy from "./Pages/Portfolio/CaseStudy/RRFCaseStudy";
import FoodleCaseStudy from "./Pages/Portfolio/CaseStudy/FoodleCaseStudy";
import BharteeCaseStudy from "./Pages/Portfolio/CaseStudy/BharteeCaseStudy";
import KorneezCaseStudy from "./Pages/Portfolio/CaseStudy/KorneezCaseStudy.jsx";
import AgileDevelopment from "./Pages/Blog/Agile_Development";
import SoftwareTesting from "./Pages/Blog/Software_Testing";
import CloudComputing from "./Pages/Blog/Cloud_Computing";
import MachineLearning from "./Pages/Blog/Machine_Learning";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //// Aos Animation Start ////
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 1200,
    });
  });
  //// Aos Animation End ////

  return (
    <>
      {/* Navbar Routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startup_fast_track" element={<Startup />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      {/* ================ */}

      {/* Case Study Routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/FrichCaseStudy" element={<FrichCaseStudy />} />
          <Route path="/SwvlCaseStudy" element={<SwvlCaseStudy />} />
          <Route path="/HalahiCaseStudy" element={<HalahiCaseStudy />} />
          <Route path="/UmileCaseStudy" element={<UmileCaseStudy />} />
          <Route path="/RRFCaseStudy" element={<RRFCaseStudy />} />
          <Route path="/FoodleCaseStudy" element={<FoodleCaseStudy />} />
          <Route path="/BharteeCaseStudy" element={<BharteeCaseStudy />} />
          {/* <Route path="/portfolio" element={<OutSourceNzCaseStudy />} /> */}
          <Route path="/KorneezCaseStudy" element={<KorneezCaseStudy />} />
          <Route path="/agile_development" element={<AgileDevelopment />} />
          <Route path="/software_testing" element={<SoftwareTesting />} />
          <Route path="/cloud_computing" element={<CloudComputing />} />
          <Route path="/machine_learning" element={<MachineLearning />} />
        </Routes>
      </BrowserRouter>
      {/* ================ */}
    </>
  );
}

export default App;
