import React from "react";
import { motion } from "framer-motion";
import Modernvilla from "../assets/ModernVilla.avif";
import BeachfrontCondo from "../assets/BeachfrontCondo.webp";
import CozyCottage from "../assets/CozyCottage.webp";
import LuxuryApartment from "../assets/LuxuryApartment.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: Modernvilla,
      title: "Modern Villa",
      location: "Los Angeles, CA",
      price: "$3,500,000",
    },
    {
      id: 2,
      image: LuxuryApartment,
      title: "Luxury Apartment",
      location: "New York, NY",
      price: "$2,200,000",
    },
    {
      id: 3,
      image: CozyCottage,
      title: "Cozy Cottage",
      location: "Austin, TX",
      price: "$1,000,000",
    },
    {
      id: 4,
      image: BeachfrontCondo,
      title: "Beachfront Condo",
      location: "Miami, FL",
      price: "$1,800,000",
    },
    {
      id: 5,
      image: Modernvilla,
      title: "Modern Villa",
      location: "Los Angeles, CA",
      price: "$3,500,000",
    },
    {
      id: 6,
      image: LuxuryApartment,
      title: "Luxury Apartment",
      location: "New York, NY",
      price: "$2,200,000",
    },
    {
      id: 7,
      image: CozyCottage,
      title: "Cozy Cottage",
      location: "Austin, TX",
      price: "$1,000,000",
    },
    {
      id: 8,
      image: BeachfrontCondo,
      title: "Beachfront Condo",
      location: "Miami, FL",
      price: "$1,800,000",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-100 text-gray-800 py-12"
      id="featured-properties"
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Featured Properties
      </motion.h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 bg-white"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover transition duration-500 transform hover:scale-110"
            />
            <div className="p-4 sm:p-6">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2">
                {property.title}
              </h3>
              <p className="text-gray-500 text-sm">{property.location}</p>
              <p className="text-lg font-bold text-blue-600 mt-4">
                {property.price}
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-800 transition">
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
