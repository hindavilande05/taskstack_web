import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import apkFile from "../apk/taskstakApk.apk";
import hamburgerIcon from "../assets/hambu.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">

   

    <div className="logo">
        <img src={logo} style={{ height: "20%", width: "20%" }} alt="logo" />
        <p
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "0.3rem",
          }}
        >
          Hindavi Lande
        </p>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className="hamburger" onClick={handleMenuToggle}>
        <img src={hamburgerIcon} alt="Hamburger Menu" />
      </div>

    
      

      {/* Navbar Links */}
      <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a className="btn-download" href={apkFile} download>
            <span>Download APK</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
