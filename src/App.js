import React, { useState, useEffect } from 'react';
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
// import Profile from './loggedincomponents/Profile';
import Users from './loggedincomponents/Users';
import Resources from './loggedincomponents/Resources';
import Schedules from './loggedincomponents/Schedules';
import Notification from './loggedincomponents/Notification';
// import LandingSignUp2 from './landingcomponents/LandingSignUp2';
import ProfilePage from './loggedinpage/ProfilePage';
import UserMoreDetails from './loggedincomponents/UserMoreDetails';
import PersonalDetails from './loggedincomponents/PersonalDetails';
import AccademicDetails from './loggedincomponents/AccademicDetails';
import ContactDetails from './loggedincomponents/ContactDetails';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { baseUrl } from './baseUrl';
import { getDatas } from './slices/AllDataSlice';
import ToDoModal from './loggedincomponents/ToDoModal';
import TimeTableModal from './loggedincomponents/TimeTableModal';
import AddBlog from './loggedincomponents/AddBlog';
import UploadProfile from './loggedincomponents/UploadProfile';
import ChatsPage from './loggedinpage/ChatsPage';
import Chats from './loggedincomponents/Chats';
import ChatsHome from './loggedincomponents/ChatsHome';
// import MainLoggedInPage from './loggedinpage/MainLoggedInPage';
// import LandingNavBar from './landingcomponents/LandingNavBar';


const  App = () => {
  const dispatch = useDispatch();

useEffect(() => {
  axios.get(baseUrl + "/datas").then(res =>{
    dispatch(getDatas(res.data));
    }).catch(err => {
      // alert("Network error : error occur while  connecting to the internet. check your internet connection")
      ;});
  }, [dispatch])
  return (
   <>   
      {/* <LandingNavBar/> */}
   <Routes>
        <Route path="/" element={<LandingPage/>}/>
        {/* <Route path="/" element={<LandingSignUp2/>}/> */}
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/portal/chat/*" element={<ChatsPage/>}>
          <Route path="home" element={<ChatsHome/>} />
          <Route path="active/:id" element={<Chats/>} />
      </Route>
      <Route path="/portal/users/schedules/edit-todo/:_id" element={<ToDoModal/>} />
      <Route path="/portal/users/schedules/edit-timetable/:_id" element={<TimeTableModal/>} />
           <Route path="portal/users/upload" element={<UploadProfile/>} />
            <Route path="portal/users/usersinfo/*" element={<UserMoreDetails/>}>
          <Route path="personal-details" element={<PersonalDetails/>} />
          <Route path="accademical-details" element={<AccademicDetails/>} />
          <Route path="contact-details" element={<ContactDetails/>} />
      </Route>
      <Route path="portal/*" element={<Gard/>}>
          <Route path="home" element={<MainComponents/>} />
          <Route path="about" element={<About/>} />
          <Route path="course" element={<Courses/>} />
          <Route path="contact" element={<Contact/>} />
           <Route path="addblog" element={<AddBlog/>} />
          <Route path="blog" element={<Blogs/>} />
          <Route path="users/*" element={<ProfilePage/>}>
              <Route path="profile" element={<Users/>} />
              <Route path="resources" element={<Resources/>} />
              <Route path="schedules" element={<Schedules/>} />
          </Route>
      </Route>
      <Route path="/portal/notification" element={<Notification/>} />
      <Route path="/dashboard" element={<DashBoardPage/>} />
   </Routes>
   </>

  );
}

export default App;

