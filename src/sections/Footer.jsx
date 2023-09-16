import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <>
    
    <div className='footerSection'>
      <div className='footerCol1 '>
        <p className='footerHeading'>Subscribe to Aesop communications</p>
        <p className='footerLine'></p>
        <input type="Email" className='footerInput' placeholder='Email address'/>
        <p className='footerPara'>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.

</p>
        <p className='footerHeading mt'>Sustainability</p>
        <p className='footerLine'></p>
        <p className='footerPara'>
        All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
        </p>
      </div>
      
      <div className='footer'>

      
      <div className='footerCol2'>
        <p className='footerHeading mt'> Orders and support</p>
        <p className='footerLine'></p>
        <p className='footerLinks'>Contact us</p>
        <p className='footerLinks'>FAQs</p>
        <p className='footerLinks'>Shipping</p>
        <p className='footerLinks'>Returns</p>
        <p className='footerLinks'>Order history</p>
        <p className='footerLinks'>Terms and conditions</p>
        <br/>
        <p className='footerHeading mt' style={{marginTop: "56px"}}> About</p>
        <p className='footerLine'></p>
        <p className='footerLinks'>Our story</p>
        <p className='footerLinks'>Foundation</p>
        <p className='footerLinks'>career</p>
        <p className='footerLinks'>Privacy policy</p>
        <p className='footerLinks'>Accessibility</p>
        <p className='footerLinks'>Cookie Policy</p>
      </div>
      <div className='footerCol3'>
        <p className='footerHeading mt'> Services</p>
        <p className='footerLine'></p>
        <p className='footerLinks'>Live assistance</p>
        <p className='footerLinks'>Corporate gifts</p>
        <p className='footerLinks'>Facial Appoinments</p>
        <p className='footerLinks'>Click and Collect</p>
        <p className='footerLinks'>Video consultation</p>

        <br/>
        <p className='footerHeading mt' style={{marginTop: "90px"}}> Social media
</p>
        <p className='footerLine'></p>
        <p className='footerLinks'>Instagram</p>
        <p className='footerLinks'>Twitter</p>
        <p className='footerLinks'>LinkedIn</p>
        <p className='footerLinks'>WeChat</p>
        <p className='footerLinks'>Weibo</p>
      </div>
      <div className='footerCol4'>
      <p className='footerHeading mt'> Location prefrences</p>
      <p className='footerLine'></p>
      <p className='footerLinks'>Shipping:</p>
        <p className='footerLinks' style={{textDecoration: "underline", marginBottom: "30px"}}>Hong Kong SAR, China</p>
        <p className='footerLinks'>Language:</p>
        <p className='footerLinks' style={{textDecoration: "underline"}}>English</p>
        <p className='footerLinks'>繁體中文</p>

      </div>
      </div>
     
    </div>    
    </>
  )
}

export default Footer