import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const PropertyDetailPage = () => (
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
          src="/assets/property-detail.jpg"
          alt="Property"
          className="w-full h-auto rounded-lg shadow-xl transition duration-500 transform hover:scale-105"
        />
      </div>
      
      {/* Property Details */}
      <div>
        <h2 className="text-4xl font-luxury font-bold text-gold mb-4">Modern Villa</h2>
        <p className="text-gray-300 mb-6">Los Angeles, CA</p>
        <p className="text-lg text-gray-200 mb-6">
          This luxurious villa offers stunning views, top-tier amenities, and elegant living spaces, making it the
          perfect place to call home.
        </p>
        
        <ul className="text-gray-300 mb-6">
          <li>- 4 Bedrooms</li>
          <li>- 3 Bathrooms</li>
          <li>- Pool & Garden</li>
        </ul>
        
        <button className="bg-gold text-black px-8 py-4 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300 w-full md:w-auto">
          Contact Agent
        </button>
      </div>
    </div>
  </motion.div>
);

export default PropertyDetailPage;
