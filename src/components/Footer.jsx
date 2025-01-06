import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold">Dream Abode</h2>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Dream Abode. All rights reserved.</p>
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Designed with care for the modern real estate enthusiast.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
