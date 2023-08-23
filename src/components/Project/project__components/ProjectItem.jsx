import React from "react";


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
    </div>
  );
}

export default ProjectItem;
