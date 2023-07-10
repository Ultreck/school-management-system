import React, {useState, useEffect} from 'react';
// import img2 from '../images2/background.jpg';
import { IoMdSchool } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import AccademicDetails from './AccademicDetails';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import { useSelector } from 'react-redux';
import male from "../images2/maleAvatar.jpg"
import female from "../images2/femaleAvatar.jpg"
import {TbReload } from "react-icons/tb";

const UserMoreDetails = () => {
      const [loader, setloader] = useState(true);
      const [state, setstate] = useState({});
      // const [isActivee, setisActivee] = useState(0);
      const navigate =  useNavigate();
      const pics = useSelector(state => state.boolean);
      
      // start on use effect
      useEffect(() => {
            // setloader(false);
            let user_id;
            if(sessionStorage.user_id){
               user_id = JSON.parse(sessionStorage.getItem('user_id'))
             }
         
             axios.get(baseUrl + "/datas").then(res =>{
               let found = res.data.find((val, index) => (val._id === user_id));
                setstate(found);
                setloader(false);
            //     console.log(found);
            //     console.log(res);
               }).catch(err => {
                 // alert("Network error : error occur while  connecting to the internet. check your internet connection");
               });
      }, [])
// end of use effect 

// Active class function
const navLinkStyles = ({isActive}) => {
      return {
        fontWeight: isActive? 'bold' : "normal",
        textDecoration: isActive? "underline" : "none",
        fontStyle: isActive? "italic" : "normal",
        color: isActive? "black" : 'rgb(107 114 128)'
      }
    }
      
      // Nav list items
      const listOfMoreDetails = [
            {list:  "Accademic", path: 'accademical-details'},
            {list:  "Personal", path: 'personal-details'},
            {list:  "Address/Contact", path: 'contact-details'},
          
      ]


           
      //  closing function
           const handleClose = () => {
            navigate('/portal/users/profile');
           }

  return (
    <div>
       {/* Loader */}
       <div className={`text w-full fixed ${!loader && "hidden"}  h-screen bg-slate-700 z-50 `}>
        <div className="text w-full h-screen fixed  bg-slate-800">
          <div className="text-center  ">
            <div className="text mt-40">
                   <IoMdSchool className='text-amber-600  mt-6 mx-auto text-5xl'/>
                    <span className="text-white text-xl font-bold">Edutech</span>
            </div>
            <div className="text-center mx-auto relative rounded-full   p-4 mt-20 w-20 h-20 flex justify-center items-center z-50 "> <TbReload className='animate-spin duration-300 text-white text-4xl'/></div>
          </div>
        </div>
      </div>
      {/* loader end */}

      <div className="text bg-slate-50 w-full h-full fixed flex justify-center items-center">
            <div className="text relative bg-white  border w-full sm:w-3/5 xl:w-1/2 py-5 md:px-16 h-screen px-8">
                  <div className="text-2xl text-red-600 absolute lg:right-10 lg:top-10 right-6 cursor-pointer" title='close' onClick={handleClose}><ImCancelCircle/></div>
                  {state.path? 
                            <img src={state?.path} alt="" className="text h-32 w-32 rounded-full border-4 border-slate-500" />:
                              <>
                              {state.gender === 'male' || state.gender === 'Male' || state.gender === 'MALE' ? 
                                   <img src={male} alt="" className="text h-32 w-32 rounded-full border-4 border-slate-500" />:
                                   <img src={female} alt="" className="text h-32 w-32 rounded-full border-4 border-slate-500" />
                              }
                              
                              </>
                              }
            <h1 className="text-xl font-bold py-2">{state?.firstname} {state.lastname}</h1>
            <nav className="text py-3 border-b my-5">
                  <ul className="text-sm md:text-md flex justify-around">
                        {listOfMoreDetails.map((value, index) => (
                              <NavLink style={navLinkStyles} to={value.path} key={index}>
                                    <li className={`text-md text-slate-800`}>{value.list}</li>
                              </NavLink>
                        ))}
                  </ul>
            </nav>
            <div className="text">
                  <Routes>
                        <Route path='/' element={<AccademicDetails state={state}/>} />
                  </Routes>
                  <Outlet/>
            </div>
                   
                    
            </div>
      </div>
    </div>
  )
}

export default UserMoreDetails
