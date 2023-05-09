import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SideNav from '../loggedincomponents/SideNav'
import MainComponents from '../loggedincomponents/MainComponents'
import NavBar from '../loggedincomponents/NavBar'

const MainLoggedInPage = () => {
  return (
    <div>
      <div className="text flex relative">
        <div className="text hidden lg:flex mt-10">
            <SideNav/>
        </div>
        <div className="text  ">
          <div className="text ">
            <NavBar/>
          </div>
          <div className="text w-5/6   absolute right-0">
            <Routes>
            <Route path="/" element={<MainComponents/>} />
            </Routes>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLoggedInPage
