import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "This agency helped me find the home of my dreams. Highly recommend!",
      name: "John Doe",
      image: "/assets/testimonial1.jpg",
    },
    {
      id: 2,
      text: "Amazing service and attention to detail. A fantastic experience.",
      name: "Jane Smith",
      image: "/assets/testimonial2.jpg",
    },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black py-12"
    >
      <h2 className="text-3xl font-luxury font-bold text-center text-gold mb-8">What Our Clients Say</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg bg-black transform transition duration-300 hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-gold"
            />
            <p className="text-gold italic mb-4">"{testimonial.text}"</p>
            <p className="font-bold text-white">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
