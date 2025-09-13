import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">

        <div className="footer-content-left">
        <img src="./logo.png" height={100} width={100} alt=" "/>
        <p>Delivering happiness, one meal at a time. Explore a wide range of delicious dishes from your favorite restaurants and enjoy fast, fresh, and reliable food delivery at your doorstep.</p>

<div className="footer-social-icons">
<img src={assets.facebook_icon} alt=" "/>
<img src={assets.linkedin_icon} alt=" "/>
<img src={assets.twitter_icon} alt=" "/>

</div>
        </div>
      
        <div className="footer-content-center">
      <h2>COMPANY</h2>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </ul>

        </div>

          <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91-95647852</li>
    <li>contacttomata@gmail.com</li>
</ul>

        </div>

    </div>
    <hr/>
    <p className='footer-copyright'>Copyright 2025 © RestroDineIn.com - All Right Reserved</p>
    </div>
  )
}

export default Footer