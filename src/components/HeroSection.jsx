import React, { useRef } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

const HeroSection = () => {
  const featuredSectionRef = useRef(null); // Create a reference to the featured properties section

  // Scroll to the Featured Properties section
  const scrollToFeatured = () => {
    const featuredSection = document.getElementById("featured-properties");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="relative h-screen pt-16"
      style={{
        height: "100vh",
        backgroundImage: `url(${hero})`, // Hero image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay with opacity */}
      <div
        className="absolute inset-0 bg-black opacity-50" // Semi-transparent black overlay
      ></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Welcome to Dream Abode
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Explore amazing properties and find your dream home.
        </p>
        <button
          className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          onClick={scrollToFeatured} // Scroll on click
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
