import React from "react";
import { motion } from "framer-motion";
import blog1 from "../assets/blog1.avif"
import blog2 from "../assets/blog2.webp"

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Luxury Living Trends in 2025",
      image: blog1,
      date: "Jan 1, 2025",
    },
    {
      id: 2,
      title: "How to Invest in Real Estate",
      image: blog2,
      date: "Dec 15, 2024",
    },
    {
      id: 3,
      title: "Top 10 Luxury Living Trends in 2025",
      image: blog1,
      date: "Jan 1, 2025",
    },
    {
      id: 4,
      title: "How to Invest in Real Estate",
      image: blog2,
      date: "Dec 15, 2024",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-100 text-gray-800 py-12"
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Latest Insights
      </motion.h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 bg-white"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transition duration-500 transform hover:scale-110"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm">{blog.date}</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
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
