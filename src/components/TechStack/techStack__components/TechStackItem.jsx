import React from "react";

function TechStackItem(props) {
  
  return (
    <div className="techItem-body">
      <div className="tech-body">
        <img data-aos-anchor-placement="top-center" data-aos="zoom-out-up" data-aos-duration="2000" src={props.logo} alt="LOGO" />
      </div>
    </div>
  );
}

export default TechStackItem;
