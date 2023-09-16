import React from "react";
import Showcase from "../components/Showcase";
import img from "../assets/Aesop-Generic-Images-Facial-Appointments.webp";

const FacialAppointments = () => {
  return (
    <>
      <Showcase
        img={img}
        intro={"Facial Appointments"}
        Heading={"Composure for the skin and senses"}
        para={
          "For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.           "
        }
        seeAllBtn={"Learn more"}
        showcase={"showcaseInvert"}
        Showcaseimage={"ShowcaseimageInvert"}
      />
      <div className="motoLine" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginBottom: "150px", marginTop: "150px", fontFamily: "Zapf Humanist,serif", paddingLeft: "15px" , paddingRight: "15px", textAlign: "center", color: "#333333"}}>
        <h2 style={{fontWeight: "200", fontSize: "35px"}}>‘Nothing is ever ended, everything only begun.’</h2>
        <p style={{fontWeight: "600"}}>Sara Teasdale</p>
      </div>
    </>
  );
};

export default FacialAppointments;
