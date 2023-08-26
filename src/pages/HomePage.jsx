import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar/Navbar.jsx'
import Header from '../components/Header/Header.jsx'
import TechStack from '../components/TechStack/TechStack.jsx'
import Project from '../components/Project/Project.jsx'
import Contact from '../components/Contact/Contact.jsx';

function HomePage() {
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
    </div>
  )
}

export default HomePage
