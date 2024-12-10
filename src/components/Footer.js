import React from "react";
import "../styles/Footer.css";
import github from "../assets/git.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/atharva030/Neons" className="github-link">
        <h1>For Source code, visit my  
          <span className="highlight">
            GitHub Repo 
          </span></h1>
        
        <img src={github} alt="GitHub" className="github-image" />
        </a>
      
      </div>
      <p>@copyrights | hindavilande</p>

      
    </footer>
  );
};

export default Footer;
