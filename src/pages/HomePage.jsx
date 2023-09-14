import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar/Navbar.jsx'
import Header from '../components/Header/Header.jsx'
import TechStack from '../components/TechStack/TechStack.jsx'
import Project from '../components/Project/Project.jsx'
import Contact from '../components/Contact/Contact.jsx';

import { FaAnglesUp } from "react-icons/fa6";

function HomePage() {

  const handleScroll = () => {
    window.scrollTo(0, 0);
  }

  AOS.init();
  return (
    <div>
      <div className="body-container" style={{margin: "0 auto", width: "1200px"}}>
        <Navbar/>
        <Header/>
        <TechStack/>
        <Project/>
        <Contact/>
      </div>
      <FaAnglesUp onClick={handleScroll} data-aos="zoom-in-down"  style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        background: '#f3f3f3f3',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer'
      }}/>
    </div>
  )
}

export default HomePage
