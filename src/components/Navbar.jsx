import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // For active state handling
import theme from "../theme"; // Import your theme

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scroll position
  const [scrollDirection, setScrollDirection] = useState("up"); // Track scroll direction (up or down)
  const prevScrollY = useRef(0); // Store previous scroll position

  const navbarRef = useRef(null); // Reference to the navbar
  const menuRef = useRef(null); // Reference to the mobile menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track scroll direction
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down"); // Scrolling down
      } else {
        setScrollDirection("up"); // Scrolling up
      }

      // Update scroll state
      setScrolled(currentScrollY > 50); // Add background after scrolling 50px

      // Close menu when scrolling
      setMenuOpen(false);

      // Update the previous scroll position
      prevScrollY.current = currentScrollY;
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled && scrollDirection === "down"
          ? "transform -translate-y-full" // Hide navbar when scrolling down
          : "transform translate-y-0" // Show navbar when scrolling up
      } ${scrolled ? "bg-white shadow-lg" : "bg-black bg-opacity-50"}`}
      style={{
        color: scrolled ? theme.colors.primaryText : theme.colors.secondaryText,
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-luxury font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? scrolled
                  ? "text-black"
                  : "text-white"
                : scrolled
                ? "text-black"
                : "text-white"
            }
          >
            DreamAbode
          </NavLink>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg font-sans">
          {[
            { name: "Home", path: "/" },
            { name: "Properties", path: "/properties" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                item.name === "Home" && isActive
                  ? scrolled
                    ? "font-bold text-black"
                    : "font-bold text-white"
                  : isActive
                  ? "font-bold text-black"
                  : scrolled
                  ? "hover:text-gray-700 transition text-black"
                  : "hover:text-gray-300 transition text-white"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${
            scrolled ? "text-black" : "text-white"
          } transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg"
          style={{
            color: theme.colors.primaryText,
          }}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Properties", path: "/properties" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                item.name === "Home" && isActive
                  ? "font-bold text-black"
                  : isActive
                  ? "font-bold text-black"
                  : "hover:text-gray-700 transition text-black"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
