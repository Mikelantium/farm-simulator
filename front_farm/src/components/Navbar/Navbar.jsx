import React, { useContext } from 'react'

import { NavLink } from "react-router-dom";


//   import "../App.css";

const NavBar = () => {

  return  <>
  

    
    <nav>
        <div className='flex-sp-btw'>
        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}> <span>Home</span></NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : "" } > <span>Login</span> </NavLink>
        <NavLink to="/parcel" className={({ isActive }) => isActive ? "active" : ""}> <span>Parcel</span> </NavLink>
        <NavLink to="/user" className={({ isActive }) => isActive ? "active" : ""}> <span>User</span></NavLink>
        <NavLink to="/invoice" className={({ isActive }) => isActive ? "active" : ""}> <span>Invoice</span></NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""}> <span>Calendar</span></NavLink>
        </div>
    </nav>
    
    
  
  </>
}

export default NavBar