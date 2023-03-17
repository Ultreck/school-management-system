import React, { useState, useEffect } from 'react';
import img from '../images/Website+Icons-03.png'
import { NavLink } from 'react-router-dom';
import SignUpSideBar from './SignUpSideBar';

const LandingSignUp = () => {
      const [userDatas, setuserDatas] = useState({})

      const handleChanges = (e) =>{
            console.log(e);
      }
   
  return (
    <div>
      <SignUpSideBar/>
      <div className="text flex bg-white dark:bg-slate-900 dark:text-white overflow-hidden">
            <div className="text h-screen w-0 lg:w-1/2 bg-blue-500" style={{clipPath:"polygon(0 1%, 100% 0%, 75% 100%, 0% 100%)"}}>
                  <div className="text-center ml-0 font-bold text-5xl  mt-24 p-0">
                        <h1 className="text">  GOOD EDUCATION</h1>
                        <h1 className="text">  IS A SENSATION</h1>
                        <img src={img} alt="" className="text  -translate-x-10" />
                 </div>
            </div>
            <div className="text h-screen lg:px-20 xl:px-32 px-5 py-12 overflow-hidden w-full md:w-1/2  mx-auto" 
            // style={{clipPath:"polygon(25% 0%, 100% 0%, 99% 100%, 0% 100%)"}}
            >
                  <div className="text  rounded-lg border-dashed border-2 w-full h-full md:mt-10 mt-5 md:p-10 py-2 px-3 mx-auto">   
                  <form>
                        <h1 className="text-center mb-3 mt-1 underline  text-xl font-bold">Sign Up</h1>
                  <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                  <input name='firstname' value={userDatas.firstname} onChange={handleChanges} type="text" id="firstname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g John" required/>
                  </div>
                  <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                  <input name='lastname' value={userDatas.lastname} onChange={handleChanges} type="text" id="lastname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g  Deo" required/>
                  </div>
                  <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input name='email' value={userDatas.email} onChange={handleChanges} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g name@wts.com" required/>
                  </div>
                  <div className="mb-4">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input name='password' value={userDatas.password} onChange={handleChanges} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                  </div>
                  <div className="mb-4">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                              <select  name='gender' value={userDatas.gender} onChange={handleChanges}  data-te-select-init className="mb-3  shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                    <option className='text-slate-400' value="choose gender" hidden>e.g Male</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                              </select>
                  </div>
                  <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                  </div>
                  <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="##" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2">Register</button>
                  </form>

                  </div>
            </div>
      </div>
    </div>
  )
}

export default LandingSignUp
