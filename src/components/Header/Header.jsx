import "./Header.css";
import React from "react";
import Typewriter from "../Effects/TypeWritter";

import userPhoto from '../../images/user-photo.png'

function Header() {
  return (
    <div style={{zIndex: 0}} className="header-body">
      <div data-aos="fade-right"  data-aos-duration="2000" className="header-title">
      <Typewriter text="Hi 👋," delay={100}/>
      <Typewriter text=" My name is Hakob," delay={120}/>
      <Typewriter text="I build things for web" delay={150}/>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" className="header-image">
        <img src={userPhoto} alt="me" />
      </div>
    </div>
  );
}

export default Header;
