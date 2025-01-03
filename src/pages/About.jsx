import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const About = () => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-black text-gold py-12"
  >
    <div className="pt-16 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.img
        src="/assets/about-us.jpg"
        alt="About Us"
        className="w-full rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="flex flex-col justify-center px-4 md:px-0">
        <h2 className="text-4xl font-luxury font-bold mb-4 text-gold">
          About Our Agency
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We specialize in offering luxury properties that blend elegance, comfort, and modernity. Our expert team ensures every client finds their dream home.
        </p>
      </div>
    </div>
  </motion.div>
);

export default About;
