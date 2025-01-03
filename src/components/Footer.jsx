import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons from React Icons

const Footer = () => {
  return (
    <footer className="bg-black text-gold py-8">
      <div className="container mx-auto text-center">
        <h2 className="font-luxury text-xl">Dream Abode</h2>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Dream Abode. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-gold hover:text-gray-400 transition">
            <FaFacebook size={24} /> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-gold hover:text-gray-400 transition">
            <FaInstagram size={24} /> {/* Instagram Icon */}
          </a>
          <a href="#" className="text-gold hover:text-gray-400 transition">
            <FaLinkedin size={24} /> {/* LinkedIn Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
