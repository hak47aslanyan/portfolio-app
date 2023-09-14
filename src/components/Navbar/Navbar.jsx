import "./Navbar.css";

import gitHubLogo from "../../images/githublogo.png";
import facebookLogo from "../../images/facebook_icon.png";
import linkedInLogo from "../../images/linkedin.png";
import { useState } from "react";


function Navbar() {

  let [isOpen, setIsOpen] = useState(false);


  const handelBurgerMenu = () => {
    document.querySelector('.menu-btn').classList.toggle('open');
    setIsOpen(!isOpen);
  }
  return (
    <div id="header">
      <nav data-aos="zoom-in-down" data-aos-duration="1500" className="nav-bar">
        <div className="logo">
          <h1 style={{ marginTop: "30px" }}>Hak.dev</h1>
        </div>
        <div onClick={handelBurgerMenu} className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>

        {isOpen ? (
          <div data-aos="zoom-in-rigth" className="navbar-container">
          <ul className="navbar-items">
            <li>
              <a onClick={handelBurgerMenu} href="#header">Home</a>
            </li>
            <li>
              <a onClick={handelBurgerMenu} href="#techStack">Tech Stack</a>
            </li>
            <li>
              <a onClick={handelBurgerMenu} href="#project">Projects</a>
            </li>
            <li>
              <a onClick={handelBurgerMenu} href="#contacts">Contact</a>
            </li>
            <ul className="nav-bar__social">
              <li>
                <a href="https://github.com/hak47aslanyan">
                  <img src={gitHubLogo} alt="Github" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100010424912503&mibextid=ZbWKwL">
                  <img
                    src={facebookLogo}
                    alt="Facebook"
                    style={{
                      width: "30px",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hak-aslanyan-b462a91a9">
                  <img src={linkedInLogo} alt="LinkedIN" />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
