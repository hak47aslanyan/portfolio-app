import "./Contact.css";

import React from "react";

import gitHubLogo from "../../images/githublogo.png";
import facebookLogo from "../../images/facebook_icon.png";
import linkedInLogo from "../../images/linkedin.png";
function Contact() {
  return (
    <div id="contacts" className="contact-body">
      <div className="contact-container">
        <h2>Hak.dev</h2>
        <div className="contact-items">
          <a href="tel:+37477724731">+374 (77) 72-47-31</a>
          <a href="mailto:hak.aslanyan47@gmail.com">hak.aslanyan47@gmail.com</a>
          <ul className="contact__social">
            <li>
              <a href="https://github.com/hak47aslanyan">
                <img src={gitHubLogo} alt="Github" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100010424912503">
                <img src={facebookLogo} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={linkedInLogo} alt="LinkedIN" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbarItemsContact">
        <ul className="contact-navbarItems">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#techStack">Tech Stack</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
