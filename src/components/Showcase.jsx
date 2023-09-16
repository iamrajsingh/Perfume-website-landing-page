import React from "react";
import "../styles/showcase.css";
import {HiArrowRight} from "react-icons/hi"

const Showcase = ({ imageStyle ,img, intro, Heading, para, seeAllBtn, showcase, Showcaseimage  }) => {
  return (
    <div className={showcase}>
      <div className="showcaseContent">
        <div className="showcaseInner">
          <p className="Intro mb">{intro}</p>
          <h2 className="Heading mb fw">{Heading}</h2>
        </div>

        <div className="showcaseInner">
          <p className="product fw">{para}</p>
          <p className="seeAllMore fw">
            {seeAllBtn}
            <span><HiArrowRight size={20} style={{float: "right"}}/></span>
          </p>
        </div>
      </div>
      <div className="showCaseImageContainer">
        <img className={Showcaseimage } src={img} alt="image" />
      </div>
    </div>
  );
};

export default Showcase;
