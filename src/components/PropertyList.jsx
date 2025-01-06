import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import Modernvilla from "../assets/ModernVilla.avif";
import BeachfrontCondo from "../assets/BeachfrontCondo.webp";
import CozyCottage from "../assets/CozyCottage.webp";
import LuxuryApartment from "../assets/LuxuryApartment.webp";
import SearchFilters from "./SearchFilters"; // Import SearchFilters component

const PropertyList = () => {
  // Initial properties array
  const properties = [
    {
      id: 1,
      image: Modernvilla,
      title: "Modern Villa",
      location: "Los Angeles, CA",
      price: "3,500,000",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 2,
      image: BeachfrontCondo,
      title: "Luxury Apartment",
      location: "New York, NY",
      price: "2,200,000",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 3,
      image: CozyCottage,
      title: "Stylish Penthouse",
      location: "Miami, FL",
      price: "4,200,000",
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 4,
      image: LuxuryApartment,
      title: "Beachfront Mansion",
      location: "Malibu, CA",
      price: "8,000,000",
      bedrooms: 6,
      bathrooms: 5,
    },
  ];

  // State for filtered properties
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    const { location, priceRange, bedrooms } = filters;

    const filtered = properties.filter((property) => {
      return (
        (location
          ? property.location.toLowerCase().includes(location.toLowerCase())
          : true) &&
        (priceRange
          ? parseInt(property.price.replace(/[^0-9.-]+/g, "")) <= priceRange
          : true) &&
        (bedrooms ? property.bedrooms >= bedrooms : true)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black py-12 px-4 sm:px-6 md:px-8"
    >
      <h2 className="text-3xl font-luxury font-bold text-gold text-center mb-8">
        Featured Properties
      </h2>

      {/* Include the SearchFilters component */}
      <SearchFilters onFilterChange={handleFilterChange} />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </motion.div>
  );
};

export default PropertyList;
