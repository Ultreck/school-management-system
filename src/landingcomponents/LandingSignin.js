import React, { useState, useEffect } from 'react';
import img from '../images2/Taking notes-amico.png'
import SignInNavBar from './SignInNavBar';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LandingSignin = () => {
const [statusMess, setstatusMess] = useState("")
const [buttonClass, setbuttonClass] = useState("text-white bg-blue-700 hover:bg-blue-800  font-semibold flex justify-around py-2  my-7 rounded-lg  text-center w-full")
const [statusClass, setstatusClass] = useState("hidden")
  const [type, settype] = useState('password')
  const [icon, seticon] = useState(eyeOff)
  const navigate = useNavigate();
  const state = useSelector((state) => state.register)

  useEffect(() => {
      console.log(state);
  }, [])
  

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
  const [logInData, setlogInData] = useState({
      email:"", password:""
  })

  const handleChanges = (e) =>{
      const {name, value} = e.target
      setlogInData({...logInData, [name]:value})
      //   console.log(logInData);
  }
  const handleSubmit = () =>{
      axios.post(baseUrl + "/login", logInData).then(res =>{

            // Storing user's id into localStorage
            if(res){
                  localStorage.setItem("user_id", JSON.stringify(res.data.data));
            }

            // Validating user's sign in 
            if(res.data.status === 200){
                  setstatusMess("successfully logged in");
                  setbuttonClass("text-white bg-blue-700 hover:bg-blue-800  font-semibold animate-pulse flex justify-around py-2 rounded-lg  text-center w-full ");
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
            console.log(err)
      })

  }

  return (
    <div>
      <SignInNavBar/>
      <div className="text flex  overflow-hidden">
            <div className="text h-screen w-0 md:w-1/2 bg-cover flex justify-center items-center">
              <img src={img} alt="" className="text w-2/3 ml-10" />
            </div>
            <div className="text h-screen lg:px-20 xl:px-32 px-5 py-12 overflow-hidden w-full md:w-1/2  mx-auto" >
                  <div className="text mt-32">
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
                              <button type="submit" onClick={handleSubmit} className={buttonClass}>
                                    {/* <span className="text w-5 h-5 bg-green-500 p-2 rounded-full animate-pulse"></span> */}
                                    <span className="text">Log In</span>
                                    {/* <span className="text w-5 h-5 bg-green-500 p-2 rounded-full animate-pulse"></span> */}
                                    </button>
                        </div>

                  </div>
            </div>
      </div>
    </div>
  )
}

export default LandingSignin
