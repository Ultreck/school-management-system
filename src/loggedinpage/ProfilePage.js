import React, {useState, useEffect} from 'react'
import { NavLink,  Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsArrowLeft, BsThreeDots, BsArrowBarLeft, BsArrowBarRight} from "react-icons/bs";
import { FaCamera} from "react-icons/fa";
import { MdCancel} from "react-icons/md";
import PeopleProfile from '../loggedincomponents/PeopleProfile';
import Users from '../loggedincomponents/Users';
import male from "../images2/maleAvatar.jpg";
import female from "../images2/femaleAvatar.jpg";
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const ProfilePage = ({open}) => {
   const [isTrueOne, setisTrueOne] = useState(false);
   const [courseMate, setcourseMate] = useState(false);
   const [allLikes, setallLikes] = useState([]);
  const state = useSelector(state => state.users);
  const navigate = useNavigate();
     

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
  axios.get(baseUrl + '/getNewsFeed').then(res => {
    const found = res.data.result.filter((value) => value.user_id === user_id);
    let likesArray = found.flatMap((item) => item.likes);
    setallLikes(likesArray);
  });
 }, [user_id]);

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
  const handleViewProfile = () => {
    navigate('/portal/users/viewpic');
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
    <div className={`justify-center lg:w-11/12 mx-auto flex relative `}>
      <div className="text w-full md:w-4/5 lg:w-3/5 border">
        {/* Headers */}
        <section className="text">
          <div className="text">
            <div className="text flex w-full bg-white top-11 lg:top-14 shadow-lg items-center z-20 gap-10 sticky border py-3 px-6">
              <BsArrowLeft title='back home' onClick={handleBackArrow} className='cursor-pointer'/>
            <h1 className="text font-semibold">{state.firstname} {state.lastname} </h1>
            </div>
               
              <div className="text h-32 md:h-52 w-full border mt-10  bg-slate-200">
                  {/* <img src={img} alt="" className="text h-full w-full border " /> */}
              </div>
              <div className="text relative">
                <div className="text relative">
                  <div className="text  absolute -translate-y-14 md:-translate-y-24 ml-5 h-28 w-28 md:h-40 md:w-40 rounded-full border-4 border-white">
                     {state.path?
                          <img src={state?.path} alt="" className="text rounded-full w-full h-full"
                          //  loading='lazy'
                          />:
                          <>
                          {state.gender === 'male' || state.gender === 'Male' || state.gender === 'MALE' ? 
                          <img src={male} alt="" className="text rounded-full w-full h-full" loading='lazy'/>:
                          <img src={female} alt="" className="text rounded-full w-full h-full" loading='lazy'/>
                    }
                          </>
                         
                     }
                    <FaCamera className='absolute text-blue-700 sm:translate-x-24 shadow-lg md:translate-x-36 md:top-12 cursor-pointer translate-x-24 lg:translate-x-36 top-8 lg:top-12 ' onClick={handleCamera} title='upload profile picture'/>
                  </div>
                    <div className={`text shadow-lg absolute z-10 border bg-white px-5 py-3 ${!isTrueOne? 'hidden' : ''} rounded-lg text-sm gap-6 lg:-top-12 -top-5 ml-28 lg:ml-40`}>
                      <MdCancel className={` absolute right-5 text-red-500 text-lg top-2 cursor-pointer`} title='close' onClick={handleCloce}/>
                      <ul className="text list-disc list-inside py-4">
                        <li onClick={handleUpload} className="text hover:bg-slate-100 px-5 py-2 rounded-lg cursor-pointer my-3">Upload picture</li>
                        <li className="text hover:bg-slate-100 px-5 py-2 rounded-lg cursor-pointer my-3" onClick={handleViewProfile}>View Profile</li>
                      </ul>
                    </div>
                </div>
                <div className='text flex'>
                    <div className="text-xs lg:text-sm pt-14 pb-9 px-6">
                      <h1 className="text font-bold py-2">{state?.firstname} {state?.lastname}</h1>
                      <p className="text-slate-600 py-2">
                        <span className="text-slate-900">Student Id: </span>
                        <span className="text">{state? state.matric: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-2">
                        <span className="text-slate-900">Program : </span>
                        <span className="text">{state? state.program: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-2">
                        <span className="text-slate-900">Faculty : </span>
                        <span className="text">{state? state.faculty: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-2">
                        <span className="text-slate-900">Course : </span>
                        <span className="text">{state? state.courses: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-2">
                        <span className="text-slate-900">Level : </span>
                        <span className="text">{state? state.level: 'Loading...'}</span>
                      </p>
                      <p className="text flex py-2 items-center cursor-pointer" onClick={showMoreFunct}>
                        <span className="text-xl mx-2"><BsThreeDots/></span>
                        <span className="text mx-2">See more info</span> 
                      </p>
                    </div>
                    <div className='text-center absolute right-0 lg:right-5 pt-2 px-5 border-l'>
                        <div className='text flex items-center mx-auto'>
                          <div className='text lg:px-5 px-1 mx-auto'>
                              <div className='lg:text-2xl font-bold font-mono text-blue-600'>{state?.follow?.length}</div>
                              <div className='text-slate-500 text-xs lg:text-md'>Following</div>
                          </div>|
                          <div className='text lg:px-5 px-1 mx-auto'>
                              <div className='lg:text-2xl font-bold font-mono text-blue-600'>{state?.follow?.length}</div>
                              <div className='text-slate-500 text-xs lg:text-md'>Follower(s)</div>
                          </div>|
                          <div className='text lg:px-5 px-1 mx-auto'>
                              <div className='lg:text-2xl font-bold font-mono text-blue-600'>{allLikes?.length}</div>
                            <div className='text-slate-500 text-xs lg:text-md '>Like(s)</div>
                        </div>
                        </div>
                    </div>
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


      {courseMate?
      <div className={`text w-10 -right-2 fixed flex justify-center items-center bg-blue-700 mt-44 duration-300 ease-linear lg:hidden h-10 cursor-pointer z-50`} title='show course mate '>
        <BsArrowBarRight  className={`text-3xl text-white`} onClick={() =>setcourseMate(!courseMate)}/>
      </div>:
      <div className={`text w-10 -right-2 fixed flex justify-center items-center bg-blue-700 mt-44 duration-300 ease-linear lg:hidden h-10 cursor-pointer z-50 rounded-tl-lg rounded-bl-lg`} title='show course mate '>
        <BsArrowBarLeft BsArrowBarRight  className={`text-3xl text-white`} onClick={() =>setcourseMate(!courseMate)}/>
      </div>
      }

      <div className={`${courseMate? "" : "hidden"} fixed z-40`}>
          <div className={`text w-full `}>
              <PeopleProfile/>
          </div>
      </div>

      <div className="text w-1/4 hidden lg:flex">
          <PeopleProfile/>
      </div>
    </div>
  )
}

export default ProfilePage
