import scentImage from "../assets/Parfum_50mL_Web.png";
import Ads from "../components/Ads";
import {HiArrowRight} from "react-icons/hi"

const ScentsSection = () => {
  return (
    <>
      <Ads
        productImg={scentImage}
        productImg2={scentImage}
        intro={"Fragrance"}
        Heading={" Our personal scents"}
        para={
          "Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us."
        }
        seeAllBtn= {`See all Fragrance`}
        productName={"Ouranon Eau de Parfum"}
        icon={<HiArrowRight size={20}/>}
        productDesc={"Woody, spicy, resinous"}
      />
    </>
  );
};

export default ScentsSection;
