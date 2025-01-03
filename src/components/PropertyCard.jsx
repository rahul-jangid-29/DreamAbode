import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const PropertyCard = ({ image, title, price, location, bedrooms, bathrooms }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-black text-gold border-2 border-gold rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition duration-300"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-56 object-cover transition-transform duration-500 transform hover:scale-110"
    />
    <div className="p-6">
      <h3 className="font-luxury font-bold text-2xl text-gold">{title}</h3>
      <p className="text-gray-300 mt-2">{location}</p>
      <div className="flex justify-between text-sm text-gray-400 mt-4">
        <p>{bedrooms} Beds</p>
        <p>{bathrooms} Baths</p>
      </div>
      <p className="text-green-600 font-bold text-xl mt-4">${price}</p>
      <button
        aria-label={`View details of ${title}`}
        className="mt-6 w-full bg-gold text-black py-2 rounded-lg hover:bg-gray-700 transition"
      >
        View Details
      </button>
    </div>
  </motion.div>
);

export default PropertyCard;
