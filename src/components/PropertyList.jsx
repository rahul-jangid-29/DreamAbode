import React from "react";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const properties = [
  { id: 1, image: "/assets/property1.jpg", title: "Modern Villa", location: "Los Angeles, CA", price: "3,500,000", bedrooms: 4, bathrooms: 3 },
  { id: 2, image: "/assets/property2.jpg", title: "Luxury Apartment", location: "New York, NY", price: "2,200,000", bedrooms: 3, bathrooms: 2 },
  { id: 3, image: "/assets/property3.jpg", title: "Stylish Penthouse", location: "Miami, FL", price: "4,200,000", bedrooms: 5, bathrooms: 4 },
  { id: 4, image: "/assets/property4.jpg", title: "Beachfront Mansion", location: "Malibu, CA", price: "8,000,000", bedrooms: 6, bathrooms: 5 },
  // Add more properties as needed
];

const PropertyList = () => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-black py-12 px-4 sm:px-6 md:px-8"
  >
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  </motion.div>
);

export default PropertyList;
