import React from 'react'
import Showcase from '../components/Showcase'
import video from "../assets/Fragrance_Web_Secondary_.gif"
const AthenaeumSection = () => {
  return (
    
    <>
    <Showcase img={video}
           intro={"The Athenaeum           "}
           Heading={"Decoding fragrance"}
           para={"The language of notes, sillage and aromatic profiles allows us to describe perfume. Discover our guide to selecting a signature fragrance"}
           seeAllBtn={"Read more"}
           showcase={"showcaseInvert"}
           Showcaseimage={"ShowcaseimageInvert"}
    />
    </>
  )
}

export default AthenaeumSection