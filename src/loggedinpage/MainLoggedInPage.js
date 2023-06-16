import React, {useEffect, useState} from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SideNav from '../loggedincomponents/SideNav'
import MainComponents from '../loggedincomponents/MainComponents'
import {  getStorage, ref, getDownloadURL } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import { userAct } from '../slices/UserSlice';
import { MdNotifications } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { AiOutlineBars,  } from "react-icons/ai";
import { getDatas } from '../slices/AllDataSlice'
import img1 from "../images2/user1.jpg"
import { setClass } from '../slices/ClassSlice';
// import female from '../images2/avatar-female-tall.jpg';
// import male from '../images2/avatar-female-tall.jpg';
import OptionsBar from '../loggedincomponents/OptionsBar';

const MainLoggedInPage = ({ isLoggedIn}) => {
  const [open, setOpen] = useState(true);
  const [opOpen, setOpOpen] = useState(false);
  // const [profileUpload, setprofileUpload] = useState(null);
  const [loader, setloader] = useState(true);
  const [currentUser, setcurrentUser] = useState({});
  // const [img, setimg] = useState(true);
  const dispatch = useDispatch();
// const state = useSelector(state => state.datas);
const users = useSelector(state => state.users);


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
const userPics = useSelector(state => state.boolean);

let user_id = JSON.parse(sessionStorage.getItem('user_id'));

  useEffect(() => {
    axios.get(baseUrl + "/datas").then(res =>{
      dispatch(getDatas(res.data));
      let found = res.data.find((val, index) => (val._id === user_id));
      dispatch(userAct(found));
      setcurrentUser(found);
        setloader(false);
      }).catch(err => {
        // alert("Network error : error occur while  connecting to the internet. check your internet connection");
      });
        }, [dispatch, user_id]);

        useEffect(() => {
      const downloadUrl = ref(storage, `profilePics/${user_id}`);
      const downloadUrl2 = ref(storage, `profilePics/male.png`);
      const downloadUrl3 = ref(storage, `profilePics/female.png`);
      getDownloadURL(downloadUrl).then((url) => {
        if(url){
          dispatch(setClass(url));
            // setimg(true);
          }}).catch(err => {
            if(currentUser.gender === 'male' || currentUser.gender === 'Male' || currentUser.gender === 'MALE'){
              getDownloadURL(downloadUrl2).then(urlMale =>{
                  dispatch(setClass(urlMale));
                  // console.log(urlMale);
                })
              }else if(currentUser.gender === 'female' || currentUser.gender === 'Female' || currentUser.gender === 'FEMALE'){
                getDownloadURL(downloadUrl3).then(urlFemale =>{
                  dispatch(setClass(urlFemale));
                  // console.log(urlFemale);
                  
                })
              }
             
            });
        }, [currentUser])
        

  return (
    <div>
      {/* Loader */}
      <div className={`text w-full fixed ${!loader && "hidden"}  h-screen bg-slate-700 z-50 `}>
        <div className="text w-full h-screen fixed  bg-slate-800">
          <div className="text-center  ">
            <div className="text mt-20">
                   <IoMdSchool className='text-amber-600  mt-6 mx-auto text-5xl'/>
                    <span className="text-white text-xl font-bold">Edutech</span>
            </div>
            <div className="text-center mx-auto relative rounded-full  animate-spin duration-300 p-4 mt-40 w-20 h-20 z-50  border-t-2"> </div>
          </div>
        </div>
      </div>

      <div className="text flex relative">
        <div className="text hidden lg:flex lg:mt-0">
            <SideNav setOpen={setOpen} open={open} />
        </div>
        <div className="text fixed z-50">
            <OptionsBar setOpOpen={setOpOpen} opOpen={opOpen} />
        </div>
        <div className="text w-full relative">
          <div className={`text w-full ${open? 'lg:w-11/12' : "lg:w-full"}  absolute right-0` } >
            <div className={`text  w-full ${open? 'w-11/12' : 'w-full'} pl-20 relative ml-auto bg-white right-0`}>
                <div className={`text lg:pr-24 lg:pl-36  py-1 fixed z-40 w-full px-5 bg-white border-b right-0 flex justify-between ${open? 'lg:w-11/12' : "lg:w-full"}`}>
              <div className="text">
                <h1 className="text-lg font-bold italic ">Welcome to EduTech.</h1>
                <p className="text-slate-500 lg:text-sm text-xs">
                  Hello <span className="text-blue-600 font-semibold"> { users?.firstname }, </span>  You're welcome!
                </p>
              </div>
              <div className="text flex   justify-center items-center">
                  <div className="text w-7 h-7 lg:mx-10 mx-5 cursor-pointer rounded-full bg-gray-200 flex justify-center items-center" title='Notification(s)'>
                      <MdNotifications/>
                  </div>
                  <div className="text w-8 h-8 cursor-pointer rounded-full border-2" title='Profile'>
                      <img src={userPics} alt="" className="w-full h-full rounded-full" />
                      {/* <img src={img1} alt="" className="w-full h-full rounded-full" /> */}
                  </div>
                  <div className="text ml-5 ">
                    <AiOutlineBars onClick={() =>setOpOpen(!opOpen)}/>
                  </div>
              </div>
            </div>
                </div>
            <Routes>
            <Route path="/" element={<MainComponents open={open}/>} />
            </Routes>
            <Outlet open={open}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLoggedInPage
