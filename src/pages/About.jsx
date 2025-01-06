import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import theme from "../theme"; // Import the theme
import about from "../assets/about.jpeg"; // Import the about us image
const About = () => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="py-20"
    style={{
      backgroundColor: theme.colors.primaryBackground, // Use primary background color
    }}
  >
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <motion.img
        src= {about}
        alt="About Us"
        className="w-full rounded-lg shadow-xl transition duration-500 transform hover:scale-105"
        style={{
          boxShadow: theme.shadows.medium, // Apply medium shadow
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Text Section */}
      <div className="flex flex-col justify-center px-4 md:px-0">
        <h2
          className="text-4xl font-bold mb-4"
          style={{
            color: theme.colors.primaryText, // Apply primary text color
            fontFamily: theme.fonts.luxury, // Use luxury font
          }}
        >
          About Our Agency
        </h2>
        <p
          className="text-lg leading-relaxed mb-6"
          style={{
            color: theme.colors.secondaryText, // Apply secondary text color
          }}
        >
          We specialize in offering luxury properties that blend elegance,
          comfort, and modernity. Our expert team ensures every client finds
          their dream home. With decades of experience and a passion for
          excellence, we redefine the meaning of luxury living.
        </p>
        <p
          className="text-lg leading-relaxed"
          style={{
            color: theme.colors.secondaryText, // Apply secondary text color
          }}
        >
          Whether you're seeking a waterfront villa, a high-rise apartment, or a
          cozy suburban retreat, our curated portfolio has it all. We pride
          ourselves on attention to detail and unparalleled customer service.
        </p>
      </div>
    </div>

    {/* Additional Section */}
    <div className="mt-12 px-4 md:px-0">
      <h3
        className="text-3xl font-bold mb-6 text-center"
        style={{
          color: theme.colors.primaryText,
          fontFamily: theme.fonts.luxury,
        }}
      >
        Why Choose Us?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h4
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.primaryText }}
          >
            Expertise
          </h4>
          <p style={{ color: theme.colors.secondaryText }}>
            Over 20 years of industry experience to guide you.
          </p>
        </div>
        <div className="text-center">
          <h4
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.primaryText }}
          >
            Exclusive Listings
          </h4>
          <p style={{ color: theme.colors.secondaryText }}>
            Handpicked properties to match your lifestyle and preferences.
          </p>
        </div>
        <div className="text-center">
          <h4
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.primaryText }}
          >
            Personalized Service
          </h4>
          <p style={{ color: theme.colors.secondaryText }}>
            A dedicated team to make your journey seamless.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default About;
