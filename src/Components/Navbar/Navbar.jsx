import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from "react-router-dom";
import { StoreContext } from '../../Context/StoreContext';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import AuthButton from '../AuthButton/AuthButton';



const Navbar = ({setShowLogin}) => {

  const[menu,setMenu]=useState("menu");

  const{getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className='navbar'>
   <Link to='/' ><img src='./logo.png' className='logo'/></Link>
    <ul className='navbar-menu'>
        <li onClick={()=>setMenu('home')} className={menu=='home' ? 'active':""}>home</li>
         <li onClick={()=>setMenu('menu')} className={menu=='menu'? 'active':""} >menu</li> 
          <li onClick={()=>setMenu('mobile-app')}  className={menu=='mobile-app' ? 'active':""}>mobile-app</li>
           <li onClick={()=>setMenu('contact-us')}className={menu=='contact-us' ? 'active':""}>contact us</li>
    </ul>
<div className="navbar-right">
  <img width={20} src={assets.search_icon}/>
  <div className="navbar-search-icon">
   <Link to='/cart'><img width={20} src={assets.basket_icon} /></Link>

    <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
  </div>
  
{/* <SignInButton redirectUrl="/dashboard">
  <button>Sign In</button>
</SignInButton> */}


<AuthButton/>

</div>


    </div>
  )
}

export default Navbar