import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PropertyDetailPage from "./components/PropertyDetailPage";

const App = () => {
  return (
    <Router basename="/DreamAbode">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/propertyDetailsPage" element={<PropertyDetailPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
};

export default App;
