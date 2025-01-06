import React from "react";
import theme from "../theme"; // Importing theme
import FeaturedProperties from "../components/FeaturedProperties"; // Importing FeaturedProperties component

const Properties = () => (
  <div
    className="py-12 pt-24"
    style={{
      backgroundColor: theme.colors.primaryBackground, // Light background color for the page
      color: theme.colors.primaryText, // Default text color (dark)
    }}
  >
    <h2
      className="text-4xl font-luxury font-bold text-center"
      style={{ color: theme.colors.primaryText }} // Heading text color
    >
      Properties Page
    </h2>

    {/* Add Featured Properties */}
    <FeaturedProperties />
  </div>
);

export default Properties;
