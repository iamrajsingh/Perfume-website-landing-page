import React from 'react'
import Showcase from './../components/Showcase';
import img from "../assets/Homepage-Secondary-1-Mid-Desktop-1690x1185px.jpg"


const SkinCareSection = () => {
  return (
    <>
    <Showcase img={img} 
              intro={"Parsley Seed Skin Care"}
              Heading={"In warm or humid urban settings, skin is vulnerable to a range of environmental factors."}
              para={"Pollution, air-conditioning and the stresses of city life can heighten skin’s susceptibility to free radical damage and dehydration. Anti-oxidant rich Parsley Seed formulations help to support skin against these effects."}
              seeAllBtn={"Regimens for warm climates"}
              showcase={"showcase"}
              Showcaseimage={"Showcaseimage"}
              // imageStyle = {"showCaseImageContainer"}
    />
    </>
  )
}

export default SkinCareSection