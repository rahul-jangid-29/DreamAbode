// BlogSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const BlogSection = () => {
  const blogs = [
    { id: 1, title: "Top 10 Luxury Living Trends in 2025", image: "/assets/blog1.jpg", date: "Jan 1, 2025" },
    { id: 2, title: "How to Invest in Real Estate", image: "/assets/blog2.jpg", date: "Dec 15, 2024" },
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
        Latest Insights
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transition duration-500 transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="font-luxury font-bold text-xl text-gold">{blog.title}</h3>
              <p className="text-gray-300 text-sm">{blog.date}</p>
              <button className="mt-4 bg-gold text-black px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogSection;
