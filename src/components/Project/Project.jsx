import "./Project.css";
import React from "react";
import ProjectItem from "./project__components/ProjectItem";
import Typewriter from "../Effects/TypeWritter";


import CALCPROJ_IMG from "../../images/calc-preview.jpg";
import LETTERGAME_IMG from '../../images/letter-game-preview.jpg'
import TODOAPP_IMG from '../../images/todo-app-preview.jpg'
import WEBSITE_IMG from '../../images/web-site-preview.jpg'
import CAT_IMG from '../../images/cat-app.jpg'
function Project() {
  return (
    <div className="project-body">
      <h1 className="project-title">Projects</h1>
      <Typewriter className="project-text" text="Things I’ve built so far" delay={200}/> 
      <div className="project-items">
        <ProjectItem

          img={CALCPROJ_IMG}
          title="Calculator"
          text="Your pocket-sized, feature-rich calculator for quick and accurate calculations."
          techStack="HTML, CSS, jQuery"
        />
        <ProjectItem
          img={LETTERGAME_IMG}
          title="Letter Game"
          text="Unleash your wordsmith skills in this addictive letter game adventure."
          techStack="HTML, CSS, JavaScript"
        />

      </div>
      <div className="project-items">
        <ProjectItem
          img={WEBSITE_IMG}
          title="Web Site"
          text="Discover BLACK SHOP's digital hub, showcasing passions and creativity."
          techStack="HTML, CSS, JavaScript"
        />
        <ProjectItem
          img={CAT_IMG}
          title="Cat App"
          text="Experience endless feline fun with our cat app - generate and adore 10 unique virtual cats!"
          techStack="HTML, CSS, React, Axios, React Thunk"
        />
      </div>
      <div className="project-items">
      <ProjectItem
          img={TODOAPP_IMG}
          title="Todo App"
          text="Stay organized effortlessly with our intuitive todo app."
          techStack="HTML, CSS, React"
        />
      </div>
    </div>
  );
}

export default Project;
