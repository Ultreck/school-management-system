import React, { useState, useEffect } from 'react';
import img from '../images2/Thesis-amico.png'
import imgwellDone from '../images2/depositphotos_76288887-stock-photo-well-done-word-on-banner.jpg'
import { useNavigate } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { baseUrl } from '../baseUrl';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registerFunct } from '../slices/RegisterSlice';
import Programs from '../loggedincomponents/Programs';
import LandingNavBar from '../landingcomponents/LandingNavBar';
// import { IoMdSchool } from "react-icons/io";

const LandingSignUp = () => {
      const [studenArray, setstudenArray] = useState([])
      const [checkBox, setcheckBox] = useState(false)
      const [progress, setprogress] = useState(0)
      const [errModalClass, seterrModalClass] = useState("mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800 hidden")
      const [successModalClass, setsuccessModalClass] = useState("mb-3 inline-flex w-full items-center rounded-lg bg-success-100 py-2 px-4 text-base text-success-800 hidden")
      const [errModalText, seterrModalText] = useState("")
      const [buttonClass, setbuttonClass] = useState("text-white bg-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm px-5 py-2 text-center w-1/2")
      // const [errModalText, seterrModalText] = useState("")
      const [inputClass, setinputClass] = useState("mb-3 relative md:mb-5")
      const [addressDetails, setaddressDetails] = useState({
            country:"", 
            region:"", 
            city:"", 
            contact:"", 
            address:"", 
      })
      const [accademicDetails, setaccademicDetails] = useState({
            program:"", 
            faculty:"", 
            level:"", 
            courses:"", 
      })
      const [studentData, setstudentData] = useState({
            firstname:"", 
            lastname:"", 
            email:"", 
            gender:"", 
            password:"", 
          });
          const [count, setcount] = useState();
          const dispatch = useDispatch();
          const state = useSelector((state) => state.register);
          const navigate = useNavigate();

          useEffect(() => {
     
      }, [])

// timer count function
      const redirectTimer = () => {
            if(count > 0){
                  setcount(count - 1);
            }

            if(count === 0 && sessionStorage.user_id){
                  // navigate("/signin");
                  navigate("/portal");
            }
            return () => clearTimeout();
      };
      setTimeout(redirectTimer, 1000);
    




      const getUserAddress = () => {
            axios.get("https://ipinfo.io/json?token=1a8ac44142766d").then((res) => {
                  if(!checkBox){
                        setaddressDetails(res.data);
                  }else{
                        setaddressDetails({
                              country:"", 
                              region:"", 
                              city:"", 
                              address:"", 
                        });

                  }
            }).catch((err) => {
                  console.log(err);
            })
            setcheckBox(!checkBox);

          }

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
        setaddressDetails({...addressDetails, [name]:value});
        setaccademicDetails({...accademicDetails, [name]:value});
        dispatch(registerFunct({ [name]:value}));
      //   console.log(state);
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
                  setinputClass("mb-2 relative md:mb-5")
            }else{
                  if(checkBox === false){
                        seterrModalText("Please click the check box to agree.")
                        seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-yellow-100 py-3 px-4 text-sm text-yellow-800')
                        setsuccessModalClass("mb-3 inline-flex w-full items-center rounded-lg bg-success-100 py-2 px-4 text-base text-success-800 hidden")
                        setinputClass("mb-2, relative md:mb-5")
                        
                  }
                  else{
                        axios.post(baseUrl + "/validate", studentData).then(res => {
                              // console.log(res);
                              if(res.data.status === 400){
                                    seterrModalText("Account already exist.") ;
                                    seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800'); 
                              }else if(res.data.status === 200){
                                    setcheckBox(false);
                                    setprogress(1);
                                    seterrModalClass('mb-3 hidden w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800'); 
                              }
                        })
                        
                  }
            }
      }
      const handleSubmitAddress = (e) =>{
            e.preventDefault();
            if(!addressDetails.country || 
            !addressDetails.region ||
             !addressDetails.city || 
             !addressDetails.address ||
            !addressDetails.contact){
                        seterrModalText("Every fields is required, fill it all.");
                        seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800');
                        setinputClass("mb-2 relative md:mb-5");
            }else{
                  if(addressDetails.contact.length < 11){
                        seterrModalText("Contact input required at least 11 digits.");
                        seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800');
                  }else{
                        setprogress(2);
                        seterrModalClass("hidden");
                        let matric = Math.floor(10000 + Math.random() * 90000);
                        dispatch(registerFunct({matric: matric}));
                        // console.log(state);
                  }
            }
      }
      const handleSubmitAccademic = (e) =>{
            e.preventDefault();
            if(!accademicDetails.program || 
            !accademicDetails.faculty ||
             !accademicDetails.level  || 
             !accademicDetails.courses ){
                  seterrModalText("All fields must be filled.")
                  seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-danger-100 py-3 px-4 text-sm text-danger-800')
                  setinputClass("mb-2 relative md:mb-5")
            }else{
                setprogress(3);
                setcount(5)
                seterrModalClass("hidden");
                 axios.post(baseUrl + "/register", state).then(res => {
                              console.log(res.data.data._id);
                              sessionStorage.setItem('user_id', JSON.stringify(res.data.data._id));
                              if(res.data.status === 400){
                                    seterrModalText("Account already exist, please sign in")
                                    seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-red-100 py-3 px-4 text-sm text-red-800')
                              }else{
                                    // sessionStorage.setItem("user_id", JSON.stringify(res.data.data._id));
                                    setinputClass("mb-2 relative md:mb-5")
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

      // Function that handle check box
      const handleCheckBox = (e) =>{
            setcheckBox(true);
            seterrModalText("Please click the check box.");
            seterrModalClass('mb-3 inline-flex w-full items-center rounded-lg bg-yellow-100 py-3 px-4 text-sm text-yellow-700 hidden');
            setinputClass("mb-4 relative md:mb-5");
      }
   
      // const postData = () =>{
      //       axios.post(baseUrl + "/register", studentData).then(res => 
      //             console.log(res)).catch(err => 
      //                   console.log(err));
      // }

  return (
    <div>
      <LandingNavBar/>
      {/* <SignUpSideBar/> */}
      <div className="text flex  justify-center overflow-auto lg:overflow-hidden">
            <div className="text lg:px-8  w-full px-5 md:w-1/2 bg-cover mx-auto md:mt-12 mt-12 lg:mt-20 bg-white border-b md:border-b-0 fixed lg:relative ">
                  <div className="text mx-auto">
                        <div className="text flex justify-around py-2 ">
                              <span className={`text-xs lg:text-lg px-2 ${progress === 1 ? 'text-blue-700 underline underline-offset-4' : ''}`}>Personal Details</span>
                              <span className={`text-xs lg:text-lg px-2 ${progress === 2 ? 'text-blue-700 underline underline-offset-4' : ''}`}>Address Details</span>
                              <span className={`text-xs lg:text-lg px-2 ${progress === 3 ? 'text-blue-700 underline underline-offset-4' : ''}`}>Accademical Details</span>
                        </div>
                        <div className="text relative flex self-start w-full">
                              <div className={`text relative border p-1 rounded-full ${progress === 1 || progress === 2 || progress=== 3? 'bg-sky-400': " border bg-gray-50"} w-1/3`}>
                                    <div className={`text absolute -right-2  ${progress === 1 || progress === 2 || progress=== 3? 'bg-lime-300 shadow-md': "bg-white border"}  -mt-3 w-6 h-6 z-10 rounded-full`}></div>
                              </div>
                              <div className={`text relative border p-1 ${progress === 2 || progress === 3? 'bg-sky-400': "bg-gray-50"} rounded-full  w-1/3`}>
                                    <div className={`text absolute -right-2 -mt-3 w-6 h-6 z-10  ${progress === 2 || progress === 3? 'bg-lime-400 shadow-md': " border bg-white"} rounded-full`}></div>
                              </div>
                              <div className={`text relative border  ${progress=== 3? 'bg-sky-400': "bg-gray-50"} p-1 rounded-full  w-1/3`}>
                                    <div className={`text absolute -right-2 -mt-3 w-6 h-6   ${progress=== 3? 'bg-lime-500 shadow-md': "bg-white border"} rounded-full`}></div>
                              </div>

                        </div>
                        <div className="text bg-cover hidden lg:flex justify-center items-center mt-20">
                               <img src={img} alt="" className="text w-2/3" />
                        </div>
                  </div>
            </div>
            <div className={`text h-screen lg:px-20 xl:px-32 px-5 py-5 ${progress === 0? '': 'hidden'} overflow-auto w-full md:w-1/2 mx-auto mt-16 lg:mt-0`} 
            >
                  <div className="text  border  rounded-lg py-4 w-full h-auto md:mt-10 mt-5 md:px-10 px-3 mx-auto">   
                  <div>
                        <h1 className="text mb-2  text-xl font-bold pb-4">Personal Details</h1>
                        {/* Success Modal */}
                        <div className={successModalClass} role="alert">
                              <span className="mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                              </svg>
                              </span>
                              Successfully Sign Up.
                              </div>

                              {/* Error Modal */}
                        <div className={errModalClass} role="alert">
                              <span className="mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                        </span>
                                     {errModalText} 
                        </div>
                  <div className={inputClass}>
                  <label className="block mb-1 text-sm font-medium text-gray-900">Your first name:</label>
                  <input name='firstname' value={studentData.firstname} onChange={handleChanges} type="text" id="firstname" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" placeholder="e.g John" required/>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-1 text-sm font-medium text-gray-900 ">Your last name:</label>
                  <input name='lastname' value={studentData.lastname} onChange={handleChanges} type="text" id="lastname" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" placeholder="e.g  Deo" required/>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-1 text-sm font-medium text-gray-900 ">Your email:</label>
                  <input name='email' value={studentData.email} onChange={handleChanges} type="email" id="email" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" placeholder="e.g name@wts.com" required/>
                  </div>
                  <div className={inputClass}>
                  <label  className="block mb-1 relative text-sm font-medium text-gray-900 ">Your password:</label>
                  <input name='password' value={studentData.password} onChange={handleChanges}  type={type} id="password" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" required placeholder='password'/>
                  <label htmlFor="" onClick={handleAuth} className=' absolute right-5 translate-y-2'><Icon icon={icon}/></label>
                  </div>
                  <div className={inputClass}>
                  <label  className="block mb-1 text-sm font-medium text-gray-900 ">Gender:</label>
                              <select  name='gender' value={studentData.gender} onChange={handleChanges}  data-te-select-init className="mb-3  shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" required>
                                    <option value="" hidden></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                              </select>
                  </div>
                  <div className="flex items-start mb-2 lg:mb-4">
                  <div className="flex items-center h-5">
                        <input onClick={handleCheckBox} onChange={handleChanges} checked={checkBox} id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-3  dark:border-gray-600 focus:ring-blue-600" required/>
                  </div>
                  <label  className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="##" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                  </div>
                  <button onClick={handleSubmit} type="submit" className={buttonClass}>Submit</button>
                  </div>

                  </div>
            </div>
            <div className={`text h-screen lg:px-20 xl:px-32 px-5 py-12 ${ progress === 1? ' ': 'hidden'} overflow-auto w-full md:w-1/2  mx-auto mt-16 mb-10 lg:mt-0`} 
            >
                  <div className="text  border  rounded-lg py-4 w-full h-auto md:mt-10 mt-5 md:px-10 px-3 mx-auto">   
                  <div>
                        <h1 className="text mb-3  text-xl font-bold pb-4">Address Details</h1>
                        {/* Success Modal */}
                        <div className={successModalClass} role="alert">
                              <span className="mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                              </svg>
                              </span>
                              Successfully Sign Up.
                              </div>

                              {/* Error Modal */}
                        <div className={errModalClass} role="alert">
                              <span className="mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                        </span>
                                     {errModalText} 
                        </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Country:</label>
                  <input name='country' value={addressDetails.country} onChange={handleChanges} type="text" id="country" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" placeholder="e.g Nigeria" required/>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">State:</label>
                  <input name='region' value={addressDetails.region} onChange={handleChanges} type="text" id="state" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" placeholder="e.g  Oyo state" required/>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">City:</label>
                  <input name='city' value={addressDetails.city} onChange={handleChanges} type="text" id="city" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" placeholder="e.g Lagos" required/>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Contact:</label>
                  <input name='contact' value={addressDetails.contact} onChange={handleChanges} type="text" id="contact" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" placeholder="e.g Lagos" required/>
                  </div>
                  <div className={inputClass}>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Address:</label>
                  <input name='address' value={addressDetails.address} onChange={handleChanges}  type='text' id="adress" className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" required placeholder='e.g Ogbomosho...'/>
                  </div>
                  <div className="flex items-start mb-2 lg:mb-4">
                  <div className="flex items-center h-5">
                        <input onClick={getUserAddress} onChange={handleChanges} checked={checkBox} id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-3  dark:border-gray-600 focus:ring-blue-600" required/>
                  </div>
                  <label  className="ml-2 text-sm font-medium text-gray-900 ">use my current  <a href="##" className="text-blue-600 hover:underline dark:text-blue-500">location</a></label>
                  </div>
                  <button onClick={handleSubmitAddress} type="submit" className={buttonClass}>Submit</button>
                  </div>

                  </div>
            </div>
            <div className={`text h-screen lg:px-20 xl:px-32 px-5 py-12 ${ progress === 2? ' ': 'hidden'} overflow-auto w-full md:w-1/2  mx-auto mt-16 lg:mt-0`} 
            >
                  <div className="text  border  rounded-lg py-4 w-full h-auto md:mt-10 mt-5 md:px-10 px-3 mx-auto">   
                  <div>
                        <h1 className="text mb-3  text-xl font-bold pb-4">Accademical Details</h1>
                        {/* Success Modal */}
                        <div className={successModalClass} role="alert">
                              <span className="mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                              </svg>
                              </span>
                              Successfully Sign Up.
                              </div>

                              {/* Error Modal */}
                        <div className={errModalClass} role="alert">
                              <span className="mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                        </span>
                                     {errModalText} 
                        </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Programs:</label>
                  <select className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" name='program' value={accademicDetails.program} onChange={handleChanges} id="program" >
                              <option value="" className="text" disabled></option>
                              <option value="Intermediate" className="text">Intermediate</option>
                              <option value="Degree" className="text">Degree</option>
                              <option value="Post Graduate" className="text">Post Graduate</option>
                      
                  </select>
                  </div>
                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Faculty:</label>
                  <select  className="shadow-sm w-full border py-2 px-6 mx-auto rounded focus:ring-0 focus:outline-blue-500" name='faculty'  value={accademicDetails.faculty} onChange={handleChanges}  id="faculty"  >
                              <option value="" className="text-sm" disabled></option>
                              <option value="" className={`${!accademicDetails.program? "" : "hidden"}`} >Please fill the program field above</option>
                              {Programs.map((value, index) => (
                                    <>
                                    {value.intermediate && accademicDetails.program === "Intermediate" ? 
                                    <option value={value.faculty} className="text border border-slate-500 my-1 px-10">
                                    {value.faculty}
                                    </option>:
                                    <option className="text hidden"></option>
                                    }
                                    {value.degree && accademicDetails.program === "Degree" ? 
                                    <option value={value.faculty} className="text border border-slate-500 my-1 px-10">
                                    {value.faculty}
                                    </option>:
                                    <option className="text hidden"></option>
                                    }
                                    {value.postGraduate && accademicDetails.program === "Post Graduate" ? 
                                    <option value={value.faculty} className="text border border-slate-500 my-1 px-10">
                                    {value.faculty}
                                    </option>:
                                    <option className="text hidden"></option>
                                    }
                                    </>
                              ))}
                  </select>
                  </div>
                  <div className={inputClass}>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Course:</label>
                  <select name='courses' id="courses" value={accademicDetails.courses} onChange={handleChanges}  className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500">
                              <option value="" className="text-sm" disabled></option>
                              <option value="" className={`${!accademicDetails.program && !accademicDetails.faculty? "" : "hidden"}`} >filled both program and faculty fields above</option>
                              {Programs.map((value, index) => (
                                    <>
                                    {value.intermediate && accademicDetails.program === 'Intermediate' && value.faculty === accademicDetails.faculty? 
                                    value.courses.map((course, index) => (
                                          <option value={course} className="text border border-slate-500 my-1 px-10">
                                                {course}
                                          </option>
                                    )):
                                  <option className="hidden"></option>

                                    }
                                    {value.degree && accademicDetails.program === 'Degree' && value.faculty === accademicDetails.faculty? 
                                    value.courses.map((course, index) => (
                                          <option value={course} className="text border border-slate-500 my-1 px-10">
                                                {course}
                                          </option>
                                    )):
                                  <option className="hidden"></option>

                                    }
                                    {value.postGraduate && accademicDetails.program === 'Post Graduate' && value.faculty === accademicDetails.faculty? 
                                    value.courses.map((course, index) => (
                                          <option value={course} className="text border border-slate-500 my-1 px-10">
                                                {course}
                                          </option>
                                    )):
                                  <option className="hidden"></option>

                                    }
                                    </>
                              ))}
                  </select>
                  </div>

                  <div className={inputClass}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Level:</label>
                  <select  className="shadow-sm w-full border py-2 px-6 rounded focus:ring-0 focus:outline-blue-500" value={accademicDetails.level} onChange={handleChanges} type="email" id="level" name='level'   >
                              <option value="" className="text-sm" disabled></option>
                              <option value="100 level" className="text">100 level</option>
                              <option value="200 level" className="text">200 level</option>
                              <option value="300 level" className="text">300 level</option>
                              <option value="400 level" className="text">400 level</option>
                              <option value="500 level" className="text">500 level</option>
                  </select>
                  </div>
                  <button onClick={handleSubmitAccademic} type="submit" className={buttonClass}>Register</button>
                  </div>

                  </div>
            </div>
            <div className={`text h-screen lg:px-20 xl:px-32 px-5 py-12 ${ progress === 3? ' ': 'hidden'} overflow-auto w-full md:w-1/2  mx-auto mt-16 lg:mt-0 flex justify-center items-center`}>
                                    <div className="text-center ">
                                          <img src={imgwellDone} alt="" className="text" />
                                          <p className="text-center text-lg font-bold mt-6">You're successfully signed up </p>
                                          <div className="text-gray-50 rounded-lg font-semibold py-2 px-8 bg-blue-600 my-8 w-full text-sm ">
                                                You will be redirected to main dashboard in <br />
                                                <span className="text-lg text-white">{count}</span>  seconds</div>
                                          
                                    </div>
            </div>
      </div>
    </div>
  )
}

export default LandingSignUp
