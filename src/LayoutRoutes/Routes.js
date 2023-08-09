import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Home from "../component/pages/Home/Home";
import Pricing from "../component/pages/Pricing/Pricing";
import Courses from "../component/pages/Courses/Courses";
import Community from "../component/pages/Community/Community";
import AboutUs from "../component/pages/AboutUs/AboutUs";
import Contact from "../component/pages/Contact/Contact";
import SupportUs from "../component/pages/SupportUs/SupportUs";

function RoutesLayout() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Pricing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/supportus" element={<SupportUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RoutesLayout;
