import React from 'react'
import SideNav from './loggedincomponents/SideNav'
import { Route, Routes } from 'react-router-dom'
import About from '../src/loggedincomponents/About'
import Courses from '../src/loggedincomponents/Courses'
import Contact from '../src/loggedincomponents/Contact'
import Blogs from '../src/loggedincomponents/Blogs'
import Profile from '../src/loggedincomponents/Profile'
import MainComponents from '../src/loggedincomponents/MainComponents'
import MainLoggedInPage from './loggedinpage/MainLoggedInPage'

const Main = () => {
  return (
    <div>
      <div className={''}>
         <div className="text">
            <SideNav/>
         </div>
         <div className="text">
            <Routes>

      <Route path="portal" element={<MainLoggedInPage/>}>
          <Route path="home" element={<MainComponents/>} />
          <Route path="about" element={<About/>} />
          <Route path="course" element={<Courses/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="blog" element={<Blogs/>} />
          <Route path="profile" element={<Profile/>} />
      </Route>


            <Route path="/" element={<MainComponents/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/course" element={<Courses/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/blog" element={<Blogs/>} />
            <Route path="/profile" element={<Profile/>} />
            </Routes>
         </div>
      </div>
    </div>
  )
}

export default Main
