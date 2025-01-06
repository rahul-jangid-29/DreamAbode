import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import theme from "../theme"; // Import the theme
import client1 from "../assets/client1.avif";
import client2 from "../assets/client2.avif";

const TestimonialCard = ({ text, name, image }) => (
  <div
    className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg bg-white transform transition duration-300 hover:scale-105"
    style={{ boxShadow: theme.shadows.medium }}
  >
    <img
      src={image}
      alt={name}
      className="w-48 h-64 mb-4 rounded-lg"
      style={{ borderColor: theme.colors.primaryText }} // Use primary text color for border
    />
    <p
      className="italic mb-4"
      style={{ color: theme.colors.primaryText }} // Replace secondaryText with primaryText
    >
      "{text}"
    </p>
    <p
      className="font-bold"
      style={{ color: theme.colors.primaryText }} // Use primary text color for name
    >
      {name}
    </p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "This agency helped me find the home of my dreams. Highly recommend!",
      name: "Robert Johnson",
      image: client1,
    },
    {
      id: 2,
      text: "Amazing service and attention to detail. A fantastic experience.",
      name: "Emily Davis",
      image: client2,
    },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-12"
      style={{ backgroundColor: theme.colors.primaryBackground }} // Light background for section
    >
      <h2
        className="text-3xl font-luxury font-bold text-center mb-8"
        style={{ color: theme.colors.primaryText }} // Use primaryText color for heading
      >
        What Our Clients Say
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
