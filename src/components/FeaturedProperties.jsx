// FeaturedProperties.jsx
import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";  // Assuming you're using animations

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "/assets/property1.jpg",
      title: "Modern Villa",
      location: "Los Angeles, CA",
      price: "$3,500,000",
    },
    {
      id: 2,
      image: "/assets/property2.jpg",
      title: "Luxury Apartment",
      location: "New York, NY",
      price: "$2,200,000",
    },
    {
      id: 3,
      image: "/assets/property3.jpg",
      title: "Cozy Cottage",
      location: "Austin, TX",
      price: "$1,000,000",
    },
    {
      id: 4,
      image: "/assets/property4.jpg",
      title: "Beachfront Condo",
      location: "Miami, FL",
      price: "$1,800,000",
    },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black text-gold py-12"
    >
      <h2 className="text-4xl font-luxury font-bold text-center text-gold mb-8">
        Featured Properties
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            className="rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover transition duration-500 transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="font-luxury font-bold text-xl text-gold mb-2">
                {property.title}
              </h3>
              <p className="text-gray-300 text-sm">{property.location}</p>
              <p className="text-lg font-bold text-gold mt-4">{property.price}</p>
              <button className="mt-4 bg-gold text-black px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedProperties;
