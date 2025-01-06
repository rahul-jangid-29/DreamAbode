import React from "react";

const SearchFilters = () => (
  <div className="bg-black py-12">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Location Search Input */}
      <input
        type="text"
        placeholder="Search by Location"
        className="border p-3 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
      />
      {/* Property Type Dropdown */}
      <select className="border p-3 rounded-md w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold">
        <option value="">Property Type</option>
        <option value="villa">Villa</option>
        <option value="apartment">Apartment</option>
        <option value="penthouse">Penthouse</option>
      </select>
      {/* Price Range Input */}
      <input
        type="number"
        placeholder="Max Price ($)"
        className="border p-3 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  </div>
);

export default SearchFilters;
