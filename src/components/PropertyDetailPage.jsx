import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom"; 
import { pageTransition } from "../animations";
import modernvilla from "../assets/ModernVilla.avif";

const PropertyDetailPage = ({ property }) => {
  // Mock dynamic data (replace with API fetch or state management)
  const defaultProperty = {
    image: modernvilla,
    title: "Modern Villa",
    location: "Los Angeles, CA",
    description:
      "This luxurious villa offers stunning views, top-tier amenities, and elegant living spaces, making it the perfect place to call home.",
    features: ["4 Bedrooms", "3 Bathrooms", "Pool & Garden"],
  };

  const { id } = useParams(); // Dynamic routing (if applicable)
  const propertyData = property || defaultProperty; // Fallback to default data

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black text-gold py-12 px-6"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Property Image */}
        <div className="flex justify-center">
          <img
            src={propertyData.image}
            alt={propertyData.title}
            className="w-full h-auto rounded-lg shadow-xl transition duration-500 transform hover:scale-105"
          />
        </div>

        {/* Property Details */}
        <div>
          <h2 className="text-4xl font-luxury font-bold text-gold mb-4">
            {propertyData.title}
          </h2>
          <p className="text-gray-300 mb-6">{propertyData.location}</p>
          <p className="text-lg text-gray-200 mb-6">
            {propertyData.description}
          </p>

          <ul className="text-gray-300 mb-6">
            {propertyData.features.map((feature, index) => (
              <li key={index}>- {feature}</li>
            ))}
          </ul>

          <button
            className="bg-gold text-black px-8 py-4 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300 w-full md:w-auto"
            onClick={() => alert("Agent contacted!")}
          >
            Contact Agent
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetailPage;
