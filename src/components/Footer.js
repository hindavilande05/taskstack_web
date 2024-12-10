import React from "react";
import "../styles/Footer.css";
import github from "../assets/git.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/hindavilande05/taskstack_web" className="github-link">
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
