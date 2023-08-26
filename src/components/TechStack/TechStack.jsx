import "./TechStack.css";
import React from "react";
import TechStackItem from "./techStack__components/TechStackItem";
import Typewriter from "../Effects/TypeWritter";



import HTML_LOGO from "../../images/html-logo.png";
import CSS_LOGO from "../../images/css-logo.png";
import JS_LOGO from "../../images/js-logo.png";
import REACT_LOGO from "../../images/logos_react.png";
import REDUX_LOGO from "../../images/redux.png";
import TAILWIND_LOGO from "../../images/tailwind.png";
import GIT_LOGO from "../../images/git.png";
import VSCODE_LOGO from "../../images/vscode.png";
import GITHUB_LOGO from "../../images/github.png";
import FIGMA_LOGO from "../../images/figma.png";

function TechStack() {

  return (
    <div id="techStack" className="tech-body">
      <h1 className="tech-title">My Tech Stack</h1>
      <Typewriter className="tech-text" text="Technologies I’ve been working with recently" delay={150}/> 
      <div className="techs">
        <TechStackItem title="HTML" logo={HTML_LOGO} />
        <TechStackItem title="CSS" logo={CSS_LOGO} />
        <TechStackItem title="JS" logo={JS_LOGO} />
        <TechStackItem title="REACT" logo={REACT_LOGO} />
        <TechStackItem title="REDUX" logo={REDUX_LOGO} />
      </div>
      <div className="techs">
        <TechStackItem title="TAILWIND" logo={TAILWIND_LOGO} />
        <TechStackItem title="GIT" logo={GIT_LOGO} />
        <TechStackItem title="VSCODE" logo={VSCODE_LOGO} />
        <TechStackItem title="GITHUB" logo={GITHUB_LOGO} />
        <TechStackItem title="FIGMA" logo={FIGMA_LOGO} />
      </div>
    </div>
  );
}

export default TechStack;
