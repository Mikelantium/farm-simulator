import React, { useContext, useEffect, useState } from 'react'

import { NavLink } from "react-router-dom";
import { useAuthState } from '../../Context';


//   import "../App.css";

const NavBar = () => {

  const { token } = useAuthState();

  return  <>
  

    
    <nav>
        <div className='flex-sp-btw'>
    
        {token && <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}> <span>Home</span></NavLink>}
        {!token && <NavLink to="/" className={({ isActive }) => isActive ? "active" : "" } > <span>Login</span> </NavLink>}
        {!token && <NavLink to="/register" className={({ isActive }) => isActive ? "active" : "" } > <span>Register</span> </NavLink>}
        {token && <NavLink to="/parcel" className={({ isActive }) => isActive ? "active" : ""}> <span>Parcel</span> </NavLink>}
        {token && <NavLink to="/user" className={({ isActive }) => isActive ? "active" : ""}> <span>User</span></NavLink>}
        {token && <NavLink to="/invoice" className={({ isActive }) => isActive ? "active" : ""}> <span>Invoice</span></NavLink>}
        {token && <NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""}> <span>Calendar</span></NavLink>}
        </div>
    </nav>
    
    
  
  </>
}

export default NavBar