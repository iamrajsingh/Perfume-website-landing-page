import React from 'react'

const Complimentary = () => {
  return (
    
    <>
    <div className='complimentary' style={{display: "flex", background: "#c2c2af", justifyContent: "center", color: "black", paddingLeft: "30px", paddingRight: "30px", fontFamily: "Suisse Regular,sans-serif" , fontSize: "14px"}}>
        <p className='complimentary_para'>Trained Aesop consultations are available to provide bespoke skin care advise. <span style={{fontWeight: "bold", cursor: "pointer"}}>Book a video consultation</span> </p>
    </div>


    <div className='complimentary' style={{display: "flex", background: "#252525", justifyContent: "center", color: "white", paddingLeft: "30px", paddingRight: "30px", fontFamily: "Suisse Regular,sans-serif", fontSize: "14px"}}>
        <p className='complimentary_para'>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on order over HK$400 <span>+</span></p>
    </div>
    </>
  )
}

export default Complimentary