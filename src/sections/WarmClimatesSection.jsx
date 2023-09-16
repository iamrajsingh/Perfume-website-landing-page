import React from 'react'
import img1 from "../assets/Aesop-Skin-Immediate-Moisture-Facial-Hydrosol.webp"
import img2 from "../assets/Aesop-Skin-Purifying-Facial-Exfoliant.webp"

import Ads from "../components/Ads";


const WarmClimatesSection = () => {
  return (
    <>
    <Ads
      productImg={img1}
      productImg2={img2}
      intro={"For warm climates"}
      Heading={" Adjusting to seasonal change"}
      para={
        "In the warmer months, high temperatures and humidity can lead to increased sebum production for normal, combination, and oily skins. Accordingly, the use of slightly lighter formulations is recommended."
      }
      seeAllBtn={" "}
      productName={"Ouranon Eau de Parfum"}
      productDesc={"Woody, spicy, resinous"}
    />
  </>
  )
}

export default WarmClimatesSection