import React from "react";
import "../styles/Home.css";
import heroImage from "../assets/hero1.png";
import apkFile from "../apk/taskstakApk.apk";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero-content" >
        <div className="title">
          <h1>
            Task<span className="highlight">Stack</span>
          </h1>
          <p>Track and manage tasks efficiently. TaskStack helps users and small organizations to organize their work assignments and team.</p>

          <a href={apkFile} download>
        <button className="taskstack-button">Download APK</button>
      </a>
         
        </div>
        <div className="androidInterface">
          <img src={heroImage} alt="Android preview" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
