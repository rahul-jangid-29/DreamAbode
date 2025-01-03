import React from "react";
import PropertyCard from "../components/PropertyCard"; // Importing PropertyCard from the components folder

const properties = [
  { id: 1, image: "/assets/property1.jpg", title: "Modern Villa", location: "Los Angeles, CA", price: "3,500,000", bedrooms: 4, bathrooms: 3 },
  { id: 2, image: "/assets/property2.jpg", title: "Luxury Apartment", location: "New York, NY", price: "2,200,000", bedrooms: 3, bathrooms: 2 },
  { id: 3, image: "/assets/property3.jpg", title: "Oceanfront Mansion", location: "Miami, FL", price: "5,800,000", bedrooms: 6, bathrooms: 5 },
  { id: 4, image: "/assets/property4.jpg", title: "Penthouse Suite", location: "Chicago, IL", price: "4,300,000", bedrooms: 3, bathrooms: 3 },
  // Add more properties as needed
];

const Properties = () => (
  <div className="bg-black text-gold py-12 pt-24">
    <h2 className="text-4xl font-luxury font-bold text-center text-gold mb-12">Featured Properties</h2>
    
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  </div>
);

export default Properties;
