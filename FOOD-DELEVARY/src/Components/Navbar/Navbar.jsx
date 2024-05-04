import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../Assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setlogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="navbar">
     <Link to='/'> <img src={assets.logo} alt="" className="logo" /> </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu('home')} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#ExploreMenu" onClick={()=>setMenu('Menu')} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href="#appdownload" onClick={()=>setMenu('Mobile-app')} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu('Contact us')} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
       <Link to='/cart'>  <img src={assets.basket_icon} alt="" /> </Link>
          <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
        <button onClick={()=>setlogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
