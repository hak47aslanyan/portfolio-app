import "./Navbar.css";

import gitHubLogo from "../../images/githublogo.png";
import facebookLogo from "../../images/facebook_icon.png";
import linkedInLogo from "../../images/linkedin.png";
import React from "react";

function Navbar() {
  return (
    <div id="header">
      <nav data-aos="zoom-in-down" data-aos-duration="1500" className="nav-bar">
        <div className="logo">
          <h1 style={{marginTop: '30px'}}>Hak.dev</h1>
        </div>
        <div>
          <ul className="navbar-items">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#techStack">Tech Stack</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
            <ul className="nav-bar__social">
              <li>
                <a href="https://github.com/hak47aslanyan">
                  <img src={gitHubLogo} alt="Github" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={facebookLogo} alt="Facebook" style = {
                    {
                     width: '30px',
                    }
                  }
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={linkedInLogo} alt="LinkedIN" />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
