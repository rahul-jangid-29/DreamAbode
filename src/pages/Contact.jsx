// Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const Contact = () => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-black text-gold py-12"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-luxury font-bold text-gold mb-8">
        Get in Touch
      </h2>
      <form className="max-w-lg mx-auto bg-black p-6 sm:p-8 rounded-lg shadow-xl space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border-2 border-gold rounded-lg p-4 bg-transparent text-gold focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border-2 border-gold rounded-lg p-4 bg-transparent text-gold focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border-2 border-gold rounded-lg p-4 bg-transparent text-gold h-32 focus:outline-none focus:ring-2 focus:ring-gold"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gold text-black py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </motion.div>
);

export default Contact;
