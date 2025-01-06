import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import theme from "../theme"; // Importing the theme

const PropertyCard = ({
  id, // Ensure the property ID is passed as a prop
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
}) => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
      style={{
        backgroundColor: theme.colors.cardBackground, // Light background for the card
        color: theme.colors.primaryText, // Text color for light theme
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition duration-500 transform hover:scale-110"
        loading="lazy"
      />
      <div className="p-6">
        <h3
          className="font-luxury text-xl font-bold mb-2"
          style={{ color: theme.colors.primaryText }} // Title text color
        >
          {title}
        </h3>
        <p className="text-gray-600">{location}</p>
        <div className="flex justify-between mt-4">
          <span>{bedrooms} Beds</span>
          <span>{bathrooms} Baths</span>
        </div>
        <p
          className="text-green-500 text-lg font-bold mt-4"
          style={{ color: theme.colors.priceColor }} // Price color from theme
        >
          ${price}
        </p>
        <button
          onClick={() => navigate(`/propertyDetailsPage/${id}`)} // Redirect to details page with property ID
          aria-label={`View details of ${title}`}
          className="mt-4 bg-gold text-black py-2 w-full rounded-lg hover:bg-gray-200 transition"
          style={{
            backgroundColor: "#FFD700", // Gold color for button
            color: "#000", // Black text
          }}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
