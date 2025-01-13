import React, { useRef } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

const HeroSection = () => {
  const featuredSectionRef = useRef(null);

  // Scroll to the Featured Properties section
  const scrollToFeatured = () => {
    const featuredSection = document.getElementById("featured-properties");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigate to Contact page
  const navigateToContact = () => {
    window.location.href = "/DreamAbode/contact"; // Adjust path if necessary
  };

  return (
    <motion.div
      className="relative h-screen pt-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Image with Ken Burns Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: [1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-start sm:justify-start items-center sm:items-start text-center sm:text-left px-6 sm:px-12 pt-32 w-full sm:max-w-[50%]">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Welcome to Dream Abode
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 bg-black bg-opacity-30 p-4 rounded mb-4 text-opacity-90">
          Discover stunning properties tailored to your lifestyle. Whether you’re looking for a modern city apartment or a quiet suburban home, we’ve got you covered.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="px-6 py-3 rounded-lg border border-white text-black bg-white hover:bg-transparent hover:text-white transition"
            onClick={scrollToFeatured}
          >
            Explore Properties
          </button>
          <button
            className="px-6 py-3 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition"
            onClick={navigateToContact}
          >
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
