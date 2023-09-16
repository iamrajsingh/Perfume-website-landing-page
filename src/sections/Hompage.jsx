import React from "react";
import homeImg from "../assets/Homepage.jpg";
import "../styles/homepage.css";
import {HiArrowRight} from "react-icons/hi"
 

const Hompage = () => {
  return (
    <section className="homeSection">
      <img className="homeImg" src={homeImg} alt="homeImg" />
      <div className="homeContentXS">
        <p className="xsContentIntro">Doorways to the undiscovered</p>
        <h2 className="xsContentHeading">
          Othertopias: a collection of unorthodox fragrances
        </h2>
        <p className="xsContentPara">
          Step inside six fragrant worlds that transcend our immediate
          perception—vivid and distinctive.
        </p>
        <p className="xsButton">Discover the fragrances <span className="xsArrow"><HiArrowRight size={20}/></span> </p>
      </div>
      <div className="homeContent">
        <h2 className="homeTitle ">Aēsop <span style={{fontSize: "9px"}}>©</span></h2>
        <div className="homeIntro">
          <p className="homeIntroText">Doorways to the undiscovered</p>
          <h2 className="homeIntroTitle">
            Othertopias: a collection of unorthodox fragrances
          </h2>
          <p className="homeIntropara">
            Step inside six fragrant worlds that transcend our immediate
            perception—vivid and distinctive.
          </p>
          <p className="btn">
            Discover the fragrances{" "}
            <span style={{ paddingRight: "30px" }}>{""}</span>
            <span> <HiArrowRight size={20}/> </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hompage;
