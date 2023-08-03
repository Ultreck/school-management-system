import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdSchool } from "react-icons/io";
import "../cssFolder/LandingPage.module.css"

const LandingNavBar = () => {
  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight: isActive? 'bold' : "normal",
      textDecoration: isActive? "underline" : "none",
      color: isActive? 'Blue' : 'blue',
    }
    }
  return (
    <div>       
<nav className="bg-transparent hidden z-50  md:flex px-2 sm:px-4 py-2.5 absolute w-full  top-0 left-0  ">
  <div className="container flex flex-wrap items-center justify-between mx-auto  z-30">
  <Link to="/" className="flex items-center text-yellow-400">
      <IoMdSchool className='text-4xl mx-1'/>
      <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-500">EduTech</span>
  </Link>
  <div className=" flex justify-between" id="navbar-sticky">
      <ul className="">
          <li>
            <NavLink to='/' className="mx-10 font-bold text-sky-400 text-xl " style={navLinkStyles} >Home</NavLink>
          </li>
      </ul>
      <ul className="flex">
          <li>
            <NavLink to='/signup'  className="mx-10 font-bold text-sky-400 text-xl" style={navLinkStyles}>Register</NavLink>
          </li>
          <li>
            <NavLink to='/signin'  className="mx-10 font-bold text-sky-400 text-xl" style={navLinkStyles}>Sign in</NavLink>
          </li>
      </ul>
  </div>
 
  </div>
</nav>

    </div>
  )
}

export default LandingNavBar
