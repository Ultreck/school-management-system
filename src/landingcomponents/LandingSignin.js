import React, { useState, useEffect } from 'react';
import img from '../images2/Taking notes-amico.png'
// import SignInNavBar from './SignInNavBar';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import axios from 'axios';
import img2 from "../images2/no-internet-connection-illustration-concept-free-vector.jpg"
// import { IoMdSchool } from "react-icons/io";
// import {TbReload } from "react-icons/tb";
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';
import LandingNavBar from '../landingcomponents/LandingNavBar';
// import { useSelector } from 'react-redux';

const LandingSignin = () => {
const [statusMess, setstatusMess] = useState("")
const [isLoading, setisLoading] = useState(false);
const [loader, setloader] = useState(false);
const [error, seterror] = useState(false);
// const ["text-white bg-blue-700 hover:bg-blue-800  font-semibold flex justify-around py-2  my-7 rounded-lg  text-center w-full", set"text-white bg-blue-700 hover:bg-blue-800  font-semibold flex justify-around py-2  my-7 rounded-lg  text-center w-full"] = useState()
const [statusClass, setstatusClass] = useState("hidden")
  const [type, settype] = useState('password')
  const [icon, seticon] = useState(eyeOff)
  const [logInData, setlogInData] = useState({
      email:"", password:""
  })
  const navigate = useNavigate();
//   const state = useSelector((state) => state.register)

  useEffect(() => {
      if(logInData.password && logInData.email){
            setloader(true);
      }
  }, [logInData])
  

  const handleAuth = () => {
        // e.preventDefault();
        if(type === "password"){
              seticon(eye);
              settype('text');
        }
        else{
              seticon(eyeOff);
              settype('password');

        }
  }

  const handleChanges = (e) =>{
      const {name, value} = e.target
      setlogInData({...logInData, [name]:value})
      //   console.log(logInData);
  }
  const handleSubmit = () =>{
        setisLoading(true); 
      axios.post(baseUrl + "/login", logInData).then(res =>{
                  sessionStorage.setItem('user_id', JSON.stringify(res.data.data));
            // Storing user's id into localStorage
            // if(res && !checkBox){
            // }else if(res && checkBox){
            //       localStorage.setItem("user_id", JSON.stringify(res.data.data));
            // }

            // Validating user's sign in 
            if(res.data.status === 200){
                  setstatusMess("successfully logged in");
                  // set"text-white bg-blue-700 hover:bg-blue-800  font-semibold flex justify-around py-2  my-7 rounded-lg  text-center w-full"("text-white bg-blue-700 hover:bg-blue-800  font-semibold animate-pulse flex justify-around py-2 rounded-lg  text-center w-full ");
                  setstatusClass("mb-3  inline-flex w-full items-center rounded-lg bg-green-100 py-3 px-4 text-sm text-green-800 ");
                  navigate("/portal");
            }
            else if(res.data.status === 401 ){
                        if( logInData.email === "" && logInData.password === ""){
                              setstatusMess("please fill both fields")
                              setstatusClass("mb-3 flex w-full items-center rounded-lg bg-red-100 py-3 px-4 text-sm text-red-800")
                        }
                        else if(logInData.email === " " && logInData.password !== ""){
                              setstatusMess("email is required")
                              setstatusClass("mb-3 flex w-full items-center rounded-lg bg-red-100 py-3 px-4 text-sm text-red-800")
                        }
                        else{
                              setstatusMess("Account does not exist")
                              setstatusClass("mb-3 inline-flex w-full items-center rounded-lg bg-red-100 py-3 px-4 text-sm text-red-800 ")
                        }
            }
            else if(res.data.status === 400){
                  if(logInData.email  !== ""  && logInData.password === ""){
                              setstatusMess("password is required")
                              setstatusClass("mb-3 flex w-full items-center rounded-lg bg-red-100 py-3 px-4 text-sm text-red-800")
                  }else{
                        setstatusMess("Incorrect password")
                        setstatusClass("mb-3 flex w-full items-center rounded-lg bg-red-100 py-3 px-4 text-sm text-red-800")
                  }
            }

      }).catch(err =>{
            seterror(err);
            setisLoading(false);
            console.log(err)
      })

  }

  const handleReload = () => {
      window.location.reload();
    }

  return (
    <div>
      <LandingNavBar/>
       {/* Loader */}
            {error && 
            <div className="text bg-slate-900 h-screen w-full fixed z-50">
            <div className="text-white flex justify-center items-center">
              <div className="text-white gap-5 mt-40" >
                <img src={img2} alt="" className="text" />
                <h2 className="text-white mt-10">Your connection was interrupted</h2>
                  <small className="text-white my-3">A network change was detected.</small>
                  <p className="text-white my-3">ERR_NETWORK_CHANGED.</p>
                  <button onClick={handleReload} className="text bg-blue-500 text-center py-3 px-20 mt-5 hover:bg-blue-600 rounded">Reload</button>
              </div>
            </div>
       </div> 
        } 


      {/* <SignInNavBar/> */}
      <div className="text flex  overflow-hidden">
            <div className="text h-screen w-0 md:w-1/2 bg-cover flex justify-center items-center">
              <img src={img} alt="" className="text w-2/3 ml-10" />
            </div>
            <div className="text h-screen lg:px-20 xl:px-32 px-5 py-12 overflow-hidden w-full md:w-1/2  mx-auto" >
                  <div className="text mt-16">
                        <h1 className="text-center mb-3 mt-1 underline  text-xl font-bold">Sign In</h1>
                  </div>
                  <div className="text  rounded-lg  border  w-full  lg:p-10 py-2 px-3 mx-auto  ">   
                        <div>
                              {/* alert section */}
                              <div
                              className={statusClass}
                              role="alert">
                              <span className="mr-2">
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd" />
                              </svg>
                              </span>
                              {statusMess}
                              </div>
                              <div className=" my-10">
                              <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                              <input name='email' value={logInData.email} onChange={handleChanges} type="email" id="email" className="shadow-sm  border border-gray-300 text-gray-900 text-sm focus:outline-blue-500 block w-full p-2" placeholder="e.g name@wts.com" required/>
                              </div>
                              <div className=" my-10 relative">
                              <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                              <input name='password' value={logInData.password} onChange={handleChanges}  type={type} id="password" className="shadow-sm  border border-gray-300 text-gray-900 text-sm focus:outline-blue-500 block w-full p-2" required/>
                              <label htmlFor="" onClick={handleAuth} className=' absolute right-6  -translate-y-8'><Icon icon={icon}/></label>
                              </div>
                              {/* <div className="flex items-start mb-2 lg:mb-4">
                              <div className="flex items-center h-5">
                                    <input onClick={handleCheckBox} onChange={handleChanges} checked={checkBox} id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-3  dark:border-gray-600 focus:ring-blue-600" required/>
                              </div>
                              <label  className="ml-2 text-sm font-medium text-gray-900 ">keep me logged in</label>
                              </div> */}
                              <button type="submit" onClick={handleSubmit} className={`text-white   ${!loader? 'bg-blue-400': 'hover:bg-blue-800 bg-blue-700'}  font-semibold flex justify-around py-2  my-7 rounded-lg  text-center w-full`} disabled={!logInData.password && !logInData.email}>{isLoading? "Logging  in...": `${error? 'Network Error...' : 'Log in'}`}</button>
                        </div>

                  </div>
            </div>
      </div>
    </div>
  )
}

export default LandingSignin
