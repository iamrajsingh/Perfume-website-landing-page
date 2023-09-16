import React from 'react'
import "../styles/ads.css"
import {HiArrowRight} from "react-icons/hi"


const Ads = ({intro, icon, productImg, Heading, para, seeAllBtn, productName, productDesc, productImg2}) => {
  return (
    <>
    <div className="showCaseSection">
      <div className="Content">
        <div className="contentInner">
          <p className="Intro mb">{intro}</p>
          <h2 className="Heading mb fw textColor">{Heading}</h2>
        </div>

        <div className="contentInner">
          <p className="product fw textColor">
            {para}
          </p>
          <p className="seeAllButton fw textColor">
            {seeAllBtn}
            <span style={{ paddingLeft: "10px" }}>{icon}</span>
          </p>
        </div>
      </div>
      <div className="products">
        <div className="productList">
          <img className="productImg" src={productImg} alt="product" />
          <p className="productName">{productName}</p>
          <p className="productDesc">{productDesc}</p>
        </div>
        <div className="productList displayProduct">
          <img className="productImg" src={productImg2} alt="product" />
          <p className="productName">{productName}</p>
          <p className="productDesc">{productDesc}</p>
        </div>
        <div className="productList displayProduct">
          <img className="productImg" src={productImg2} alt="product" />
          <p className="productName">{productName}</p>
          <p className="productDesc">{productDesc}</p>
        </div>
        
      </div>
      
    </div> 
  </>
  )
}

export default Ads