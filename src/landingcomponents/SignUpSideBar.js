import React, { useState, useEffect } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiHome, HiArrowSmRight, HiInformationCircle } from 'react-icons/hi'; 

const SignUpSideBar = () => {
      const [sideControl, setsideControl] = useState("hidden  ");
  

      // side nav funtion for sign up page
      const handleSideNavbar = () =>{
            if(sideControl === "hidden"){
                  setsideControl("flex");
            }
            else{
                  setsideControl("hidden");
            }
      }
      // useEffec function
      useEffect(() => {
            handleSideNavbar();
      }, [])
      

      return (
    <div>
       <nav className="bg-white md:hidden z-40 px-2 sm:px-4 dark:text-white text-black py-2.5 dark:bg-gray-900 fixed w-full  top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" className="flex items-center ">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WTS</span>
  </a>
  <button className="text flex md:hidden z-50 fixed right-8 rotate-180 mt-2" onClick={handleSideNavbar}>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
      </button>
  </div>
</nav>



<div className={sideControl}>
  <Sidebar aria-label="Default sidebar example" className=" fixed top-0 left-0 z-30 my-10 w-64 h-screen transition-transform -translate-x-0 sm:translate-x-0">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="/"
          icon={HiHome}
        >
          Home
        </Sidebar.Item>
        {/* <Sidebar.Item
          href="/about"
          icon={HiInformationCircle}
        >
          About
        </Sidebar.Item> */}
        <Sidebar.Item
          href="/signin"
          icon={HiArrowSmRight}
        >
          Sign In
        </Sidebar.Item>
        {/* <Sidebar.Item
          href="#"
          icon={HiTable}
        >
          Sign Up
        </Sidebar.Item> */}
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>
    </div>
  )
}

export default SignUpSideBar
