import "./Navbar.css";

import gitHubLogo from "../../images/githublogo.png";
import twitterLogo from "../../images/twitter.png";
import linkedInLogo from "../../images/linkedin.png";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav data-aos="zoom-in-down" data-aos-duration="1500" className="nav-bar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div>
          <ul  className="navbar-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/project">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <ul className="nav-bar__social">
              <li>
                <a href="https://github.com/hak47aslanyan">
                  <img src={gitHubLogo} alt="Github" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={twitterLogo} alt="Twitter" />
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
