import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import HeroSection from "../components/HeroSection";
import FeaturedProperties from "../components/FeaturedProperties";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-gray-900 text-gold"
    >
      <HeroSection />
      <FeaturedProperties />
      <BlogSection />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
