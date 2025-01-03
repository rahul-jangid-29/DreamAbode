import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="relative h-screen bg-black pt-16"
      style={{
        backgroundImage: "url('/assets/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-luxury font-bold text-gold mb-4">
          Welcome to Dream Abode
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Discover the pinnacle of luxury living.
        </p>
        <button className="bg-gold text-black px-6 py-3 rounded-lg hover:bg-gray-700 transition text-lg sm:text-xl">
          Explore Properties
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
