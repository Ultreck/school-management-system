import React, { Children } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import DashBoardPage from './pages/DashBoardPage';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Gard from './loggedincomponents/Gard';
import MainComponents from './loggedincomponents/MainComponents';
import About from './loggedincomponents/About';
import Courses from './loggedincomponents/Courses';
import Blogs from './loggedincomponents/Blogs';
import Contact from './loggedincomponents/Contact';
import Profile from './loggedincomponents/Profile';
// import MainLoggedInPage from './loggedinpage/MainLoggedInPage';
// import LandingNavBar from './landingcomponents/LandingNavBar';


const  App = () => {
  return (
   <>   
      {/* <LandingNavBar/> */}
   <Routes>
        <Route path="/" element={<LandingPage/>}/>
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="portal" element={<Gard/>}>
          <Route path="home" element={<MainComponents/>} />
          <Route path="about" element={<About/>} />
          <Route path="course" element={<Courses/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="blog" element={<Blogs/>} />
          <Route path="profile" element={<Profile/>} />
      </Route>
      <Route path="/dashboard" element={<DashBoardPage/>} />
   </Routes>
   </>

  );
}

export default App;

