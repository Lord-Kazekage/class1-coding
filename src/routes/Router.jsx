import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Menu from "../pages/menu/Menu";
import Contact from "../pages/contact/Contact";
import Page from "../pages/Page";
function Links() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Page />} />
        </Routes>
      </Router>
    </>
  );
}

export default Links;
