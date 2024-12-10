import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Features />
      <Footer />
      
      
    </div>
  );
};

export default App;
