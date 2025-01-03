import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";  // Use NavLink for active state handling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);  // Reference to the navbar
  const menuRef = useRef(null);  // Reference to the mobile menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);  // Collapse menu when scrolling
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-black text-gold px-6 py-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-luxury font-bold">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Dream Abode
          </NavLink>
        </h1>
        <div className="flex items-center space-x-6 text-lg font-sans hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "hover:text-white transition")}
          >
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) => (isActive ? "text-white" : "hover:text-white transition")}
          >
            Properties
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-white" : "hover:text-white transition")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-white" : "hover:text-white transition")}
          >
            Contact
          </NavLink>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-gold" : "hover:text-gold transition")}
          >
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) => (isActive ? "text-gold" : "hover:text-gold transition")}
          >
            Properties
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-gold" : "hover:text-gold transition")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-gold" : "hover:text-gold transition")}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
