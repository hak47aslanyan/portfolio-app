import "./HomePage.css";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header/Header.jsx";
import TechStack from "../components/TechStack/TechStack.jsx";
import Project from "../components/Project/Project.jsx";
import Contact from "../components/Contact/Contact.jsx";

import { FaAnglesUp } from "react-icons/fa6";

import Blob1 from "../images/blob.svg";
import Blob2 from "../images/blob1.svg";
import Blob3 from "../images/blob2.svg";

function HomePage() {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  AOS.init();
  return (
    <div>
      <img
        style={{
          position: "absolute",
          width: "500px",
          top: "-200px",
          left: "600px",
        }}
        src={Blob1}
        alt="Blob"
      />
      <img
        style={{
          position: "absolute",
          width: "500px",
          top: "700px",
          left: "-100px",
        }}
        src={Blob2}
        alt="Blob"
      />
      <img
        style={{
          position: "absolute",
          width: "500px",
          top: "1650px",
          left: "72%",
        }}
        src={Blob3}
        alt="Blob"
      />
      <div
        className="body-container"
        style={{ margin: "0 auto", width: "80%" }}
      >
        <Navbar />
        <Header />
        <TechStack />
        <Project />
        <Contact />
      </div>
      <FaAnglesUp
        id="up-button"
        onClick={handleScroll}
        data-aos="zoom-in-down"
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          background: "#f3f3f3f3",
          width: "20px",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default HomePage;
