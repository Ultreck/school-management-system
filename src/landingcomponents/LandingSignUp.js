import React, { useState, useEffect } from 'react';
import img from '../images2/Thesis-amico.png'
import { NavLink } from 'react-router-dom';
import SignUpSideBar from './SignUpSideBar';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { baseUrl } from '../baseUrl';
import axios from 'axios';

const LandingSignUp = () => {
      const [studenArray, setstudenArray] = useState([])
      const [checkBox, setcheckBox] = useState(false)
      const [errModalClass, seterrModalClass] = useState("mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800 hidden")
      const [successModalClass, setsuccessModalClass] = useState("mb-3 inline-flex w-full items-center rounded-lg bg-success-100 py-2 px-4 text-base text-success-800 hidden")
      const [errModalText, seterrModalText] = useState("")
      const [buttonClass, setbuttonClass] = useState("text-white bg-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm px-5 py-2 text-center w-1/2")
      // const [errModalText, seterrModalText] = useState("")
      const [inputClass, setinputClass] = useState("mb-4 md:mb-5")
      const [studentData, setstudentData] = useState({
            firstname:"", 
            lastname:"", 
            email:"", 
            gender:"", 
            password:"", 
          })

          useEffect(() => {
            // postData();
          }, [])
          

      // handle show password functions and use states
      const [type, settype] = useState('password')
      const [icon, seticon] = useState(eyeOff)
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
    
      // handle Changes function
      const handleChanges = (e) =>{
        const {name, value} = e.target;
        setstudentData({...studentData, [name]:value});
      //   console.log(studentData);
      }
      
      
      // handle Submit function
      const handleSubmit = (e) =>{
            e.preventDefault();
            if(studentData.firstname === " " || 
            studentData.lastname === " " ||
             studentData.email === " " || 
             studentData.gender === " " || 
             studentData.password === ""){
                  seterrModalText("Every fields is required, fill it all.")
                  seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800')
                  setinputClass("mb-2 md:mb-5")
            }else{
                  if(checkBox === false){
                        seterrModalText("Please click the check box.")
                        seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-yellow-100 py-3 px-4 text-sm text-yellow-800')
                        setsuccessModalClass("mb-3 inline-flex w-full items-center rounded-lg bg-success-100 py-2 px-4 text-base text-success-800 hidden")
                        setinputClass("mb-2 md:mb-5")
                        
                  }
                  else{
                        axios.post(baseUrl + "/register", studentData).then(res => {
                              if(res.data.status === 400){
                                    seterrModalText("Account already exist, please sign in")
                                    seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-red-100 py-3 px-4 text-sm text-red-800')
                              }else{
                                    setinputClass("mb-2 md:mb-5")
                                    setstudenArray([...studenArray, studentData])
                                    setbuttonClass("text-white bg-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm px-5 py-2 text-center w-1/2 animate-pulse")
                                    setcheckBox(false)
                                    setsuccessModalClass("mb-3 inline-flex w-full items-center rounded-lg bg-success-100 py-2 px-4 text-base text-success-800")
                                   setsuccessModalClass("mb-3 inline-flex w-full items-center rounded-lg bg-success-100 py-2 px-4 text-base text-success-800")

                              }
                              }).catch(err => {
                                    console.log(err)
                              });


                  
                        
                        
                  }
            }
      }

      // Function that handle check box
      const handleCheckBox = (e) =>{
            setcheckBox(true)
            seterrModalText("Please click the check box.")
            seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-yellow-100 py-3 px-4 text-sm text-yellow-700 hidden')
            setinputClass("mb-4 md:mb-5")
            
      }
   
      // const postData = () =>{
      //       axios.post(baseUrl + "/register", studentData).then(res => 
      //             console.log(res)).catch(err => 
      //                   console.log(err));
      // }

  return (
    <div>
      <SignUpSideBar/>
      <div className="text flex  overflow-hidden">
            <div className="text h-screen w-0 md:w-1/2 bg-cover" style={{backgroundImage: `url(${img})`}}>
                  <div className="text-center ml-0 font-bold text-4xl  mt-24 p-0">
                 </div>
            </div>
            <div className="text h-screen lg:px-20 xl:px-32 px-5 py-12 overflow-hidden w-full md:w-1/2  mx-auto" 
            // style={{clipPath:"polygon(25% 0%, 100% 0%, 99% 100%, 0% 100%)"}}
            >
                  <div className="text  rounded-lg border-dashed border-2 w-full h-full md:mt-10 mt-5 md:p-10 py-2 px-3 mx-auto">   
                  <div>
                        <h1 className="text-center mb-3 mt-1 underline  text-xl font-bold">Sign Up</h1>
                        {/* Success Modal */}
                        <div
                              className={successModalClass}
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
                              Successfully Sign Up.
                              </div>

                              {/* Error Modal */}
                        <div
                              className={errModalClass}
                              role="alert">
                              <span className="mr-2">
                              <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5">
                              <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                              clipRule="evenodd" />
                        </svg>
                        </span>
                                     {errModalText} 
                        </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Your first name</label>
                  <input name='firstname' value={studentData.firstname} onChange={handleChanges} type="text" id="firstname" className="shadow-sm  border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g John" required/>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Your last name</label>
                  <input name='lastname' value={studentData.lastname} onChange={handleChanges} type="text" id="lastname" className="shadow-sm border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g  Deo" required/>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input name='email' value={studentData.email} onChange={handleChanges} type="email" id="email" className="shadow-sm border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g name@wts.com" required/>
                  </div>
                  <div className={inputClass}>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                  <input name='password' value={studentData.password} onChange={handleChanges}  type={type} id="password" className="shadow-sm border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required placeholder='password'/>
                  <label htmlFor="" onClick={handleAuth} className=' absolute right-12 md:right-20 lg:right-48 -translate-y-8'><Icon icon={icon}/></label>
                  </div>
                  <div className={inputClass}>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Gender</label>
                              <select  name='gender' value={studentData.gender} onChange={handleChanges}  data-te-select-init className="mb-3  shadow-sm border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                    <option value="choose gender" hidden>e.g Male</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                              </select>
                  </div>
                  <div className="flex items-start mb-2 lg:mb-4">
                  <div className="flex items-center h-5">
                        <input onClick={handleCheckBox} onChange={handleChanges} checked={checkBox} id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                  </div>
                  <label  className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="##" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                  </div>
                  <button onClick={handleSubmit} type="submit" className={buttonClass}>Register</button>
                  </div>

                  </div>
            </div>
      </div>
    </div>
  )
}

export default LandingSignUp
