import React, {useEffect, useState} from 'react'
import { NavLink,  Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import img2 from '../images2/background.jpg'
import { BsArrowLeft, BsThreeDots} from "react-icons/bs";
import { FaCamera} from "react-icons/fa";
import { MdCancel} from "react-icons/md";
import PeopleProfile from '../loggedincomponents/PeopleProfile';
import Users from '../loggedincomponents/Users';
import {  getStorage, ref, getDownloadURL  } from 'firebase/storage';
import { initializeApp } from "firebase/app";

const ProfilePage = ({open}) => {
   const [isTrueOne, setisTrueOne] = useState(false)
   const [imageName, setimageName] = useState()
   const [downloadUrl, setdownloadUrl] = useState();
  const state = useSelector(state => state.users);
  const userAvatar = useSelector(avatar => avatar.boolean)
  const navigate = useNavigate();


  const firebaseConfig = {
    apiKey: "AIzaSyBb2-qXcZBqq60_Z9lQ1ObDHuZjnC9WG5s",
    authDomain: "school-management-system-cb2fa.firebaseapp.com",
    projectId: "school-management-system-cb2fa",
    storageBucket: "school-management-system-cb2fa.appspot.com",
    messagingSenderId: "22595629780",
    appId: "1:22595629780:web:68347ab777679570744141",
    measurementId: "G-BJYV6EF6E1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
// const analytics = getAnalytics(app);


     

// Active class function
const navLinkStyles = ({isActive}) => {
  return {
    fontWeight: isActive? 'bold' : "normal",
    textDecoration: isActive? "underline" : "none",
    fontStyle: isActive? "italic" : "normal",
    color: isActive? "black" : 'rgb(107 114 128)'
  }
}

let user_id = JSON.parse(sessionStorage.getItem("user_id"));


useEffect(() => {
  const downloadUrl = ref(storage, `profilePics/${user_id}`);
  if(downloadUrl){
    setimageName(downloadUrl.name);
        getDownloadURL(downloadUrl).then((url) => {
          if(url){
            setdownloadUrl(url);
          }
          else{
            return;
          }
        });
  }
}, [storage, user_id]);

// Show more details function
  const showMoreFunct = () => {
      navigate('/portal/users/usersinfo/accademical-details');
  }

  

  const handleCamera = () => {
    setisTrueOne(!isTrueOne);
  }
  const handleCloce = () => {
    setisTrueOne(false);
  }
  const handleUpload = () => {
    navigate('/portal/users/upload');
  }

  const profileNav = [
    {item: 'Time-Table', path: 'profile'},
    {item: 'To-Do-List', path: 'schedules'},
    {item: 'My-Post', path: 'resources'},
    // {item: 'Notification', path: 'notification'},
  ];

  // Handle back arrow function
  const handleBackArrow = () => {
    navigate('/portal/');
    localStorage.setItem('active', JSON.stringify(0));
  };
// console.log(imageName);
  return (
    <div className=' justify-center lg:w-11/12 mx-auto flex relative '>
      <div className="text w-full md:w-4/5 lg:w-3/5 border">
        {/* Headers */}
        <section className="text">
      {/* <div className="text w-full h-full fixed bg-slate-500 z-50"></div> */}
          <div className="text">
            <div className="text flex w-full bg-white top-11 lg:top-14 shadow-lg items-center z-20 gap-10 sticky border py-3 px-6">
              <BsArrowLeft title='back home' onClick={handleBackArrow} className='cursor-pointer'/>
            <h1 className="text font-semibold">{state.firstname} {state.lastname} </h1>
            </div>
               
              <div className="text h-32 md:h-52 w-full border mt-10  bg-slate-200">
                  {/* <img src={img} alt="" className="text h-full w-full border " /> */}
              </div>
              <div className="text ">
                <div className="text relative">
                  <div className="text  absolute -translate-y-14 md:-translate-y-24 ml-5 h-28 w-28 md:h-40 md:w-40 rounded-full border-4 border-white">
                     
                          <img src={userAvatar} alt="" className="text rounded-full w-full h-full" loading='lazy'/>
                          {/* <img src={img2} alt="" className="text rounded-full w-full h-full" loading='lazy'/> */}
                    <FaCamera className='absolute text-blue-700 sm:translate-x-24 shadow-lg md:translate-x-36 md:top-12 cursor-pointer translate-x-24 lg:translate-x-36 top-8 lg:top-12 ' onClick={handleCamera} title='upload profile picture'/>
                  </div>
                    <div className={`text shadow-lg absolute  border bg-white px-5 py-3 ${!isTrueOne? 'hidden' : ''} rounded-lg text-sm gap-6 lg:-top-12 -top-5 ml-28 lg:ml-40`}>
                      <MdCancel className={` absolute right-5 text-red-500 text-lg top-2 cursor-pointer`} title='close' onClick={handleCloce}/>
                      <ul className="text list-disc list-inside py-4">
                        <li onClick={handleUpload} className="text hover:bg-slate-100 px-5 py-2 rounded-lg cursor-pointer my-3">Upload picture</li>
                        <li className="text hover:bg-slate-100 px-5 py-2 rounded-lg cursor-pointer my-3">Use camera</li>
                      </ul>
                    </div>
                </div>
                  <div className="text-sm pt-14 pb-9 px-6">
                    <h1 className="text-xl font-bold py-2">{state?.firstname} {state?.lastname}</h1>
                    <p className="text-slate-600 py-2">
                      <span className="text">Program : </span>
                      <span className="text">{state? state.program: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-600 py-2">
                      <span className="text">Faculty : </span>
                      <span className="text">{state? state.faculty: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-600 py-2">
                      <span className="text">Course : </span>
                      <span className="text">{state? state.courses: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-600 py-2">
                      <span className="text">Student Id: </span>
                      <span className="text">{state? state.matric: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-600 py-2">
                      <span className="text">Level : </span>
                      <span className="text">{state? state.level: 'Loading...'}</span>
                    </p>
                    <p className="text flex w-1/2 py-2 items-center cursor-pointer" onClick={showMoreFunct}>
                      <span className="text-xl mx-2"><BsThreeDots/></span>
                      <span className="text mx-2">See more info</span> 
                    </p>
                  </div>
              </div>
          </div>
        </section>
          <div className={`text mx-auto px-8`}>
              <nav className="text-gray-500 sticky lg:top-14 top-12 py-2 bg-white border-b z-30">
                <ul className="text w-full flex gap-4 lg:gap-20 justify-around">
                {profileNav.map((value, index) => (
                      <NavLink style={navLinkStyles}  key={index} to={value.path} className={` `}>
                      <li className={` cursor-pointer duration-700 ease-in-out `}>{value.item}</li>
                      </NavLink>
             ))}
        </ul>
              </nav>
              <Routes>
                <Route path='/' element={<Users/>} />
              </Routes>
            <Outlet/>
          </div>
      </div>
      <div className="text w-1/4 hidden lg:flex">
          <PeopleProfile/>
      </div>
    </div>
  )
}

export default ProfilePage
