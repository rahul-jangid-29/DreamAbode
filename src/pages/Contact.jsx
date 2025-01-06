import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import theme from "../theme"; // Importing the theme

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Submit formData to the server or email service here
    }
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-20"
      style={{
        backgroundColor: theme.colors.primaryBackground, // Light background for the form page
        color: theme.colors.primaryText, // Text color based on theme
      }}
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-luxury font-bold mb-8"
          style={{ color: theme.colors.primaryText }} // Heading text color
        >
          Get in Touch
        </h2>
        {submitted ? (
          <p className="text-lg text-green-400">Thank you for reaching out!</p>
        ) : (
          <form
            className="max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl space-y-6"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: theme.colors.secondaryBackground, // Light form background
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border-2 border-gold rounded-lg p-4 bg-transparent text-gold focus:outline-none focus:ring-2 focus:ring-gold"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border-2 border-gold rounded-lg p-4 bg-transparent text-gold focus:outline-none focus:ring-2 focus:ring-gold"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full border-2 border-gold rounded-lg p-4 bg-transparent text-gold h-32 focus:outline-none focus:ring-2 focus:ring-gold"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gold text-black py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
