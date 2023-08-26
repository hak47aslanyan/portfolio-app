import React from "react";

import GITHUB_LOGO from '../../../images/githublogo.png'

function ProjectItem(props) {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="project-item__body">
      <img src={props.img} alt="img" className="project-item__img" />
      <h2 className="project-item__title">{props.title}</h2>
      <p className="project-item__text">
        {props.text}
      </p>
      <p className="project-item__subtext">
        Tech stack : {props.techStack}
      </p>
      <a href={props.link}>
        <img src={GITHUB_LOGO} alt="github logo" style={{width: '30px', height: '30px'}}/>
      </a>

    </div>
  );
}

export default ProjectItem;
