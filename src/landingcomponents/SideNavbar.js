import React, { useState, useEffect } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiViewBoards, HiChartPie, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiBookmark, HiChartBar, HiTable } from 'react-icons/hi'; 
import NavBar2 from './NavBar2';

const SideNavbar = ({setgetFunct}) => {
const [sideControl, setsideControl] = useState("hidden md:flex  ")
// const [btnControl, setbtnControl] = useState()

const handleSideNavbar = () =>{
      if(sideControl === "hidden md:flex"){
            setsideControl("flex");
      }
      else{
            setsideControl("hidden md:flex");
      }
}
useEffect(() => {
      setgetFunct(handleSideNavbar)
}, [])

  return (
    <>
            <div className="text">
                  <NavBar2/>
            </div>
                  <button className="text flex md:hidden z-50 fixed right-8 rotate-180 mt-5" onClick={handleSideNavbar}>
                              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                              </svg>
                  </button>
                  <div className={sideControl}>
                   <aside className="  fixed top-0 left-0 z-30 my-10 w-64 h-screen transition-transform -translate-x-0 sm:translate-x-0">
                        <Sidebar aria-label="Sidebar with content separator example">
                        <Sidebar.Items>
                              <Sidebar.ItemGroup>
                              <Sidebar.Item
                              href="#"
                              icon={HiChartPie}
                              >
                              Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              icon={HiViewBoards}
                              >
                              Kanban
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              icon={HiInbox}
                              >
                              Inbox
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              icon={HiUser}
                              >
                              Users
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              icon={HiShoppingBag}
                              >
                              Products
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              icon={HiArrowSmRight}
                              >
                              Sign In
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              icon={HiTable}
                              >
                              Sign Up
                              </Sidebar.Item>
                              </Sidebar.ItemGroup>
                              <Sidebar.ItemGroup>
                              <Sidebar.Item
                              href="#"
                              icon={HiChartPie}
                              >
                              Upgrade to Pro
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              icon={HiViewBoards}
                              >
                              Documentation
                              </Sidebar.Item>
                              <Sidebar.Item
                              href="#"
                              //     icon={BiBuoy}
                              >
                              Help
                              </Sidebar.Item>
                              </Sidebar.ItemGroup>
                        </Sidebar.Items>
                        </Sidebar>
                              </aside>
                        </div>

                  
            </>
  )
}

export default SideNavbar
