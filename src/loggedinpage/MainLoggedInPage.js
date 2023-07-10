import React, {useEffect, useState} from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import SideNav from '../loggedincomponents/SideNav';
import MainComponents from '../loggedincomponents/MainComponents';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import { useDispatch, useSelector } from 'react-redux'
import { userAct } from '../slices/UserSlice';
import { MdNotifications } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { AiOutlineBars,  } from "react-icons/ai";
import { getDatas } from '../slices/AllDataSlice';
import male from "../images2/maleAvatar.jpg";
import female from "../images2/femaleAvatar.jpg";
import {TbReload } from "react-icons/tb";
import img from "../images2/no-internet-connection-illustration-concept-free-vector.jpg"
import img2 from "../images2/newyork.png"
import OptionsBar from '../loggedincomponents/OptionsBar';

const MainLoggedInPage = ({ isLoggedIn}) => {
  const [open, setOpen] = useState(true);
  const [opOpen, setOpOpen] = useState(false);
  const [loader, setloader] = useState(true);
  const [alertIsTrue, setalertIsTrue] = useState(false);
  const [notification, setnotification] = useState([]);
  const [error, seterror] = useState(null);
  const dispatch = useDispatch();
const users = useSelector(state => state.users);
const navigate = useNavigate();

let user_id = JSON.parse(sessionStorage.getItem('user_id'));

  useEffect(() => {
    let notificationLength = JSON.parse(localStorage.getItem('nLength'));
    notification.length > notificationLength? setalertIsTrue(true): setalertIsTrue(false);
    console.log(notification.length);
    console.log(notificationLength);
  }, [notification.length])
  


  useEffect(() => {
    axios.get(baseUrl + "/datas").then(res =>{
      dispatch(getDatas(res.data));
      let found = res.data.find((val, index) => (val._id === user_id));
      dispatch(userAct(found));
        setloader(false);
      }).catch(err => {
        seterror(err);
        // alert("Network error : error occur while  connecting to the internet. check your internet connection");
      });
        }, [dispatch, user_id]);

        useEffect(() => {
          axios.get(baseUrl + '/notification').then(res => {
            let found = res.data.filter((value, index) => value.poster_id === user_id);

            let foundExact = found.filter((value, index) => value.user_id !== user_id);
            setnotification(foundExact)
            
          } )
        }, [user_id])
        
        

          const handleNotification = () => {
            localStorage.setItem("nLength", JSON.stringify(notification.length))
            navigate("/portal/notification");
          }
        const handleReload = () => {
          window.location.reload();
        }

  return (
    <div>
      {/* Loader */}
      <div className={`text w-full fixed ${!loader && "hidden"}  h-screen bg-slate-700 z-50 `}>
        <div className="text w-full h-screen fixed  bg-slate-800">
          <div className="text-center  ">
            {error? 
            <div className="text-white flex justify-center items-center">
              <div className="text-white gap-5 mt-40" >
                <img src={img} alt="" className="text" />
                <h2 className="text-white mt-10">Your connection was interrupted</h2>
                  <small className="text-white my-3">A network change was detected.</small>
                  <p className="text-white my-3">ERR_NETWORK_CHANGED.</p>
                  <button onClick={handleReload} className="text bg-blue-500 text-center py-3 px-20 mt-5 hover:bg-blue-600 rounded">Reload</button>
              </div>

            </div>:
            <>
              <div className={`text mt-40`}>
                    <IoMdSchool className='text-amber-600  mt-6 mx-auto text-5xl'/>
                      <span className="text-white text-xl font-bold">Edutech</span>
              </div>
              <div className="text-center mx-auto relative rounded-full   p-4 mt-20 w-20 h-20 flex justify-center items-center z-50 "> <TbReload className='animate-spin duration-300 text-white text-4xl'/></div>
            </>
            }
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
                <div className={`text lg:pr-24 lg:pl-36  py-1 fixed z-30 w-full px-5 bg-white border-b right-0 flex justify-between ${open? 'lg:w-11/12' : "lg:w-full"}`}>
              <div className="text lg:ml-10">
                <h1 className="text-lg font-bold italic ">Welcome to EduTech.</h1>
                <p className="text-slate-500 lg:text-sm text-xs">
                  Hello <span className="text-blue-600 font-semibold"> { users?.firstname }, </span>  You're welcome!
                </p>
              </div>
              <div className="text flex justify-center items-center">
                  <div className="text relative w-7 h-7 lg:mx-10 mx-5 cursor-pointer rounded-full bg-gray-200 flex justify-center items-center" title='Notification(s)' onClick={handleNotification}>
                      <MdNotifications/>
                    <span className={`text p-1 rounded-full ${alertIsTrue? "" : "hidden"} -translate-y-2.5 right-0  bg-red-600 absolute`}></span>
                  </div>
                  <div className="text w-8 h-8 cursor-pointer rounded-full border-2" title='Profile'>
                    {users.path? 
                      <img src={users?.path} alt="" className="w-full h-full rounded-full" />:
                      <>
                      {users.gender === 'male' || users.gender === 'Male' || users.gender === 'MALE' ? 
                          <img src={male} alt="" className="w-full h-full rounded-full" />:
                          <img src={female} alt="" className="w-full h-full rounded-full" />
                    }
                      
                      </>
                    }
                      {/* <img src={img1} alt="" className="w-full h-full rounded-full" /> */}
                  </div>
                  <div className="text ml-5 lg:hidden">
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
