import React from 'react'
import "../styles/navbar.css"
import {CiSearch} from "react-icons/ci"
import {AiOutlineHeart} from "react-icons/ai"
import {FaGripLines} from "react-icons/fa"
import Complimentary from '../components/Complimentary'

const Navbar = () => {

  const navData = [
    {
      title: "Skin Care"
    },
    {
      title: "Body & Hand"
    },
    {
      title: "Hair"
    },
    {
      title: "Fragrance"
    },
    {
      title: "Home"
    },
    {
      title: "Kits & Travel"
    },
    {
      title: "Gifts"
    },
    {
      title: "Read"
    },
    {
      title: "Stores"
    },
    {
      title: "Facial Appoinments"
    },
    {
      title: <CiSearch size={25}/>
    }
  ]

  return ( <>
  

  <Complimentary/>
    <section className='navbar'>
      
      <div className='navLeftContent'>
        <ul className='navList'>
          {navData.map((value)=> {
            return(
              <li className='navListData'>{value.title}</li>
            )
          })}
        </ul>

        <ul className='navListSmall'>
          <li className='navListDataSmall'>
            Shop
          </li>
          <li className='navListDataSmall'>
            Read
          </li>
          <li className='navListDataSmall'>
            Store
          </li>
          <li className='navListDataSmall'>
          <CiSearch size={25}/>
          </li>
        </ul>
        <div className='navLogoXS'>
            <h2 style={{fontWeight: "300"}}>Aēsop <span style={{fontSize: "7px"}}>©</span></h2>
        </div>

        
        
      </div>
      <div className='navRightContent'>
        <p className='navListDataRight'>Log in</p>
        <p className='navListDataRight'>Cabinet</p>
        <p className='navListDataRight'>Cart</p>

        <div className='navListRightXS'>
          <p className='navListDataRightXS'><CiSearch size={20}/></p>
          <p className='navListDataRightXS'><AiOutlineHeart size={20}/></p>
          <p style={{paddingBottom: "5px"}} className='navListDataRightXS'>Cart</p>
          <p className='navListDataRightXS'><FaGripLines size={20}/></p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Navbar