import React from "react";
import "../styles/Features.css";
import featuresImage from "../assets/3.png";

const Features = () => {
  return (
    <section id="features" className="features">
      <img src={featuresImage} alt="Features" className="features-image" />
    </section>
  );
};

export default Features;
