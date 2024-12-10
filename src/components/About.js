import React from "react";
import "../styles/About.css";
import aboutimg from "../assets/2.png";


const About = () => {
  return (
    <section id="about" className="about">
        <div className="about-content">

            <img src={aboutimg} alt="background" className="about-image" />
        </div>
    </section>
  );
};

export default About;
