import React from "react";

function TechStackItem(props) {
  
  return (
    <div className="techItem-body">
      <div className="tech-body">
        <img data-aos-anchor-placement="zoom-out-down" data-aos="fade-up" data-aos-duration="2000" src={props.logo} alt="LOGO" />
      </div>
    </div>
  );
}

export default TechStackItem;
