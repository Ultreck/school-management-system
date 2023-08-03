import React, { useState, useEffect } from 'react';
// import { Sidebar } from 'flowbite-react';
// import { HiHome } from 'react-icons/hi'; 
import { AiOutlineLogin, AiOutlineLogout, AiOutlineHome} from 'react-icons/ai'; 
import { IoMdSchool } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const HomeSideNavBar = () => {

      const [homeControl, sethomeControl] = useState(false);

      const navLinkStyles = ({isActive}) => {
        return {
          fontWeight: isActive? 'bold' : "normal",
          textDecoration: isActive? "underline" : "none",
          color: isActive? 'white' : 'white',
        }
        }

  return (
    <div>
             <nav className="bg-blue-900 md:hidden z-50 px-2 sm:px-4 text-white py-2.5 fixed w-full  top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to='/' className="flex items-center ">
            <div className="text flex">
                   <IoMdSchool className='text-amber-600 mx-auto text-3xl'/>
                    <span className="text text-xl font-bold ml-3">Edutech</span>
            </div>
  </Link>
  <button className="text flex md:hidden z-50 fixed right-8 rotate-180 mt-2" onClick={() =>sethomeControl(!homeControl)}>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
      </button>
  </div>
</nav>



<div className={` px-5 w-80 z-40 py-20 bg-blue-900 text-white h-screen fixed ${homeControl? "" : "hidden"}`}>
  <div onClick={() =>sethomeControl(!homeControl)} className="text flex items-center gap-2 my-5">
    <AiOutlineHome/>
    <NavLink style={navLinkStyles} to='/'>Home</NavLink>
  </div>
  <div onClick={() =>sethomeControl(!homeControl)}  className="text flex items-center gap-2 my-5">
    <AiOutlineLogin/>
    <NavLink style={navLinkStyles} to='/signin'>Sign In</NavLink>
  </div>
  <div onClick={() =>sethomeControl(!homeControl)} className="text flex items-center gap-2 my-5">
    <AiOutlineLogout/>
    <NavLink style={navLinkStyles} to='/signup'>Sign Up</NavLink>
  </div>

  {/* <Sidebar aria-label="Default sidebar example" className=" fixed top-0 left-0 z-30 my-10 w-64 h-screen transition-transform -translate-x-0 sm:translate-x-0 bg-blue-900">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="/"
          icon={HiHome}
        >
          Home
        </Sidebar.Item>
        <Sidebar.Item
          href="/signin"
          icon={HiArrowSmRight}
        >
          Sign In
        </Sidebar.Item>
        <Sidebar.Item
          href="/signup"
          icon={HiTable}
        >
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar> */}
</div>
    </div>
  )
}

export default HomeSideNavBar
